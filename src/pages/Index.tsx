
import React, { useState } from 'react';
import { Guest } from '@/types/guest';
import InvitationTemplates from '@/components/InvitationTemplates';
import GuestList from '@/components/GuestList';
import EditWeddingDialog from '@/components/EditWeddingDialog';
import TemplateSelector from '@/components/TemplateSelector';
import { useWeddingDetails } from '@/hooks/useWeddingDetails';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Users, Eye } from 'lucide-react';
import { InvitationTemplate } from '@/types/template';

const Index = () => {
  const [currentView, setCurrentView] = useState<'guests' | 'preview'>('guests');
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
  const { weddingDetails, updateWeddingDetails } = useWeddingDetails();

  const handleSelectGuest = (guest: Guest) => {
    setSelectedGuest(guest);
    setCurrentView('preview');
  };

  const handleTemplateChange = (template: InvitationTemplate) => {
    updateWeddingDetails({
      ...weddingDetails,
      template
    });
  };

  return (
    <div className="min-h-screen">
      {currentView === 'preview' && (
        // Header pour la prévisualisation avec fond dégradé
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
            <div className="max-w-md mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Button
                  onClick={() => setCurrentView('guests')}
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
                
                <div className="flex gap-2">
                  <TemplateSelector
                    currentTemplate={weddingDetails.template}
                    onTemplateChange={handleTemplateChange}
                  />
                  <EditWeddingDialog 
                    weddingDetails={weddingDetails}
                    onUpdate={updateWeddingDetails}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={currentView === 'preview' ? "max-w-md mx-auto px-4 py-6" : ""}>
        {currentView === 'guests' ? (
          <GuestList onSelectGuest={handleSelectGuest} />
        ) : (
          <div className="space-y-6 bg-white min-h-screen">
            {selectedGuest && (
              <Card className="p-4 border-gray-200 shadow-sm">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Aperçu pour {selectedGuest.name}
                  </h3>
                  <p className="text-sm text-gray-600">Table {selectedGuest.tableNumber}</p>
                </div>
              </Card>
            )}
            <InvitationTemplates
              template={weddingDetails.template}
              guest={selectedGuest} 
              weddingDetails={weddingDetails}
              isPreview={true}
            />
          </div>
        )}
      </div>

      {currentView === 'guests' && (
        // Footer seulement sur l'écran de liste
        <div className="text-center py-4 text-gray-500 text-xs bg-white">
          <p>Application d'invitations de mariage</p>
          <p className="mt-1">Stockage local • Version démo limitée à 5 invités</p>
        </div>
      )}
    </div>
  );
};

export default Index;
