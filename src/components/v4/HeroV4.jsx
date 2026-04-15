import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { v4Hero, v4Launch } from '@/data/contentV4';

/* ─── WhatsApp Icon SVG ─── */
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

/* ─── Countdown Block ─── */
function CountdownBlock({ value, label }) {
  return (
    <div style={{
      background: 'rgba(11, 15, 25, 0.5)',
      borderRadius: '16px',
      padding: '24px 0',
      textAlign: 'center',
      width: 'clamp(110px, 15vw, 130px)',
      border: '1px solid rgba(255,255,255,0.06)',
      boxShadow: '0 16px 32px rgba(0,0,0,0.2)',
    }}>
      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(40px, 6vw, 56px)',
        fontWeight: 800,
        fontStyle: 'italic',
        color: '#FFFFFF',
        margin: 0,
        lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
      }}>{value}</p>
      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '10px',
        fontWeight: 700,
        color: '#64748B',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        margin: '8px 0 0',
      }}>{label}</p>
    </div>
  );
}

/* ─── Separator Colon ─── */
function ColonSep() {
  return (
    <span style={{
      fontFamily: "'Syne', sans-serif",
      fontSize: '24px',
      fontWeight: 800,
      color: '#475569',
      lineHeight: 1,
    }}>:</span>
  );
}

export default function HeroV4() {
  const [time, setTime] = useState({ days: '--', hours: '--', minutes: '--', seconds: '--' });

  useEffect(() => {
    const target = new Date(v4Launch.targetDate).getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTime({
        days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
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

      {/* ═══ BOTTOM INDICATOR & COUNTDOWN ═══ */}
      <div style={{ padding: '60px 20px 80px', textAlign: 'center', background: 'linear-gradient(180deg, transparent 0%, rgba(11, 15, 25, 0.4) 100%)' }}>
        <p style={{ fontSize: '11px', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800, marginBottom: '24px' }}>
          ⏳ Compte à rebours officiel
        </p>
        
        {/* Title */}
        <motion.h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span style={{ color: '#FFFFFF' }}>Le lancement approche.</span>{' '}
          <span style={{ color: '#F59E0B' }}>Soyez là dès le premier jour.</span>
        </motion.h2>

        <motion.p
          style={{ fontSize: '14px', color: '#94A3B8', margin: '0 auto 48px', fontWeight: 300, maxWidth: '560px' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {v4Launch.description}
        </motion.p>

        {/* Countdown Blocks */}
        <motion.div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'clamp(8px, 2vw, 16px)',
            marginBottom: '48px',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <CountdownBlock value={time.days} label="Jours" />
          <ColonSep />
          <CountdownBlock value={time.hours} label="Heures" />
          <ColonSep />
          <CountdownBlock value={time.minutes} label="Minutes" />
          <ColonSep />
          <CountdownBlock value={time.seconds} label="Secondes" />
        </motion.div>

        {/* Bottom CTAs */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href={`${wa}Bonjour+INFLUTA+!+Je+veux+rejoindre+la+liste+des+premiers+partenaires+avant+le+lancement.`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '12px',
              background: '#22C55E', color: '#FFFFFF',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <WhatsAppIcon /> {v4Launch.ctaWhatsapp}
          </a>
          <a
            href="#africa"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '12px',
              background: 'transparent', color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.15)',
              fontSize: '14px', fontWeight: 500, textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {v4Launch.ctaDiscover}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
