import { motion } from 'framer-motion';

export default function FeatureCard({ title, description, icon: Icon, variant = 'v1', index = 0 }) {
  const colors = {
    v1: {
      bg: 'bg-white hover:bg-v1-cream',
      border: 'border-gray-100 hover:border-v1-orange/30',
      icon: 'text-v1-orange bg-v1-orange/10',
      title: 'text-v1-black',
      desc: 'text-gray-600',
    },
    v2: {
      bg: 'bg-white hover:bg-v2-gray-50',
      border: 'border-v2-gray-200 hover:border-v2-navy/30',
      icon: 'text-v2-navy bg-v2-navy/10',
      title: 'text-v2-gray-900',
      desc: 'text-v2-gray-600',
    },
    v3: {
      bg: 'bg-white hover:bg-v3-light',
      border: 'border-gray-100 hover:border-v3-emerald/30',
      icon: 'text-v3-emerald bg-v3-emerald/10',
      title: 'text-v3-dark',
      desc: 'text-gray-600',
    },
  };

  const c = colors[variant];

  return (
    <motion.div
      className={`group ${c.bg} border ${c.border} rounded-2xl p-6 transition-all duration-300`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${c.icon}`}>
        <Icon size={24} />
      </div>
      <h3 className={`text-lg font-semibold mb-2 ${c.title}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${c.desc}`}>{description}</p>
    </motion.div>
  );
}
