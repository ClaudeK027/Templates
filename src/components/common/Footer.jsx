const footerLinks = {
  Plateforme: ['Créateurs', 'Marques', 'Agences', 'Tarifs'],
  Ressources: ['Comment ça marche', 'FAQ', 'Blog', 'API'],
  Entreprise: ['À propos', 'Carrières', 'Presse', 'Contact'],
  Légal: ['CGU', 'Confidentialité', 'Cookies'],
};

export default function Footer({ variant = 'v1' }) {
  const config = {
    v1: { bg: '#1C1917', logo: '#F97316', text: '#9CA3AF', heading: '#ffffff', border: 'rgba(255,255,255,0.08)' },
    v2: { bg: '#111827', logo: '#D4A853', text: '#9CA3AF', heading: '#ffffff', border: 'rgba(255,255,255,0.08)' },
    v3: { bg: '#0F172A', logo: '#10B981', text: '#9CA3AF', heading: '#ffffff', border: 'rgba(255,255,255,0.08)' },
  };
  const c = config[variant] || config.v1;

  return (
    <footer style={{ background: c.bg, color: c.text, padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 40px) clamp(48px, 6vw, 80px)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12 mb-16 text-center md:text-left">

          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left" style={{ marginBottom: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 800, fontFamily: "'Poppins', sans-serif", color: c.logo, letterSpacing: '-0.02em' }}>
              INFLUKA
            </span>
            <p style={{ marginTop: '16px', fontSize: '14px', lineHeight: 1.6, maxWidth: '260px' }} className="md:text-left">
              La plateforme panafricaine de marketing d'influence qui connecte les talents créatifs et les marques.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col items-center md:items-start">
              <h4 style={{ fontSize: '12px', fontWeight: 700, color: c.heading, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{ fontSize: '14px', color: c.text, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseOver={(e) => (e.currentTarget.style.color = c.logo)}
                      onMouseOut={(e) => (e.currentTarget.style.color = c.text)}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: '32px', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', opacity: 0.8 }}>© 2026 INFLUKA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
