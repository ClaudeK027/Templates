import { motion } from 'framer-motion';
import { v4Process } from '@/data/contentV4';
import { UserPlus, FileEdit, Zap, Users } from 'lucide-react';

export default function ProcessV4() {
  return (
    <section id="process" style={{
      background: '#0B0F19',
      padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 48px)',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.p
            style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '12px' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            {v4Process.eyebrow}
          </motion.p>
          <motion.h2
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0 }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            {v4Process.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {v4Process.steps.map((step, i) => {
            const icons = {
              '1': <UserPlus size={24} />,
              '2': <FileEdit size={24} />,
              '3': <Zap size={24} />,
              '4': <Users size={24} />,
            };

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'linear-gradient(180deg, #111827 0%, #0B0F19 100%)',
                  borderRadius: '24px',
                  padding: '32px 24px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))',
                  border: '1px solid rgba(245,158,11,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#F59E0B',
                  marginBottom: '20px',
                }}>
                  {icons[step.num] || <Zap size={24} />}
                </div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '17px', fontWeight: 700,
                  color: '#FFFFFF', margin: '0 0 12px',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                  {step.desc}
                </p>
                
                {/* Subtle Step Number in background */}
                <span style={{
                  position: 'absolute', top: '20px', right: '24px',
                  fontSize: '40px', fontWeight: 900, color: 'rgba(255,255,255,0.02)',
                  fontFamily: "'Syne', sans-serif", pointerEvents: 'none'
                }}>
                  0{step.num}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
