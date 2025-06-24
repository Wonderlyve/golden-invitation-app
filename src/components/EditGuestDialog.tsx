
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
  onUpdate: (guest: Guest) => void;
}

const EditGuestDialog: React.FC<EditGuestDialogProps> = ({ guest, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: guest.name,
    tableNumber: guest.tableNumber.toString(),
    email: guest.email || '',
    phone: guest.phone || ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: "Erreur",
        description: "Le nom de l'invité est requis",
        variant: "destructive"
      });
      return;
    }

    const tableNum = parseInt(formData.tableNumber);
    if (isNaN(tableNum) || tableNum < 1) {
      toast({
        title: "Erreur", 
        description: "Le numéro de table doit être un nombre valide",
        variant: "destructive"
      });
      return;
    }

    const updatedGuest: Guest = {
      ...guest,
      name: formData.name.trim(),
      tableNumber: tableNum,
      email: formData.email.trim() || undefined,
      phone: formData.phone.trim() || undefined
    };

    onUpdate(updatedGuest);
    setIsOpen(false);
    
    toast({
      title: "Succès",
      description: "Les informations de l'invité ont été mises à jour"
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
          <Edit className="w-4 h-4 mr-1" />
          Modifier
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Modifier l'invité</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nom complet *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Nom de l'invité"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="tableNumber">Numéro de table *</Label>
            <Input
              id="tableNumber"
              type="number"
              min="1"
              value={formData.tableNumber}
              onChange={(e) => handleInputChange('tableNumber', e.target.value)}
              placeholder="1"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email (optionnel)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="email@exemple.com"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Téléphone (optionnel)</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+33 6 12 34 56 78"
            />
          </div>
          
          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              Sauvegarder
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="flex-1"
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
