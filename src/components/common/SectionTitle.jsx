import { motion } from 'framer-motion';

export default function SectionTitle({ tag, title, subtitle, align = 'center', variant = 'v1' }) {
  const colors = {
    v1: { tag: 'text-v1-orange bg-v1-orange/10', title: 'text-v1-black', subtitle: 'text-gray-600' },
    v2: { tag: 'text-v2-navy bg-v2-navy/10', title: 'text-v2-gray-900', subtitle: 'text-v2-gray-600' },
    v3: { tag: 'text-v3-emerald bg-v3-emerald/10', title: 'text-v3-dark', subtitle: 'text-gray-600' },
  };

  const c = colors[variant];
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      className={`max-w-2xl mb-12 lg:mb-16 ${alignment}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {tag && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${c.tag}`}>
          {tag}
        </span>
      )}
      <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight ${c.title}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base lg:text-lg leading-relaxed ${c.subtitle}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
