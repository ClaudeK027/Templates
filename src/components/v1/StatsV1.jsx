import StatCounter from '@/components/common/StatCounter';
import { stats } from '@/data/content';

export default function StatsV1() {
  return (
    <section style={{ 
      padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 40px)', 
      background: 'linear-gradient(135deg, #F97316, #EA580C)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Graphic Patterns */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at 20% 150%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% -50%, rgba(255,255,255,0.15) 0%, transparent 50%)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center text-white">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '16px',
                padding: '40px 24px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, background 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; }}
            >
              <StatCounter {...stat} variant="v1" index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
