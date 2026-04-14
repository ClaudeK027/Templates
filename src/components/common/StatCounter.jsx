import { motion } from 'framer-motion';

export default function StatCounter({ value, label, icon: Icon, variant = 'v1', index = 0 }) {
  const colors = {
    v1: { value: '#ffffff', label: 'rgba(255, 255, 255, 0.9)' },
    v2: { value: '#D4A853', label: '#6B7280' },
    v3: { value: '#10B981', label: '#9CA3AF' },
  };
  const c = colors[variant] || colors.v1;

  return (
    <motion.div
      style={{ textAlign: 'center' }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <span
        style={{
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 700,
          fontFamily: "'Poppins', sans-serif",
          color: c.value,
          display: 'block',
        }}
      >
        {value}
      </span>
      <p style={{ fontSize: '13px', marginTop: '6px', color: c.label }}>
        {label}
      </p>
    </motion.div>
  );
}
