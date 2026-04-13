import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import CtaButton from './CtaButton';

export default function PricingCard({ plan, variant = 'v1', index = 0 }) {
  const colors = {
    v1: {
      bg: plan.highlighted ? 'bg-v1-black' : 'bg-white',
      border: plan.highlighted ? 'border-v1-orange' : 'border-gray-200',
      name: plan.highlighted ? 'text-v1-orange' : 'text-v1-black',
      price: plan.highlighted ? 'text-white' : 'text-v1-black',
      desc: plan.highlighted ? 'text-gray-400' : 'text-gray-500',
      feature: plan.highlighted ? 'text-gray-300' : 'text-gray-600',
      check: plan.highlighted ? 'text-v1-orange' : 'text-v1-purple',
      badge: 'bg-v1-orange text-white',
    },
    v2: {
      bg: plan.highlighted ? 'bg-v2-navy' : 'bg-white',
      border: plan.highlighted ? 'border-v2-gold' : 'border-v2-gray-200',
      name: plan.highlighted ? 'text-v2-gold' : 'text-v2-navy',
      price: plan.highlighted ? 'text-white' : 'text-v2-gray-900',
      desc: plan.highlighted ? 'text-gray-300' : 'text-v2-gray-600',
      feature: plan.highlighted ? 'text-gray-300' : 'text-v2-gray-600',
      check: plan.highlighted ? 'text-v2-gold' : 'text-v2-navy',
      badge: 'bg-v2-gold text-white',
    },
    v3: {
      bg: plan.highlighted ? 'bg-v3-dark' : 'bg-white',
      border: plan.highlighted ? 'border-v3-emerald' : 'border-gray-200',
      name: plan.highlighted ? 'text-v3-emerald-light' : 'text-v3-dark',
      price: plan.highlighted ? 'text-white' : 'text-v3-dark',
      desc: plan.highlighted ? 'text-gray-400' : 'text-gray-500',
      feature: plan.highlighted ? 'text-gray-300' : 'text-gray-600',
      check: plan.highlighted ? 'text-v3-emerald-light' : 'text-v3-emerald',
      badge: 'bg-v3-coral text-white',
    },
  };

  const c = colors[variant];

  return (
    <motion.div
      className={`relative ${c.bg} border-2 ${c.border} rounded-2xl p-6 lg:p-8 flex flex-col`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {plan.highlighted && (
        <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${c.badge}`}>
          Populaire
        </span>
      )}

      <h3 className={`text-lg font-bold ${c.name}`}>{plan.name}</h3>
      <p className={`text-sm mt-1 ${c.desc}`}>{plan.description}</p>

      <div className="mt-6 mb-6">
        <span className={`text-4xl font-bold font-poppins ${c.price}`}>{plan.price}</span>
        <span className={`text-sm ${c.desc}`}> {plan.currency}{plan.period}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check size={18} className={`mt-0.5 flex-shrink-0 ${c.check}`} />
            <span className={`text-sm ${c.feature}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <CtaButton
        variant={variant}
        type={plan.highlighted ? 'primary' : 'secondary'}
        size="md"
        className="w-full"
      >
        {plan.cta}
      </CtaButton>
    </motion.div>
  );
}
