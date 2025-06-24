
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export const generateInvitationImage = async (elementId: string): Promise<Blob> => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Élément d\'invitation introuvable');
  }

  console.log('Génération de l\'image pour l\'élément:', elementId);
  
  const canvas = await html2canvas(element, {
    backgroundColor: null,
    scale: 2,
    useCORS: true,
    allowTaint: true,
    width: 350,
    height: 700,
    scrollX: 0,
    scrollY: 0,
    windowWidth: 350,
    windowHeight: 700
  });

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        throw new Error('Impossible de générer l\'image');
      }
    }, 'image/jpeg', 0.95);
  });
};

export const shareToWhatsApp = async (guestName: string, tableNumber: number, imageBlob?: Blob) => {
  const message = `🎉 Voici votre invitation de mariage personnalisée!\n\nInvité: ${guestName}\nTable: ${tableNumber}\n\nNous avons hâte de célébrer avec vous! 💕`;
  
  if (imageBlob) {
    // Save image for user to manually share
    saveAs(imageBlob, `invitation-${guestName.replace(/\s+/g, '-').toLowerCase()}.jpg`);
  }
  
  // Open WhatsApp with message
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
