import { Check, Minus } from 'lucide-react';

export default function PricingV2() {
  const features = [
    { name: 'Licences Utilisateurs', free: '1', pro: 'Illimité', biz: 'Personnalisable' },
    { name: 'Volume Transactionnel Max', free: '500K FCFA', pro: '10M FCFA', biz: 'Illimité' },
    { name: 'Système de paiement Escrow', free: true, pro: true, biz: true },
    { name: 'Génération de contrats légaux', free: false, pro: true, biz: true },
    { name: 'Analytics de performance (API)', free: false, pro: true, biz: true },
    { name: 'SSO (SAML, OAuth)', free: false, pro: false, biz: true },
    { name: 'Support SLA Garanti', free: false, pro: '48h', biz: 'H24 (Account Manager)' },
  ];

  const renderValue = (val) => {
    if (typeof val === 'boolean') {
      return val ? <Check size={16} color="#10B981" /> : <Minus size={16} color="#CBD5E1" />;
    }
    return <span style={{ fontSize: '12px', fontWeight: 600, color: '#0F172A', fontFamily: "'JetBrains Mono', monospace" }}>{val}</span>;
  };

  return (
    <section id="pricing" style={{ paddingTop: 'clamp(80px, 12vw, 160px)', paddingBottom: 'clamp(56px, 7vw, 100px)', paddingLeft: 'clamp(24px, 5vw, 48px)', paddingRight: 'clamp(24px, 5vw, 48px)', background: '#ffffff', width: '100%', overflowX: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
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
            Modèle économique transparent.
          </h2>
          <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '600px', margin: '0 auto', fontFamily: "'Inter', sans-serif" }}>
            Une facturation claire et prévisible, pensée pour l'échelle Enterprise.
          </p>
        </div>

        {/* Mobile Stacked Pricing Cards (Visible only on mobile/tablet) */}
        <div className="block lg:hidden">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px', paddingLeft: 'clamp(24px, 5vw, 32px)', paddingRight: 'clamp(24px, 5vw, 32px)' }}>
           
           {/* Starter Card */}
           <div style={{ border: '1px solid #CBD5E1', borderRadius: '4px', background: '#ffffff', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
             <div style={{ padding: '32px', borderBottom: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: 0 }}>Starter</h4>
               <div style={{ fontSize: '32px', fontWeight: 800, color: '#1E3A5F', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>
                 0<span style={{ fontSize: '12px', fontWeight: 600, color: '#64748B' }}> /MO</span>
               </div>
               <button style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', background: '#ffffff', color: '#0F172A', fontWeight: 600, fontSize: '13px', borderRadius: '2px' }}>Découvrir</button>
             </div>
             <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#F8FAFC' }}>
               {features.map((f, i) => (
                 <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                   <span style={{ fontSize: '13px', color: '#475569', fontWeight: 500 }}>{f.name}</span>
                   {renderValue(f.free)}
                 </div>
               ))}
             </div>
           </div>

           {/* Professional Card */}
           <div style={{ border: '2px solid #10B981', borderRadius: '4px', background: '#ffffff', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
             <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: '#10B981' }} />
             <div style={{ padding: '32px', borderBottom: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '16px', background: '#F1F5F9' }}>
               <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: 0 }}>Professional</h4>
               <div style={{ fontSize: '32px', fontWeight: 800, color: '#10B981', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>
                 9,9k<span style={{ fontSize: '12px', fontWeight: 600, color: '#64748B' }}> /MO</span>
               </div>
               <button style={{ width: '100%', padding: '12px', border: 'none', background: '#1E3A5F', color: '#ffffff', fontWeight: 600, fontSize: '13px', borderRadius: '2px' }}>Mettre à niveau</button>
             </div>
             <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#ffffff' }}>
               {features.map((f, i) => (
                 <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                   <span style={{ fontSize: '13px', color: '#475569', fontWeight: f.pro === true ? 600 : 500 }}>{f.name}</span>
                   {renderValue(f.pro)}
                 </div>
               ))}
             </div>
           </div>

           {/* Enterprise Card */}
           <div style={{ border: '1px solid #CBD5E1', borderRadius: '4px', background: '#ffffff', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
             <div style={{ padding: '32px', borderBottom: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: 0 }}>Enterprise</h4>
               <div style={{ fontSize: '32px', fontWeight: 800, color: '#1E3A5F', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>
                 29,9k<span style={{ fontSize: '12px', fontWeight: 600, color: '#64748B' }}> /MO</span>
               </div>
               <button style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', background: '#ffffff', color: '#0F172A', fontWeight: 600, fontSize: '13px', borderRadius: '2px' }}>Contacter les ventes</button>
             </div>
             <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#F8FAFC' }}>
               {features.map((f, i) => (
                 <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                   <span style={{ fontSize: '13px', color: '#475569', fontWeight: 500 }}>{f.name}</span>
                   {renderValue(f.biz)}
                 </div>
               ))}
             </div>
           </div>
          </div>
        </div>

        {/* Structural Pricing Matrix Table (Visible only on desktop) */}
        <div className="hidden lg:block bg-[#F8FAFC] border border-[#CBD5E1] rounded w-full">
          <div style={{ width: '100%' }}>
          
          {/* Table Header (Plans) */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: '#ffffff', borderBottom: '2px solid #0F172A' }}>
             <div style={{ padding: '32px 24px', display: 'flex', alignItems: 'end' }}>
               <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', margin: 0 }}>Comparatif des licences</h3>
             </div>
             
             {/* Free */}
             <div style={{ padding: '32px 24px', borderLeft: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: 0 }}>Starter</h4>
               <div style={{ fontSize: '32px', fontWeight: 800, color: '#1E3A5F', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>
                 0<span style={{ fontSize: '12px', fontWeight: 600, color: '#64748B' }}> /MO</span>
               </div>
               <button style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', background: '#ffffff', color: '#0F172A', fontWeight: 600, fontSize: '13px', borderRadius: '2px', cursor: 'pointer' }}>Découvrir</button>
             </div>

             {/* Pro */}
             <div style={{ padding: '32px 24px', borderLeft: '1px solid #E2E8F0', background: '#F1F5F9', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
               <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: '#10B981' }} />
               <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: 0 }}>Professional</h4>
               <div style={{ fontSize: '32px', fontWeight: 800, color: '#10B981', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>
                 9,9k<span style={{ fontSize: '12px', fontWeight: 600, color: '#64748B' }}> /MO</span>
               </div>
               <button style={{ width: '100%', padding: '12px', border: 'none', background: '#1E3A5F', color: '#ffffff', fontWeight: 600, fontSize: '13px', borderRadius: '2px', cursor: 'pointer' }}>Mettre à niveau</button>
             </div>

             {/* Enterprise */}
             <div style={{ padding: '32px 24px', borderLeft: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: 0 }}>Enterprise</h4>
               <div style={{ fontSize: '32px', fontWeight: 800, color: '#1E3A5F', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>
                 29,9k<span style={{ fontSize: '12px', fontWeight: 600, color: '#64748B' }}> /MO</span>
               </div>
               <button style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', background: '#ffffff', color: '#0F172A', fontWeight: 600, fontSize: '13px', borderRadius: '2px', cursor: 'pointer' }}>Contacter les ventes</button>
             </div>
          </div>

          {/* Table Body */}
          <div style={{ background: '#ffffff' }}>
            {features.map((feature, i) => (
               <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderBottom: i === features.length - 1 ? 'none' : '1px solid #E2E8F0', alignItems: 'center' }}>
                 <div style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 600, color: '#475569', fontFamily: "'Inter', sans-serif" }}>
                   {feature.name}
                 </div>
                 
                 {[feature.free, feature.pro, feature.biz].map((val, idx) => (
                   <div key={idx} style={{ padding: '16px 24px', borderLeft: '1px solid #E2E8F0', display: 'flex', justifyContent: 'center', background: idx === 1 ? '#F8FAFC' : 'transparent' }}>
                     {typeof val === 'boolean' ? (
                       val ? <Check size={18} color="#10B981" /> : <Minus size={18} color="#CBD5E1" />
                     ) : (
                       <span style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A', fontFamily: "'JetBrains Mono', monospace" }}>{val}</span>
                     )}
                   </div>
                 ))}
               </div>
            ))}
          </div>

        </div>
        </div>
        
      </div>
    </section>
  );
}
