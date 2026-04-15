import { motion } from 'framer-motion';
import { v4Features } from '@/data/contentV4';
import { Target, Briefcase, Mail, Lock, TrendingUp, Search, FileText, Activity, CreditCard, Star, Sparkles, Building2 } from 'lucide-react';

function FeatureColumn({ data, accentColor }) {
  const getFeatureIcon = (title) => {
    switch (true) {
      case title.includes('Profil public'): return <Target size={20} />;
      case title.includes('Vente de services'): return <Briefcase size={20} />;
      case title.includes('Missions & invitations'): return <Mail size={20} />;
      case title.includes('Paiement sécurisé'): return <Lock size={20} />;
      case title.includes('Badges & scoring'): return <TrendingUp size={20} />;
      case title.includes('Annuaire filtrable'): return <Search size={20} />;
      case title.includes('Publication de missions'): return <FileText size={20} />;
      case title.includes('Pilotage campagne'): return <Activity size={20} />;
      case title.includes('Escrow & paiements'): return <CreditCard size={20} />;
      case title.includes('Options premium'): return <Star size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(180deg, #111827 0%, #0B0F19 100%)',
      borderRadius: '32px',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: 'clamp(32px, 4vw, 48px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      transition: 'all 0.4s ease',
    }}>
      {/* Column header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px' }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '16px', flexShrink: 0,
          background: `linear-gradient(135deg, ${accentColor}22, rgba(255,255,255,0.02))`,
          border: `1px solid ${accentColor}33`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: accentColor,
          boxShadow: 'inset 0 2px 10px rgba(255,255,255,0.02)',
        }}>
          {data === v4Features.talents ? <Sparkles size={28} /> : <Building2 size={28} />}
        </div>
        <div>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>{data.title}</h3>
          <p style={{ fontSize: '13px', color: accentColor, margin: '4px 0 0', fontWeight: 600 }}>{data.subtitle}</p>
        </div>
      </div>

      {/* Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {data.items.map((item, i) => (
          <div key={i} style={{
            padding: '20px 0',
            borderTop: i > 0 ? '1px solid rgba(255,255,255,0.04)' : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
                background: `linear-gradient(135deg, ${accentColor}15, transparent)`,
                border: `1px solid ${accentColor}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: accentColor,
              }}>
                {getFeatureIcon(item.title)}
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 6px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturesV4() {
  return (
    <section style={{
      background: '#0B0F19',
      padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '12px' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            {v4Features.eyebrow}
          </motion.p>
          <motion.h2
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0 }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            {v4Features.title} <span style={{ color: '#F59E0B' }}>{v4Features.titleAccent}</span>
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <FeatureColumn data={v4Features.talents} accentColor="#F59E0B" />
          <FeatureColumn data={v4Features.orgs} accentColor="#F59E0B" />
        </motion.div>
      </div>
    </section>
  );
}
