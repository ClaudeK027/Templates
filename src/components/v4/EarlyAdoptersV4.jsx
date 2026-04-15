import { motion } from 'framer-motion';
import { v4EarlyAdopters, v4Hero } from '@/data/contentV4';
import { Sparkles, Building2, CheckCircle2 } from 'lucide-react';

function PartnerCard({ data, isTalent, accentColor, ctaText }) {
  const wa = v4Hero.whatsappBase;
  return (
    <div style={{
      background: 'linear-gradient(180deg, #111827 0%, #0B0F19 100%)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '32px',
      padding: 'clamp(32px, 4vw, 48px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      transition: 'all 0.4s ease',
    }}>
      <div style={{
        width: '56px', height: '56px', borderRadius: '16px', marginBottom: '24px',
        background: `linear-gradient(135deg, ${accentColor}22, rgba(255,255,255,0.02))`,
        border: `1px solid ${accentColor}33`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: accentColor,
        boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.02)',
      }}>
        {isTalent ? <Sparkles size={28} /> : <Building2 size={28} />}
      </div>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: 700, color: '#F59E0B', margin: '0 0 10px' }}>
        {data.title}
      </h3>
      <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6, fontWeight: 300, margin: '0 0 20px' }}>
        {data.desc}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
        {data.benefits.map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={16} color="#22C55E" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 400 }}>{b}</span>
          </div>
        ))}
      </div>

      <a
        href={`${wa}${encodeURIComponent(ctaText)}`}
        target="_blank" rel="noopener noreferrer"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          width: '100%', padding: '16px 24px', borderRadius: '16px',
          background: '#22C55E', color: '#FFFFFF',
          fontSize: '14px', fontWeight: 700, textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(34, 197, 94, 0.3)',
          transition: 'all 0.3s ease',
        }}
      >
        ◎ {data.title.startsWith('Je suis T') ? 'Je rejoins en tant que talent' : 'Je rejoins en tant que organisation'}
      </a>
    </div>
  );
}

export default function EarlyAdoptersV4() {
  return (
    <section id="launch" style={{
      background: '#0B0F19',
      padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Text + Benefits */}
          <div>
            <motion.p
              style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            >
              {v4EarlyAdopters.eyebrow}
            </motion.p>

            <motion.h2
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, color: '#FFFFFF', marginBottom: '20px' }}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              Rejoignez les <span style={{ color: '#F59E0B' }}>premiers partenaires</span> d'INFLUTA.
            </motion.h2>

            <motion.p
              style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.75, fontWeight: 300, marginBottom: '28px', maxWidth: '480px' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            >
              {v4EarlyAdopters.description}
            </motion.p>

            {/* Benefits List */}
            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            >
              {v4EarlyAdopters.benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={18} color="#22C55E" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#FFFFFF' }}>{b}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <a
                href={`${v4Hero.whatsappBase}Bonjour+INFLUTA+!+Je+veux+rejoindre+les+premiers+partenaires.`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '16px 32px', borderRadius: '24px',
                  background: '#22C55E', color: '#FFFFFF',
                  fontSize: '14px', fontWeight: 600, textDecoration: 'none',
                }}
              >
                ◎ Rejoindre via WhatsApp
              </a>
              <a
                href="#countdown"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '16px 28px', borderRadius: '24px',
                  background: 'transparent', color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.15)',
                  fontSize: '14px', fontWeight: 500, textDecoration: 'none',
                }}
              >
                Voir le compte à rebours
              </a>
            </motion.div>
          </div>

          {/* Right — Two Cards */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <PartnerCard
              data={v4EarlyAdopters.talentCard}
              isTalent={true}
              accentColor="#F59E0B"
              ctaText="Bonjour INFLUTA ! Je suis talent/influenceur(se) et je veux rejoindre les premiers partenaires."
            />
            <PartnerCard
              data={v4EarlyAdopters.orgCard}
              isTalent={false}
              accentColor="#F59E0B"
              ctaText="Bonjour INFLUTA ! Je suis une organisation et je veux rejoindre les premiers partenaires."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
