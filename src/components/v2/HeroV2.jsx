import { motion } from 'framer-motion';
import { heroContent } from '@/data/content';
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react';

export default function HeroV2() {
  const hero = heroContent.v2;

  return (
    <section style={{ 
      position: 'relative', 
      minHeight: 'auto', 
      display: 'flex', 
      alignItems: 'center', 
      background: '#F8FAFC', // Very cold, clean slate-50
      paddingTop: 'clamp(100px, 12vw, 140px)',
      paddingRight: 'clamp(24px, 5vw, 48px)',
      paddingBottom: 'clamp(64px, 8vw, 120px)',
      paddingLeft: 'clamp(24px, 5vw, 48px)',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          
          {/* LEFT: Institutional Typography */}
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 12px',
                  background: '#E2E8F0',
                  borderLeft: '4px solid #1E3A5F',
                  marginBottom: '24px',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                <ShieldCheck size={14} color="#1E3A5F" />
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#1E3A5F', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Infrastructure Escrow Certifiée
                </span>
              </div>
            </motion.div>

            <motion.h1
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: '#0F172A',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                margin: '0 0 24px',
                fontFamily: "'Inter', sans-serif"
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Le standard institutionnel de l'Influence Marketing.
            </motion.h1>

            <motion.p
              style={{ fontSize: '18px', color: '#475569', maxWidth: '480px', lineHeight: 1.6, marginBottom: '40px', fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Pilotez vos budgets, sécurisez vos transactions et analysez vos données via une architecture conçue pour les directions financières.
            </motion.p>

            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button style={{ 
                background: '#1E3A5F', 
                color: '#ffffff', 
                border: 'none', 
                padding: '16px 32px', 
                fontSize: '14px', 
                fontWeight: 600, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                cursor: 'pointer',
                borderRadius: '2px', // Sharp corners
                fontFamily: "'Inter', sans-serif"
              }}>
                Prendre rendez-vous <ArrowRight size={16} />
              </button>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748B', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                <Lock size={12} /> SSO Autorisé
              </span>
            </motion.div>
          </div>

          {/* RIGHT: Data Dashboard Interface (Structurally responsive mockup) */}
          <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[600px] mt-8 lg:mt-0 overflow-hidden lg:overflow-visible flex justify-center lg:block">
            <motion.div
               className="origin-top lg:origin-top-right transform scale-[0.5] sm:scale-[0.7] lg:scale-100"
               style={{ 
                 position: 'absolute', 
                 top: '0%', 
                 lg: { top: '10%' },
                 width: '700px', 
                 height: '600px', 
                 background: '#ffffff', 
                 border: '1px solid #CBD5E1', 
                 borderRadius: '4px',
                 boxShadow: '0 24px 48px rgba(15,23,42,0.05)',
                 display: 'flex',
                 flexDirection: 'column',
                 overflow: 'hidden'
               }}
               initial={{ opacity: 0, x: 40 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.7, delay: 0.4, type: 'spring' }}
            >
               {/* Terminal Header */}
               <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', padding: '12px 16px', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC' }}>
                 <div style={{ display: 'flex', gap: '24px' }}>
                   <span style={{ fontSize: '10px', fontWeight: 700, color: '#1E3A5F', letterSpacing: '0.05em' }}>WORKSPACE // ADMIN</span>
                   <span style={{ fontSize: '10px', fontWeight: 600, color: '#94A3B8' }}>SOC2 COMPLIANT</span>
                 </div>
                 <div style={{ width: '40px', height: '16px', background: '#E2E8F0', borderRadius: '2px' }} />
               </div>

               {/* Dashboard Body */}
               <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', flex: 1 }}>
                  {/* Sidebar */}
                  <div style={{ borderRight: '1px solid #E2E8F0', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                     {[1,2,3,4,5].map(i => (
                       <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
                         <div style={{ width: '60%', height: '12px', background: i === 1 ? '#1E3A5F' : '#F1F5F9', borderRadius: '2px' }} />
                         {i === 1 && <div style={{ width: '12px', height: '12px', background: '#10B981', borderRadius: '50%' }} />}
                       </div>
                     ))}
                  </div>

                  {/* Main Data Area */}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', background: '#ffffff' }}>
                     
                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                       {/* Metric 1 */}
                       <div style={{ padding: '16px', border: '1px solid #E2E8F0', borderRadius: '2px' }}>
                         <p style={{ margin: '0 0 8px', fontSize: '10px', color: '#64748B', fontWeight: 600, letterSpacing: '0.05em' }}>FONDS ESCROW ACTIFS</p>
                         <p style={{ margin: 0, fontSize: '24px', fontWeight: 700, color: '#0F172A', fontFamily: "'JetBrains Mono', monospace" }}>$1.244,500.00</p>
                         <div style={{ marginTop: '16px', height: '1px', background: '#E2E8F0', width: '100%', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, height: '1px', background: '#10B981', width: '45%' }} />
                         </div>
                       </div>
                       {/* Metric 2 */}
                       <div style={{ padding: '16px', border: '1px solid #E2E8F0', borderRadius: '2px' }}>
                         <p style={{ margin: '0 0 8px', fontSize: '10px', color: '#64748B', fontWeight: 600, letterSpacing: '0.05em' }}>ROAS MOYEN / 30J</p>
                         <p style={{ margin: 0, fontSize: '24px', fontWeight: 700, color: '#10B981', fontFamily: "'JetBrains Mono', monospace" }}>424%</p>
                         <div style={{ marginTop: '16px', height: '32px', display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                            {[30, 50, 40, 80, 60, 100, 90, 85].map((h, i) => (
                              <div key={i} style={{ flex: 1, height: `${h}%`, background: '#F1F5F9', borderRadius: '1px 1px 0 0' }} />
                            ))}
                         </div>
                       </div>
                     </div>

                     {/* Table */}
                     <div style={{ border: '1px solid #E2E8F0', flex: 1, borderRadius: '2px', display: 'flex', flexDirection: 'column' }}>
                       <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', padding: '12px 16px', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC', fontSize: '10px', fontWeight: 700, color: '#94A3B8' }}>
                         <span>ID</span>
                         <span>CONTREPARTIE</span>
                         <span>STATUT</span>
                         <span style={{ textAlign: 'right' }}>MONTANT</span>
                       </div>
                       {[
                         { id: 'TRX-892', name: 'Amina K. (C1)', status: 'LOCKED', amount: '$4,500' },
                         { id: 'TRX-893', name: 'John D. (C2)', status: 'SETTLED', amount: '$12,000' },
                         { id: 'TRX-894', name: 'AfriBeauty Inc', status: 'PENDING', amount: '$2,800' }
                       ].map((row, i) => (
                         <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', padding: '16px', borderBottom: i === 2 ? 'none' : '1px solid #F1F5F9', fontSize: '12px', alignItems: 'center' }}>
                           <span style={{ color: '#64748B', fontFamily: "'JetBrains Mono', monospace" }}>{row.id}</span>
                           <span style={{ fontWeight: 600, color: '#0F172A' }}>{row.name}</span>
                           <span style={{ color: row.status === 'SETTLED' ? '#10B981' : row.status === 'LOCKED' ? '#F59E0B' : '#94A3B8', fontSize: '10px', fontWeight: 700 }}>{row.status}</span>
                           <span style={{ textAlign: 'right', fontFamily: "'JetBrains Mono', monospace", fontWeight: i === 1 ? 700 : 400 }}>{row.amount}</span>
                         </div>
                       ))}
                     </div>
                     
                  </div>
               </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
