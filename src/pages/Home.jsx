import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Shield, Sparkles, Rocket } from 'lucide-react';

const concepts = [
  {
    id: 'v1',
    name: 'Direction Créative & Dynamique',
    icon: Palette,
    description:
      'Approche visuelle basée sur des contrastes élevés et une palette de couleurs chaleureuses. Met l\'accent sur l\'énergie et la vitalité de la création de contenu.',
    tags: ['Haute Visibilité', 'Expressif', 'Chaleureux'],
    accent: '#F97316',
    accentSoft: 'rgba(249, 115, 22, 0.12)',
    accentBorder: 'rgba(249, 115, 22, 0.25)',
    glowShadow: '0 8px 40px rgba(249, 115, 22, 0.15), 0 0 80px rgba(249, 115, 22, 0.06)',
  },
  {
    id: 'v2',
    name: 'Direction Institutionnelle & Corporate',
    icon: Shield,
    description:
      'Structure rigoureuse et typographies sobres. Privilégie la clarté informationnelle et la rassurance pour les partenaires institutionnels.',
    tags: ['Sobre', 'Structuré', 'Professionnel'],
    accent: '#3B82F6',
    accentSoft: 'rgba(59, 130, 246, 0.12)',
    accentBorder: 'rgba(59, 130, 246, 0.25)',
    glowShadow: '0 8px 40px rgba(59, 130, 246, 0.15), 0 0 80px rgba(59, 130, 246, 0.06)',
  },
  {
    id: 'v3',
    name: 'Direction Épurée & Minimaliste',
    icon: Sparkles,
    description:
      'Équilibre entre espaces négatifs et éléments interactifs modernes. Une interface légère favorisant l\'expérience utilisateur et la fluidité.',
    tags: ['Minimaliste', 'UX Focus', 'Équilibré'],
    accent: '#10B981',
    accentSoft: 'rgba(16, 185, 129, 0.12)',
    accentBorder: 'rgba(16, 185, 129, 0.25)',
    glowShadow: '0 8px 40px rgba(16, 185, 129, 0.15), 0 0 80px rgba(16, 185, 129, 0.06)',
  },
  {
    id: 'v4',
    name: 'Direction INFLUTA · Landing Officielle',
    icon: Rocket,
    description:
      'Reproduction fidèle du design de influta.com. Dark mode exclusif, typographie Syne, accent or/ambre et architecture orientée conversion WhatsApp.',
    tags: ['Dark Mode', 'Or & Ambre', 'WhatsApp-First'],
    accent: '#F59E0B',
    accentSoft: 'rgba(245, 158, 11, 0.12)',
    accentBorder: 'rgba(245, 158, 11, 0.25)',
    glowShadow: '0 8px 40px rgba(245, 158, 11, 0.15), 0 0 80px rgba(245, 158, 11, 0.06)',
  },
];

/* ─── Card component ─── */
function ConceptCard({ concept, index }) {
  const Icon = concept.icon;
  const labels = ['Proposition A', 'Proposition B', 'Proposition C', 'Proposition D'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: '100%' }}
    >
      <Link to={`/${concept.id}`} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
        <div
          className="influka-card"
          style={{
            '--accent': concept.accent,
            '--accent-soft': concept.accentSoft,
            '--accent-border': concept.accentBorder,
            '--glow-shadow': concept.glowShadow,
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '32px',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            cursor: 'pointer',
          }}
        >
          {/* Accent line top */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '32px',
              right: '32px',
              height: '2px',
              borderRadius: '2px',
              background: concept.accent,
              opacity: 0.5,
              transition: 'opacity 0.5s ease',
            }}
            className="influka-card__accent"
          />

          {/* Glow orb (visible on hover via CSS) */}
          <div
            className="influka-card__glow"
            style={{
              position: 'absolute',
              top: '-40px',
              left: '-40px',
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: concept.accent,
              filter: 'blur(60px)',
              opacity: 0,
              pointerEvents: 'none',
              transition: 'opacity 0.7s ease',
            }}
          />

          {/* Header : icon + label + title */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <div
              className="influka-card__icon"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: concept.accentSoft,
                flexShrink: 0,
                transition: 'transform 0.5s ease',
              }}
            >
              <Icon size={20} style={{ color: concept.accent }} />
            </div>
            <div>
              <p style={{ fontSize: '10px', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500, marginBottom: '2px' }}>
                {labels[index]}
              </p>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: concept.accent, lineHeight: 1.2, margin: 0 }}>
                {concept.name}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p style={{ position: 'relative', zIndex: 1, fontSize: '13px', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>
            {concept.description}
          </p>

          {/* Tags */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {concept.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  fontSize: '10px',
                  fontWeight: 500,
                  color: concept.accent,
                  background: concept.accentSoft,
                  border: `1px solid ${concept.accentBorder}`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div
            className="influka-card__cta"
            style={{
              position: 'relative',
              zIndex: 1,
              marginTop: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              fontWeight: 600,
              color: concept.accent,
              transition: 'gap 0.3s ease',
            }}
          >
            Explorer le concept
            <ArrowRight size={14} style={{ transition: 'transform 0.3s ease' }} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0B0F1A', color: '#F3F4F6', fontFamily: "'Inter', sans-serif" }}>

      {/* ── Ambient Mesh Gradients (fixed background) ── */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden' }} aria-hidden="true">
        <div style={{ position: 'absolute', top: '-8%', left: '15%', width: '500px', height: '500px', borderRadius: '50%', background: '#F97316', filter: 'blur(160px)', opacity: 0.06 }} />
        <div style={{ position: 'absolute', bottom: '-5%', right: '12%', width: '420px', height: '420px', borderRadius: '50%', background: '#3B82F6', filter: 'blur(140px)', opacity: 0.05 }} />
        <div style={{ position: 'absolute', top: '45%', left: '55%', width: '300px', height: '300px', borderRadius: '50%', background: '#10B981', filter: 'blur(120px)', opacity: 0.04 }} />
      </div>

      {/* ── Main Content (centered vertically) ── */}
      <main style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto', padding: '80px 32px 48px' }}>

          {/* Badge */}
          <motion.div
            style={{ textAlign: 'center', marginBottom: '20px' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.04em',
              color: '#9CA3AF',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
            }}>
              Index des concepts
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, fontFamily: "'Poppins', sans-serif", lineHeight: 1.1, color: '#FFFFFF', margin: '0 0 8px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            INFLUTA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{
              textAlign: 'center',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1.2,
              margin: '0 0 20px',
              color: '#FFFFFF'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Sélecteur de Directions Artistiques
          </motion.p>

          {/* Description */}
          <motion.p
            style={{ textAlign: 'center', fontSize: '15px', color: '#9CA3AF', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            Revue de quatre propositions d'interfaces pour la plateforme. Chaque concept explore un univers graphique et une structure UX distincte.
          </motion.p>

          {/* ── Cards Grid ── */}
          <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {concepts.map((concept, i) => (
              <ConceptCard key={concept.id} concept={concept} index={i} />
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.06)', padding: '28px 0', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#4B5563', letterSpacing: '0.04em' }}>
          INFLUTA — Maquettes de présentation · Avril 2026
        </p>
      </footer>
    </div>
  );
}
