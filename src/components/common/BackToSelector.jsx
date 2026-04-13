import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackToSelector({ variant = 'v1' }) {
  const styles = {
    v1: 'bg-v1-orange/10 text-v1-orange border-v1-orange/20 hover:bg-v1-orange/20',
    v2: 'bg-v2-navy/10 text-v2-navy border-v2-navy/20 hover:bg-v2-navy/20',
    v3: 'bg-v3-emerald/10 text-v3-emerald border-v3-emerald/20 hover:bg-v3-emerald/20',
  };

  return (
    <Link
      to="/"
      className={`fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold backdrop-blur-md transition-all duration-300 shadow-lg ${styles[variant]}`}
    >
      <ArrowLeft size={16} />
      Toutes les maquettes
    </Link>
  );
}
