import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ImageCropDialogProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  onCropComplete: (croppedImageUrl: string) => void;
}

const ImageCropDialog: React.FC<ImageCropDialogProps> = ({
  isOpen,
  onClose,
  imageSrc,
  onCropComplete
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const onCropCompleteHandler = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const createCroppedImage = async () => {
    try {
      const image = new Image();
      image.src = imageSrc;
      await new Promise((resolve) => {
        image.onload = resolve;
      });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      // Set canvas size to the crop area (1080x900 for the top section)
      canvas.width = 1080;
      canvas.height = 900;

      ctx.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        1080,
        900
      );

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          onCropComplete(url);
          onClose();
        }
      }, 'image/jpeg', 0.95);
    } catch (error) {
      console.error('Error cropping image:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl h-[600px]">
        <DialogHeader>
          <DialogTitle>Recadrer l'image du couple</DialogTitle>
        </DialogHeader>
        <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1080 / 900}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropCompleteHandler}
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <ZoomOut className="w-4 h-4 text-gray-600" />
            <Slider
              value={[zoom]}
              min={1}
              max={3}
              step={0.1}
              onValueChange={(value) => setZoom(value[0])}
              className="flex-1"
            />
            <ZoomIn className="w-4 h-4 text-gray-600" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Annuler
          </Button>
          <Button onClick={createCroppedImage} className="bg-pink-600 hover:bg-pink-700">
            Valider
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImageCropDialog;
