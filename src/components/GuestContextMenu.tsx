
import React from 'react';
import { Eye, Share2, Edit, Trash2 } from 'lucide-react';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { Guest } from '@/types/guest';
import ShareButton from './ShareButton';
import EditGuestDialog from './EditGuestDialog';

interface GuestContextMenuProps {
  guest: Guest;
  children: React.ReactNode;
  onPreview: (guest: Guest) => void;
  onUpdate: (id: string, name: string, tableNumber: string) => void;
  onDelete: (id: string) => void;
}

const GuestContextMenu: React.FC<GuestContextMenuProps> = ({
  guest,
  children,
  onPreview,
  onUpdate,
  onDelete
}) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="bg-white border-gray-200 shadow-lg">
        <ContextMenuItem 
          onClick={() => onPreview(guest)}
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-50"
        >
          <Eye className="w-4 h-4 text-yellow-600" />
          Aperçu
        </ContextMenuItem>
        
        <ContextMenuItem asChild>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2">
            <Share2 className="w-4 h-4 text-green-600" />
            <ShareButton guest={guest} />
          </div>
        </ContextMenuItem>
        
        <ContextMenuItem asChild>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50">
            <Edit className="w-4 h-4 text-blue-600" />
            <EditGuestDialog guest={guest} onUpdate={onUpdate} />
          </div>
        </ContextMenuItem>
        
        <ContextMenuItem 
          onClick={() => onDelete(guest.id)}
          className="flex items-center gap-2 cursor-pointer hover:bg-red-50 text-red-600"
        >
          <Trash2 className="w-4 h-4" />
          Supprimer
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default GuestContextMenu;
