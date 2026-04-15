import { useState } from 'react';
import { v4Nav, v4Hero } from '@/data/contentV4';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';

export default function NavbarV4() {
  const [menuOpen, setMenuOpen] = useState(false);
  const wa = v4Hero.whatsappBase;

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(11,15,25,0.85)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(16px, 3vw, 32px)',
        height: '60px',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #F59E0B, #D97706)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
          }}>
            <Globe size={20} />
          </div>
          <span style={{
            fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: 800,
            color: '#FFFFFF', letterSpacing: '-0.02em',
          }}>
            INFL<span style={{ color: '#F59E0B' }}>U</span>TA
          </span>
        </a>

        {/* Desktop Links */}
        <div className="influta-nav-desktop" style={{ alignItems: 'center', gap: '28px' }}>
          {v4Nav.links.map((link) => (
            <a key={link.label} href={link.href} className="influta-nav-link hover:text-white" style={{
              fontSize: '13px', fontWeight: 600, color: '#94A3B8',
              textDecoration: 'none', transition: 'all 0.3s ease',
              fontFamily: "'Inter', sans-serif",
            }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="influta-nav-desktop" style={{ alignItems: 'center', gap: '10px' }}>
          <a
            href={`${wa}Bonjour+INFLUTA+!+Je+veux+en+savoir+plus.`}
            target="_blank" rel="noopener noreferrer"
            style={{
              padding: '10px 20px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#FFFFFF', fontSize: '13px', fontWeight: 600,
              textDecoration: 'none', fontFamily: "'Inter', sans-serif",
              transition: 'all 0.3s ease',
            }}
          >
            Se connecter
          </a>
          <a
            href={`${wa}Bonjour+INFLUTA+!+Je+veux+rejoindre+les+premiers+partenaires.`}
            target="_blank" rel="noopener noreferrer"
            className="influta-btn-shimmer"
            style={{
              padding: '10px 22px', borderRadius: '12px',
              background: 'linear-gradient(135deg, #F59E0B, #D97706)',
              color: '#0B0F19',
              fontSize: '13px', fontWeight: 700,
              textDecoration: 'none', fontFamily: "'Inter', sans-serif",
              boxShadow: '0 4px 14px rgba(245, 158, 11, 0.2)',
              transition: 'all 0.3s ease',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}
          >
            Devenir partenaire <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="influta-nav-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', 
            cursor: 'pointer', borderRadius: '10px', padding: '10px',
            color: '#FFFFFF',
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="influta-nav-mobile-menu" style={{
          background: '#0B0F19',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '20px clamp(16px, 3vw, 32px)',
          flexDirection: 'column', gap: '16px',
        }}>
          {v4Nav.links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{
              fontSize: '15px', fontWeight: 500, color: '#94A3B8',
              textDecoration: 'none', padding: '4px 0',
            }}>
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
            <a
              href={`${wa}Bonjour+INFLUTA+!+Je+veux+rejoindre+les+premiers+partenaires.`}
              target="_blank" rel="noopener noreferrer"
              style={{
                padding: '12px', borderRadius: '8px', textAlign: 'center',
                background: '#F59E0B', color: '#0B0F19',
                fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              }}
            >
              Devenir partenaire
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
