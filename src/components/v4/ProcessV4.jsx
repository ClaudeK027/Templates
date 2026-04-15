import { motion } from 'framer-motion';
import { v4Process } from '@/data/contentV4';

export default function ProcessV4() {
  return (
    <section id="process" style={{
      background: '#0B0F19',
      padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 48px)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '12px' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            {v4Process.eyebrow}
          </motion.p>
          <motion.h2
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0 }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            {v4Process.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {v4Process.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                paddingLeft: i > 0 ? 'clamp(16px, 2vw, 24px)' : '0',
              }}
            >
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(36px, 4vw, 48px)',
                fontWeight: 800,
                color: '#F59E0B',
                margin: '0 0 16px',
                lineHeight: 1,
              }}>
                {step.num}
              </p>
              <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '16px', fontWeight: 700,
                color: '#FFFFFF', margin: '0 0 10px',
              }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
