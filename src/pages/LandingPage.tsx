
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, Share2, Eye, Edit, Check, Phone } from 'lucide-react';

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
      <div className="bg-white/80 backdrop-blur-sm border-b border-pink-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                💑
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Guest List App</h1>
            </div>
            <Button
              onClick={() => navigate('/start')}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
            >
              Démo Gratuite
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.1), rgba(244, 114, 182, 0.1)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="hearts" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><text x="50" y="50" text-anchor="middle" fill="%23ec4899" font-size="30" opacity="0.1">💕</text></pattern></defs><rect width="1200" height="600" fill="url(%23hearts)"/></svg>')`
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-6">
            Créez et gérez vos invitations de mariage
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Une application simple et élégante pour organiser votre liste d'invités, 
            personnaliser vos invitations et les partager facilement avec vos proches.
          </p>
          <Button
            onClick={() => navigate('/start')}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Essayer Maintenant
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-pink-200 p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* How it works */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-12">Comment ça marche</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                1
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Ajoutez vos invités</h4>
              <p className="text-gray-600">Créez votre liste d'invités avec leurs noms et numéros de table</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                2
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Personnalisez</h4>
              <p className="text-gray-600">Modifiez les détails du mariage et choisissez un template</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                3
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Partagez</h4>
              <p className="text-gray-600">Envoyez les invitations personnalisées via WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <Card className="bg-white/70 backdrop-blur-sm border-pink-200 p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Besoin du service complet ?</h3>
          <p className="text-gray-600 mb-6">
            La version démo est limitée à 5 invités. Pour un accès illimité et toutes les fonctionnalités,
            contactez-nous pour obtenir la version complète.
          </p>
          <div className="flex items-center justify-center gap-2 text-pink-600">
            <Phone className="w-5 h-5" />
            <span className="font-mono text-xl font-bold">+243 895 117 887</span>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-gray-600 text-sm border-t border-pink-200 bg-white/50">
        <p>© 2024 Guest List App. Application d'invitations de mariage professionnelle.</p>
      </div>
    </div>
  );
};

export default LandingPage;
