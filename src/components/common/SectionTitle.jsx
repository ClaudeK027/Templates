import { motion } from 'framer-motion';

export default function SectionTitle({ tag, title, subtitle, align = 'center', variant = 'v1' }) {
  const colors = {
    v1: { tag: '#F97316', tagBg: 'rgba(249,115,22,0.1)', title: '#1C1917', subtitle: '#6B7280' },
    v2: { tag: '#1E3A5F', tagBg: 'rgba(30,58,95,0.1)', title: '#111827', subtitle: '#4B5563' },
    v3: { tag: '#059669', tagBg: 'rgba(5,150,105,0.1)', title: '#1F2937', subtitle: '#6B7280' },
  };
  const c = colors[variant] || colors.v1;

  return (
    <motion.div
      style={{
        maxWidth: '620px',
        marginBottom: 'clamp(32px, 5vw, 48px)',
        textAlign: align,
        ...(align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : {}),
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      {tag && (
        <span
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: c.tag,
            background: c.tagBg,
            marginBottom: '14px',
          }}
        >
          {tag}
        </span>
      )}
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, lineHeight: 1.2, color: c.title, margin: 0 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ marginTop: '12px', fontSize: '15px', lineHeight: 1.6, color: c.subtitle }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
