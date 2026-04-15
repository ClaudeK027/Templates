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
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.4)' }}
      style={{
        background: 'linear-gradient(180deg, #111827 0%, #0B0F19 100%)',
        borderRadius: '32px',
        border: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        aspectRatio: '1 / 1',
        display: 'flex',
        flexDirection: 'column',
        padding: '36px',
        position: 'relative',
      }}
      className="influta-talent-card"
    >
      {/* Top Absolute Badges */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <span style={{
          background: 'rgba(34,197,94,0.15)', color: '#4ADE80',
          border: '1px solid rgba(34,197,94,0.25)',
          borderRadius: '999px', padding: '6px 14px',
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px'
        }}>
          {talent.badge}
        </span>
        <span style={{
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          color: '#fff', borderRadius: '999px', padding: '6px 14px',
          fontSize: '11px', fontWeight: 600,
        }}>
          {talent.country}
        </span>
      </div>

      {/* Header: Avatar + Identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
        <div style={{
          width: '80px', height: '80px', borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.02)',
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px', color: 'rgba(255,255,255,0.4)' }}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div>
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '24px', margin: 0, fontFamily: "'Syne', sans-serif", letterSpacing: '-0.02em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{talent.name}</h3>
          <p style={{ color: '#94A3B8', fontSize: '14px', margin: '4px 0 0', fontWeight: 400 }}>{talent.handle}</p>
        </div>
      </div>

      {/* Niche tags */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {talent.niches.map((n) => (
          <span key={n} style={{
            background: `linear-gradient(135deg, ${nicheColors[n] || '#F59E0B'}15, transparent)`,
            border: `1px solid ${nicheColors[n] || '#F59E0B'}30`,
            color: nicheColors[n] || '#F59E0B',
            borderRadius: '8px', padding: '6px 14px',
            fontSize: '12px', fontWeight: 600,
          }}>
            {n}
          </span>
        ))}
      </div>

      {/* Bio */}
      <p style={{
        fontSize: '15px', color: '#94A3B8', lineHeight: 1.6,
        marginBottom: 'auto', fontWeight: 300,
        display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
      }}>
        {talent.bio}
      </p>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', marginTop: '24px' }}>
        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '14px', borderRadius: '12px', flex: 1, border: '1px solid rgba(255,255,255,0.03)', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '20px', color: '#FFFFFF', margin: 0 }}>{talent.followers}</p>
          <p style={{ fontSize: '10px', color: '#64748B', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>abonnés</p>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '14px', borderRadius: '12px', flex: 1, border: '1px solid rgba(255,255,255,0.03)', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '20px', color: '#22C55E', margin: 0 }}>{talent.engagement}</p>
          <p style={{ fontSize: '10px', color: '#64748B', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>engmt</p>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '14px', borderRadius: '12px', flex: 1, border: '1px solid rgba(255,255,255,0.03)', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '20px', color: '#F59E0B', margin: 0 }}>{talent.score}</p>
          <p style={{ fontSize: '10px', color: '#64748B', margin: '4px 0 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>score</p>
        </div>
      </div>

      {/* Tarif */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Tarif indicatif</span>
          <motion.span
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '16px', color: '#F59E0B', transition: 'all 0.3s ease' }}
          >
            {talent.tarif}
          </motion.span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {v4Talents.map((t, i) => (
            <TalentCard key={t.name} talent={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
