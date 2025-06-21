
import React, { useState } from 'react';
import { Guest } from '@/types/guest';
import WeddingInvitation from '@/components/WeddingInvitation';
import GuestList from '@/components/GuestList';
import EditWeddingDialog from '@/components/EditWeddingDialog';
import { useWeddingDetails } from '@/hooks/useWeddingDetails';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Users, Eye } from 'lucide-react';

const Index = () => {
  const [currentView, setCurrentView] = useState<'guests' | 'preview'>('guests');
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);
  const { weddingDetails, updateWeddingDetails } = useWeddingDetails();

  const handleSelectGuest = (guest: Guest) => {
    setSelectedGuest(guest);
    setCurrentView('preview');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {currentView === 'preview' ? (
              <Button
                onClick={() => setCurrentView('guests')}
                variant="ghost"
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  💑
                </div>
                <h1 className="text-lg font-bold text-white">
                  {weddingDetails.groomName} & {weddingDetails.brideName}
                </h1>
              </div>
            )}
            
            <div className="flex gap-2">
              <EditWeddingDialog 
                weddingDetails={weddingDetails}
                onUpdate={updateWeddingDetails}
              />
              <Button
                onClick={() => setCurrentView('guests')}
                variant={currentView === 'guests' ? 'default' : 'ghost'}
                size="sm"
                className={currentView === 'guests' ? 'bg-yellow-400 text-slate-900' : 'text-white hover:bg-white/20'}
              >
                <Users className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => setCurrentView('preview')}
                variant={currentView === 'preview' ? 'default' : 'ghost'}
                size="sm"
                className={currentView === 'preview' ? 'bg-yellow-400 text-slate-900' : 'text-white hover:bg-white/20'}
                disabled={!selectedGuest && currentView !== 'preview'}
              >
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {currentView === 'guests' ? (
          <GuestList onSelectGuest={handleSelectGuest} />
        ) : (
          <div className="space-y-6">
            {selectedGuest && (
              <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Aperçu pour {selectedGuest.name}
                  </h3>
                  <p className="text-sm text-gray-300">Table {selectedGuest.tableNumber}</p>
                </div>
              </Card>
            )}
            <WeddingInvitation 
              guest={selectedGuest} 
              weddingDetails={weddingDetails}
              isPreview={true}
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center py-4 text-gray-400 text-xs">
        <p>Application d'invitations de mariage</p>
        <p className="mt-1">Stockage local • Prêt pour Supabase</p>
      </div>
    </div>
  );
};

export default Index;
