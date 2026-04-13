import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { stepsCreator, stepsBrand } from '../../data/content';

export default function HowItWorksV1() {
  const [activeTab, setActiveTab] = useState('creator');
  const steps = activeTab === 'creator' ? stepsCreator : stepsBrand;

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          variant="v1"
          tag="Comment ça marche"
          title="Simple, rapide, efficace."
          subtitle="Que vous soyez créateur ou marque, commencez en quelques minutes."
        />

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-v1-warm-gray rounded-full p-1">
            {[
              { key: 'creator', label: 'Je suis créateur' },
              { key: 'brand', label: 'Je suis une marque' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-v1-orange text-white shadow-lg'
                    : 'text-gray-600 hover:text-v1-orange'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative">
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-v1-orange/40 to-transparent" />
                  )}
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-v1-orange/30 hover:shadow-lg transition-all duration-300 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl font-bold font-poppins text-v1-orange/20">{step.step}</span>
                      <div className="w-10 h-10 rounded-xl bg-v1-orange/10 flex items-center justify-center">
                        <Icon size={20} className="text-v1-orange" />
                      </div>
                    </div>
                    <h3 className="font-bold text-v1-black mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
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
