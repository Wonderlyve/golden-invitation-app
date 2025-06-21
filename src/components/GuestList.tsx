
import React, { useState } from 'react';
import { Plus, Trash2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useGuests } from '@/hooks/useGuests';
import ShareButton from './ShareButton';

interface GuestListProps {
  onSelectGuest: (guest: any) => void;
}

const GuestList: React.FC<GuestListProps> = ({ onSelectGuest }) => {
  const { guests, addGuest, deleteGuest, verifyGuest } = useGuests();
  const [newGuestName, setNewGuestName] = useState('');
  const [newGuestTable, setNewGuestTable] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddGuest = () => {
    if (newGuestName.trim() && newGuestTable.trim()) {
      addGuest(newGuestName.trim(), newGuestTable.trim());
      setNewGuestName('');
      setNewGuestTable('');
      setShowAddForm(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Liste des invités</h2>
        <Button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-yellow-400 hover:bg-yellow-500 text-slate-900"
        >
          <Plus className="w-4 h-4 mr-2" />
          Ajouter
        </Button>
      </div>

      {showAddForm && (
        <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
          <div className="space-y-3">
            <Input
              placeholder="Nom de l'invité"
              value={newGuestName}
              onChange={(e) => setNewGuestName(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder-white/70"
            />
            <Input
              placeholder="Numéro de table (ex: 4, A2, VIP)"
              value={newGuestTable}
              onChange={(e) => setNewGuestTable(e.target.value)}
              className="bg-white/20 border-white/30 text-white placeholder-white/70"
            />
            <div className="flex gap-2">
              <Button onClick={handleAddGuest} className="flex-1 bg-green-600 hover:bg-green-700">
                Ajouter
              </Button>
              <Button 
                onClick={() => setShowAddForm(false)} 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Annuler
              </Button>
            </div>
          </div>
        </Card>
      )}

      <div className="space-y-3">
        {guests.map((guest) => (
          <Card 
            key={guest.id} 
            className="p-3 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-200"
          >
            <div className="space-y-3">
              {/* Guest info row */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => verifyGuest(guest.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                    guest.isVerified 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : 'border-white/50 hover:border-white'
                  }`}
                >
                  {guest.isVerified && <Check className="w-3 h-3" />}
                </button>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white truncate">{guest.name}</h3>
                  <p className="text-sm text-gray-300">Table {guest.tableNumber}</p>
                </div>
              </div>
              
              {/* Action buttons row */}
              <div className="flex gap-2">
                <Button
                  onClick={() => onSelectGuest(guest)}
                  variant="outline"
                  size="sm"
                  className="flex-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 text-xs"
                >
                  Aperçu
                </Button>
                <div className="flex-1">
                  <ShareButton guest={guest} />
                </div>
                <Button
                  onClick={() => deleteGuest(guest.id)}
                  variant="outline"
                  size="sm"
                  className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-2"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {guests.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">Aucun invité ajouté pour le moment</p>
          <p className="text-sm text-gray-500 mt-2">Cliquez sur "Ajouter" pour commencer</p>
        </div>
      )}
    </div>
  );
};

export default GuestList;
