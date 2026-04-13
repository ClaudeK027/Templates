import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { creatorBenefits, brandBenefits } from '../../data/content';

export default function FeaturesV3() {
  return (
    <section id="creators" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          variant="v3"
          tag="Avantages"
          title="Le meilleur pour chacun."
          subtitle="Des fonctionnalités pensées pour les créateurs et les marques."
        />

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Creators */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl">🎨</span>
              <h3 className="text-xl font-bold text-v3-dark">Pour les créateurs</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-v3-emerald/30 to-transparent" />
            </motion.div>
            <div className="space-y-4">
              {creatorBenefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    className="flex gap-4 p-4 rounded-xl hover:bg-v3-light border border-transparent hover:border-v3-emerald/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-v3-emerald/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-v3-emerald" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-v3-dark text-sm">{b.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{b.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Brands */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-2xl">🏢</span>
              <h3 className="text-xl font-bold text-v3-dark">Pour les marques</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-v3-coral/30 to-transparent" />
            </motion.div>
            <div className="space-y-4">
              {brandBenefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    className="flex gap-4 p-4 rounded-xl hover:bg-red-50/50 border border-transparent hover:border-v3-coral/10 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-v3-coral/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-v3-coral" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-v3-dark text-sm">{b.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{b.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
