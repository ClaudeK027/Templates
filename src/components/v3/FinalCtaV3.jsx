import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import CtaButton from '@/components/common/CtaButton';

export default function FinalCtaV3() {
  return (
    <section style={{ padding: '160px 0', background: '#0F172A', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Pulsar Animating Rings */}
      <motion.div
        style={{ position: 'absolute', width: 'clamp(300px, 80vw, 800px)', height: 'clamp(300px, 80vw, 800px)', border: '1px solid rgba(16,185,129,0.1)', borderRadius: '50%' }}
        animate={{ scale: [1, 1.3, 1.6], opacity: [0.5, 0, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        style={{ position: 'absolute', width: 'clamp(250px, 60vw, 600px)', height: 'clamp(250px, 60vw, 600px)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '50%' }}
        animate={{ scale: [1, 1.3, 1.6], opacity: [0.5, 0, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1.3 }}
      />
      <motion.div
        style={{ position: 'absolute', width: 'clamp(200px, 40vw, 400px)', height: 'clamp(200px, 40vw, 400px)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.3, 1.6], opacity: [0.5, 0, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 2.6 }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Zap style={{ color: '#10B981' }} size={32} />
          </div>
        </motion.div>
        
        <motion.h2
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            fontFamily: "'Playfair Display', serif",
            color: '#ffffff',
            lineHeight: 1.1,
            margin: '0 0 24px',
            letterSpacing: '-0.02em'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Passez à la <span style={{ color: '#10B981', fontStyle: 'italic' }}>vitesse supérieure.</span>
        </motion.h2>
        
        <motion.p
          style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '540px', margin: '0 auto', lineHeight: 1.6 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          L'inscription prend 3 minutes. Le déploiement de votre première campagne prend 30 minutes. Le ROI est mesurable instantanément.
        </motion.p>
        
        <motion.div
          style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
        >
          <button
            style={{
               background: '#10B981',
               color: '#ffffff',
               border: 'none',
               padding: '16px 40px',
               borderRadius: '9999px',
               fontSize: '18px',
               fontWeight: 700,
               cursor: 'pointer',
               display: 'flex',
               alignItems: 'center',
               gap: '12px',
               boxShadow: '0 12px 32px rgba(16,185,129,0.3)',
               transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(16,185,129,0.4)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(16,185,129,0.3)'; }}
          >
            Lancer une campagne <ArrowRight size={20} />
          </button>
        </motion.div>
        
        <motion.div
          style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', fontSize: '14px', color: '#64748B', fontWeight: 600 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {['Accès gratuit', 'Setup en 3 min', 'Support 24/7'].map((item) => (
            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#10B981' }}>✓</span> {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
