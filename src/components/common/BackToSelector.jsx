import { Link } from 'react-router-dom';
import { ArrowLeft, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BackToSelector({ variant = 'v1' }) {
  const config = {
    v1: { bg: '#F97316', shadow: 'rgba(249,115,22,0.35)', color: '#ffffff' },
    v2: { bg: '#1E3A5F', shadow: 'rgba(30,58,95,0.3)', color: '#ffffff' },
    v3: { bg: '#059669', shadow: 'rgba(5,150,105,0.3)', color: '#ffffff' },
  };
  const c = config[variant] || config.v1;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        width: 'max-content'
      }}
      className="md:left-auto md:right-8 md:transform-none"
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: c.bg,
            color: c.color,
            padding: '12px 20px',
            borderRadius: '9999px',
            boxShadow: `0 8px 24px ${c.shadow}, 0 2px 8px rgba(0,0,0,0.1)`,
            fontWeight: 600,
            fontSize: '13px',
            cursor: 'pointer',
          }}
        >
          <LayoutGrid size={16} />
          <span>Toutes les maquettes</span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
