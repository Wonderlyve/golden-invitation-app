
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Heart } from 'lucide-react';
import { useWeddingDetails } from '@/hooks/useWeddingDetails';
import InvitationTemplates from '@/components/InvitationTemplates';
import { generateInvitationImage } from '@/utils/shareUtils';
import { useToast } from '@/hooks/use-toast';

const GuestInvitation = () => {
  const [searchParams] = useSearchParams();
  const [isDownloading, setIsDownloading] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const { weddingDetails } = useWeddingDetails();
  const { toast } = useToast();

  const guestName = searchParams.get('name') || 'Invité';
  const tableNumber = searchParams.get('table') || '1';

  // Log the parameters for debugging
  useEffect(() => {
    console.log('Guest invitation page loaded with params:', {
      name: guestName,
      table: tableNumber,
      url: window.location.href
    });
  }, [guestName, tableNumber]);

  const guest = {
    id: 'guest-invitation',
    name: guestName,
    tableNumber: tableNumber,
    isVerified: true,
    createdAt: new Date()
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      console.log('Starting download for guest:', guestName);
      
      const imageBlob = await generateInvitationImage('guest-invitation-download');
      
      if (imageBlob) {
        const url = URL.createObjectURL(imageBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `invitation-${guestName.replace(/\s+/g, '-')}.jpeg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        toast({
          title: "Invitation téléchargée",
          description: "Votre invitation a été téléchargée avec succès !",
        });
      } else {
        throw new Error('Impossible de générer l\'image');
      }
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      toast({
        title: "Erreur",
        description: "Impossible de télécharger l'invitation. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Pop-up d'accueil */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-6 bg-white text-center">
            <div className="mb-4">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Bonjour {guestName} !
              </h2>
              <p className="text-gray-600 mb-4">
                Vous êtes invité(e) au mariage de <br />
                <span className="font-semibold text-pink-600">
                  {weddingDetails.groomName} & {weddingDetails.brideName}
                </span>
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700">
                  📅 <span className="font-medium">{weddingDetails.weddingDate}</span> à <span className="font-medium">{weddingDetails.ceremonyTime}</span>
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  📍 <span className="font-medium">{weddingDetails.venue}, {weddingDetails.venueLocation}</span>
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  🪑 <span className="font-medium">Table {tableNumber}</span>
                </p>
              </div>
            </div>
            <Button 
              onClick={() => setShowPopup(false)}
              className="w-full bg-pink-600 hover:bg-pink-700"
            >
              Voir mon invitation
            </Button>
          </Card>
        </div>
      )}

      {/* Contenu principal */}
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">
            {weddingDetails.groomName} & {weddingDetails.brideName}
          </h1>
          <p className="text-gray-300">Invitation personnalisée pour {guestName}</p>
        </div>

        {/* Invitation visible */}
        <div id="guest-invitation-download" className="mb-6">
          <InvitationTemplates
            template={weddingDetails.template}
            guest={guest}
            weddingDetails={weddingDetails}
            isPreview={false}
          />
        </div>

        {/* Bouton de téléchargement */}
        <div className="text-center">
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          >
            {isDownloading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Génération...
              </>
            ) : (
              <>
                <Download className="w-5 h-5 mr-2" />
                Télécharger mon invitation
              </>
            )}
          </Button>
        </div>

        {/* Informations additionnelles */}
        <div className="mt-8 text-center">
          <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
            <p className="text-white text-sm mb-2">
              Pour plus d'informations, visitez :
            </p>
            <a 
              href={`https://${weddingDetails.websiteUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 text-sm underline"
            >
              {weddingDetails.websiteUrl}
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GuestInvitation;
