import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { v4Hero, v4Launch } from '@/data/contentV4';

function CountdownBlock({ value, label }) {
  return (
    <div style={{
      background: '#1E293B',
      borderRadius: '16px',
      padding: '20px 28px',
      textAlign: 'center',
      minWidth: '90px',
    }}>
      <p style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(36px, 5vw, 56px)',
        fontWeight: 800,
        color: '#FFFFFF',
        margin: 0,
        lineHeight: 1,
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

export default function HeroV4() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
      padding: 'clamp(120px, 15vw, 180px) clamp(20px, 5vw, 48px) clamp(80px, 10vw, 120px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dynamic Ambient Glows */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Gold Orb */}
        <motion.div
          animate={{
            x: ['-50%', '0%', '-50%'],
            y: ['0%', '20%', '0%'],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', top: '-10%', left: '50%',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            transformOrigin: 'center center',
          }}
        />
        {/* Violet Orb */}
        <motion.div
          animate={{
            x: ['0%', '-30%', '0%'],
            y: ['20%', '0%', '20%'],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '10%', right: '30%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Description */}
        <motion.p
          style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto 16px', fontWeight: 300 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {v4Hero.description}
        </motion.p>

        {/* Eyebrow tagline */}
        <motion.p
          style={{ fontSize: '14px', color: '#F59E0B', fontWeight: 500, margin: '0 0 32px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {v4Hero.eyebrow}
        </motion.p>

        {/* Dual CTA */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a
            href={`${wa}Bonjour+INFLUTA+!+Je+suis+une+organisation+et+je+veux+rejoindre+les+premiers+partenaires.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '8px',
              background: '#F59E0B', color: '#0B0F19',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
              transition: 'transform 0.2s ease',
            }}
          >
            {v4Hero.ctaOrg}
          </a>
          <a
            href={`${wa}Bonjour+INFLUTA+!+Je+suis+talent/influenceur(se)+et+je+veux+rejoindre+les+premiers+partenaires.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '8px',
              background: 'transparent', color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.15)',
              fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
              transition: 'transform 0.2s ease, border-color 0.2s ease',
            }}
          >
            {v4Hero.ctaTalent}
          </a>
        </motion.div>

        {/* Launch Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            margin: '0 0 12px',
          }}>
            {v4Launch.title}
          </h2>
          <p style={{ fontSize: '14px', color: '#94A3B8', margin: '0 0 40px', fontWeight: 300 }}>
            {v4Launch.description}
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(8px, 2vw, 16px)', flexWrap: 'wrap', marginBottom: '40px' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <CountdownBlock value={time.days} label="Jours" />
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: 800, color: '#F59E0B' }}>:</span>
          <CountdownBlock value={time.hours} label="Heures" />
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: 800, color: '#F59E0B' }}>:</span>
          <CountdownBlock value={time.minutes} label="Minutes" />
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '32px', fontWeight: 800, color: '#F59E0B' }}>:</span>
          <CountdownBlock value={time.seconds} label="Secondes" />
        </motion.div>

        {/* Bottom CTAs */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <motion.div
            initial={{ padding: '0px' }}
            animate={{ boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0)', '0 0 0 12px rgba(34, 197, 94, 0.4)', '0 0 0 24px rgba(34, 197, 94, 0)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ borderRadius: '24px' }}
          >
            <a
              href={`${wa}Bonjour+INFLUTA+!+Je+veux+rejoindre+la+liste+des+premiers+partenaires+avant+le+lancement.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '16px 32px', borderRadius: '24px',
                background: '#22C55E', color: '#FFFFFF',
                fontSize: '14px', fontWeight: 600, textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                position: 'relative',
              }}
            >
              ◎ {v4Launch.ctaWhatsapp}
            </a>
          </motion.div>
          <a
            href="#africa"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 32px', borderRadius: '24px',
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
