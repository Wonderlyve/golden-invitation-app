
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Phone } from 'lucide-react';

interface GuestLimitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GuestLimitDialog: React.FC<GuestLimitDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 animate-scale-in">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
            <AlertTriangle className="w-8 h-8 text-amber-600" />
          </div>
          <DialogTitle className="text-xl font-bold text-amber-800">
            Limite du mode démo atteinte
          </DialogTitle>
          <DialogDescription className="text-amber-700 mt-4 space-y-3">
            <p className="text-base">
              Vous ne pouvez ajouter que <strong>5 invités</strong> en mode démo.
            </p>
            <div className="bg-white/50 p-4 rounded-lg border border-amber-200">
              <p className="font-medium text-amber-800 mb-2">
                Pour le service complet, contactez-nous :
              </p>
              <div className="flex items-center justify-center gap-2 text-amber-900">
                <Phone className="w-4 h-4" />
                <span className="font-mono text-lg font-bold">+243 895 117 887</span>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8"
          >
            Compris
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuestLimitDialog;
