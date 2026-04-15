import { motion } from 'framer-motion';
import { v4Africa } from '@/data/contentV4';

export default function AfricaV4() {
  return (
    <section id="africa" style={{
      background: '#0B0F19',
      padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Text */}
          <div>
            <motion.p
              style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '12px' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            >
              {v4Africa.eyebrow}
            </motion.p>

            <motion.h2
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#FFFFFF', marginBottom: '14px' }}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
            >
              Une infrastructure pour <span style={{ color: '#F59E0B' }}>toute l'Afrique.</span>
            </motion.h2>

            <motion.p
              style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.75, fontWeight: 300, marginBottom: '28px', maxWidth: '480px' }}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            >
              {v4Africa.description}
            </motion.p>

            {/* Country Tags */}
            <motion.div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            >
              {v4Africa.countries.map((c) => (
                <span key={c} style={{
                  background: 'rgba(245,158,11,0.12)',
                  border: '1px solid rgba(245,158,11,0.25)',
                  borderRadius: '8px',
                  padding: '5px 12px',
                  fontSize: '12px',
                  color: '#F59E0B',
                  fontWeight: 500,
                  fontFamily: "'Syne', sans-serif",
                }}>
                  {c}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Stat Cards Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            {v4Africa.stats.map((s, i) => (
              <div
                key={i}
                className="influta-stat-card"
                style={{
                  background: '#1E293B',
                  borderRadius: '16px',
                  padding: 'clamp(16px, 2vw, 24px)',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
              >
                <p style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(22px, 2.5vw, 28px)',
                  color: '#F59E0B',
                  marginBottom: '4px',
                }}>{s.value}</p>
                <p style={{
                  fontSize: '12px',
                  color: '#94A3B8',
                  lineHeight: 1.4,
                }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
