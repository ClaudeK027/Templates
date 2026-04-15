import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { v4Hero, v4Launch } from '@/data/contentV4';

/* ─── Countdown Block ─── */
function CountdownBlock({ value, label }) {
  return (
    <div style={{
      background: '#111827',
      borderRadius: '16px',
      padding: '20px 0',
      textAlign: 'center',
      width: '120px',
      border: '1px solid rgba(255,255,255,0.06)',
      boxShadow: '0 16px 32px rgba(0,0,0,0.2)',
    }}>
      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '48px',
        fontWeight: 800,
        fontStyle: 'italic',
        color: '#FFFFFF',
        margin: 0,
        lineHeight: 1,
        fontVariantNumeric: 'tabular-nums',
      }}>{value}</p>
      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '9px',
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
      fontSize: '36px',
      fontWeight: 800,
      color: '#F59E0B',
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
            background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 60%)',
            borderRadius: '50%', filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{ x: ['0%', '-30%', '0%'], y: ['20%', '0%', '20%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '10%', right: '30%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 60%)',
            borderRadius: '50%', filter: 'blur(50px)',
          }}
        />
      </div>

      {/* ═══ HERO PART 1 — Title + CTAs ═══ */}
      <div style={{
        padding: 'clamp(120px, 15vw, 180px) clamp(20px, 5vw, 48px) clamp(60px, 8vw, 100px)',
        textAlign: 'center',
        position: 'relative', zIndex: 1,
        maxWidth: '900px', margin: '0 auto',
      }}>
        {/* Top Badges */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {v4Hero.badges.map((b) => (
            <span key={b.label} style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '8px 18px', borderRadius: '9999px',
              background: `${b.color}15`,
              border: `1px solid ${b.color}30`,
              color: b.color,
              fontSize: '12px', fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
            }}>
              {b.label}
            </span>
          ))}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(32px, 6vw, 72px)',
            fontWeight: 800,
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
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
          style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.75, maxWidth: '640px', margin: '0 auto 16px', fontWeight: 300 }}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {v4Hero.description}
        </motion.p>

        {/* Eyebrow */}
        <motion.p
          style={{ fontSize: '13px', color: '#F59E0B', fontWeight: 500, margin: '0 0 32px' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {v4Hero.eyebrow}
        </motion.p>

        {/* Dual CTA */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={`${wa}Bonjour+INFLUTA+!+Je+suis+une+organisation+et+je+veux+rejoindre+les+premiers+partenaires.`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '8px',
              background: '#F59E0B', color: '#0B0F19',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            ◎ {v4Hero.ctaOrg}
          </a>
          <a
            href={`${wa}Bonjour+INFLUTA+!+Je+suis+talent/influenceur(se)+et+je+veux+rejoindre+les+premiers+partenaires.`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '8px',
              background: 'transparent', color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.15)',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            ◎ {v4Hero.ctaTalent}
          </a>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {v4Hero.featurePills.map((p) => (
            <span key={p.label} style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '6px 14px', borderRadius: '9999px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#94A3B8',
              fontSize: '11px', fontWeight: 400,
            }}>
              {p.icon} {p.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ═══ HERO PART 2 — Countdown ═══ */}
      <div id="countdown" style={{
        padding: '0 clamp(20px, 5vw, 48px) clamp(80px, 10vw, 120px)',
        textAlign: 'center',
        position: 'relative', zIndex: 1,
        maxWidth: '800px', margin: '0 auto',
      }}>
        {/* Divider line */}
        <div style={{ width: '60px', height: '2px', background: 'rgba(255,255,255,0.08)', margin: '0 auto 48px', borderRadius: '1px' }} />

        {/* Title */}
        <motion.h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(24px, 4vw, 48px)',
            fontWeight: 800,
            fontStyle: 'italic',
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {v4Launch.title}
        </motion.h2>

        <motion.p
          style={{ fontSize: '14px', color: '#94A3B8', margin: '0 auto 40px', fontWeight: 300, maxWidth: '560px' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {v4Launch.description}
        </motion.p>

        {/* Countdown — NO wrapping allowed */}
        <motion.div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '40px',
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
          <motion.div
            animate={{ boxShadow: ['0 0 0 0 rgba(34,197,94,0)', '0 0 0 10px rgba(34,197,94,0.3)', '0 0 0 20px rgba(34,197,94,0)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ borderRadius: '24px' }}
          >
            <a
              href={`${wa}Bonjour+INFLUTA+!+Je+veux+rejoindre+la+liste+des+premiers+partenaires+avant+le+lancement.`}
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', borderRadius: '24px',
                background: '#22C55E', color: '#FFFFFF',
                fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              }}
            >
              ◎ {v4Launch.ctaWhatsapp}
            </a>
          </motion.div>
          <a
            href="#africa"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '24px',
              background: 'transparent', color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.15)',
              fontSize: '14px', fontWeight: 500, textDecoration: 'none',
            }}
          >
            {v4Launch.ctaDiscover}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
