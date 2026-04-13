import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import CtaButton from '../common/CtaButton';
import { heroContent } from '../../data/content';

export default function HeroV3() {
  const hero = heroContent.v3;

  return (
    <section className="relative min-h-screen flex items-center bg-v3-cream overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-v3-emerald/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-v3-coral/10 rounded-full blur-[100px]" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-32 right-[15%] w-20 h-20 rounded-full border-2 border-v3-emerald/20"
        animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-40 left-[10%] w-14 h-14 rounded-2xl border-2 border-v3-coral/20 rotate-45"
        animate={{ y: [0, 15, 0], rotate: [45, 135, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        {/* Centered hero */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-v3-emerald/10 text-v3-emerald text-sm font-medium mb-8 border border-v3-emerald/20">
              <Sparkles size={16} />
              La nouvelle ère du marketing d'influence africain
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-poppins leading-[1.05] text-v3-dark"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {hero.headline}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-v3-emerald via-v3-emerald-light to-v3-coral">
              {hero.subheadline}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <CtaButton variant="v3" type="primary" size="lg">
              {hero.ctaCreator} <ArrowRight size={20} className="ml-2" />
            </CtaButton>
            <CtaButton variant="v3" type="secondary" size="lg">
              {hero.ctaBrand}
            </CtaButton>
          </motion.div>
        </div>

        {/* Bottom — Floating cards preview */}
        <motion.div
          className="mt-16 lg:mt-20 relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Creator card */}
            <motion.div
              className="bg-white/80 backdrop-blur-xl rounded-2xl border border-v3-emerald/20 p-6 shadow-lg"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">👩🏾‍🎨</span>
                <div>
                  <p className="font-bold text-v3-dark text-sm">Amina D.</p>
                  <p className="text-xs text-gray-500">Lifestyle · Lagos</p>
                </div>
                <span className="ml-auto px-2 py-0.5 rounded-full bg-v3-emerald/10 text-v3-emerald text-[10px] font-bold">
                  Vérifié
                </span>
              </div>
              <div className="flex gap-2">
                {['245K', '4.8%', '⭐ 4.9'].map((s) => (
                  <span key={s} className="px-2 py-1 rounded-lg bg-v3-light text-xs text-v3-dark font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Mission card */}
            <motion.div
              className="bg-white/80 backdrop-blur-xl rounded-2xl border border-v3-coral/20 p-6 shadow-lg"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <span className="px-2 py-0.5 rounded-full bg-v3-coral/10 text-v3-coral text-[10px] font-bold uppercase">
                Mission ouverte
              </span>
              <h4 className="font-bold text-v3-dark mt-3 text-sm">Campagne été 2026</h4>
              <p className="text-xs text-gray-500 mt-1">AfriBeauty · 5 créateurs recherchés</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-v3-emerald font-bold text-sm">500 000 FCFA</span>
                <span className="text-xs text-gray-400">Il y a 2h</span>
              </div>
            </motion.div>

            {/* Match card */}
            <motion.div
              className="bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 p-6 shadow-lg"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl">👩🏾</span>
                <div className="flex flex-col items-center">
                  <span className="text-v3-coral text-lg">❤️</span>
                  <span className="text-[10px] text-gray-400 font-medium">Match</span>
                </div>
                <span className="text-3xl">🏢</span>
              </div>
              <p className="text-center text-sm font-bold text-v3-dark">Collaboration confirmée !</p>
              <p className="text-center text-xs text-gray-500 mt-1">Fatou S. × TechPulse Africa</p>
              <div className="mt-3 w-full bg-v3-emerald/10 rounded-full h-1.5">
                <div className="bg-v3-emerald rounded-full h-1.5 w-3/4" />
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-1">Livraison en cours — 75%</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
