import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { stepsCreator, stepsBrand } from '../../data/content';

export default function HowItWorksV2() {
  const [activeTab, setActiveTab] = useState('brand');
  const steps = activeTab === 'creator' ? stepsCreator : stepsBrand;

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-v2-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          variant="v2"
          tag="Processus"
          title="Un workflow structuré et transparent."
          subtitle="De la publication à la livraison, chaque étape est tracée et sécurisée."
        />

        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-white rounded-lg p-1 border border-v2-gray-200 shadow-sm">
            {[
              { key: 'brand', label: 'Pour les marques' },
              { key: 'creator', label: 'Pour les créateurs' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-v2-navy text-white shadow-md'
                    : 'text-v2-gray-600 hover:text-v2-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Steps — vertical timeline style */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex gap-6 mb-8 last:mb-0">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-v2-navy flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-v2-navy/20">
                      {step.step}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-gradient-to-b from-v2-navy/30 to-v2-gray-200 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl border border-v2-gray-200 p-6 flex-1 shadow-sm hover:shadow-md transition-shadow duration-300 mb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={20} className="text-v2-gold" />
                      <h3 className="font-bold text-v2-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-sm text-v2-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
