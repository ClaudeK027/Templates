import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PricingV3() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to PRO center card
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    // Iterate over children that are actual pricing cards
    Array.from(container.children).forEach((child) => {
      if (!child.classList.contains('pricing-card')) return;
      
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(childCenter - scrollCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = parseInt(child.getAttribute('data-index') || '0', 10);
      }
    });
    
    // Only update state if it changes
    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const targetCard = container.querySelector(`[data-index="${index}"]`);
    if (targetCard) {
      const scrollTarget = targetCard.offsetLeft - (container.clientWidth / 2) + (targetCard.offsetWidth / 2);
      container.scrollTo({ left: Math.max(0, scrollTarget), behavior: 'smooth' });
    }
  };

  // Center the Pro plan on mount if on mobile
  useEffect(() => {
    const centerProPlan = () => {
      if (scrollRef.current && window.innerWidth < 1024) {
        const container = scrollRef.current;
        const proCard = container.querySelector('[data-index="1"]');
        if (proCard) {
          // Calculate offset to center the pro card
          const scrollTarget = proCard.offsetLeft - (container.clientWidth / 2) + (proCard.offsetWidth / 2);
          container.scrollTo({ left: Math.max(0, scrollTarget), behavior: 'auto' });
        }
      }
    };
    
    // Timeout ensures React has fully painted widths/layouts before scrolling
    const timer = setTimeout(centerProPlan, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="pricing" style={{ padding: '160px 0', background: '#ffffff', overflow: 'hidden' }}>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              fontFamily: "'Playfair Display', serif",
              color: '#0F172A',
              margin: '0 0 16px',
            }}
          >
            Investissez dans votre croissance.
          </h2>
          <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
            Des tarifs transparents, pensés pour s'adapter à votre volume d'activité.
          </p>
        </div>

        {/* Carousel Wrapper - Negative margins on mobile to allow cards edge-to-edge bleed while snapping */}
        <div className="-mx-[32px] px-[32px] lg:mx-0 lg:px-0">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory lg:overflow-x-visible items-center lg:justify-center gap-4 lg:gap-10 w-full hide-scrollbar"
            style={{ 
              paddingBottom: '40px', // allow shadow
              paddingTop: '40px',
              marginTop: '-40px'
            }}
          >
            {/* Background Highlight Glow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'rgba(16,185,129,0.05)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none' }} />

            {/* LEFT: Gratuit (Scaled Down/Faded) */}
            <motion.div
              data-index="0"
              className="pricing-card w-[75vw] sm:w-[320px] shrink-0 snap-center lg:w-full lg:max-w-[300px] lg:scale-95"
              style={{
                background: '#F8FAFC',
                borderRadius: '24px',
                padding: 'clamp(32px, 5vw, 40px) 32px',
                border: '1px solid #E2E8F0',
                position: 'relative',
                zIndex: 1,
                opacity: 0.8
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 0.8, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Gratuit</h3>
              <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '32px' }}>Pour découvrir l'écosystème</p>
              <div style={{ fontSize: '40px', fontWeight: 800, color: '#0F172A', marginBottom: '8px', lineHeight: 1 }}>
                0 <span style={{ fontSize: '14px', color: '#94A3B8', fontWeight: 600 }}>FCFA/mois</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px', marginBottom: '40px' }}>
                 {['Profil public basique', '3 offres de service max', 'Messagerie standard'].map((f) => (
                   <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#475569' }}>
                     <span style={{ color: '#94A3B8' }}>✓</span> {f}
                   </div>
                 ))}
              </div>

              <button style={{ width: '100%', padding: '12px', borderRadius: '12px', background: '#ffffff', border: '1px solid #CBD5E1', color: '#0F172A', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
                S'inscrire
              </button>
            </motion.div>

            {/* CENTER: PRO (Massive Dark Card) */}
            <motion.div
              data-index="1"
              className="pricing-card w-[75vw] sm:w-[320px] shrink-0 snap-center lg:w-full lg:max-w-[400px]"
              style={{
                background: '#0F172A',
                borderRadius: '32px',
                padding: 'clamp(32px, 5vw, 56px) clamp(20px, 4vw, 40px)',
                border: '1px solid rgba(16,185,129,0.3)',
                boxShadow: '0 32px 64px rgba(15,23,42,0.15), 0 0 0 4px rgba(16,185,129,0.1)',
                position: 'relative',
                zIndex: 10,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', background: '#10B981', color: '#ffffff', padding: '6px 16px', borderRadius: '9999px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                Recommandé
              </div>
              
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Pro</h3>
              <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '32px' }}>Pour les créateurs et marques actifs</p>
              <div style={{ fontSize: 'clamp(40px, 10vw, 56px)', fontWeight: 800, color: '#ffffff', marginBottom: '8px', lineHeight: 1 }}>
                9 900 <span style={{ fontSize: '16px', color: '#64748B', fontWeight: 600 }}>FCFA</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '48px', marginBottom: '48px' }}>
                 {['Offres et candidatures illimitées', 'Badge Pro de confiance', 'Analytics avancés de l\'audience', 'Boost de visibilité mensuel', 'Support prioritaire H24'].map((f) => (
                   <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#F1F5F9' }}>
                     <span style={{ color: '#10B981', background: 'rgba(16,185,129,0.1)', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0 }}>✓</span> {f}
                   </div>
                 ))}
              </div>

              <button style={{ width: '100%', padding: '16px', borderRadius: '14px', background: '#10B981', border: 'none', color: '#ffffff', fontWeight: 700, fontSize: '16px', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 8px 24px rgba(16,185,129,0.2)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                Commencer l'essai gratuit
              </button>
              <p style={{ textAlign: 'center', color: '#64748B', fontSize: '12px', margin: '16px 0 0' }}>Aucun engagement. Annulez à tout moment.</p>
            </motion.div>

            {/* RIGHT: Business (Scaled Down/Faded) */}
            <motion.div
              data-index="2"
              className="pricing-card w-[75vw] sm:w-[320px] shrink-0 snap-center lg:w-full lg:max-w-[300px] lg:scale-95"
              style={{
                background: '#F8FAFC',
                borderRadius: '24px',
                padding: 'clamp(32px, 5vw, 40px) 32px',
                border: '1px solid #E2E8F0',
                position: 'relative',
                zIndex: 1,
                opacity: 0.8
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 0.8, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Business</h3>
              <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '32px' }}>Pour les agences et grands comptes</p>
              <div style={{ fontSize: '36px', fontWeight: 800, color: '#0F172A', marginBottom: '8px', lineHeight: 1 }}>
                29 900 <span style={{ fontSize: '14px', color: '#94A3B8', fontWeight: 600 }}>/mois</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '40px', marginBottom: '40px' }}>
                 {['Missions et invitations illimitées', 'Accès CRM complet', 'Manager de compte dédié'].map((f) => (
                   <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#475569' }}>
                     <span style={{ color: '#94A3B8' }}>✓</span> {f}
                   </div>
                 ))}
              </div>

              <button style={{ width: '100%', padding: '12px', borderRadius: '12px', background: '#ffffff', border: '1px solid #CBD5E1', color: '#0F172A', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>
                Contacter les ventes
              </button>
            </motion.div>

          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex lg:hidden justify-center gap-2 mt-4">
          {[0, 1, 2].map((idx) => (
            <button
               key={idx} 
               onClick={() => scrollToCard(idx)}
               style={{
                 width: activeIndex === idx ? '24px' : '8px',
                 height: '8px',
                 borderRadius: '4px',
                 background: activeIndex === idx ? '#10B981' : '#E2E8F0',
                 transition: 'all 0.3s ease',
                 border: 'none',
                 padding: 0,
                 cursor: 'pointer'
               }}
               aria-label={`Aller au forfait ${idx}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
