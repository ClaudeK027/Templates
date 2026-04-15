import { v4Footer, v4Hero } from '@/data/contentV4';

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
              background: 'rgba(245,158,11,0.06)',
              border: '1px solid rgba(245,158,11,0.15)',
              borderRadius: '12px',
              padding: '14px',
              marginBottom: '16px',
            }}>
              <p style={{ fontSize: '12px', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
                🎉 {v4Footer.devNotice}
              </p>
            </div>

            <a
              href={`${wa}Bonjour+INFLUTA+!`}
              target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', color: '#22C55E', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              ◎ Nous contacter sur WhatsApp
            </a>
          </div>

          {/* Col 2: Plateforme */}
          <div>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 16px' }}>
              Plateforme
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {v4Footer.platformLinks.map((link) => (
                <a key={link} href="#" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }}>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {v4Footer.joinLinks.map((link) => (
                <a key={link} href="#" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s' }}>
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
          paddingTop: '20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontSize: '12px', color: '#475569', margin: 0 }}>
            © 2026 INFLUTA · La plateforme panafricaine de collaboration entre organisations et talents & influenceurs · influta.africa
          </p>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '11px', color: '#F59E0B', fontWeight: 600,
            fontFamily: "'Syne', sans-serif",
          }}>
            🎉 En développement · Lancement J-60
          </span>
        </div>
      </div>
    </footer>
  );
}
