const footerLinks = {
  Plateforme: ['Créateurs', 'Marques', 'Agences', 'Tarifs'],
  Ressources: ['Comment ça marche', 'FAQ', 'Blog', 'API'],
  Entreprise: ['À propos', 'Carrières', 'Presse', 'Contact'],
  Légal: ['CGU', 'Confidentialité', 'Cookies', 'Mentions légales'],
};

const socials = [
  { label: 'Instagram', letter: 'Ig' },
  { label: 'YouTube', letter: 'Yt' },
  { label: 'X', letter: 'X' },
  { label: 'Facebook', letter: 'Fb' },
  { label: 'LinkedIn', letter: 'Li' },
];

export default function Footer({ variant = 'v1' }) {
  const styles = {
    v1: {
      bg: 'bg-v1-black',
      text: 'text-gray-400',
      heading: 'text-white',
      logo: 'text-v1-orange',
      link: 'hover:text-v1-orange',
      border: 'border-white/10',
      social: 'text-gray-500 hover:text-v1-orange',
    },
    v2: {
      bg: 'bg-v2-gray-900',
      text: 'text-gray-400',
      heading: 'text-white',
      logo: 'text-v2-gold',
      link: 'hover:text-v2-gold',
      border: 'border-white/10',
      social: 'text-gray-500 hover:text-v2-gold',
    },
    v3: {
      bg: 'bg-v3-dark',
      text: 'text-gray-400',
      heading: 'text-white',
      logo: 'text-v3-emerald-light',
      link: 'hover:text-v3-emerald-light',
      border: 'border-white/10',
      social: 'text-gray-500 hover:text-v3-emerald-light',
    },
  };

  const s = styles[variant];

  return (
    <footer className={`${s.bg} ${s.text}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand col */}
          <div className="col-span-2">
            <span className={`text-2xl font-bold font-poppins ${s.logo}`}>INFLUKA</span>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              La plateforme panafricaine qui connecte créateurs, influenceurs et marques pour des collaborations à impact.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map(({ label, letter }) => (
                <a key={label} href="#" aria-label={label} className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold transition-colors duration-200 ${s.social}`}>
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${s.heading}`}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className={`text-sm transition-colors duration-200 ${s.link}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className={`mt-12 pt-8 border-t ${s.border} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <p className="text-xs">© 2026 INFLUKA. Tous droits réservés.</p>
          <p className="text-xs">Fait avec passion pour l'Afrique 🌍</p>
        </div>
      </div>
    </footer>
  );
}
