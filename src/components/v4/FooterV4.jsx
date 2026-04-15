import { v4Footer, v4Hero } from '@/data/contentV4';
import { MessageSquare, ExternalLink, ShieldCheck, Mail, Globe, Clock } from 'lucide-react';

export default function FooterV4() {
  const wa = v4Hero.whatsappBase;

  return (
    <footer style={{
      background: '#0B0F19',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: 'clamp(48px, 6vw, 80px) clamp(20px, 5vw, 48px) 24px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" style={{ marginBottom: '48px' }}>
          {/* Col 1: Brand */}
          <div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: 800, color: '#FFFFFF', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
              INFL<span style={{ color: '#F59E0B' }}>U</span>TA
            </h3>
            <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6, fontWeight: 300, margin: '0 0 20px' }}>
              {v4Footer.tagline}
            </p>

            {/* Dev Notice */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.02))',
              border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '24px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '60px', height: '60px',
                background: 'rgba(245,158,11,0.1)',
                borderRadius: '50%', filter: 'blur(20px)',
              }} />
              <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.6, margin: 0, display: 'flex', gap: '10px' }}>
                <Clock size={16} color="#F59E0B" style={{ flexShrink: 0 }} />
                <span>{v4Footer.devNotice}</span>
              </p>
            </div>

            <a
              href={`${wa}Bonjour+INFLUTA+!`}
              target="_blank" rel="noopener noreferrer"
              style={{ 
                fontSize: '13px', color: '#22C55E', fontWeight: 700, 
                textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px',
                transition: 'all 0.3s ease',
              }}
              className="hover:translate-x-1"
            >
              <MessageSquare size={16} /> Nous contacter sur WhatsApp
            </a>
          </div>

          {/* Col 2: Plateforme */}
          <div>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 16px' }}>
              Plateforme
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {v4Footer.platformLinks.map((link) => (
                <a key={link} href="#" style={{ 
                  fontSize: '13px', color: '#94A3B8', textDecoration: 'none', 
                  transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '6px' 
                }} className="hover:text-white group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-orange-500 transition-colors" />
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Rejoindre */}
          <div>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 16px' }}>
              Rejoindre
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {v4Footer.joinLinks.map((link) => (
                <a key={link} href="#" style={{ 
                  fontSize: '13px', color: '#94A3B8', textDecoration: 'none', 
                  transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '6px' 
                }} className="hover:text-white group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-orange-500 transition-colors" />
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Légal */}
          <div>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 16px' }}>
              Légal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {v4Footer.legalLinks.map((link) => (
                <a key={link} href="#" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }}>
                  {link}
                </a>
              ))}
              <p style={{ fontSize: '12px', color: '#475569', margin: '8px 0 0' }}>{v4Footer.domain}</p>
              <p style={{ fontSize: '12px', color: '#475569', margin: '2px 0 0' }}>{v4Footer.contactNote}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '32px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '16px',
        }}>
          <p style={{ fontSize: '12px', color: '#64748B', margin: 0, fontWeight: 400 }}>
            © 2026 INFLUTA · La plateforme panafricaine conçue pour l'Afrique · <span style={{ color: '#F59E0B' }}>influta.africa</span>
          </p>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '8px 16px', borderRadius: '12px',
            background: 'rgba(245,158,11,0.05)',
            border: '1px solid rgba(245,158,11,0.1)',
            fontSize: '11px', color: '#F59E0B', fontWeight: 700,
            fontFamily: "'Syne', sans-serif",
            textTransform: 'uppercase', letterSpacing: '1px',
          }}>
            <Clock size={12} /> Lancement J-60
          </div>
        </div>
      </div>
    </footer>
  );
}
