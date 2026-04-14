import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CtaButton from '@/components/common/CtaButton';
import { heroContent } from '@/data/content';

export default function HeroV1() {
  const hero = heroContent.v1;

  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        background: '#1C1917',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glows */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px', background: 'rgba(249,115,22,0.12)', borderRadius: '50%', filter: 'blur(150px)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '300px', height: '300px', background: 'rgba(109,40,217,0.12)', borderRadius: '50%', filter: 'blur(120px)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', width: '100%', padding: 'clamp(100px, 12vw, 140px) clamp(20px, 5vw, 40px) clamp(60px, 8vw, 100px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#F97316',
                  background: 'rgba(249,115,22,0.12)',
                  border: '1px solid rgba(249,115,22,0.2)',
                  marginBottom: '20px',
                }}
              >
                Plateforme #1 en Afrique
              </span>
            </motion.div>

            <motion.h1
              style={{
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                fontWeight: 800,
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.1,
                color: '#ffffff',
                margin: '0 0 8px',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {hero.headline}
              <br />
              <span style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {hero.subheadline}
              </span>
            </motion.h1>

            <motion.p
              style={{ marginTop: '16px', fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#9CA3AF', maxWidth: '440px', lineHeight: 1.65 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {hero.description}
            </motion.p>

            <motion.div
              style={{ marginTop: 'clamp(24px, 3vw, 32px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
              className="sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CtaButton variant="v1" type="primary" size="md" className="w-full sm:w-auto">
                {hero.ctaCreator} <ArrowRight size={16} />
              </CtaButton>
              <CtaButton variant="v1" type="ghost" size="md" className="w-full sm:w-auto">
                {hero.ctaBrand}
              </CtaButton>
            </motion.div>

            <motion.div
              style={{ marginTop: 'clamp(28px, 4vw, 40px)', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}
              className="lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div style={{ display: 'flex' }}>
                {['👩🏾', '👨🏿', '👩🏽', '👨🏾'].map((e, i) => (
                  <span
                    key={i}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(109,40,217,0.35)',
                      border: '2px solid #1C1917',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      marginLeft: i > 0 ? '-8px' : 0,
                    }}
                  >
                    {e}
                  </span>
                ))}
              </div>
              <p style={{ color: '#9CA3AF', fontSize: '13px' }}>
                <span style={{ color: '#fff', fontWeight: 600 }}>+10 000</span> créateurs
              </p>
            </motion.div>
          </div>

          {/* Right — Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-[450px] mx-auto lg:max-w-none"
          >
            <div
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }}
            >
              {/* Profile header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #F97316, #F59E0B)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '26px',
                  }}
                >
                  👩🏾‍🎨
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '15px', margin: 0 }}>Amina Diallo</h3>
                  <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '2px 0 0' }}>Créatrice lifestyle · Lagos</p>
                </div>
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#F97316',
                    background: 'rgba(249,115,22,0.15)',
                  }}
                >
                  VÉRIFIÉ
                </span>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
                {[
                  { label: 'Abonnés', value: '245K' },
                  { label: 'Engagement', value: '4.8%' },
                  { label: 'Missions', value: '32' },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: '10px',
                      padding: '14px 12px',
                      textAlign: 'center',
                    }}
                  >
                    <p style={{ color: '#F97316', fontWeight: 700, fontSize: '16px', margin: 0 }}>{s.value}</p>
                    <p style={{ color: '#9CA3AF', fontSize: '10px', marginTop: '4px', textTransform: 'uppercase' }}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Social tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Instagram', 'TikTok', 'YouTube'].map((n) => (
                  <span
                    key={n}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.06)',
                      color: '#9CA3AF',
                      fontSize: '12px',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
