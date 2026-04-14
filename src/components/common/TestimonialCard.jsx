import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial, variant = 'v1', index = 0 }) {
  const colors = {
    v1: { star: '#F59E0B', name: '#1C1917', role: '#6B7280', quote: '#374151' },
    v2: { star: '#D4A853', name: '#111827', role: '#4B5563', quote: '#374151' },
    v3: { star: '#F87171', name: '#1F2937', role: '#6B7280', quote: '#374151' },
  };
  const c = colors[variant] || colors.v1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{ height: '100%' }}
    >
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: 'clamp(20px, 3vw, 28px)',
          borderRadius: '14px',
          border: '1px solid rgba(0,0,0,0.07)',
          background: '#ffffff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        }}
      >
        {/* Stars */}
        <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={15}
              style={{ color: i < testimonial.rating ? c.star : '#E5E7EB' }}
              fill={i < testimonial.rating ? 'currentColor' : 'none'}
            />
          ))}
        </div>

        {/* Quote */}
        <p style={{ fontSize: '14px', lineHeight: 1.65, color: c.quote, marginBottom: '20px', flex: 1 }}>
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '28px', lineHeight: 1 }}>{testimonial.avatar}</span>
          <div>
            <p style={{ fontWeight: 600, fontSize: '13px', color: c.name }}>{testimonial.name}</p>
            <p style={{ fontSize: '11px', color: c.role }}>
              {testimonial.role}{testimonial.company ? ` — ${testimonial.company}` : ''} · {testimonial.country}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
