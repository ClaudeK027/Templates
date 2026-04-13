import { motion } from 'framer-motion';

export default function CtaButton({ children, variant = 'v1', type = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer';

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const styles = {
    v1: {
      primary: 'bg-v1-orange text-white hover:bg-v1-gold shadow-lg hover:shadow-v1-orange/30',
      secondary: 'bg-white text-v1-black border-2 border-v1-orange hover:bg-v1-orange hover:text-white',
      ghost: 'text-v1-orange hover:bg-v1-orange/10',
    },
    v2: {
      primary: 'bg-v2-navy text-white hover:bg-v2-navy-light shadow-lg hover:shadow-v2-navy/30',
      secondary: 'bg-white text-v2-navy border-2 border-v2-navy hover:bg-v2-navy hover:text-white',
      ghost: 'text-v2-navy hover:bg-v2-navy/10',
    },
    v3: {
      primary: 'bg-v3-emerald text-white hover:bg-v3-emerald-light shadow-lg hover:shadow-v3-emerald/30',
      secondary: 'bg-white text-v3-dark border-2 border-v3-emerald hover:bg-v3-emerald hover:text-white',
      ghost: 'text-v3-emerald hover:bg-v3-emerald/10',
    },
  };

  return (
    <motion.button
      className={`${base} ${sizes[size]} ${styles[variant][type]} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
