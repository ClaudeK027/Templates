import { motion } from 'framer-motion';
import { v4Trust } from '@/data/contentV4';

function ScoreBar({ label, value, color }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '13px', color: '#94A3B8' }}>{label}</span>
        <span style={{ fontSize: '13px', color, fontWeight: 700 }}>{value}%</span>
      </div>
      <div style={{ height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <motion.div
          style={{ height: '100%', borderRadius: '3px', background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function TrustV4() {
  const { scoring } = v4Trust;

  return (
    <section id="trust" style={{
      background: '#0B0F19',
      padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '12px' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            {v4Trust.eyebrow}
          </motion.p>
          <motion.h2
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0 }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            Pensée pour <span style={{ color: '#F59E0B' }}>rassurer, filtrer et mieux classer.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — Feature List */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            {v4Trust.features.map((f, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '14px',
                padding: '18px 20px',
                background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                borderRadius: '12px',
              }}>
                <span style={{
                  fontSize: '20px', width: '36px', height: '36px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(245,158,11,0.08)', borderRadius: '10px',
                  flexShrink: 0,
                }}>
                  {f.icon}
                </span>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 4px' }}>{f.title}</h4>
                  <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — Scoring Visualization */}
          <motion.div
            style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '20px',
              padding: 'clamp(24px, 3vw, 36px)',
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
          >
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 6px' }}>
              Score de visibilité INFLUTA
            </h3>
            <p style={{ fontSize: '12px', color: '#64748B', margin: '0 0 28px' }}>
              Exemple · {scoring.example}
            </p>

            {/* Score Bars */}
            {scoring.bars.map((bar, i) => (
              <ScoreBar key={i} label={bar.label} value={bar.value} color={bar.color} />
            ))}

            {/* Global Score */}
            <div style={{
              marginTop: '24px',
              background: '#1E293B',
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '48px', fontWeight: 800,
                color: '#F59E0B', margin: '0 0 4px',
                lineHeight: 1,
              }}>
                {scoring.globalScore}
              </p>
              <p style={{ fontSize: '13px', color: '#94A3B8', margin: 0 }}>
                {scoring.globalLabel}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
