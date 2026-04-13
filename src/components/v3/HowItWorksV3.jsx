import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { stepsCreator, stepsBrand } from '../../data/content';

export default function HowItWorksV3() {
  const [activeTab, setActiveTab] = useState('creator');
  const steps = activeTab === 'creator' ? stepsCreator : stepsBrand;

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-v3-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          variant="v3"
          tag="Comment ça marche"
          title="4 étapes vers le succès."
          subtitle="Un parcours fluide, que vous soyez créateur ou marque."
        />

        {/* Tabs — pill style */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100">
            {[
              { key: 'creator', label: '🎨 Créateur' },
              { key: 'brand', label: '🏢 Marque' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-v3-emerald to-v3-emerald-light text-white shadow-md'
                    : 'text-gray-600 hover:text-v3-emerald'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Steps — horizontal cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-v3-emerald/30 shadow-sm hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                >
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-5xl font-bold font-poppins text-v3-emerald/10 group-hover:text-v3-emerald/20 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-v3-emerald/10 to-v3-coral/10 flex items-center justify-center">
                      <Icon size={20} className="text-v3-emerald" />
                    </div>
                  </div>
                  <h3 className="font-bold text-v3-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>

                  {/* Connector arrow */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-v3-emerald/30 z-10">
                      →
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
