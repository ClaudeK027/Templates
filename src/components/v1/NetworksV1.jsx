import { motion } from 'framer-motion';

const networks = ['Instagram', 'TikTok', 'YouTube', 'X', 'Facebook', 'LinkedIn'];

export default function NetworksV1() {
  return (
    <section style={{ padding: 'clamp(36px, 5vw, 56px) clamp(16px, 4vw, 24px)', background: '#F9FAFB', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p
          style={{
            textAlign: 'center',
            fontSize: '11px',
            color: '#9CA3AF',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontWeight: 600,
            marginBottom: '20px',
          }}
        >
          Connectez tous vos réseaux
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          {networks.map((net, i) => (
            <motion.span
              key={net}
              style={{
                padding: '6px 20px',
                borderRadius: '9999px',
                background: '#ffffff',
                color: '#4B5563',
                fontSize: '13px',
                fontWeight: 500,
                border: '1px solid #E5E7EB',
                boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {net}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
