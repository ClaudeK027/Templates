import { motion } from 'framer-motion';

export default function CtaButton({ children, variant = 'v1', type = 'primary', size = 'md', className = '', ...props }) {
  const sizes = {
    sm: { height: '36px', padding: '0 16px', fontSize: '13px' },
    md: { height: '44px', padding: '0 24px', fontSize: '14px' },
    lg: { height: '48px', padding: '0 32px', fontSize: '15px' },
  };

  const styles = {
    v1: {
      primary: {
        background: '#F97316',
        color: '#fff',
        border: 'none',
        boxShadow: '0 4px 14px rgba(249,115,22,0.3)',
      },
      secondary: {
        background: 'transparent',
        color: '#F97316',
        border: '2px solid #F97316',
        boxShadow: 'none',
      },
      ghost: {
        background: 'transparent',
        color: '#F97316',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: 'none',
      },
    },
    v2: {
      primary: {
        background: '#1E3A5F',
        color: '#fff',
        border: 'none',
        boxShadow: '0 4px 14px rgba(30,58,95,0.3)',
      },
      secondary: {
        background: 'transparent',
        color: '#1E3A5F',
        border: '2px solid #1E3A5F',
        boxShadow: 'none',
      },
      ghost: {
        background: 'transparent',
        color: '#1E3A5F',
        border: '1px solid rgba(0,0,0,0.1)',
        boxShadow: 'none',
      },
    },
    v3: {
      primary: {
        background: '#059669',
        color: '#fff',
        border: 'none',
        boxShadow: '0 4px 14px rgba(5,150,105,0.3)',
      },
      secondary: {
        background: 'transparent',
        color: '#059669',
        border: '2px solid #059669',
        boxShadow: 'none',
      },
      ghost: {
        background: 'transparent',
        color: '#059669',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: 'none',
      },
    },
  };

  const s = sizes[size];
  const st = styles[variant]?.[type] || styles.v1.primary;

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={className}
      style={{
        ...st,
        height: s.height,
        padding: s.padding,
        fontSize: s.fontSize,
        borderRadius: '9999px',
        fontWeight: 600,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        transition: 'all 0.3s ease',
        fontFamily: 'inherit',
        lineHeight: 1,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
