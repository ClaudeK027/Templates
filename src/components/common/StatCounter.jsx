import { motion } from 'framer-motion';

export default function StatCounter({ value, label, icon: Icon, variant = 'v1', index = 0 }) {
  const colors = {
    v1: { value: 'text-v1-orange', label: 'text-gray-300', icon: 'text-v1-gold', bg: 'bg-white/5' },
    v2: { value: 'text-v2-gold', label: 'text-v2-gray-600', icon: 'text-v2-navy', bg: 'bg-v2-navy/5' },
    v3: { value: 'text-v3-emerald', label: 'text-gray-600', icon: 'text-v3-coral', bg: 'bg-v3-emerald/5' },
  };

  const c = colors[variant];

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {Icon && (
        <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-3`}>
          <Icon size={24} className={c.icon} />
        </div>
      )}
      <span className={`text-3xl lg:text-4xl font-bold font-poppins ${c.value}`}>{value}</span>
      <span className={`text-sm mt-1 ${c.label}`}>{label}</span>
    </motion.div>
  );
}
