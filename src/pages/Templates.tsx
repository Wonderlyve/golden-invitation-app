
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { TEMPLATES } from '@/types/template';
import { useWeddingDetails } from '@/hooks/useWeddingDetails';

const Templates = () => {
  const navigate = useNavigate();
  const { weddingDetails, updateWeddingDetails } = useWeddingDetails();

  const handleTemplateSelect = (templateId: any) => {
    updateWeddingDetails({
      ...weddingDetails,
      template: templateId
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
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Mes Templates
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Choisissez votre template</h2>
          <p className="text-gray-600">Sélectionnez le design qui vous plaît</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {TEMPLATES.map((template) => (
            <Card
              key={template.id}
              className={`p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/70 backdrop-blur-sm border-pink-200 ${
                weddingDetails.template === template.id ? 'ring-2 ring-pink-400' : ''
              }`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <div className="text-3xl mb-2">{template.preview}</div>
              <h3 className="font-semibold text-gray-800 mb-1 text-sm">{template.name}</h3>
              <p className="text-xs text-gray-600">{template.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={() => navigate('/start')}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8"
          >
            Valider
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
