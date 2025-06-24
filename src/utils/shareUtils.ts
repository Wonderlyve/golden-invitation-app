
import html2canvas from 'html2canvas';

export const generateInvitationImage = async (elementId: string): Promise<Blob | null> => {
  const element = document.getElementById(elementId);
  if (!element) return null;

  try {
    // Wait a bit for any animations or layout changes to complete
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const canvas = await html2canvas(element, {
      backgroundColor: '#0f172a',
      scale: 1, // Set to 1 to maintain exact pixel dimensions
      useCORS: true,
      allowTaint: true,
      width: 2310, // Fixed width
      height: 1080, // Fixed height
      scrollX: 0,
      scrollY: 0,
      windowWidth: 2310,
      windowHeight: 1080
    });
    
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/jpeg', 1.0); // JPEG format with maximum quality
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
  
  // Create a more direct and clickable message for WhatsApp
  const message = `🎉 *Invitation de mariage*

✨ Bonjour ${guestName} !

Vous êtes officiellement invité(e) au mariage de Jack & Sofia

📅 *22 octobre à 10h*
📍 *Sheraton Kauai Resort, Hawaii*
🪑 *Table ${tableNumber}*

👆 *Cliquez sur ce lien pour voir et télécharger votre invitation personnalisée :*
${invitationLink}

Nous avons hâte de célébrer avec vous ! 💕`;
  
  // Encode the message for WhatsApp URL
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
  
  console.log('Generated invitation link:', invitationLink);
  console.log('WhatsApp message:', message);
  
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
  
  // Fallback to WhatsApp URL - this will work on all devices
  window.open(whatsappUrl, '_blank');
};
