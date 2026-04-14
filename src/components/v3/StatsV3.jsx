import { motion } from 'framer-motion';
import { stats } from '@/data/content';

export default function StatsV3() {
  // Triple the stats array to ensure smooth infinite scroll
  const marqueeItems = [...stats, ...stats, ...stats, ...stats];

  return (
    <section style={{ padding: '32px 0', background: '#0F172A', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ position: 'relative', display: 'flex', whiteSpace: 'nowrap' }}>
        
        {/* Left Gradient Fade */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 'clamp(60px, 15vw, 150px)', background: 'linear-gradient(90deg, #0F172A, transparent)', zIndex: 10 }} />
        
        <motion.div
          style={{ display: 'flex', gap: 'clamp(40px, 8vw, 80px)', paddingRight: 'clamp(40px, 8vw, 80px)' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
        >
          {marqueeItems.map((stat, i) => (
            <div key={`${stat.label}-${i}`} style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 800, color: '#ffffff', fontFamily: "'Poppins', sans-serif" }}>
                {stat.value}
              </span>
              <span style={{ fontSize: 'clamp(11px, 2vw, 14px)', color: '#10B981', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Right Gradient Fade */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 'clamp(60px, 15vw, 150px)', background: 'linear-gradient(270deg, #0F172A, transparent)', zIndex: 10 }} />
      </div>
    </section>
  );
}
