import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial, variant = 'v1', index = 0 }) {
  const colors = {
    v1: {
      bg: 'bg-white',
      border: 'border-v1-orange/20',
      star: 'text-v1-gold',
      name: 'text-v1-black',
      role: 'text-gray-500',
      quote: 'text-gray-600',
    },
    v2: {
      bg: 'bg-white',
      border: 'border-v2-gray-200',
      star: 'text-v2-gold',
      name: 'text-v2-gray-900',
      role: 'text-v2-gray-600',
      quote: 'text-v2-gray-600',
    },
    v3: {
      bg: 'bg-white',
      border: 'border-v3-emerald/20',
      star: 'text-v3-coral',
      name: 'text-v3-dark',
      role: 'text-gray-500',
      quote: 'text-gray-600',
    },
  };

  const c = colors[variant];

  return (
    <motion.div
      className={`${c.bg} border ${c.border} rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? c.star : 'text-gray-200'}
            fill={i < testimonial.rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>

      {/* Quote */}
      <p className={`text-sm lg:text-base leading-relaxed mb-6 ${c.quote}`}>
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">{testimonial.avatar}</span>
        <div>
          <p className={`font-semibold text-sm ${c.name}`}>{testimonial.name}</p>
          <p className={`text-xs ${c.role}`}>
            {testimonial.role}{testimonial.company ? ` — ${testimonial.company}` : ''} · {testimonial.country}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
