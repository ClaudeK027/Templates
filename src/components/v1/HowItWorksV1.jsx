import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import { stepsCreator, stepsBrand } from '@/data/content';

export default function HowItWorksV1() {
  const [activeTab, setActiveTab] = useState('creator');
  const steps = activeTab === 'creator' ? stepsCreator : stepsBrand;

  return (
    <section id="how-it-works" style={{ background: '#ffffff', padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 40px) clamp(64px, 8vw, 100px)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle
          variant="v1"
          tag="Comment ça marche"
          title="Simple, rapide, efficace."
          subtitle="Que vous soyez créateur ou marque, commencez en quelques minutes."
        />

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              borderRadius: '10px',
              background: '#F5F0EB',
              padding: '4px',
              gap: '4px',
            }}
          >
            {[
              { key: 'creator', label: 'Je suis créateur' },
              { key: 'brand', label: 'Je suis une marque' },
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
                  background: activeTab === tab.key ? '#F97316' : 'transparent',
                  color: activeTab === tab.key ? '#fff' : '#6B7280',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  style={{
                    padding: 'clamp(20px, 3vw, 28px)',
                    borderRadius: '14px',
                    border: '1px solid rgba(0,0,0,0.07)',
                    background: '#ffffff',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  }}
                  className="influka-feature-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '24px',
                        fontWeight: 800,
                        fontFamily: "'Poppins', sans-serif",
                        color: 'rgba(249,115,22,0.2)',
                        lineHeight: 1,
                      }}
                    >
                      {step.step}
                    </span>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'rgba(249,115,22,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={18} style={{ color: '#F97316' }} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#1C1917', marginBottom: '8px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.65 }}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
