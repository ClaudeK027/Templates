import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import CtaButton from '../common/CtaButton';

export default function FinalCtaV3() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-v3-dark to-v3-dark-soft overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-v3-emerald/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-v3-coral/10 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles className="mx-auto mb-6 text-v3-emerald-light" size={32} />
        </motion.div>

        <motion.h2
          className="text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          L'avenir du marketing
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-v3-emerald-light to-v3-coral">
            d'influence est ici.
          </span>
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Créateurs et marques, rejoignez une communauté qui grandit ensemble. Inscription gratuite.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <CtaButton variant="v3" type="primary" size="lg">
            Commencer maintenant <ArrowRight size={20} className="ml-2" />
          </CtaButton>
          <CtaButton variant="v3" type="ghost" size="lg" className="text-white border border-white/20">
            Voir une démo
          </CtaButton>
        </motion.div>

        {/* Mini social proof */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {['✓ Gratuit pour commencer', '✓ Pas de carte requise', '✓ Support inclus'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
