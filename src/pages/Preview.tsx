
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Edit } from 'lucide-react';
import { useWeddingDetails } from '@/hooks/useWeddingDetails';
import InvitationTemplates from '@/components/InvitationTemplates';
import TemplateSelector from '@/components/TemplateSelector';

const Preview = () => {
  const navigate = useNavigate();
  const { weddingDetails, updateWeddingDetails } = useWeddingDetails();

  const handleTemplateChange = (template: any) => {
    updateWeddingDetails({
      ...weddingDetails,
      template
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate('/start')}
              variant="ghost"
              className="text-pink-600 hover:bg-pink-100"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              <TemplateSelector
                currentTemplate={weddingDetails.template}
                onTemplateChange={handleTemplateChange}
              />
              <Button
                onClick={() => navigate('/edition')}
                variant="ghost"
                className="text-pink-600 hover:bg-pink-100"
              >
                <Edit className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        <Card className="p-4 bg-white/70 backdrop-blur-sm border-pink-200 shadow-sm mb-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Aperçu de l'invitation
            </h3>
            <p className="text-sm text-gray-600">Voici comment apparaîtra votre invitation</p>
          </div>
        </Card>

        <InvitationTemplates
          template={weddingDetails.template}
          guest={{ id: 'preview', name: 'Invité(e)', tableNumber: '1', isVerified: false, createdAt: new Date() }}
          weddingDetails={weddingDetails}
          isPreview={true}
        />
      </div>
    </div>
  );
};

export default Preview;
