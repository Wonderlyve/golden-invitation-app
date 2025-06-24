
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                💑
              </div>
              <h1 className="text-xl font-bold text-white">Guest List App</h1>
            </div>
            <Button
              onClick={() => navigate('/app')}
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900"
            >
              Démo Gratuite
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Créez et gérez vos invitations de mariage
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Une application simple et élégante pour organiser votre liste d'invités, 
            personnaliser vos invitations et les partager facilement avec vos proches.
          </p>
          <Button
            onClick={() => navigate('/app')}
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 text-lg px-8 py-3"
          >
            Essayer Maintenant
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* How it works */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-12">Comment ça marche</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-slate-900">
                1
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Ajoutez vos invités</h4>
              <p className="text-gray-300">Créez votre liste d'invités avec leurs noms et numéros de table</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-slate-900">
                2
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Personnalisez</h4>
              <p className="text-gray-300">Modifiez les détails du mariage et choisissez un template</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-slate-900">
                3
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Partagez</h4>
              <p className="text-gray-300">Envoyez les invitations personnalisées via WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Besoin du service complet ?</h3>
          <p className="text-gray-300 mb-6">
            La version démo est limitée à 5 invités. Pour un accès illimité et toutes les fonctionnalités,
            contactez-nous pour obtenir la version complète.
          </p>
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            <Phone className="w-5 h-5" />
            <span className="font-mono text-xl font-bold">+243 895 117 887</span>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-gray-400 text-sm border-t border-white/20">
        <p>© 2024 Guest List App. Application d'invitations de mariage professionnelle.</p>
      </div>
    </div>
  );
};

export default LandingPage;
