import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { stepsBrand } from '@/data/content';

// Extracted visual content for each step — reused in both mobile inline & desktop sticky
function StepVisual({ stepIndex }) {
  if (stepIndex === 0) {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A' }}>Création de Campagne</div>
          <div style={{ padding: '6px 12px', background: '#10B981', color: 'white', fontSize: '10px', borderRadius: '6px', fontWeight: 600 }}>NOUVEAU</div>
        </div>
        <div style={{ width: '100%', flex: 1, background: '#ffffff', borderRadius: '12px', padding: '20px', border: '1px dashed #CBD5E1', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>Lancement Produit Été 2024</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '12px', background: '#F8FAFC', borderRadius: '8px' }}>
              <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 600, marginBottom: '4px' }}>OBJECTIF</div>
              <div style={{ fontSize: '13px', color: '#0F172A', fontWeight: 600 }}>Notoriété & Ventes</div>
            </div>
            <div style={{ padding: '12px', background: '#F8FAFC', borderRadius: '8px' }}>
              <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 600, marginBottom: '4px' }}>BUDGET</div>
              <div style={{ fontSize: '13px', color: '#0F172A', fontWeight: 600 }}>15M FCFA</div>
            </div>
            <div style={{ padding: '12px', background: '#F8FAFC', borderRadius: '8px' }}>
              <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 600, marginBottom: '4px' }}>PLATEFORMES</div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ fontSize: '11px', background: '#E2E8F0', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>TikTok</span>
                <span style={{ fontSize: '11px', background: '#E2E8F0', padding: '2px 6px', borderRadius: '4px', fontWeight: 500 }}>Insta</span>
              </div>
            </div>
            <div style={{ padding: '12px', background: '#F8FAFC', borderRadius: '8px' }}>
              <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 600, marginBottom: '4px' }}>CRÉATEURS</div>
              <div style={{ fontSize: '13px', color: '#0F172A', fontWeight: 600 }}>5 à 10 profils</div>
            </div>
          </div>
          <button style={{ marginTop: 'auto', width: '100%', padding: '12px', background: '#0F172A', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600 }}>Publier la mission</button>
        </div>
      </>
    );
  }

  if (stepIndex === 1) {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>Annuaire (245 correspondances)</div>
          <div style={{ padding: '4px 12px', border: '1px solid #E2E8F0', borderRadius: '12px', fontSize: '12px', color: '#64748B' }}>Filtres 🎯</div>
        </div>
        {[
          { name: '@amina_style', niche: 'Mode • Abidjan', followers: '1.2M', selected: false, img: 'A' },
          { name: '@tech_bro_dkr', niche: 'Tech • Dakar', followers: '450K', selected: true, img: 'TB' },
          { name: '@chef_kadi', niche: 'Food • Bamako', followers: '890K', selected: false, img: 'CK' },
          { name: '@fitness_paul', niche: 'Sport • Douala', followers: '200K', selected: false, img: 'FP' }
        ].map((item, index) => (
          <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#ffffff', border: index === 1 ? '2px solid #10B981' : '1px solid #E2E8F0', borderRadius: '12px', boxShadow: index === 1 ? '0 4px 12px rgba(16,185,129,0.1)' : 'none' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: index === 1 ? '#10B981' : '#1E293B', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>{item.img}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>{item.name}</div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '2px', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>{item.niche}</span>
                <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700 }}>{item.followers}</span>
              </div>
            </div>
            <div style={{ padding: '4px 10px', fontSize: '9px', fontWeight: 700, background: index === 1 ? '#10B981' : '#F1F5F9', color: index === 1 ? '#ffffff' : '#64748B', borderRadius: '6px', whiteSpace: 'nowrap' }}>
              {index === 1 ? 'SÉLECTIONNÉ' : 'INVITER'}
            </div>
          </div>
        ))}
      </>
    );
  }

  if (stepIndex === 2) {
    return (
      <div style={{ display: 'flex', gap: '12px', height: '100%' }}>
        <div style={{ flex: 1, background: '#ffffff', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A', borderBottom: '1px solid #F1F5F9', paddingBottom: '8px' }}>Chat avec @tech_bro_dkr</div>
          <div style={{ padding: '8px 12px', background: '#F1F5F9', borderRadius: '8px 8px 8px 0', alignSelf: 'flex-start', maxWidth: '85%', fontSize: '12px', color: '#0F172A' }}>
            Bonjour, j'ai bien reçu le brief pour la campagne d'été !
          </div>
          <div style={{ padding: '8px 12px', background: '#10B981', borderRadius: '8px 8px 0 8px', alignSelf: 'flex-end', maxWidth: '85%', fontSize: '12px', color: '#ffffff' }}>
            Super ! Avez-vous une date pour le premier brouillon vidéo ?
          </div>
          <div style={{ padding: '8px 12px', background: '#F1F5F9', borderRadius: '8px 8px 8px 0', alignSelf: 'flex-start', maxWidth: '85%', fontSize: '12px', color: '#0F172A' }}>
            Oui, je vous l'envoie ce mercredi au plus tard. 🚀
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
            <input type="text" placeholder="Écrire un message..." style={{ flex: 1, padding: '8px 12px', border: '1px solid #E2E8F0', borderRadius: '20px', fontSize: '11px' }} disabled />
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0F172A', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px' }}>↑</div>
          </div>
        </div>
        <div style={{ width: '110px', background: '#ffffff', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#64748B', width: '100%' }}>Livrables</div>
          <div style={{ width: '56px', height: '70px', borderRadius: '8px', background: '#E2E8F0', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30%', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ color: 'white', fontSize: '9px' }}>▶ Play</span></div>
          </div>
          <div style={{ fontSize: '10px', fontWeight: 600, color: '#0F172A', textAlign: 'center' }}>Draft_TikTok.mp4</div>
          <div style={{ marginTop: 'auto', width: '100%', padding: '5px', background: '#10B981', color: 'white', borderRadius: '4px', fontSize: '10px', fontWeight: 700, textAlign: 'center' }}>Valider</div>
        </div>
      </div>
    );
  }

  if (stepIndex === 3) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#ffffff', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '24px' }}>
        <div style={{ position: 'relative' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', marginBottom: '20px' }}
          >
            🎉
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, border: '2px solid #10B981', borderRadius: '50%' }}
          />
        </div>
        <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>Campagne Validée</div>
        <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '24px' }}>Paiement séquestre libéré</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%' }}>
          <div style={{ padding: '14px', background: '#F8FAFC', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#10B981', marginBottom: '4px' }}>2.4M</div>
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.05em' }}>IMPRESSIONS</div>
          </div>
          <div style={{ padding: '14px', background: '#F8FAFC', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#10B981', marginBottom: '4px' }}>+15%</div>
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.05em' }}>ENGAGEMENT</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function HowItWorksV3() {
  const [activeStep, setActiveStep] = useState(0);

  // We are using brand steps for the demonstration as it is the most robust
  const steps = stepsBrand;

  return (
    <section id="how-it-works" style={{ padding: '120px 0', background: '#ffffff', position: 'relative' }}>
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
            Le workflow parfait.
          </h2>
          <p style={{ fontSize: '18px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
            Un parcours sans friction conçu pour accélérer la collaboration entre créateurs et grandes marques.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Scrolling Steps with Vertical Timeline */}
          <div className="relative w-full">
            
            {/* The Vertical Track */}
            <div className="absolute left-[28px] top-[48px] bottom-[48px] w-[2px] bg-[#F1F5F9] z-0" />
            
            {/* The Animated Fill Line */}
            <motion.div
              className="absolute left-[28px] top-[48px] w-[2px] bg-[#10B981] z-10 origin-top"
              animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />

            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              const isPast = activeStep >= i;
              
              return (
                <motion.div
                  key={step.step}
                  style={{
                    padding: '32px 0',
                    position: 'relative',
                    zIndex: 20,
                    opacity: isActive ? 1 : 0.4,
                    transition: 'opacity 0.4s ease'
                  }}
                  className="lg:py-12"
                  onViewportEnter={() => setActiveStep(i)}
                  viewport={{ margin: '-40% 0px -40% 0px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                     <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: isPast ? '#10B981' : '#ffffff',
                        border: `2px solid ${isPast ? '#10B981' : '#E2E8F0'}`,
                        color: isPast ? '#ffffff' : '#94A3B8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.4s ease',
                        boxShadow: isActive ? '0 0 0 8px rgba(16,185,129,0.1)' : 'none'
                      }}
                     >
                       <Icon size={24} />
                     </div>
                     <div style={{ paddingTop: '10px', flex: 1 }}>
                       <span style={{ fontSize: '12px', fontWeight: 700, color: isActive ? '#10B981' : '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Étape {step.step}</span>
                       <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', margin: '8px 0 12px' }}>{step.title}</h3>
                       <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                         {step.description}
                       </p>
                     </div>
                  </div>

                  {/* MOBILE ONLY: inline visual for this step */}
                  {isActive && (
                    <div className="block lg:hidden">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        style={{
                          marginTop: '20px',
                          marginLeft: '80px', // Align with text naturally
                          background: '#F8FAFC',
                          borderRadius: '20px',
                          border: '1px solid #E2E8F0',
                          padding: '16px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                          minHeight: '200px',
                        }}
                      >
                        <StepVisual stepIndex={i} />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Dense Sticky Visual Container — DESKTOP ONLY */}
          <div className="hidden lg:block relative lg:sticky top-auto lg:top-[120px] w-full" style={{ height: 'clamp(400px, 60vh, 600px)' }}>
            <div style={{ width: '100%', height: '100%', background: '#F8FAFC', borderRadius: '32px', border: '1px solid #E2E8F0', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
                  style={{ width: '85%', height: '85%', background: '#ffffff', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.02)' }}
                >
                   {/* App header mock */}
                   <div style={{ padding: '16px 24px', borderBottom: '1px solid #F1F5F9', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#E2E8F0' }} />
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#E2E8F0' }} />
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#E2E8F0' }} />
                      </div>
                      <div style={{ width: '120px', height: '8px', background: '#F1F5F9', borderRadius: '4px' }} />
                   </div>
                   
                   <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', background: '#FAF9F6' }}>
                      <StepVisual stepIndex={activeStep} />
                   </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
