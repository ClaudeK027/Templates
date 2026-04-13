import SectionTitle from '../common/SectionTitle';
import { trustFeatures } from '../../data/content';
import { motion } from 'framer-motion';

export default function TrustV2() {
  return (
    <section className="py-20 lg:py-28 bg-v2-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-v2-gold/20 text-v2-gold text-xs font-semibold uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sécurité & Confiance
          </motion.span>
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white font-playfair"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Chaque transaction est protégée.
          </motion.h2>
          <motion.p
            className="mt-4 text-base lg:text-lg leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Notre infrastructure de confiance garantit des collaborations sereines.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-v2-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-v2-gold" />
                </div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
