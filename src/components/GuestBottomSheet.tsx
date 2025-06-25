
import React, { useState } from 'react';
import { Guest } from '@/types/guest';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Eye, Share2, Edit, Trash2 } from 'lucide-react';
import ShareButton from './ShareButton';
import EditGuestDialog from './EditGuestDialog';
import DeleteConfirmDialog from './DeleteConfirmDialog';

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
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDelete = () => {
    onDelete(guest.id);
    setShowDeleteDialog(false);
    onOpenChange(false);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent 
          side="bottom" 
          className="h-[80vh] bg-white border-t-pink-200 rounded-t-3xl"
        >
          <SheetHeader className="pb-6">
            <SheetTitle className="text-xl font-bold text-gray-800">
              {guest.name}
            </SheetTitle>
            <p className="text-gray-600">Table {guest.tableNumber}</p>
          </SheetHeader>
          
          <div className="space-y-4">
            <Button
              onClick={() => {
                onPreview(guest);
                onOpenChange(false);
              }}
              variant="outline"
              className="w-full justify-start gap-3 h-14 border-pink-200 hover:bg-pink-50"
            >
              <Eye className="w-5 h-5 text-yellow-600" />
              <div className="text-left">
                <div className="font-medium">Aperçu de l'invitation</div>
                <div className="text-sm text-gray-500">Voir l'invitation personnalisée</div>
              </div>
            </Button>

            <div className="w-full">
              <Button
                variant="outline"
                className="w-full justify-start gap-3 h-14 border-pink-200 hover:bg-pink-50"
                onClick={() => {
                  const shareButton = document.querySelector('.share-button-hidden') as HTMLButtonElement;
                  if (shareButton) shareButton.click();
                }}
              >
                <Share2 className="w-5 h-5 text-green-600" />
                <div className="text-left">
                  <div className="font-medium">Partager l'invitation</div>
                  <div className="text-sm text-gray-500">Envoyer via WhatsApp</div>
                </div>
              </Button>
              <div className="hidden">
                <ShareButton guest={guest} />
              </div>
            </div>

            <div className="w-full">
              <EditGuestDialog 
                guest={guest} 
                onUpdate={onUpdate}
                className="w-full justify-start gap-3 h-14 border-pink-200 hover:bg-pink-50"
                showLabel={true}
              />
            </div>

            <Button
              onClick={() => setShowDeleteDialog(true)}
              variant="outline"
              className="w-full justify-start gap-3 h-14 border-red-200 hover:bg-red-50 text-red-600"
            >
              <Trash2 className="w-5 h-5" />
              <div className="text-left">
                <div className="font-medium">Supprimer l'invité</div>
                <div className="text-sm text-red-400">Retirer de la liste</div>
              </div>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <DeleteConfirmDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        onConfirm={handleDelete}
        guestName={guest.name}
      />
    </>
  );
};

export default GuestBottomSheet;
