
import React, { useState, useMemo } from 'react';
import { Plus, Check, Search, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useGuests } from '@/hooks/useGuests';
import GuestContextMenu from './GuestContextMenu';
import GuestLimitDialog from './GuestLimitDialog';

interface GuestListProps {
  onSelectGuest: (guest: any) => void;
}

const GuestList: React.FC<GuestListProps> = ({ onSelectGuest }) => {
  const { guests, addGuest, updateGuest, deleteGuest, verifyGuest } = useGuests();
  const [newGuestName, setNewGuestName] = useState('');
  const [newGuestTable, setNewGuestTable] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showLimitDialog, setShowLimitDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGuests = useMemo(() => {
    return guests.filter(guest =>
      guest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [guests, searchTerm]);

  const handleAddGuest = () => {
    if (guests.length >= 5) {
      setShowLimitDialog(true);
      return;
    }

    if (newGuestName.trim() && newGuestTable.trim()) {
      addGuest(newGuestName.trim(), newGuestTable.trim());
      setNewGuestName('');
      setNewGuestTable('');
      setShowAddForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec fond dégradé conservé */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Liste des invités</h2>
              <Button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900"
              >
                <Plus className="w-4 h-4 mr-2" />
                Ajouter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu avec fond blanc */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Formulaire d'ajout */}
        {showAddForm && (
          <Card className="mb-6 p-4 border-gray-200 shadow-sm">
            <div className="space-y-3">
              <Input
                placeholder="Nom de l'invité"
                value={newGuestName}
                onChange={(e) => setNewGuestName(e.target.value)}
                className="border-gray-300"
              />
              <Input
                placeholder="Numéro de table (ex: 4, A2, VIP)"
                value={newGuestTable}
                onChange={(e) => setNewGuestTable(e.target.value)}
                className="border-gray-300"
              />
              <div className="flex gap-2">
                <Button onClick={handleAddGuest} className="flex-1 bg-green-600 hover:bg-green-700">
                  Ajouter
                </Button>
                <Button 
                  onClick={() => setShowAddForm(false)} 
                  variant="outline"
                  className="border-gray-300"
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
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher un invité..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-300"
            />
          </div>
        </div>

        {/* Liste des invités */}
        <div className="space-y-3">
          {filteredGuests.map((guest) => (
            <GuestContextMenu
              key={guest.id}
              guest={guest}
              onPreview={onSelectGuest}
              onUpdate={updateGuest}
              onDelete={deleteGuest}
            >
              <Card className="p-4 border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      verifyGuest(guest.id);
                    }}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                      guest.isVerified 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {guest.isVerified && <Check className="w-3 h-3" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{guest.name}</h3>
                    <p className="text-sm text-gray-600">Table {guest.tableNumber}</p>
                  </div>
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </div>
              </Card>
            </GuestContextMenu>
          ))}
        </div>

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

        <GuestLimitDialog 
          open={showLimitDialog} 
          onOpenChange={setShowLimitDialog} 
        />
      </div>
    </div>
  );
};

export default GuestList;
