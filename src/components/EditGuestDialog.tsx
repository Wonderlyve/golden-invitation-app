
import React, { useState } from 'react';
import { Guest } from '@/types/guest';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EditGuestDialogProps {
  guest: Guest;
  onUpdate: (id: string, name: string, tableNumber: string, phoneNumber: string) => void;
  className?: string;
  showLabel?: boolean;
}

const EditGuestDialog: React.FC<EditGuestDialogProps> = ({ 
  guest, 
  onUpdate, 
  className = "",
  showLabel = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(guest.name);
  const [tableNumber, setTableNumber] = useState(guest.tableNumber);
  const [phoneNumber, setPhoneNumber] = useState(guest.phoneNumber || '');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && tableNumber.trim() && phoneNumber.trim()) {
      onUpdate(guest.id, name.trim(), tableNumber.trim(), phoneNumber.trim());
      setIsOpen(false);
      toast({
        title: "Succès",
        description: "L'invité a été modifié avec succès"
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={className}>
          <Edit className="w-4 h-4" />
          {showLabel && (
            <div className="text-left ml-2">
              <div className="font-medium">Modifier l'invité</div>
              <div className="text-sm text-gray-500">Changer nom ou table</div>
            </div>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white border-pink-200">
        <DialogHeader>
          <DialogTitle className="text-gray-800">Modifier l'invité</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nom de l'invité</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-pink-300 focus:border-pink-500 bg-gray-100"
              placeholder="Désactivé pour la version démo"
              disabled
            />
            <p className="text-xs text-gray-500 mt-1">La modification du nom est désactivée en version démo</p>
          </div>
          <div>
            <Label htmlFor="tableNumber">Numéro de table</Label>
            <Input
              id="tableNumber"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
              className="border-pink-300 focus:border-pink-500"
              required
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber">Numéro de téléphone</Label>
            <Input
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border-pink-300 focus:border-pink-500"
              type="tel"
              placeholder="+243895117887"
              required
            />
          </div>
          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
              Sauvegarder
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="flex-1 border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              Annuler
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditGuestDialog;
