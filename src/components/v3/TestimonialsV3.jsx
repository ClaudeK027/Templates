import { motion } from 'framer-motion';
import { testimonials } from '@/data/content';

export default function TestimonialsV3() {
  return (
    <section style={{ padding: '120px 0', background: '#FAF9F6', overflow: 'hidden', position: 'relative' }}>
      
      {/* Subtle floating background elements */}
      <motion.div 
         style={{ position: 'absolute', top: '10%', left: '-5%', width: '300px', height: '300px', background: 'rgba(16,185,129,0.03)', borderRadius: '50%', filter: 'blur(60px)' }}
         animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
         transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div 
         style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '400px', height: '400px', background: 'rgba(15,23,42,0.03)', borderRadius: '50%', filter: 'blur(80px)' }}
         animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
         transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              fontFamily: "'Playfair Display', serif",
              color: '#0F172A',
              margin: '0 0 16px',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ceux qui transforment l'Afrique.
          </motion.h2>
          <motion.p
            style={{ fontSize: '18px', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Des centaines de marques et de créateurs génèrent des millions de vues chaque mois grâce à notre technologie.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Massive Testimonial */}
          <motion.div
            className="col-span-1 lg:col-span-8"
            style={{
              background: '#ffffff',
              borderRadius: '32px',
              padding: 'clamp(32px, 5vw, 48px)',
              border: '1px solid rgba(0,0,0,0.04)',
              boxShadow: '0 24px 48px rgba(0,0,0,0.02)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'default'
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 32px 64px rgba(0,0,0,0.04)' }}
            transition={{ duration: 0.4 }}
          >
            <p style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: '#0F172A', lineHeight: 1.4, margin: '0 0 32px', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
              "Le niveau de granularité des données sur INFLUKA est incroyable. Nous avons réduit notre coût d'acquisition de 40% sur la région MENA en sélectionnant les bons profils dès le premier jour."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
               <motion.div 
                 style={{ width: 'clamp(48px, 12vw, 64px)', height: 'clamp(48px, 12vw, 64px)', borderRadius: '50%', background: '#F1F5F9', border: '2px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(20px, 5vw, 28px)' }}
                 whileHover={{ scale: 1.1, rotate: 5 }}
               >
                 👨🏿‍💼
               </motion.div>
               <div>
                 <h4 style={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 700, color: '#0F172A' }}>Jean-Marc D.</h4>
                 <p style={{ margin: 0, fontSize: '14px', color: '#64748B' }}>Directeur Marketing — AfriBeauty</p>
               </div>
            </div>
          </motion.div>

          {/* Secondary Square Testimonial */}
          <motion.div
            className="col-span-1 lg:col-span-4"
            style={{
              background: '#10B981',
              borderRadius: '32px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default'
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 32px 64px rgba(16,185,129,0.3)' }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
             <motion.div 
               style={{ position: 'absolute', top: -40, right: -40, fontSize: '120px', opacity: 0.1, originX: 0.5, originY: 0.5 }}
               animate={{ rotate: [0, 5, -5, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
             >
               "
             </motion.div>
             <p style={{ fontSize: '20px', fontWeight: 600, color: '#ffffff', lineHeight: 1.5, margin: '0 0 32px', position: 'relative', zIndex: 1 }}>
              "Le système Escrow me permet de créer l'esprit tranquille. Je sais que les fonds sont sécurisés avant même d'allumer ma caméra."
             </p>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1 }}>
               <motion.div 
                 style={{ width: 'clamp(40px, 10vw, 48px)', height: 'clamp(40px, 10vw, 48px)', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'clamp(18px, 4vw, 20px)' }}
                 whileHover={{ scale: 1.1, rotate: -5 }}
               >
                 👩🏾
               </motion.div>
               <div>
                 <h4 style={{ margin: '0 0 2px', fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>Amina K.</h4>
                 <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>Créatrice · Nigeria</p>
               </div>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
