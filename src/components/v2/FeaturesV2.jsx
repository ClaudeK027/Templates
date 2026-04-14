import { creatorBenefits, brandBenefits } from '@/data/content';
import { ArrowRight } from 'lucide-react';

export default function FeaturesV2() {
  const allFeatures = [...creatorBenefits, ...brandBenefits].slice(0, 4);

  return (
    <section id="features" style={{ paddingTop: 'clamp(72px, 10vw, 140px)', paddingBottom: 'clamp(56px, 7vw, 100px)', paddingLeft: 'clamp(24px, 5vw, 48px)', paddingRight: 'clamp(24px, 5vw, 48px)', background: '#ffffff', position: 'relative' }}>
      <div id="brands" style={{ position: 'absolute', top: -80 }} />
      <div id="creators" style={{ position: 'absolute', top: -80 }} />
      
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', paddingBottom: '24px', borderBottom: '2px solid #0F172A' }}>
          <div>
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
              Capacités d'infrastructures.
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '600px', margin: 0, fontFamily: "'Inter', sans-serif" }}>
              Des modules conçus pour répondre aux plus hautes exigences B2B.
            </p>
          </div>
          <button style={{ background: 'transparent', border: '1px solid #0F172A', borderRadius: '2px', padding: '10px 24px', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
            Documentation Technique <ArrowRight size={14} />
          </button>
        </div>

        {/* Data Terminal Grid (2x2 Rigid Table) */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 border border-[#CBD5E1] rounded"
          style={{ 
            backgroundColor: '#F8FAFC'
          }}
        >
          {allFeatures.map((feature, i) => {
            const isRightCol = i % 2 !== 0;
            const isBottomRow = i >= 2;
            return (
              <div
                key={i}
                className={`bg-white flex flex-col ${isRightCol ? '' : 'md:border-r border-[#CBD5E1]'} ${isBottomRow ? 'md:border-b-0' : 'border-b border-[#CBD5E1]'}`}
                style={{ padding: 'clamp(32px, 4vw, 48px)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ width: '40px', height: '40px', background: '#F1F5F9', border: '1px solid #E2E8F0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '10px', color: '#1E3A5F', fontFamily: "'JetBrains Mono', monospace", fontWeight: 800 }}>M0{i+1}</span>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', margin: 0, fontFamily: "'Inter', sans-serif" }}>
                    {feature.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: '0 0 32px', flex: 1, fontFamily: "'Inter', sans-serif" }}>
                  {feature.description}
                </p>
                {/* Fake data terminal graph/table for visual density */}
                <div style={{ padding: '16px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '2px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748B' }}>METRIC</span>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#64748B' }}>VALUE</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '11px', color: '#0F172A', fontFamily: "'JetBrains Mono', monospace" }}>Availability</span>
                    <span style={{ fontSize: '11px', color: '#10B981', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>99.99%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px', color: '#0F172A', fontFamily: "'JetBrains Mono', monospace" }}>Processing</span>
                    <span style={{ fontSize: '11px', color: '#0F172A', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>&lt; 50ms</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
