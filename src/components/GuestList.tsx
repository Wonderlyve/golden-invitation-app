
import React, { useState, useMemo } from 'react';
import { Plus, Check, Search, MoreVertical, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useGuests } from '@/hooks/useGuests';
import { useNavigate } from 'react-router-dom';
import GuestBottomSheet from './GuestBottomSheet';
import GuestLimitDialog from './GuestLimitDialog';

interface GuestListProps {
  onSelectGuest: (guest: any) => void;
}

const GuestList: React.FC<GuestListProps> = ({ onSelectGuest }) => {
  const navigate = useNavigate();
  const { guests, addGuest, updateGuest, deleteGuest, verifyGuest } = useGuests();
  const [newGuestName, setNewGuestName] = useState('');
  const [newGuestTable, setNewGuestTable] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showLimitDialog, setShowLimitDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuest, setSelectedGuest] = useState<any>(null);
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const filteredGuests = useMemo(() => {
    return guests.filter(guest =>
      guest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [guests, searchTerm]);

  const handleAddGuest = () => {
    if (guests.length >= 2) {
      setShowLimitDialog(true);
      return;
    }

    if (newGuestName.trim() && newGuestTable.trim()) {
      const success = addGuest(newGuestName.trim(), newGuestTable.trim());
      if (success) {
        setNewGuestName('');
        setNewGuestTable('');
        setShowAddForm(false);
      } else {
        setShowLimitDialog(true);
      }
    }
  };

  const handleGuestMenuClick = (guest: any) => {
    setSelectedGuest(guest);
    setShowBottomSheet(true);
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
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
            <h2 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Liste des invités
            </h2>
            <Button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
              size="sm"
            >
              <Plus className="w-4 h-4 mr-1" />
              Ajouter
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Formulaire d'ajout */}
        {showAddForm && (
          <Card className="mb-6 p-4 bg-white/70 backdrop-blur-sm border-pink-200 shadow-sm">
            <div className="space-y-3">
              <Input
                placeholder="Nom de l'invité"
                value={newGuestName}
                onChange={(e) => setNewGuestName(e.target.value)}
                className="border-pink-300 focus:border-pink-500"
              />
              <Input
                placeholder="Numéro de table (ex: 4, A2, VIP)"
                value={newGuestTable}
                onChange={(e) => setNewGuestTable(e.target.value)}
                className="border-pink-300 focus:border-pink-500"
              />
              <div className="flex gap-2">
                <Button 
                  onClick={handleAddGuest} 
                  className="flex-1 bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500"
                >
                  Ajouter
                </Button>
                <Button 
                  onClick={() => setShowAddForm(false)} 
                  variant="outline"
                  className="border-pink-300 text-pink-600 hover:bg-pink-50"
                >
                  Annuler
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Barre de recherche */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-4 h-4" />
            <Input
              placeholder="Rechercher un invité..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-pink-300 focus:border-pink-500 bg-white/70 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Liste des invités */}
        <div className="space-y-3">
          {filteredGuests.map((guest) => (
            <Card key={guest.id} className="p-4 bg-white/70 backdrop-blur-sm border-pink-200 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    verifyGuest(guest.id);
                  }}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                    guest.isVerified 
                      ? 'bg-gradient-to-r from-green-400 to-emerald-400 border-green-400 text-white' 
                      : 'border-pink-300 hover:border-pink-400'
                  }`}
                >
                  {guest.isVerified && <Check className="w-3 h-3" />}
                </button>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 truncate">{guest.name}</h3>
                  <p className="text-sm text-gray-600">Table {guest.tableNumber}</p>
                </div>
                <button
                  onClick={() => handleGuestMenuClick(guest)}
                  className="p-2 rounded-full hover:bg-pink-100 transition-colors"
                >
                  <MoreVertical className="w-4 h-4 text-pink-400" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* États vides */}
        {filteredGuests.length === 0 && searchTerm && (
          <div className="text-center py-8">
            <p className="text-gray-500">Aucun invité trouvé pour "{searchTerm}"</p>
          </div>
        )}

        {guests.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">Aucun invité ajouté pour le moment</p>
            <p className="text-sm text-gray-400 mt-2">Cliquez sur "Ajouter" pour commencer</p>
          </div>
        )}

        {/* Bottom Sheet */}
        {selectedGuest && (
          <GuestBottomSheet
            guest={selectedGuest}
            open={showBottomSheet}
            onOpenChange={setShowBottomSheet}
            onPreview={onSelectGuest}
            onUpdate={updateGuest}
            onDelete={deleteGuest}
          />
        )}

        <GuestLimitDialog 
          open={showLimitDialog} 
          onOpenChange={setShowLimitDialog} 
        />
      </div>

      {/* Footer */}
      <div className="text-center py-4 text-gray-500 text-xs bg-white/50">
        <p>Application d'invitations de mariage</p>
        <p className="mt-1">Stockage local • Version démo limitée à 2 invités</p>
      </div>
    </div>
  );
};

export default GuestList;
