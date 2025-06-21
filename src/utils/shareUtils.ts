
import html2canvas from 'html2canvas';

export const generateInvitationImage = async (elementId?: string): Promise<Blob | null> => {
  // Utiliser l'élément exposé globalement ou chercher par ID
  let element = (window as any).invitationElement;
  if (!element && elementId) {
    element = document.getElementById(elementId);
  }
  
  if (!element) {
    console.error('Invitation element not found');
    return null;
  }

  try {
    // Attendre un peu pour que les styles se chargent
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const canvas = await html2canvas(element, {
      backgroundColor: '#0f172a',
      scale: 4, // Résolution très élevée pour WhatsApp
      useCORS: true,
      allowTaint: true,
      width: 384, // Largeur fixe
      height: 600, // Hauteur minimum
      scrollX: 0,
      scrollY: 0,
      windowWidth: 384,
      windowHeight: 600,
      logging: false,
      removeContainer: true,
      foreignObjectRendering: true
    });
    
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/png', 1.0);
    });
  } catch (error) {
    console.error('Error generating image:', error);
    return null;
  }
};

export const shareToWhatsApp = async (guestName: string, tableNumber: string, imageBlob?: Blob) => {
  const message = `🎉 Invitation de mariage - ${guestName}%0A%0A✨ Vous êtes invité(e) au mariage de Jack & Sofia%0A📅 22 octobre à 10h%0A📍 Sheraton Kauai Resort, Hawaii%0A🪑 Table ${tableNumber}%0A%0ANous avons hâte de célébrer avec vous ! 💕`;
  
  // Essayer le partage natif avec image d'abord
  if (imageBlob && navigator.share && navigator.canShare) {
    try {
      const file = new File([imageBlob], `invitation-${guestName.replace(/\s+/g, '-')}.png`, { 
        type: 'image/png' 
      });
      
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'Invitation de mariage',
          text: `Invitation pour ${guestName} - Table ${tableNumber}`,
          files: [file]
        });
        return;
      }
    } catch (error) {
      console.log('Native sharing failed, trying alternative methods');
    }
  }

  // Alternative : créer un lien de téléchargement pour l'image et ouvrir WhatsApp
  if (imageBlob) {
    try {
      // Créer un lien de téléchargement temporaire
      const url = URL.createObjectURL(imageBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `invitation-${guestName.replace(/\s+/g, '-')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Attendre un peu puis ouvrir WhatsApp
      setTimeout(() => {
        const whatsappUrl = `https://wa.me/?text=${message}%0A%0A📎 Téléchargez l'invitation ci-dessus et partagez-la !`;
        window.open(whatsappUrl, '_blank');
      }, 1000);
      
      return;
    } catch (error) {
      console.log('Download approach failed');
    }
  }
  
  // Fallback : WhatsApp URL simple
  const whatsappUrl = `https://wa.me/?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

