import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, Share2, Eye, Edit, Check, Phone, Heart } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Gestion des invités",
      description: "Ajoutez et organisez vos invités avec leurs informations de table"
    },
    {
      icon: Edit,
      title: "Personnalisation",
      description: "Modifiez les détails du mariage et choisissez parmi plusieurs templates"
    },
    {
      icon: Share2,
      title: "Partage facile",
      description: "Partagez les invitations personnalisées via WhatsApp"
    },
    {
      icon: Eye,
      title: "Aperçu en temps réel",
      description: "Visualisez les invitations avant de les envoyer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-rose-100">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-pink-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Guest List App
              </h1>
            </div>
            <Button
              onClick={() => navigate('/start')}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Démo Gratuite
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-rose-200 rounded-full opacity-20 animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full opacity-20 animate-bounce delay-500"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-rose-300 rounded-full opacity-20 animate-bounce delay-1500"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center z-10">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/1490f345-f052-41c3-8e56-512e53969e4a.png" 
              alt="Wedding invitation background"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4 leading-tight">
            Créez et gérez vos invitations de mariage
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Organisez votre liste d'invités et partagez facilement vos invitations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate('/start')}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-xl px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Essayer Maintenant
            </Button>
            <p className="text-sm text-gray-600 bg-white/70 px-4 py-2 rounded-full">
              ✨ Démo gratuite • Limité à 2 invités
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Features */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Pourquoi choisir notre app ?</h3>
          <p className="text-xl text-gray-600">Tout ce dont vous avez besoin pour vos invitations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-pink-200 p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* How it works */}
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">Comment ça marche</h3>
          <p className="text-xl text-gray-600 mb-16">En 3 étapes simples</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg">
                1
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Ajoutez vos invités</h4>
              <p className="text-gray-600 text-lg">Créez votre liste d'invités avec leurs noms et numéros de table</p>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-pink-300 to-rose-300"></div>
            </div>
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg">
                2
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Personnalisez</h4>
              <p className="text-gray-600 text-lg">Modifiez les détails du mariage et choisissez un template</p>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-pink-300 to-rose-300"></div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg">
                3
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Partagez</h4>
              <p className="text-gray-600 text-lg">Envoyez les invitations personnalisées via WhatsApp</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-pink-500 to-rose-500 p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3">Prêt à commencer ?</h3>
            <p className="text-base md:text-lg mb-6 opacity-90">
              Créez vos premières invitations en quelques minutes
            </p>
            <div className="flex justify-center">
              <Button
                onClick={() => navigate('/start')}
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-10 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Commencer maintenant
              </Button>
            </div>
          </div>
        </Card>

        {/* Contact */}
        <Card className="bg-white/80 backdrop-blur-sm border-pink-200 p-10 text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Besoin du service complet ?</h3>
          <p className="text-gray-600 mb-6 text-lg">
            La version démo est limitée à 2 invités. Pour un accès illimité et toutes les fonctionnalités,
            contactez-nous pour obtenir la version complète.
          </p>
          <div className="flex items-center justify-center gap-3 text-pink-600 bg-pink-50 py-4 px-6 rounded-full inline-flex">
            <Phone className="w-6 h-6" />
            <span className="font-mono text-2xl font-bold">+243 895 117 887</span>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center py-12 text-gray-600 border-t border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50">
        <p className="text-lg">© 2024 Guest List App. Application d'invitations de mariage professionnelle.</p>
      </div>
    </div>
  );
};

export default LandingPage;
