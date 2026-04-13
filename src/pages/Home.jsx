import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Shield, Sparkles } from 'lucide-react';

const concepts = [
  {
    id: 'v1',
    name: 'Bold Africa',
    icon: Palette,
    description: 'Couleurs vives, gradients chauds, énergie créative. Un design audacieux qui capture l\'essence dynamique de la création africaine.',
    tags: ['Audacieux', 'Dynamique', 'Créatif'],
    gradient: 'from-orange-500 via-amber-500 to-purple-700',
    bgCard: 'bg-gradient-to-br from-orange-50 to-amber-50',
    border: 'border-orange-200 hover:border-orange-400',
    textAccent: 'text-orange-600',
    tagBg: 'bg-orange-100 text-orange-700',
  },
  {
    id: 'v2',
    name: 'Trust & Premium',
    icon: Shield,
    description: 'Design épuré et corporate, tons sobres et professionnels. Inspire confiance et crédibilité auprès des marques et annonceurs.',
    tags: ['Professionnel', 'Rassurant', 'Premium'],
    gradient: 'from-blue-900 via-blue-700 to-amber-600',
    bgCard: 'bg-gradient-to-br from-blue-50 to-slate-50',
    border: 'border-blue-200 hover:border-blue-400',
    textAccent: 'text-blue-800',
    tagBg: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'v3',
    name: 'Modern Fusion',
    icon: Sparkles,
    description: 'Glassmorphism, dégradés subtils, design tendance 2026. Un équilibre parfait entre créateurs et marques.',
    tags: ['Moderne', 'Inclusif', 'Équilibré'],
    gradient: 'from-emerald-500 via-teal-400 to-red-400',
    bgCard: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    border: 'border-emerald-200 hover:border-emerald-400',
    textAccent: 'text-emerald-700',
    tagBg: 'bg-emerald-100 text-emerald-700',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
              Présentation des maquettes
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-white">INFLUKA</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-blue-400 to-emerald-400">
              3 visions, 1 plateforme.
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Découvrez trois concepts de page d'accueil pour la plateforme panafricaine de marketing d'influence. Chaque version propose une direction artistique unique.
          </motion.p>
        </div>
      </header>

      {/* Concept cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {concepts.map((concept, i) => {
            const Icon = concept.icon;
            return (
              <motion.div
                key={concept.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              >
                <Link to={`/${concept.id}`} className="block group">
                  <div className={`${concept.bgCard} border ${concept.border} rounded-3xl p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2`}>
                    {/* Gradient preview bar */}
                    <div className={`h-2 rounded-full bg-gradient-to-r ${concept.gradient} mb-6`} />

                    {/* Icon + name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center`}>
                        <Icon size={24} className={concept.textAccent} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Concept {i + 1}</p>
                        <h3 className={`text-xl font-bold ${concept.textAccent}`}>{concept.name}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {concept.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {concept.tags.map((tag) => (
                        <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium ${concept.tagBg}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className={`flex items-center gap-2 font-semibold text-sm ${concept.textAccent} group-hover:gap-3 transition-all duration-300`}>
                      Voir la maquette
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-white/10 py-8 text-center">
        <p className="text-sm text-gray-500">
          INFLUKA — Maquettes de présentation · Avril 2026
        </p>
      </footer>
    </div>
  );
}
