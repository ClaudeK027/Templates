import { motion } from 'framer-motion';

export default function FeatureCard({ title, description, icon: Icon, variant = 'v1', index = 0 }) {
  const colors = {
    v1: { icon: '#F97316', iconBg: 'rgba(249,115,22,0.1)', title: '#1C1917' },
    v2: { icon: '#1E3A5F', iconBg: 'rgba(30,58,95,0.1)', title: '#111827' },
    v3: { icon: '#059669', iconBg: 'rgba(5,150,105,0.1)', title: '#1F2937' },
  };
  const c = colors[variant] || colors.v1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      style={{ height: '100%' }}
    >
      <div
        className="influka-feature-card"
        style={{
          height: '100%',
          padding: 'clamp(20px, 3vw, 28px)',
          borderRadius: '14px',
          border: '1px solid rgba(0,0,0,0.07)',
          background: '#ffffff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: c.iconBg,
            marginBottom: '16px',
          }}
        >
          <Icon size={22} style={{ color: c.icon }} />
        </div>
        <h3 style={{ fontSize: '15px', fontWeight: 600, color: c.title, marginBottom: '8px', lineHeight: 1.3 }}>
          {title}
        </h3>
        <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.7 }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
