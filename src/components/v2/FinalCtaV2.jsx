import { ArrowRight, Terminal } from 'lucide-react';

export default function FinalCtaV2() {
  return (
    <section style={{ paddingTop: 'clamp(64px, 9vw, 120px)', paddingBottom: 'clamp(48px, 6vw, 80px)', paddingLeft: 'clamp(24px, 5vw, 48px)', paddingRight: 'clamp(24px, 5vw, 48px)', background: '#0F172A', position: 'relative' }}>
      
      {/* Subtle Grid overlay for that data/server feel */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        
        <div style={{ width: '64px', height: '64px', background: '#1E3A5F', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
           <Terminal size={32} color="#ffffff" />
        </div>

        <h2
          style={{
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            fontWeight: 800,
            fontFamily: "'Inter', sans-serif",
            color: '#ffffff',
            lineHeight: 1.1,
            margin: '0 0 24px',
            letterSpacing: '-0.03em'
          }}
        >
          Prêt à déployer ?
        </h2>
        
        <p style={{ fontSize: '18px', color: '#94A3B8', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
          Initialisez votre environnement en moins de 5 minutes. Auditabilité totale, sécurité maximale.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="w-full sm:w-auto" style={{ 
            background: '#ffffff', 
            color: '#0F172A', 
            border: 'none', 
            padding: '16px 32px', 
            fontSize: '14px', 
            fontWeight: 700, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '8px', 
            cursor: 'pointer',
            borderRadius: '2px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Initialiser la configuration <ArrowRight size={16} />
          </button>
          <button className="w-full sm:w-auto" style={{ 
            background: 'transparent', 
            color: '#ffffff', 
            border: '1px solid rgba(255,255,255,0.2)', 
            padding: '16px 32px', 
            fontSize: '14px', 
            fontWeight: 600, 
            cursor: 'pointer',
            borderRadius: '2px',
            fontFamily: "'Inter', sans-serif",
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
          >
            Contacter un architecte
          </button>
        </div>
        
      </div>
    </section>
  );
}
