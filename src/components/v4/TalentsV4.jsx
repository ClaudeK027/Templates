import { motion } from 'framer-motion';
import { v4Talents } from '@/data/contentV4';

function TalentCard({ talent, index }) {
  const nicheColors = {
    'Beauté': '#F59E0B',
    'Lifestyle': '#A78BFA',
    'Food': '#22C55E',
    'UGC': '#06B6D4',
    'Mode': '#EC4899',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover="hover"
      style={{
        background: 'linear-gradient(180deg, #111827 0%, #0B0F19 100%)',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      }}
      className="influta-talent-card"
    >
      {/* Image placeholder with gradient overlay, fixed to exactly 1:1 square */}
      <div style={{ aspectRatio: '1 / 1', width: '100%', borderRadius: '24px 24px 0 0', position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          variants={{ hover: { scale: 1.05 } }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(135deg, ${nicheColors[talent.niches[0]] || '#F59E0B'}22, #0B0F19)`,
            borderBottom: '1px solid rgba(255,255,255,0.03)',
          }}
        >
          {/* Minimalist Empty Profile Photo (SVG in a frame) */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 60%)',
          }}>
            <div style={{
              width: '100px', height: '100px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.02), 0 8px 24px rgba(0,0,0,0.3)',
            }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                width: '90px',
                height: '90px',
                color: 'rgba(255, 255, 255, 0.15)',
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))',
              }}
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            </div>
          </div>
        </motion.div>

        {/* Bottom gradient */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
          background: 'linear-gradient(to top, #111827, transparent)',
        }} />

        {/* Badge top-left */}
        <span style={{
          position: 'absolute', top: '16px', left: '16px',
          background: 'rgba(34,197,94,0.15)', color: '#4ADE80',
          border: '1px solid rgba(34,197,94,0.25)',
          backdropFilter: 'blur(8px)',
          borderRadius: '999px', padding: '6px 12px',
          fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px'
        }}>
          {talent.badge}
        </span>

        {/* Country top-right */}
        <span style={{
          position: 'absolute', top: '16px', right: '16px',
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(8px)',
          color: '#fff', borderRadius: '999px', padding: '6px 12px',
          fontSize: '10px', fontWeight: 600,
        }}>
          {talent.country}
        </span>

        {/* Name overlay */}
        <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '20px', margin: 0, fontFamily: "'Syne', sans-serif", letterSpacing: '-0.02em' }}>{talent.name}</h3>
          <p style={{ color: '#94A3B8', fontSize: '12px', margin: '4px 0 0', fontWeight: 400 }}>{talent.handle}</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        {/* Niche tags */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {talent.niches.map((n) => (
            <span key={n} style={{
              background: `linear-gradient(135deg, ${nicheColors[n] || '#F59E0B'}15, transparent)`,
              border: `1px solid ${nicheColors[n] || '#F59E0B'}30`,
              color: nicheColors[n] || '#F59E0B',
              borderRadius: '8px', padding: '4px 12px',
              fontSize: '11px', fontWeight: 600,
            }}>
              {n}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '24px', minHeight: '40px', fontWeight: 300 }}>
          {talent.bio}
        </p>

        {/* Stats row with encapsulated blocks */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '12px', flex: 1, border: '1px solid rgba(255,255,255,0.03)' }}>
            <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '17px', color: '#FFFFFF', margin: 0 }}>{talent.followers}</p>
            <p style={{ fontSize: '10px', color: '#64748B', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>abonnés</p>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '12px', flex: 1, border: '1px solid rgba(255,255,255,0.03)' }}>
            <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '17px', color: '#22C55E', margin: 0 }}>{talent.engagement}</p>
            <p style={{ fontSize: '10px', color: '#64748B', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>engmt</p>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '12px', flex: 1, border: '1px solid rgba(255,255,255,0.03)' }}>
            <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '17px', color: '#F59E0B', margin: 0 }}>{talent.score}</p>
            <p style={{ fontSize: '10px', color: '#64748B', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>score</p>
          </div>
        </div>

        {/* Tarif */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px', position: 'relative', overflow: 'hidden' }}>
          <p style={{ fontSize: '11px', color: '#64748B', margin: '0 0 4px' }}>Tarif indicatif</p>
          <motion.p
            variants={{ hover: { opacity: 0.8, textShadow: '0 0 8px rgba(245, 158, 11, 0.4)' } }}
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '14px', color: '#F59E0B', margin: 0, transition: 'all 0.3s ease' }}
          >
            {talent.tarif}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TalentsV4() {
  return (
    <section id="talents" style={{
      background: '#0B0F19',
      padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '12px' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            PROFILS VÉRIFIÉS
          </motion.p>
          <motion.h2
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF', margin: '0 0 16px' }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            Des talents & influenceurs <span style={{ color: '#F59E0B' }}>prêts à collaborer.</span>
          </motion.h2>
          <motion.p
            style={{ fontSize: '15px', color: '#94A3B8', fontWeight: 300, maxWidth: '560px', margin: '0 auto' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Cliquez sur un profil pour voir le détail, les statistiques, les tarifs et contacter directement via WhatsApp.
          </motion.p>
        </div>

        {/* Talents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {v4Talents.map((t, i) => (
            <TalentCard key={t.name} talent={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
