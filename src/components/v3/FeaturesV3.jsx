import { motion } from 'framer-motion';
import { creatorBenefits, brandBenefits } from '@/data/content';

export default function FeaturesV3() {
  // Combine all benefits for a dense bento grid
  const allFeatures = [...creatorBenefits, ...brandBenefits].slice(0, 5);

  return (
    <section id="features" style={{ padding: 'clamp(64px, 10vw, 120px) 0', background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
      <div id="brands" style={{ position: 'absolute', top: -80 }} />
      <div id="creators" style={{ position: 'absolute', top: -80 }} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 32px)' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              fontFamily: "'Playfair Display', serif",
              color: '#ffffff',
              margin: '0 0 16px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Une puissance redoutable.
          </motion.h2>
          <motion.p
            style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Des outils avancés conçus pour propulser les créateurs et sécuriser les investissements des marques.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          style={{ 
            gridAutoRows: 'minmax(240px, auto)'
          }}
        >
          {/* Main Large Feature */}
          <motion.div
            className="col-span-1 lg:col-span-8 row-span-1 lg:row-span-2"
            style={{
              background: 'linear-gradient(145deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))',
              borderRadius: '32px',
              border: '1px solid rgba(255,255,255,0.05)',
              padding: 'clamp(24px, 4vw, 48px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'crosshair',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: '0 32px 64px rgba(16,185,129,0.1)' }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
               style={{ position: 'absolute', right: -50, bottom: -50, width: '400px', height: '400px', background: 'rgba(16,185,129,0.08)', borderRadius: '50%', filter: 'blur(80px)' }}
               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div style={{ position: 'relative', zIndex: 10 }}>
              <motion.div 
                 style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}
                 whileHover={{ rotate: 90 }}
              >
                <span style={{ fontSize: '24px', color: '#10B981' }}>{'>_'}</span>
              </motion.div>
              <h3 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px', maxWidth: '400px', lineHeight: 1.2 }}>Analytics prédictives et IA intégrée</h3>
              <p style={{ fontSize: '16px', color: '#94A3B8', maxWidth: '400px', lineHeight: 1.6 }}>Identifiez les futures tendances. Notre IA analyse des millions de points de données pour garantir le matching parfait entre l'audience d'un créateur et l'objectif d'une marque.</p>
            </div>
            {/* Abstract visual */}
            <div className="hidden sm:flex" style={{ position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)', gap: '8px', opacity: 0.8 }}>
               {[40, 80, 60, 100, 50].map((h, i) => (
                 <motion.div 
                   key={i} 
                   style={{ width: '16px', height: h, background: '#10B981', borderRadius: '4px', transformOrigin: 'bottom' }} 
                   animate={{ scaleY: [1, 1.5, 1] }}
                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                 />
               ))}
            </div>
          </motion.div>

          {/* Top Right Medium */}
          <motion.div
            className="col-span-1 lg:col-span-4"
            style={{
              background: '#1E293B',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.05)',
              padding: 'clamp(24px, 3vw, 32px)',
              cursor: 'pointer'
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5, borderColor: 'rgba(16,185,129,0.3)' }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(244,63,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <motion.span style={{ fontSize: '20px' }} animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>⚡</motion.span>
            </div>
            <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Paiement instantané</h4>
            <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6 }}>Fonds sécurisés en Escrow, débloqués dès la validation.</p>
          </motion.div>

          {/* Bottom Right Medium */}
          <motion.div
            className="col-span-1 lg:col-span-4"
            style={{
              background: '#1E293B',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.05)',
              padding: 'clamp(24px, 3vw, 32px)',
              cursor: 'pointer'
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5, borderColor: 'rgba(16,185,129,0.3)' }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(56,189,248,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
               <motion.span style={{ fontSize: '20px' }} animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>🛡️</motion.span>
            </div>
            <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>Contrats automatisés</h4>
            <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6 }}>Génération juridique automatique pour chaque mission.</p>
          </motion.div>

          {/* Bottom Full Wide */}
          <motion.div
            className="col-span-1 lg:col-span-12 flex-col sm:flex-row text-center sm:text-left items-center sm:items-start"
            style={{
              background: '#10B981',
              borderRadius: '24px',
              padding: 'clamp(32px, 5vw, 48px)',
              display: 'flex',
              justifyContent: 'space-between',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
             <motion.div 
                style={{ position: 'absolute', right: 0, width: '50%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2))' }} 
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
             />
             <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
               <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>Dites adieu aux tableurs.</h3>
               <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>Le CRM INFLUKA centralise vos échanges, validations de contenus et facturations sur une seule et même interface.</p>
             </div>
             <motion.div 
               style={{ position: 'relative', zIndex: 1, padding: '16px 32px', background: '#0F172A', color: '#ffffff', borderRadius: '9999px', fontWeight: 700, fontSize: '15px' }}
               whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#0F172A' }}
             >
               Découvrir les fonctionnalités
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
