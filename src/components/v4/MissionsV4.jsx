import { motion } from 'framer-motion';
import { v4Missions, v4Hero } from '@/data/contentV4';

function MissionCard({ mission, index }) {
  const wa = v4Hero.whatsappBase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.4)', borderColor: 'rgba(255,255,255,0.15)' }}
      style={{
        background: 'linear-gradient(180deg, #111827 0%, #0B0F19 100%)',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px',
        position: 'relative',
        height: '100%',
      }}
      className="influta-mission-card"
    >
      {/* Top: Category + Location */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <span style={{
          background: `linear-gradient(135deg, ${mission.categoryColor}15, transparent)`,
          border: `1px solid ${mission.categoryColor}30`,
          color: mission.categoryColor,
          borderRadius: '8px', padding: '6px 14px',
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px'
        }}>
          {mission.category}
        </span>
        <span style={{
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          color: '#fff', borderRadius: '999px', padding: '6px 14px',
          fontSize: '10px', fontWeight: 600,
        }}>
          {mission.location}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '20px', fontWeight: 700,
        color: '#FFFFFF', margin: '0 0 16px', letterSpacing: '-0.01em',
        lineHeight: 1.3
      }}>
        {mission.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6, fontWeight: 300, marginBottom: '24px', flex: 1 }}>
        {mission.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
        {mission.tags.map((t) => (
          <span key={t} style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#94A3B8',
            borderRadius: '8px', padding: '6px 12px',
            fontSize: '11px', fontWeight: 500,
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Budget block encapsulated */}
      <div style={{ background: 'rgba(0,0,0,0.2)', padding: '16px 20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.03)', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '11px', color: '#64748B', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>Budget indicatif</p>
        <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '16px', color: '#F59E0B', margin: 0 }}>{mission.budget}</p>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={`${wa}Bonjour+INFLUTA+!+Je+suis+intéressé(e)+par+la+mission+${encodeURIComponent(mission.title)}.`}
          target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1, textAlign: 'center', padding: '12px 16px', borderRadius: '12px',
            background: '#F59E0B', color: '#0B0F19',
            fontSize: '13px', fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)',
          }}
        >
          Voir le brief
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
          whileTap={{ scale: 0.98 }}
          href={`${wa}Bonjour+INFLUTA+!+Je+veux+candidater+à+la+mission+${encodeURIComponent(mission.title)}.`}
          target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1, textAlign: 'center', padding: '12px 16px', borderRadius: '12px',
            background: 'transparent', color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.15)',
            fontSize: '13px', fontWeight: 600, textDecoration: 'none',
          }}
        >
          Candidater
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function MissionsV4() {
  return (
    <section id="missions" style={{
      background: '#0B0F19',
      padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '12px' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            EXEMPLES DE MISSIONS
          </motion.p>
          <motion.h2
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0 }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            Les organisations publient, invitent,{' '}
            <span style={{ color: '#F59E0B' }}>shortlistent et lancent.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {v4Missions.map((m, i) => (
            <MissionCard key={m.title} mission={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
