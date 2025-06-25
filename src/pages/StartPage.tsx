
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, Palette, Edit, Eye, ArrowLeft } from 'lucide-react';

const StartPage = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Liste d'invités",
      description: "Gérer vos invités et leurs tables",
      icon: Users,
      route: "/app",
      color: "from-pink-400 to-rose-400"
    },
    {
      title: "Mes Templates",
      description: "Choisir et personnaliser vos modèles",
      icon: Palette,
      route: "/templates",
      color: "from-rose-400 to-pink-500"
    },
    {
      title: "Édition",
      description: "Modifier les détails du mariage",
      icon: Edit,
      route: "/edition",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Aperçu",
      description: "Prévisualiser vos invitations",
      icon: Eye,
      route: "/preview",
      color: "from-rose-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={() => navigate('/')}
              variant="ghost"
              className="text-pink-600 hover:bg-pink-100"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Guest List App
            </h1>
            <div className="w-10"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Bienvenue !</h2>
          <p className="text-gray-600">Choisissez une option pour commencer</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/70 backdrop-blur-sm border-pink-200"
              onClick={() => navigate(item.route)}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">Version démo • Limité à 2 invités</p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
