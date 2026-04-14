export default function TestimonialsV2() {
  return (
    <section style={{ paddingTop: 'clamp(64px, 9vw, 120px)', paddingBottom: 'clamp(56px, 7vw, 100px)', paddingLeft: 'clamp(24px, 5vw, 48px)', paddingRight: 'clamp(24px, 5vw, 48px)', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-stretch">
          
          {/* Left Context / Title */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#1E3A5F', letterSpacing: '0.1em', display: 'block', marginBottom: '24px' }}>TÉMOIGNAGES & CAS CLIENTS</span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  fontFamily: "'Inter', sans-serif",
                  color: '#0F172A',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  margin: '0 0 24px'
                }}
              >
                Audité et approuvé par les leaders du marché.
              </h2>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
                INFLUKA gère quotidiennement la conformité et les flux croisés pour des dizaines d'entreprises à forte capitalisation.
              </p>
            </div>
            
            {/* Hard Data Point */}
            <div style={{ padding: '24px', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: '2px', borderLeft: '4px solid #10B981' }}>
               <span style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#64748B', marginBottom: '8px' }}>RÉDUCTION DES COÛTS OPÉRATIONNELS</span>
               <span style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', fontFamily: "'JetBrains Mono', monospace" }}>-42.5%</span>
            </div>
          </div>

          {/* Right Press Release Quote */}
          <div className="bg-white border border-[#CBD5E1] rounded relative" style={{ padding: 'clamp(32px, 5vw, 64px)' }}>
             
             {/* Decorative quotes */}
             <div className="absolute top-4 left-4 lg:top-8 lg:left-8 text-5xl lg:text-5xl text-[#E2E8F0] leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>"</div>

             <div style={{ position: 'relative', zIndex: 1 }}>
               <p style={{ 
                 fontSize: '24px', 
                 fontWeight: 500, 
                 color: '#0F172A', 
                 lineHeight: 1.6, 
                 fontFamily: "'Playfair Display', serif", 
                 fontStyle: 'italic',
                 margin: '0 0 48px',
                 maxWidth: '700px'
               }}>
                 L'implémentation de l'infrastructure Escrow d'INFLUKA a radicalement transformé notre chaîne de paiement intercontinentale. Nous avons éliminé 98% des risques de contrepartie et automatisé la vérification KYC pour l'ensemble de notre réseau de créateurs au Moyen-Orient et en Afrique. 
                 <br/><br/>
                 C'est aujourd'hui le socle inamovible de notre conformité financière B2B.
               </p>

               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '32px' }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 800, color: '#0F172A', fontFamily: "'Inter', sans-serif", letterSpacing: '-0.01em' }}>Jean-Marc D.</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Chief Financial Officer</p>
                  </div>
                  
                  {/* Fake Enterprise Logo */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', background: '#0F172A' }} />
                    <span style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.05em' }}>AfriBeauty Inc.</span>
                  </div>
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
