import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CtaButton from '../common/CtaButton';
import { heroContent } from '../../data/content';

export default function HeroV2() {
  const hero = heroContent.v2;

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-v2-gray-50 to-white overflow-hidden">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E3A5F 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-v2-gold to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-v2-navy/5 text-v2-navy text-xs font-semibold uppercase tracking-wider mb-6 border border-v2-navy/10">
                <span className="w-2 h-2 rounded-full bg-v2-gold animate-pulse" />
                Plateforme de confiance
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-[1.15] text-v2-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {hero.headline}
              <br />
              <span className="text-v2-navy">{hero.subheadline}</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-v2-gray-600 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {hero.description}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <CtaButton variant="v2" type="primary" size="lg">
                {hero.ctaBrand} <ArrowRight size={20} className="ml-2" />
              </CtaButton>
              <CtaButton variant="v2" type="secondary" size="lg">
                {hero.ctaCreator}
              </CtaButton>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {['Profils vérifiés', 'Paiement escrow', 'Support 24/7'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-v2-gray-600">
                  <CheckCircle size={16} className="text-v2-gold" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="bg-white rounded-2xl border border-v2-gray-200 shadow-2xl shadow-v2-navy/10 p-8">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-v2-gray-100">
                  <div>
                    <p className="text-xs text-v2-gray-600 uppercase tracking-wider">Tableau de bord</p>
                    <h3 className="text-lg font-bold text-v2-gray-900 font-playfair">AfriBeauty Co.</h3>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-v2-navy/5 text-v2-navy text-xs font-semibold border border-v2-navy/10">
                    Business Plan
                  </span>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { label: 'Campagnes actives', value: '12', trend: '+3' },
                    { label: 'Créateurs engagés', value: '87', trend: '+15' },
                    { label: 'ROI moyen', value: '340%', trend: '+12%' },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-v2-gray-50 rounded-xl p-4">
                      <p className="text-xs text-v2-gray-600">{kpi.label}</p>
                      <div className="flex items-end gap-2 mt-1">
                        <span className="text-2xl font-bold text-v2-navy">{kpi.value}</span>
                        <span className="text-xs text-green-600 font-semibold mb-1">{kpi.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Creator list preview */}
                <div>
                  <p className="text-xs text-v2-gray-600 uppercase tracking-wider mb-3">Top créateurs</p>
                  {[
                    { name: 'Amina D.', niche: 'Lifestyle', score: '98%', emoji: '👩🏾' },
                    { name: 'Kwame A.', niche: 'Tech', score: '95%', emoji: '👨🏿' },
                    { name: 'Fatou M.', niche: 'Mode', score: '93%', emoji: '👩🏽' },
                  ].map((creator) => (
                    <div key={creator.name} className="flex items-center justify-between py-2.5 border-b border-v2-gray-100 last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{creator.emoji}</span>
                        <div>
                          <p className="text-sm font-semibold text-v2-gray-900">{creator.name}</p>
                          <p className="text-xs text-v2-gray-600">{creator.niche}</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-v2-navy">{creator.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-v2-gold text-white rounded-xl px-4 py-3 shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs font-bold">✓ Marque vérifiée</p>
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 bg-white border border-v2-gray-200 rounded-xl px-4 py-3 shadow-lg"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              >
                <p className="text-xs font-bold text-v2-navy">🔒 Escrow activé</p>
                <p className="text-xs text-v2-gray-600">Paiement sécurisé</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
