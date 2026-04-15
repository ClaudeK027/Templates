import { motion } from 'framer-motion';
import { v4Hero } from '@/data/contentV4';

/* ─── WhatsApp Icon SVG ─── */
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function HeroV4() {
  const wa = v4Hero.whatsappBase;

  return (
    <section style={{
      background: '#0B0F19',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* ═══ Ambient Aurora Glows ═══ */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <motion.div
          animate={{ x: ['-50%', '0%', '-50%'], y: ['0%', '20%', '0%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', top: '-10%', left: '50%',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 60%)',
            borderRadius: '50%', filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{ x: ['0%', '-30%', '0%'], y: ['20%', '0%', '20%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '10%', right: '30%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 60%)',
            borderRadius: '50%', filter: 'blur(50px)',
          }}
        />
      </div>

      {/* ═══ HERO MAIN ═══ */}
      <div style={{
        padding: 'clamp(100px, 12vw, 160px) clamp(20px, 5vw, 48px) clamp(40px, 8vw, 80px)',
        textAlign: 'center',
        position: 'relative', zIndex: 1,
        maxWidth: '1000px', margin: '0 auto',
      }}>
        {/* Top Badges */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '50px' }}
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {v4Hero.badges.map((b) => (
            <span key={b.label} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 20px', borderRadius: '9999px',
              background: b.bg,
              border: `1px solid rgba(255,255,255,0.05)`,
              color: b.color,
              fontSize: '11px', fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: b.dot }}></span>
              {b.label}
            </span>
          ))}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(32px, 6vw, 75px)',
            fontWeight: 800,
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
            color: '#FFFFFF',
            margin: '0 0 32px',
          }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {v4Hero.titleLine1}<br />
          <span style={{ color: '#F59E0B' }}>{v4Hero.titleLine2}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.8, maxWidth: '540px', margin: '0 auto 24px', fontWeight: 300 }}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {v4Hero.description}
        </motion.p>

        {/* Eyebrow */}
        <motion.p
          style={{ fontSize: '13px', color: '#A78BFA', fontWeight: 600, margin: '0 0 40px' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {v4Hero.eyebrow}
        </motion.p>

        {/* Dual CTA */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '50px' }}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={`${wa}Bonjour+INFLUTA+!+Je+suis+une+organisation+et+je+veux+rejoindre+les+premiers+partenaires.`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 32px', borderRadius: '12px',
              background: '#F59E0B', color: '#0B0F19',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <WhatsAppIcon /> {v4Hero.ctaOrg}
          </a>
          <a
            href={`${wa}Bonjour+INFLUTA+!+Je+suis+talent/influenceur(se)+et+je+veux+rejoindre+les+premiers+partenaires.`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 32px', borderRadius: '12px',
              background: '#1F2937', color: '#FFFFFF',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <WhatsAppIcon /> {v4Hero.ctaTalent}
          </a>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {v4Hero.featurePills.map((p) => (
            <span key={p.label} style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px', borderRadius: '9999px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#94A3B8',
              fontSize: '11px', fontWeight: 500,
            }} className="influta-mission-card">
              <span style={{ fontSize: '13px' }}>{p.icon}</span> {p.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ═══ BOTTOM INDICATOR ═══ */}
      <div style={{ padding: '80px 0 60px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800 }}>
          ⏳ Compte à rebours officiel
        </p>
        <div style={{ width: '40px', height: '2px', background: 'rgba(245, 158, 11, 0.3)', margin: '16px auto 0' }}></div>
      </div>
    </section>
  );
}
