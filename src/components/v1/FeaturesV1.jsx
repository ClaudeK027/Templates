import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import FeatureCard from '@/components/common/FeatureCard';
import { creatorBenefits, brandBenefits } from '@/data/content';

export default function FeaturesV1() {
  const [activeTab, setActiveTab] = useState('creator');
  const benefits = activeTab === 'creator' ? creatorBenefits : brandBenefits;

  return (
    <section id="creators" style={{ background: '#FFFBF5', position: 'relative', padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 40px) clamp(64px, 8vw, 100px)' }}>
      <div id="brands" style={{ position: 'absolute', top: -80 }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle
          variant="v1"
          tag="Avantages"
          title="Tout ce qu'il faut pour réussir."
          subtitle="Des outils puissants, que vous soyez créateur ou marque."
        />

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              borderRadius: '10px',
              background: 'rgba(109,40,217,0.08)',
              padding: '4px',
              gap: '4px',
            }}
          >
            {[
              { key: 'creator', label: 'Créateurs' },
              { key: 'brand', label: 'Marques' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  fontFamily: 'inherit',
                  background: activeTab === tab.key ? '#6D28D9' : 'transparent',
                  color: activeTab === tab.key ? '#fff' : '#6B7280',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {benefits.map((b, i) => (
              <FeatureCard key={b.title} {...b} variant="v1" index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
