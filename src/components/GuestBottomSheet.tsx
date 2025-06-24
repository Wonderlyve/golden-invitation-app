
import React from 'react';
import { Eye, Share2, Edit, Trash2 } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Guest } from '@/types/guest';
import ShareButton from './ShareButton';
import EditGuestDialog from './EditGuestDialog';

interface GuestBottomSheetProps {
  guest: Guest;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPreview: (guest: Guest) => void;
  onUpdate: (id: string, name: string, tableNumber: string) => void;
  onDelete: (id: string) => void;
}

const GuestBottomSheet: React.FC<GuestBottomSheetProps> = ({
  guest,
  open,
  onOpenChange,
  onPreview,
  onUpdate,
  onDelete
}) => {
  const handleAction = (action: () => void) => {
    action();
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[80vh] bg-white">
        <DrawerHeader className="text-center border-b border-gray-200 pb-4">
          <DrawerTitle className="text-xl font-semibold text-gray-800">
            {guest.name}
          </DrawerTitle>
          <DrawerDescription className="text-gray-600">
            Table {guest.tableNumber}
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="p-6 space-y-4">
          <Button
            onClick={() => handleAction(() => onPreview(guest))}
            className="w-full flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white p-4 h-auto"
          >
            <Eye className="w-5 h-5" />
            <div className="text-left">
              <div className="font-medium">Aperçu</div>
              <div className="text-sm opacity-90">Voir l'invitation de cet invité</div>
            </div>
          </Button>

          <div className="w-full">
            <ShareButton guest={guest} onComplete={() => onOpenChange(false)} />
          </div>

          <div className="w-full">
            <EditGuestDialog 
              guest={guest} 
              onUpdate={onUpdate}
              onComplete={() => onOpenChange(false)}
            />
          </div>

          <Button
            onClick={() => handleAction(() => onDelete(guest.id))}
            className="w-full flex items-center gap-3 bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white p-4 h-auto"
          >
            <Trash2 className="w-5 h-5" />
            <div className="text-left">
              <div className="font-medium">Supprimer</div>
              <div className="text-sm opacity-90">Retirer cet invité de la liste</div>
            </div>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default GuestBottomSheet;
