import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ variant = 'v1' }) {
  const [open, setOpen] = useState(false);

  // We are forcing inline styles for consistency across all themes
  const config = {
    v1: {
      bg: 'rgba(28, 25, 23, 0.9)',
      border: 'rgba(255,255,255,0.05)',
      logo: '#F97316',
      link: '#D1D5DB', // gray-300
      linkHover: '#F97316',
      btnBg: '#F97316',
      btnText: '#ffffff',
      icon: '#ffffff',
      mobileMenuBg: '#1C1917',
    },
    v2: {
      bg: 'rgba(255, 255, 255, 0.95)',
      border: 'rgba(0,0,0,0.05)',
      logo: '#1E3A5F',
      link: '#4B5563',
      linkHover: '#1E3A5F',
      btnBg: '#1E3A5F',
      btnText: '#ffffff',
      icon: '#111827',
      mobileMenuBg: '#ffffff',
    },
    v3: {
      bg: 'rgba(15, 23, 42, 0.65)', 
      border: 'rgba(255,255,255,0.1)',
      logo: '#10B981',
      link: '#D1D5DB',
      linkHover: '#10B981',
      btnBg: '#10B981',
      btnText: '#0F172A', 
      icon: '#ffffff',
      mobileMenuBg: '#0F172A',
    },
  };

  const c = config[variant] || config.v1;
  const navLinks = [
    { label: 'Créateurs', href: '#creators' },
    { label: 'Marques', href: '#brands' },
    { label: 'Comment ça marche', href: '#how-it-works' },
    { label: 'Tarifs', href: '#pricing' },
  ];

  const isV3 = variant === 'v3';

  // Styles for the main nav container
  const navStyles = isV3 
    ? {
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        background: c.bg,
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: `1px solid ${c.border}`,
        borderRadius: '9999px',
        width: 'calc(100% - 48px)',
        maxWidth: '1000px',
        padding: '0 8px',
        boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
      }
    : {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: c.bg,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isV3 ? 'none' : `1px solid ${c.border}`,
      };

  const innerContainerStyles = isV3
    ? { display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', padding: '0 16px' }
    : { maxWidth: '1100px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' };

  return (
    <>
      <nav style={navStyles}>
        <div style={innerContainerStyles}>
          {/* Logo */}
          <Link
            to={`/${variant}`}
            style={{
              fontSize: isV3 ? '18px' : '20px',
              fontWeight: 800,
              fontFamily: "'Poppins', sans-serif",
              color: c.logo,
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              paddingLeft: isV3 ? '8px' : '0'
            }}
          >
            INFLUKA
          </Link>

          {/* Desktop Links (Hidden on mobile via CSS class) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isV3 ? '24px' : '32px' }} className="nav-desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: isV3 ? '13px' : '14px',
                  fontWeight: isV3 ? 600 : 500,
                  color: c.link,
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = c.linkHover)}
                onMouseOut={(e) => (e.currentTarget.style.color = c.link)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* User Actions (Desktop) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="nav-desktop-links">
            <button
              style={{
                background: 'transparent',
                border: 'none',
                color: c.link,
                fontSize: isV3 ? '13px' : '14px',
                fontWeight: 600,
                cursor: 'pointer',
                padding: '8px 16px',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = c.linkHover)}
              onMouseOut={(e) => (e.currentTarget.style.color = c.link)}
            >
              Connexion
            </button>
            <button
              style={{
                background: c.btnBg,
                color: c.btnText,
                border: 'none',
                padding: isV3 ? '8px 20px' : '10px 20px',
                borderRadius: '9999px',
                fontSize: isV3 ? '13px' : '14px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'transform 0.2s, background 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                 e.currentTarget.style.transform = 'scale(1.03)';
                 if(isV3) e.currentTarget.style.boxShadow = '0 0 16px rgba(16,185,129,0.4)';
              }}
              onMouseOut={(e) => {
                 e.currentTarget.style.transform = 'scale(1)';
                 if(isV3) e.currentTarget.style.boxShadow = 'none';
              }}
            >
              S'inscrire
            </button>
          </div>

          {/* Mobile Toggle (Shown on mobile via CSS class) */}
          <button
            className="nav-mobile-toggle"
            style={{ display: 'none', background: 'transparent', border: 'none', color: c.icon, paddingRight: isV3 ? '8px' : '0', cursor: 'pointer' }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: isV3 ? '100px' : '72px',
              left: isV3 ? '24px' : 0,
              right: isV3 ? '24px' : 0,
              bottom: isV3 ? 'auto' : 0,
              zIndex: 49,
              background: c.mobileMenuBg,
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              borderTop: isV3 ? 'none' : `1px solid ${c.border}`,
              borderRadius: isV3 ? '24px' : 0,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              maxHeight: isV3 ? 'calc(100vh - 140px)' : 'none',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: c.link,
                    textDecoration: 'none'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div style={{ height: '1px', background: c.border, margin: '8px 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                style={{
                  background: 'transparent',
                  border: `1px solid ${c.border}`,
                  padding: '14px',
                  borderRadius: '12px',
                  color: c.link,
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Connexion
              </button>
              <button
                style={{
                  background: c.btnBg,
                  color: c.btnText,
                  border: 'none',
                  padding: '14px',
                  borderRadius: '12px',
                  color: isV3 ? '#0F172A' : '#ffffff',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                S'inscrire
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
