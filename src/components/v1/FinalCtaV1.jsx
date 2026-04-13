import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CtaButton from '../common/CtaButton';

export default function FinalCtaV1() {
  return (
    <section className="relative py-20 lg:py-28 bg-v1-black overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-v1-orange/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-v1-purple/15 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          className="inline-block px-4 py-1.5 rounded-full bg-v1-orange/10 text-v1-orange text-xs font-semibold uppercase tracking-wider mb-6 border border-v1-orange/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Rejoignez le mouvement
        </motion.span>

        <motion.h2
          className="text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Prêt à faire grandir
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-v1-orange to-v1-gold">
            votre influence ?
          </span>
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Rejoignez des milliers de créateurs et de marques qui transforment le marketing d'influence en Afrique.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <CtaButton variant="v1" type="primary" size="lg">
            Créer mon compte <ArrowRight size={20} className="ml-2" />
          </CtaButton>
          <CtaButton variant="v1" type="ghost" size="lg" className="text-white border border-white/20">
            En savoir plus
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
