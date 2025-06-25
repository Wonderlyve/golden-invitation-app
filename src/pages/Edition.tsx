
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useWeddingDetails } from '@/hooks/useWeddingDetails';
import EditWeddingDialog from '@/components/EditWeddingDialog';

const Edition = () => {
  const navigate = useNavigate();
  const { weddingDetails, updateWeddingDetails } = useWeddingDetails();

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
          </div>
        </Card>

        <div className="space-y-4">
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
      </div>
    </div>
  );
};

export default Edition;
