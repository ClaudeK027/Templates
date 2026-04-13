import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import FeatureCard from '../common/FeatureCard';
import { creatorBenefits, brandBenefits } from '../../data/content';

export default function FeaturesV1() {
  const [activeTab, setActiveTab] = useState('creator');
  const benefits = activeTab === 'creator' ? creatorBenefits : brandBenefits;

  return (
    <section id="creators" className="py-20 lg:py-28 bg-v1-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          variant="v1"
          tag="Avantages"
          title="Tout ce qu'il faut pour réussir."
          subtitle="Des outils puissants, que vous soyez créateur ou marque."
        />

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-100">
            {[
              { key: 'creator', label: 'Créateurs' },
              { key: 'brand', label: 'Marques' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-v1-purple text-white shadow-md'
                    : 'text-gray-600 hover:text-v1-purple'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {benefits.map((benefit, i) => (
              <FeatureCard key={benefit.title} {...benefit} variant="v1" index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
