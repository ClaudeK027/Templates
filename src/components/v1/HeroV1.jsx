import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import CtaButton from '../common/CtaButton';
import { heroContent } from '../../data/content';

export default function HeroV1() {
  const hero = heroContent.v1;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-v1-black">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-v1-orange/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-v1-purple/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-v1-gold/10 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-v1-orange/10 text-v1-orange text-xs font-semibold uppercase tracking-wider mb-6 border border-v1-orange/20">
                Plateforme #1 en Afrique
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-[1.1] text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {hero.headline}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-v1-orange via-v1-gold to-v1-orange">
                {hero.subheadline}
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-gray-400 max-w-lg leading-relaxed"
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
              <CtaButton variant="v1" type="primary" size="lg">
                {hero.ctaCreator} <ArrowRight size={20} className="ml-2" />
              </CtaButton>
              <CtaButton variant="v1" type="secondary" size="lg">
                {hero.ctaBrand}
              </CtaButton>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              className="mt-10 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex -space-x-3">
                {['👩🏾', '👨🏿', '👩🏽', '👨🏾', '👩🏾‍💼'].map((emoji, i) => (
                  <span key={i} className="w-10 h-10 rounded-full bg-v1-purple/30 border-2 border-v1-black flex items-center justify-center text-lg">
                    {emoji}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">+10 000 créateurs</p>
                <p className="text-gray-500 text-xs">nous font déjà confiance</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Simulated dashboard / profile card */}
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-v1-orange to-v1-gold flex items-center justify-center text-3xl">
                    👩🏾‍🎨
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Amina Diallo</h3>
                    <p className="text-gray-400 text-sm">Créatrice lifestyle · Lagos</p>
                  </div>
                  <span className="ml-auto px-3 py-1 rounded-full bg-v1-orange/20 text-v1-orange text-xs font-bold">
                    Vérifié ✓
                  </span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Abonnés', value: '245K' },
                    { label: 'Engagement', value: '4.8%' },
                    { label: 'Missions', value: '32' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-3 text-center">
                      <p className="text-v1-orange font-bold text-lg">{stat.value}</p>
                      <p className="text-gray-500 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Social icons */}
                <div className="flex gap-3">
                  {['Instagram', 'TikTok', 'YouTube'].map((net) => (
                    <span key={net} className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 text-xs border border-white/10">
                      {net}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating notification */}
              <motion.div
                className="absolute -top-4 -right-4 bg-v1-purple text-white rounded-2xl px-5 py-3 shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="text-xs font-semibold">🎉 Nouvelle mission !</p>
                <p className="text-xs text-purple-200">AfriBeauty vous invite</p>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-v1-gold text-v1-black rounded-2xl px-5 py-3 shadow-xl"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <p className="text-xs font-bold">⭐ Top Créateur</p>
                <p className="text-xs">Badge débloqué</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
