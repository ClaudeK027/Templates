import { motion } from 'framer-motion';
import { v4Features } from '@/data/contentV4';

function FeatureColumn({ data, accentColor }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '20px',
      padding: 'clamp(24px, 3vw, 36px)',
    }}>
      {/* Column header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <span style={{ fontSize: '28px' }}>{data === v4Features.talents ? '🎨' : '🏢'}</span>
        <div>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '17px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>{data.title}</h3>
          <p style={{ fontSize: '12px', color: accentColor, margin: '2px 0 0' }}>{data.subtitle}</p>
        </div>
      </div>

      {/* Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {data.items.map((item, i) => (
          <div key={i} style={{
            padding: '16px 0',
            borderTop: i > 0 ? '1px solid rgba(255,255,255,0.04)' : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 4px' }}>{item.title}</h4>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturesV4() {
  return (
    <section style={{
      background: '#0B0F19',
      padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '12px' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            {v4Features.eyebrow}
          </motion.p>
          <motion.h2
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0 }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            {v4Features.title} <span style={{ color: '#F59E0B' }}>{v4Features.titleAccent}</span>
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <FeatureColumn data={v4Features.talents} accentColor="#F59E0B" />
          <FeatureColumn data={v4Features.orgs} accentColor="#F59E0B" />
        </motion.div>
      </div>
    </section>
  );
}
