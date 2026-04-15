import { motion } from 'framer-motion';
import { v4Africa } from '@/data/contentV4';
import { Globe2, Users, CreditCard, Smartphone, Languages, Zap } from 'lucide-react';

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
              style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            >
              {v4Africa.countries.map((c) => (
                <span key={c} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  color: '#FFFFFF',
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
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          >
            {v4Africa.stats.map((s, i) => {
              const icons = {
                'Pays': <Globe2 size={24} />,
                'Talents': <Users size={24} />,
                'Devises': <CreditCard size={24} />,
                'mobile': <Smartphone size={24} />,
                'native': <Languages size={24} />,
                'démarrer': <Zap size={24} />,
              };
              const icon = Object.keys(icons).find(key => s.label.toLowerCase().includes(key.toLowerCase()));

              return (
                <div
                  key={i}
                  className="influta-stat-card"
                  style={{
                    background: 'linear-gradient(180deg, #111827 0%, #0B0F19 100%)',
                    borderRadius: '24px',
                    padding: '32px 24px',
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.4s ease',
                    cursor: 'default',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div style={{
                    color: '#F59E0B',
                    marginBottom: '16px',
                    opacity: 0.8
                  }}>
                    {icons[icon] || icons['Pays']}
                  </div>
                  <p style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    color: '#FFFFFF',
                    margin: '0 0 8px',
                    lineHeight: 1,
                  }}>{s.value}</p>
                  <p style={{
                    fontSize: '11px',
                    color: '#94A3B8',
                    lineHeight: 1.4,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    fontWeight: 600,
                  }}>{s.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
