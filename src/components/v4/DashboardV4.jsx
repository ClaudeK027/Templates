import { motion } from 'framer-motion';
import { v4Dashboard } from '@/data/contentV4';

export default function DashboardV4() {
  const { campaign, metrics, candidates } = v4Dashboard;

  return (
    <section style={{
      background: '#0B0F19',
      padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '12px' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            APERÇU PRODUIT
          </motion.p>
          <motion.h2
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF', margin: '0 0 16px' }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            Un tableau de bord <span style={{ color: '#F59E0B' }}>pensé pour les organisations.</span>
          </motion.h2>
          <motion.p
            style={{ fontSize: '15px', color: '#94A3B8', fontWeight: 300, maxWidth: '560px', margin: '0 auto' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Gérez vos campagnes, suivez les candidatures et validez les livrables — un seul espace pour toutes vos collaborations.
          </motion.p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          style={{
            background: 'linear-gradient(180deg, #111827 0%, #0B0F19 100%)',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
            boxShadow: '0 32px 64px rgba(0,0,0,0.4)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '100%', height: '100%' }}
          >
            {/* macOS-style window bar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '14px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22C55E' }} />
            <span style={{ fontSize: '12px', color: '#64748B', marginLeft: '12px' }}>{v4Dashboard.title}</span>
          </div>

          {/* Campaign Header */}
          <div style={{ padding: 'clamp(16px, 3vw, 28px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
              <div>
                <p style={{ fontSize: '10px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 6px', fontWeight: 600 }}>CAMPAGNE ACTIVE</p>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>{campaign.name}</h3>
              </div>
              <span style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.15), transparent)',
                border: '1px solid rgba(245,158,11,0.25)',
                color: '#F59E0B', borderRadius: '12px',
                padding: '8px 16px', fontSize: '13px', fontWeight: 800,
                fontFamily: "'Syne', sans-serif",
                boxShadow: 'inset 0 2px 8px rgba(255,255,255,0.02)',
              }}>
                Budget : {campaign.budget}
              </span>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <span style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                fontSize: '11px', color: '#22C55E', fontWeight: 600,
              }}>
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ display: 'inline-block' }}
                >
                  ●
                </motion.span> {campaign.status}
              </span>
              {campaign.platforms.concat(campaign.locations).map((t) => (
                <span key={t} style={{
                  background: 'rgba(255,255,255,0.06)', borderRadius: '6px',
                  padding: '3px 10px', fontSize: '11px', color: '#94A3B8',
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" style={{ marginBottom: '32px' }}>
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  style={{
                    background: 'rgba(0,0,0,0.2)', borderRadius: '16px', padding: '20px 16px', textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.04)',
                    boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.02)',
                  }}
                >
                  <p style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: 800,
                    fontSize: '26px', color: '#F59E0B', margin: '0 0 6px',
                  }}>{m.value}</p>
                  <p style={{ fontSize: '11px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>{m.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Candidates List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {candidates.map((c, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: i === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
                  border: i === 0 ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
                  borderRadius: '16px',
                  flexWrap: 'wrap', gap: '8px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {/* SVG Avatar Placeholder Replacing Emoji */}
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.02)',
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', color: 'rgba(255,255,255,0.3)' }}>
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>{c.name}</p>
                      <p style={{ fontSize: '11px', color: '#64748B', margin: '2px 0 0' }}>{c.status}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 600 }}>{c.match} match</span>
                    <span style={{
                      background: `linear-gradient(135deg, ${c.badgeColor}15, transparent)`,
                      color: c.badgeColor, border: `1px solid ${c.badgeColor}30`,
                      borderRadius: '8px', padding: '4px 12px',
                      fontSize: '10px', fontWeight: 700,
                    }}>
                      {c.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
