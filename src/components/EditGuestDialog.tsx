
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
}

const EditGuestDialog: React.FC<EditGuestDialogProps> = ({ guest, onUpdate }) => {
  const [name, setName] = useState(guest.name);
  const [tableNumber, setTableNumber] = useState(guest.tableNumber);
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    if (name.trim() && tableNumber.trim()) {
      onUpdate(guest.id, name.trim(), tableNumber.trim());
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-2"
        >
          <Edit className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-800 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-white">Modifier l'invité</DialogTitle>
          <DialogDescription className="text-gray-300">
            Modifiez les informations de l'invité ci-dessous.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Nom</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Nom de l'invité"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Table</label>
            <Input
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Numéro de table"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            className="border-slate-600 text-white hover:bg-slate-700"
          >
            Annuler
          </Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            Sauvegarder
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditGuestDialog;
