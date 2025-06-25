
import React, { useState } from 'react';
import { WeddingDetails } from '@/types/guest';
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
import { Textarea } from '@/components/ui/textarea';
import { Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import TemplateSelector from './TemplateSelector';
import { InvitationTemplate } from '@/types/template';

interface EditWeddingDialogProps {
  weddingDetails: WeddingDetails;
  onUpdate: (details: WeddingDetails) => void;
}

const EditWeddingDialog: React.FC<EditWeddingDialogProps> = ({ weddingDetails, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(weddingDetails);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setImageFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setFormData(prev => ({
            ...prev,
            couplePhotoUrl: e.target?.result as string
          }));
        };
        reader.readAsDataURL(file);
      } else {
        toast({
          title: "Erreur",
          description: "Veuillez sélectionner une image valide",
          variant: "destructive"
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    setIsOpen(false);
    toast({
      title: "Succès",
      description: "Les détails du mariage ont été mis à jour"
    });
  };

  const handleInputChange = (field: keyof WeddingDetails, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTemplateChange = (template: InvitationTemplate) => {
    setFormData(prev => ({
      ...prev,
      template
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
          <Edit className="w-4 h-4 mr-2" />
          Modifier les détails
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-white border-pink-200">
        <DialogHeader>
          <DialogTitle className="text-gray-800">Modifier les détails du mariage</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Modèle d'invitation</Label>
            <div className="mt-1">
              <TemplateSelector
                currentTemplate={formData.template}
                onTemplateChange={handleTemplateChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="groomName">Nom du marié</Label>
              <Input
                id="groomName"
                value={formData.groomName}
                onChange={(e) => handleInputChange('groomName', e.target.value)}
                className="border-pink-300 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="brideName">Nom de la mariée</Label>
              <Input
                id="brideName"
                value={formData.brideName}
                onChange={(e) => handleInputChange('brideName', e.target.value)}
                className="border-pink-300 focus:border-pink-500"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="weddingDate">Date</Label>
              <Input
                id="weddingDate"
                value={formData.weddingDate}
                onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                placeholder="ex: 22ᵀᴴ OCT"
                className="border-pink-300 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <Label htmlFor="ceremonyTime">Heure</Label>
              <Input
                id="ceremonyTime"
                value={formData.ceremonyTime}
                onChange={(e) => handleInputChange('ceremonyTime', e.target.value)}
                placeholder="ex: 10AM"
                className="border-pink-300 focus:border-pink-500"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="venue">Lieu</Label>
            <Input
              id="venue"
              value={formData.venue}
              onChange={(e) => handleInputChange('venue', e.target.value)}
              className="border-pink-300 focus:border-pink-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="venueLocation">Localisation</Label>
            <Input
              id="venueLocation"
              value={formData.venueLocation}
              onChange={(e) => handleInputChange('venueLocation', e.target.value)}
              className="border-pink-300 focus:border-pink-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="websiteUrl">Site web</Label>
            <Input
              id="websiteUrl"
              value={formData.websiteUrl}
              onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
              placeholder="www.exemple.com"
              className="border-pink-300 focus:border-pink-500"
            />
          </div>

          <div>
            <Label htmlFor="invitationText">Texte de l'invitation</Label>
            <Textarea
              id="invitationText"
              value={formData.invitationText}
              onChange={(e) => handleInputChange('invitationText', e.target.value)}
              placeholder="Votre message d'invitation personnalisé..."
              className="min-h-[80px] border-pink-300 focus:border-pink-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="couplePhoto">Photo du couple</Label>
            <Input
              id="couplePhoto"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="cursor-pointer border-pink-300 focus:border-pink-500"
            />
            {formData.couplePhotoUrl && (
              <div className="mt-2 text-sm text-green-600">
                ✓ Photo sélectionnée
              </div>
            )}
          </div>

          <div className="flex gap-2 pt-4">
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
            >
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

export default EditWeddingDialog;
