import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import CtaButton from '@/components/common/CtaButton';
import { heroContent } from '@/data/content';

export default function HeroV3() {
  const hero = heroContent.v3;

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh', // More immersive
        display: 'flex',
        alignItems: 'center',
        background: '#FAF9F6', 
        overflow: 'hidden',
        paddingTop: '72px' // offset navbar
      }}
    >
      {/* Background ambient glows */}
      <div style={{ position: 'absolute', top: -100, right: 0, width: '600px', height: '600px', background: 'rgba(16,185,129,0.06)', borderRadius: '50%', filter: 'blur(120px)' }} />
      <div style={{ position: 'absolute', bottom: -50, left: -50, width: '400px', height: '400px', background: 'rgba(244,63,94,0.05)', borderRadius: '50%', filter: 'blur(100px)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }} className="lg:gap-[80px]">
          
          {/* LEFT: Content */}
          <div className="text-center lg:text-left pt-8 lg:pt-0 pb-10" style={{ flex: '1 1 400px' }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  background: 'rgba(15,23,42,0.05)',
                  marginBottom: '24px',
                  border: '1px solid rgba(15,23,42,0.1)'
                }}
              >
                <span style={{ display: 'flex', gap: '2px', color: '#F59E0B' }}>
                  <Star size={12} fill="#F59E0B" /><Star size={12} fill="#F59E0B" /><Star size={12} fill="#F59E0B" /><Star size={12} fill="#F59E0B" /><Star size={12} fill="#F59E0B" />
                </span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#0F172A' }}>
                  Plus de 10 000 collaborations réussies
                </span>
              </div>
            </motion.div>

            <motion.h1
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 4.2rem)',
                fontWeight: 800,
                fontFamily: "'Playfair Display', serif",
                lineHeight: 1.1,
                color: '#0F172A',
                letterSpacing: '-0.02em',
                margin: '0 0 24px',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {hero.headline}
              <br />
              <span style={{ color: '#10B981', fontStyle: 'italic', fontWeight: 700 }}>
                {hero.subheadline}
              </span>
            </motion.h1>

            <motion.p
              style={{ fontSize: '18px', color: '#475569', maxWidth: '500px', lineHeight: 1.6, marginBottom: '40px' }}
              className="mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {hero.description}
            </motion.p>

            <motion.div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}
              className="justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CtaButton variant="v3" type="primary" size="lg" className="w-full sm:w-auto">
                Démarrer <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </CtaButton>
              <a href="#how-it-works" style={{ fontSize: '15px', fontWeight: 600, color: '#0F172A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }} className="py-2 sm:py-0 sm:ml-4">
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(15,23,42,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  ▶
                </span>
                Voir la démo
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Abstract Isomorphic / Floating UI */}
          <div className="relative w-full flex items-center justify-center scale-75 lg:scale-100 origin-center mt-[-40px] lg:mt-0" style={{ perspective: '1000px', height: '600px', flex: '1 1 500px' }}>
            
            <motion.div
              style={{ position: 'absolute', top: '5%', zIndex: 10 }}
              className="right-[5%] lg:right-[5%]"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div style={{ padding: '20px', borderRadius: '20px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 24px 48px rgba(0,0,0,0.08)', width: '280px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>👩🏾‍🦱</div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Aïssata B.</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748B' }}>Créatrice Mode</p>
                  </div>
                  <div style={{ marginLeft: 'auto', background: '#DCFCE7', color: '#166534', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 700 }}>98% Taux</div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, height: '6px', background: '#10B981', borderRadius: '3px' }} />
                  <div style={{ flex: 1, height: '6px', background: '#10B981', borderRadius: '3px' }} />
                  <div style={{ flex: 1, height: '6px', background: '#E2E8F0', borderRadius: '3px' }} />
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ position: 'absolute', top: '35%', zIndex: 20 }}
              className="left-[0%] lg:-left-[10%]"
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
               <div style={{ padding: '24px', borderRadius: '24px', background: '#0F172A', color: 'white', boxShadow: '0 32px 64px rgba(15,23,42,0.2)', width: '320px' }}>
                  <p style={{ margin: '0 0 12px', fontSize: '12px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Campagne Active</p>
                  <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: 700 }}>Lancement Été '26</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '20px' }}>
                     <span style={{ fontSize: '28px', fontWeight: 800, color: '#10B981' }}>2.4M</span>
                     <span style={{ fontSize: '13px', color: '#94A3B8' }}>impressions générées</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex' }}>
                       {['👨🏿', '👩🏽', '👨🏾'].map((e,i) => (
                         <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', border: '2px solid #0F172A', marginLeft: i>0 ? '-10px' : 0 }}>{e}</div>
                       ))}
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#10B981' }}>+12% vs objectif</span>
                  </div>
               </div>
            </motion.div>

            <motion.div
              style={{ position: 'absolute', zIndex: 15 }}
              className="bottom-[5%] lg:bottom-[15%] right-[5%] lg:right-[15%]"
              animate={{ y: [-15, 15, -15], rotate: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
            >
               <div style={{ padding: '16px', borderRadius: '16px', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 12px 24px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#FCE7F3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>💸</div>
                  <div>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748B', fontWeight: 500 }}>Paiement sécurisé via Escrow</p>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>500 000 FCFA débloqués</p>
                  </div>
               </div>
            </motion.div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
