import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import { trustFeatures } from '@/data/content';

export default function TrustV1() {
  return (
    <section style={{ background: '#ffffff', padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 40px) clamp(64px, 8vw, 100px)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle
          variant="v1"
          tag="Confiance & Sécurité"
          title="Votre sécurité, notre priorité."
          subtitle="Vérification, escrow et modération pour des collaborations sereines."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  style={{
                    height: '100%',
                    textAlign: 'center',
                    padding: 'clamp(20px, 3vw, 32px) clamp(16px, 2.5vw, 24px)',
                    borderRadius: '14px',
                    border: '1px solid rgba(0,0,0,0.07)',
                    background: '#ffffff',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  }}
                  className="influka-feature-card"
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(109,40,217,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                    }}
                  >
                    <Icon size={22} style={{ color: '#6D28D9' }} />
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px', color: '#1C1917' }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.65 }}>
                    {f.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
