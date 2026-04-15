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
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '20px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
      }}
      className="influta-mission-card"
    >
      {/* Top: Category + Location */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{
          background: `${mission.categoryColor}22`,
          color: mission.categoryColor,
          borderRadius: '6px', padding: '4px 12px',
          fontSize: '12px', fontWeight: 700,
        }}>
          {mission.category}
        </span>
        <span style={{ fontSize: '12px', color: '#94A3B8' }}>{mission.location}</span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '18px', fontWeight: 700,
        color: '#FFFFFF', margin: '0 0 12px',
      }}>
        {mission.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6, fontWeight: 300, marginBottom: '16px', flex: 1 }}>
        {mission.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {mission.tags.map((t) => (
          <span key={t} style={{
            background: 'rgba(255,255,255,0.06)',
            color: '#94A3B8',
            borderRadius: '6px', padding: '4px 10px',
            fontSize: '11px',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Budget */}
      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '11px', color: '#64748B', margin: '0 0 4px' }}>Budget indicatif</p>
        <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '15px', color: '#F59E0B', margin: 0 }}>{mission.budget}</p>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <a
          href={`${wa}Bonjour+INFLUTA+!+Je+suis+intéressé(e)+par+la+mission+${encodeURIComponent(mission.title)}.`}
          target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1, textAlign: 'center', padding: '10px 16px', borderRadius: '8px',
            background: '#F59E0B', color: '#0B0F19',
            fontSize: '13px', fontWeight: 600, textDecoration: 'none',
          }}
        >
          Voir le brief
        </a>
        <a
          href={`${wa}Bonjour+INFLUTA+!+Je+veux+candidater+à+la+mission+${encodeURIComponent(mission.title)}.`}
          target="_blank" rel="noopener noreferrer"
          style={{
            flex: 1, textAlign: 'center', padding: '10px 16px', borderRadius: '8px',
            background: 'transparent', color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.15)',
            fontSize: '13px', fontWeight: 600, textDecoration: 'none',
          }}
        >
          Candidater
        </a>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {v4Missions.map((m, i) => (
            <MissionCard key={m.title} mission={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
