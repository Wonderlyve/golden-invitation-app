
import html2canvas from 'html2canvas';

export const generateInvitationImage = async (elementId: string): Promise<Blob | null> => {
  const element = document.getElementById(elementId);
  if (!element) return null;

  try {
    // Wait a bit for any animations or layout changes to complete
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const canvas = await html2canvas(element, {
      backgroundColor: '#0f172a',
      scale: 3, // Increased scale for better resolution
      useCORS: true,
      allowTaint: true,
      width: element.offsetWidth,
      height: element.offsetHeight,
      scrollX: 0,
      scrollY: 0,
      windowWidth: element.offsetWidth,
      windowHeight: element.offsetHeight
    });
    
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/jpeg', 1.0); // Changed to JPEG format with maximum quality
    });
  } catch (error) {
    console.error('Error generating image:', error);
    return null;
  }
};

export const shareToWhatsApp = async (guestName: string, tableNumber: string, imageBlob?: Blob) => {
  // Get current domain for the invitation link
  const currentDomain = window.location.origin;
  const invitationLink = `${currentDomain}/invitation?name=${encodeURIComponent(guestName)}&table=${encodeURIComponent(tableNumber)}`;
  
  const message = `🎉 Invitation de mariage - ${guestName}%0A%0A✨ Vous êtes invité(e) au mariage de Jack & Sofia%0A📅 22 octobre à 10h%0A📍 Sheraton Kauai Resort, Hawaii%0A🪑 Table ${tableNumber}%0A%0A🔗 Cliquez ici pour voir et télécharger votre invitation:%0A${encodeURIComponent(invitationLink)}%0A%0ANous avons hâte de célébrer avec vous ! 💕`;
  
  const whatsappUrl = `https://wa.me/?text=${message}`;
  
  if (imageBlob && navigator.share && navigator.canShare) {
    try {
      const file = new File([imageBlob], `invitation-${guestName.replace(/\s+/g, '-')}.jpeg`, { 
        type: 'image/jpeg' 
      });
      
      // Check if we can share files
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'Invitation de mariage',
          text: `Invitation pour ${guestName} - Table ${tableNumber}\n\n${invitationLink}`,
          files: [file]
        });
        return;
      }
    } catch (error) {
      console.log('Native sharing failed, falling back to WhatsApp URL');
    }
  }
  
  // Fallback to WhatsApp URL
  window.open(whatsappUrl, '_blank');
};
