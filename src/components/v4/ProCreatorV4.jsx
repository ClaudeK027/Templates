import { motion } from 'framer-motion';
import { v4ProCreator } from '@/data/contentV4';
import { ClipboardList, ShieldCheck, Star, BarChart2, Rocket, Coins, Trophy, Globe2 } from 'lucide-react';

export default function ProCreatorV4() {
  const getFeatureIcon = (title) => {
    switch (true) {
      case title.includes('Contrats'): return <ClipboardList size={20} />;
      case title.includes('Paiements'): return <ShieldCheck size={20} />;
      case title.includes('Score'): return <Star size={20} />;
      case title.includes('Statistiques'): return <BarChart2 size={20} />;
      default: return null;
    }
  };

  const getStatIcon = (value) => {
    switch (true) {
      case value.includes('+300%'): return <Rocket size={28} color="#A78BFA" />;
      case value.includes('impayé'): return <Coins size={28} color="#F59E0B" />;
      case value.includes('Top'): return <Trophy size={28} color="#22C55E" />;
      case value.includes('pays'): return <Globe2 size={28} color="#06B6D4" />;
      default: return null;
    }
  };

  return (
    <section style={{
      background: '#0B0F19',
      padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Text + Features */}
          <div>
            <motion.p
              style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#A78BFA', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '12px' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            >
              {v4ProCreator.eyebrow}
            </motion.p>

            <motion.h2
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, color: '#FFFFFF', marginBottom: '14px' }}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              Passe du statut d'influenceur <span style={{ color: '#A78BFA' }}>à celui de talent professionnel.</span>
            </motion.h2>

            <motion.p
              style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.75, fontWeight: 300, marginBottom: '32px', maxWidth: '500px' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            >
              {v4ProCreator.description}
            </motion.p>

            {/* Features List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {v4ProCreator.features.map((f, i) => (
                <motion.div
                  key={i}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                    background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.15), transparent)',
                    border: '1px solid rgba(167, 139, 250, 0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#A78BFA',
                  }}>
                    {getFeatureIcon(f.title)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 4px' }}>{f.title}</h4>
                    <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Stat Cards */}
          <div style={{ position: 'relative' }}>
            {/* Ambient Violet Glow */}
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: '10%', left: '10%', right: '10%', bottom: '10%',
                background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
            {v4ProCreator.stats.map((s, i) => (
              <div key={i} style={{
                background: '#111827',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: 'clamp(20px, 3vw, 32px)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }} className="influta-stat-card">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                  {getStatIcon(s.value)}
                </div>
                <p style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: 'clamp(22px, 2.5vw, 32px)',
                  color: '#A78BFA', margin: '0 0 8px',
                }}>{s.value}</p>
                <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.4 }}>{s.label}</p>
              </div>
            ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
