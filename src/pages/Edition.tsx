
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Image } from 'lucide-react';
import { useWeddingDetails } from '@/hooks/useWeddingDetails';
import { useToast } from '@/hooks/use-toast';
import EditWeddingDialog from '@/components/EditWeddingDialog';
import ImageCropDialog from '@/components/ImageCropDialog';

const Edition = () => {
  const navigate = useNavigate();
  const { weddingDetails, updateWeddingDetails } = useWeddingDetails();
  const [tempImageUrl, setTempImageUrl] = useState<string>('');
  const [showCropDialog, setShowCropDialog] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setTempImageUrl(result);
          setShowCropDialog(true);
        };
        reader.readAsDataURL(file);
      } else {
        toast({
          title: "Erreur",
          description: "Veuillez sélectionner une image valide",
          variant: "destructive"
        });
      }
    }
  };

  const handleCropComplete = (croppedImageUrl: string) => {
    updateWeddingDetails({
      ...weddingDetails,
      couplePhotoUrl: croppedImageUrl
    });
    toast({
      title: "Image mise à jour",
      description: "L'image du couple a été mise à jour avec succès"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate('/start')}
              variant="ghost"
              className="text-pink-600 hover:bg-pink-100"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Édition
            </h1>
            <div className="w-10"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Modifier votre invitation</h2>
          <p className="text-gray-600">Personnalisez tous les détails de votre mariage</p>
        </div>

        <Card className="p-6 bg-white/70 backdrop-blur-sm border-pink-200 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Détails actuels</h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-medium text-gray-700">Mariés :</span>
              <span className="ml-2 text-gray-600">{weddingDetails.brideName} & {weddingDetails.groomName}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Date :</span>
              <span className="ml-2 text-gray-600">{weddingDetails.weddingDate}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Heure :</span>
              <span className="ml-2 text-gray-600">{weddingDetails.ceremonyTime}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Lieu :</span>
              <span className="ml-2 text-gray-600">{weddingDetails.venue}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Adresse :</span>
              <span className="ml-2 text-gray-600">{weddingDetails.venueLocation}</span>
            </div>
            {weddingDetails.rsvpPhoneNumber && (
              <div>
                <span className="font-medium text-gray-700">Numéro RSVP :</span>
                <span className="ml-2 text-gray-600">{weddingDetails.rsvpPhoneNumber}</span>
              </div>
            )}
          </div>
        </Card>

        <div className="space-y-4">
          <Button
            onClick={() => document.getElementById('couplePhotoUpload')?.click()}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
          >
            <Image className="w-4 h-4 mr-2" />
            {weddingDetails.couplePhotoUrl ? 'Changer la photo du couple' : 'Importer la photo du couple'}
          </Button>
          <Input
            id="couplePhotoUpload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          <EditWeddingDialog 
            weddingDetails={weddingDetails}
            onUpdate={updateWeddingDetails}
          />
          
          <Button
            onClick={() => navigate('/preview')}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white"
          >
            Voir l'aperçu
          </Button>
        </div>

        <ImageCropDialog
          isOpen={showCropDialog}
          onClose={() => setShowCropDialog(false)}
          imageSrc={tempImageUrl}
          onCropComplete={handleCropComplete}
        />
      </div>
    </div>
  );
};

export default Edition;
