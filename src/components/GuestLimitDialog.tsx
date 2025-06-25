
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle, MessageCircle } from 'lucide-react';

interface GuestLimitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GuestLimitDialog: React.FC<GuestLimitDialogProps> = ({ open, onOpenChange }) => {
  const handleContactWhatsApp = () => {
    const phoneNumber = "243895117887";
    const message = "Bonjour, je souhaite obtenir le service complet pour les invitations de mariage.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200 animate-scale-in">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
            <AlertTriangle className="w-8 h-8 text-pink-600" />
          </div>
          <DialogTitle className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Limite du mode démo atteinte
          </DialogTitle>
          <DialogDescription className="text-gray-700 mt-4 space-y-4">
            <p className="text-base font-medium">
              Vous n'avez que <strong className="text-pink-700">2 invités</strong> pour le mode démo.
            </p>
            <div className="bg-white/80 p-4 rounded-lg border border-pink-200 shadow-sm">
              <p className="font-medium text-pink-800 mb-3">
                Veuillez nous contacter pour le service complet
              </p>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Numéro de contact :</p>
                <p className="font-mono text-lg font-bold text-pink-900">+243 895 117 887</p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button
            onClick={handleContactWhatsApp}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Nous contacter
          </Button>
          <Button
            onClick={() => onOpenChange(false)}
            variant="outline"
            className="border-pink-300 text-pink-600 hover:bg-pink-50 transition-colors"
          >
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuestLimitDialog;
