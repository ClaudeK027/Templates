import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CtaButton from '@/components/common/CtaButton';

export default function FinalCtaV1() {
  return (
    <section
      style={{
        background: '#1C1917',
        overflow: 'hidden',
        position: 'relative',
        padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 40px)',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: '25%', width: '300px', height: '300px', background: 'rgba(249,115,22,0.1)', borderRadius: '50%', filter: 'blur(100px)' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            fontWeight: 700,
            fontFamily: "'Poppins', sans-serif",
            color: '#fff',
            lineHeight: 1.2,
            margin: 0,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Prêt à faire grandir
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #F97316, #F59E0B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            votre influence ?
          </span>
        </motion.h2>

        <motion.p
          style={{ marginTop: '16px', fontSize: '15px', color: '#9CA3AF', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.6 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Rejoignez des milliers de créateurs et de marques qui transforment le marketing d'influence en Afrique.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <CtaButton variant="v1" type="primary" size="lg" className="w-full sm:w-auto">
            Créer mon compte <ArrowRight size={16} />
          </CtaButton>
          <CtaButton variant="v1" type="ghost" size="lg" className="w-full sm:w-auto">
            En savoir plus
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
