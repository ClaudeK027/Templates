import { stepsBrand } from '@/data/content';

export default function HowItWorksV2() {
  const steps = stepsBrand;

  return (
    <section id="how-it-works" style={{ paddingTop: 'clamp(80px, 12vw, 160px)', paddingBottom: 'clamp(64px, 8vw, 120px)', paddingLeft: 'clamp(24px, 5vw, 48px)', paddingRight: 'clamp(24px, 5vw, 48px)', background: '#F8FAFC' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '80px', borderLeft: '4px solid #1E3A5F', paddingLeft: '24px' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3vw, 2.5rem)',
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
              color: '#0F172A',
              margin: '0 0 16px',
              letterSpacing: '-0.02em'
            }}
          >
            Processus d'intégration.
          </h2>
          <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '600px', margin: 0, fontFamily: "'Inter', sans-serif" }}>
            Déploiement de votre campagne via un pipeline sécurisé et auditable.
          </p>
        </div>

        {/* Horizontal Pipeline Tech Flowchart */}
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-4 lg:pt-8">
          
          {/* Connecting Lines Desktop & Mobile */}
          <div className="hidden lg:block absolute top-[48px] left-[2rem] right-[2rem] h-[2px] bg-[#E2E8F0] z-0" />
          <div className="block lg:hidden absolute left-[15px] top-[20px] bottom-[20px] w-[2px] bg-[#E2E8F0] z-0" />
          
          {steps.map((step, i) => {
            const Icon = step.icon;
            
            return (
              <div key={step.step} className="flex flex-row lg:flex-col lg:flex-1 relative z-10 gap-6 lg:gap-8 items-start lg:items-start">
                 {/* Node */}
                 <div className="flex-shrink-0 relative z-20">
                   <div className="w-8 h-8 bg-[#1E3A5F] flex items-center justify-center text-xs font-bold text-white font-mono border-4 border-[#F8FAFC] shadow-sm">
                     {step.step}
                   </div>
                 </div>
                 
                 {/* Block */}
                 <div className="flex-1 bg-white border border-[#CBD5E1] rounded" style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <Icon size={18} color="#1E3A5F" />
                      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', margin: 0, fontFamily: "'Inter', sans-serif" }}>{step.title}</h3>
                    </div>
                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: 0, fontFamily: "'Inter', sans-serif" }}>
                      {step.description}
                    </p>
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
