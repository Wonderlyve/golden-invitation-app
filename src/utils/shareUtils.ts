
import html2canvas from 'html2canvas';

export const generateInvitationImage = async (elementId: string): Promise<Blob | null> => {
  const element = document.getElementById(elementId);
  if (!element) return null;

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#0f172a',
      scale: 2,
      useCORS: true,
      allowTaint: true
    });
    
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/png', 0.95);
    });
  } catch (error) {
    console.error('Error generating image:', error);
    return null;
  }
};

export const shareToWhatsApp = (guestName: string, tableNumber: number, imageBlob?: Blob) => {
  const message = `🎉 Invitation de mariage - ${guestName}%0A%0A✨ Vous êtes invité(e) au mariage de Jack & Sofia%0A📅 22 octobre à 10h%0A📍 Sheraton Kauai Resort, Hawaii%0A🪑 Table ${tableNumber}%0A%0ANous avons hâte de célébrer avec vous ! 💕`;
  
  const whatsappUrl = `https://wa.me/?text=${message}`;
  
  if (imageBlob && navigator.share) {
    // Try native sharing with image (mobile)
    const file = new File([imageBlob], 'invitation.png', { type: 'image/png' });
    navigator.share({
      title: 'Invitation de mariage',
      text: `Invitation pour ${guestName} - Table ${tableNumber}`,
      files: [file]
    }).catch(() => {
      // Fallback to WhatsApp URL
      window.open(whatsappUrl, '_blank');
    });
  } else {
    // Direct WhatsApp sharing
    window.open(whatsappUrl, '_blank');
  }
};
