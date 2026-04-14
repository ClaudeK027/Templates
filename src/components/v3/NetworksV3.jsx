import { motion } from 'framer-motion';

const networks = ['Instagram', 'TikTok', 'YouTube', 'X', 'Facebook', 'LinkedIn'];

export default function NetworksV3() {
  return (
    <section style={{ padding: '32px 0', background: '#ffffff', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-center">
          <p
            className="w-full sm:w-auto mb-2 sm:mb-0"
            style={{
              fontSize: '11px',
              color: '#94A3B8',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontWeight: 600,
              margin: 0,
            }}
          >
            Plateformes supportées :
          </p>
          {networks.map((net, i) => (
            <motion.span
              key={net}
              style={{
                color: '#64748B',
                fontSize: '13px',
                fontWeight: 500,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
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
