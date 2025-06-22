
import React from 'react';
import { InvitationTemplate, TEMPLATES } from '@/types/template';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Palette } from 'lucide-react';

interface TemplateSelectorProps {
  currentTemplate: InvitationTemplate;
  onTemplateChange: (template: InvitationTemplate) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  currentTemplate,
  onTemplateChange
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleTemplateSelect = (template: InvitationTemplate) => {
    onTemplateChange(template);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20"
        >
          <Palette className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Choisir un modèle</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-3">
          {TEMPLATES.map((template) => (
            <Card
              key={template.id}
              className={`p-4 cursor-pointer transition-all hover:scale-105 ${
                currentTemplate === template.id
                  ? 'ring-2 ring-yellow-400 bg-yellow-50'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">{template.preview}</div>
                <h3 className="font-medium text-xs">{template.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{template.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TemplateSelector;
