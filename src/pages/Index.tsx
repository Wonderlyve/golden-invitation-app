
import React, { useState } from 'react';
import { Guest } from '@/types/guest';
import InvitationTemplates from '@/components/InvitationTemplates';
import GuestList from '@/components/GuestList';
import EditWeddingDialog from '@/components/EditWeddingDialog';
import TemplateSelector from '@/components/TemplateSelector';
import { useWeddingDetails } from '@/hooks/useWeddingDetails';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { InvitationTemplate } from '@/types/template';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
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
        // Header pour la prévisualisation
        <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 shadow-sm">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button
                onClick={() => setCurrentView('guests')}
                variant="ghost"
                className="text-pink-600 hover:bg-pink-100"
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
      )}

      {/* Content */}
      <div className={currentView === 'preview' ? "max-w-md mx-auto px-4 py-6 bg-gradient-to-br from-pink-50 via-white to-rose-50 min-h-screen" : ""}>
        {currentView === 'guests' ? (
          <GuestList onSelectGuest={handleSelectGuest} />
        ) : (
          <div className="space-y-6">
            {selectedGuest && (
              <Card className="p-4 bg-white/70 backdrop-blur-sm border-pink-200 shadow-sm">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
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
    </div>
  );
};

export default Index;
