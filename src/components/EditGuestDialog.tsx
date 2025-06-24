
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Edit } from 'lucide-react';
import { Guest } from '@/types/guest';

interface EditGuestDialogProps {
  guest: Guest;
  onUpdate: (id: string, name: string, tableNumber: string) => void;
  onComplete?: () => void;
}

const EditGuestDialog: React.FC<EditGuestDialogProps> = ({ guest, onUpdate, onComplete }) => {
  const [name, setName] = useState(guest.name);
  const [tableNumber, setTableNumber] = useState(guest.tableNumber);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    if (name.trim() && tableNumber.trim()) {
      onUpdate(guest.id, name.trim(), tableNumber.trim());
      setOpen(false);
      onComplete?.();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full flex items-center gap-3 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white p-4 h-auto">
          <Edit className="w-5 h-5" />
          <div className="text-left">
            <div className="font-medium">Modifier</div>
            <div className="text-sm opacity-90">Éditer les informations</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white border-pink-200">
        <DialogHeader>
          <DialogTitle className="text-gray-800">Modifier l'invité</DialogTitle>
          <DialogDescription className="text-gray-600">
            Modifiez les informations de l'invité ci-dessous.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Nom</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-pink-300 focus:border-pink-500"
              placeholder="Nom de l'invité"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Table</label>
            <Input
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="border-pink-300 focus:border-pink-500"
              placeholder="Numéro de table"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="border-pink-300 text-pink-600 hover:bg-pink-50"
          >
            Annuler
          </Button>
          <Button 
            onClick={handleSave} 
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
          >
            Sauvegarder
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditGuestDialog;
