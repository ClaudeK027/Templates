import { stats } from '@/data/content';

export default function StatsV2() {
  return (
    <section style={{ paddingTop: 'clamp(56px, 8vw, 100px)', paddingBottom: 'clamp(56px, 8vw, 100px)', paddingLeft: 'clamp(24px, 5vw, 48px)', paddingRight: 'clamp(24px, 5vw, 48px)', background: '#0F172A', borderTop: '1px solid #1E3A5F', borderBottom: '1px solid #1E3A5F', width: '100%', overflowX: 'hidden' }}>
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] items-center lg:items-stretch gap-12 lg:gap-0" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Left Side: Trust & Compliance */}
        <div className="flex flex-col items-center lg:items-start justify-center pb-8 lg:pb-0 lg:pr-12 lg:border-r border-[#1E3A5F]">
          <span className="text-center lg:text-left" style={{ fontSize: '10px', color: '#64748B', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '12px' }}>CONFIANCE & SÉCURITÉ</span>
          <div className="flex justify-center lg:justify-start" style={{ gap: '24px', opacity: 0.7 }}>
             {/* Fake logos via minimal text/svg */}
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 800, color: '#ffffff', fontFamily: "'Inter', sans-serif" }}>
               SOC<span style={{ color: '#1E3A5F' }}>|</span>2
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 800, color: '#ffffff', fontFamily: "'Inter', sans-serif" }}>
               ISO<span style={{ color: '#1E3A5F' }}>|</span>27001
             </div>
          </div>
        </div>

        {/* Right Side: Hard Stats Grid */}
        <div className="grid grid-cols-1 md:flex md:flex-row w-full gap-8 md:gap-0 mt-4 md:mt-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center md:items-start text-center md:text-left justify-center ${index === stats.length - 1 ? '' : 'md:border-r border-[#1E3A5F] md:pr-8 md:mr-8 lg:pr-12 lg:mr-12'}`}
              style={{ flex: 1 }}
            >
               <span style={{ fontSize: '32px', fontWeight: 700, color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.1 }}>{stat.value}</span>
               <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600, marginTop: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
