import { motion } from 'framer-motion';

const networks = ['Instagram', 'TikTok', 'YouTube', 'X', 'Facebook', 'LinkedIn'];

export default function NetworksV2() {
  return (
    <section style={{ paddingTop: 'clamp(36px, 5vw, 56px)', paddingBottom: 'clamp(36px, 5vw, 56px)', paddingLeft: 'clamp(24px, 5vw, 48px)', paddingRight: 'clamp(24px, 5vw, 48px)', background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p
          style={{
            textAlign: 'center',
            fontSize: '11px',
            color: '#6B7280',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontWeight: 600,
            marginBottom: '20px',
          }}
        >
          Réseaux sociaux supportés
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', gap: '32px' }}>
          {networks.map((net, i) => (
            <motion.span
              key={net}
              style={{
                color: '#4B5563',
                fontSize: '13px',
                fontWeight: 600,
                transition: 'color 0.2sease',
                cursor: 'default'
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#1E3A5F')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#4B5563')}
            >
              {net}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
