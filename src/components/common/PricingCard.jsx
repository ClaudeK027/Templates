import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import CtaButton from './CtaButton';

export default function PricingCard({ plan, variant = 'v1', index = 0 }) {
  const colors = {
    v1: {
      accent: '#F97316',
      accentSoft: 'rgba(249,115,22,0.1)',
      accentBorder: 'rgba(249,115,22,0.3)',
      name: plan.highlighted ? '#F97316' : '#1C1917',
      check: plan.highlighted ? '#F97316' : '#6D28D9',
    },
    v2: {
      accent: '#D4A853',
      accentSoft: 'rgba(212,168,83,0.1)',
      accentBorder: 'rgba(212,168,83,0.3)',
      name: plan.highlighted ? '#1E3A5F' : '#111827',
      check: plan.highlighted ? '#D4A853' : '#1E3A5F',
    },
    v3: {
      accent: '#059669',
      accentSoft: 'rgba(5,150,105,0.1)',
      accentBorder: 'rgba(5,150,105,0.3)',
      name: plan.highlighted ? '#059669' : '#1F2937',
      check: plan.highlighted ? '#059669' : '#F87171',
    },
  };
  const c = colors[variant] || colors.v1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      style={{ height: '100%' }}
    >
      <div
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: 'clamp(24px, 3vw, 32px)',
          borderRadius: '16px',
          border: plan.highlighted
            ? `2px solid ${c.accent}`
            : '1px solid rgba(0,0,0,0.07)',
          background: '#ffffff',
          boxShadow: plan.highlighted
            ? `0 4px 24px ${c.accentBorder}`
            : '0 1px 3px rgba(0,0,0,0.04)',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        }}
      >
        {/* Popular badge */}
        {plan.highlighted && (
          <span
            style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '4px 14px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 600,
              color: '#fff',
              background: c.accent,
            }}
          >
            Populaire
          </span>
        )}

        {/* Plan name */}
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: c.name, marginBottom: '4px' }}>
          {plan.name}
        </h3>
        <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '16px' }}>
          {plan.description}
        </p>

        {/* Price */}
        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '32px', fontWeight: 800, fontFamily: "'Poppins', sans-serif", color: '#111827' }}>
            {plan.price}
          </span>
          <span style={{ fontSize: '14px', color: '#9CA3AF', marginLeft: '4px' }}>
            {plan.currency}{plan.period}
          </span>
        </div>

        {/* Features list */}
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, flex: 1, marginBottom: '24px' }}>
          {plan.features.map((feature) => (
            <li
              key={feature}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}
            >
              <Check size={16} style={{ color: c.check, marginTop: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: '13px', color: '#4B5563', lineHeight: 1.5 }}>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <CtaButton
          variant={variant}
          type={plan.highlighted ? 'primary' : 'secondary'}
          size="md"
          style={{ width: '100%' }}
        >
          {plan.cta}
        </CtaButton>
      </div>
    </motion.div>
  );
}
