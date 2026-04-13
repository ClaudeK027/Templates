import { trustFeatures } from '../../data/content';
import { motion } from 'framer-motion';

export default function TrustV3() {
  return (
    <section className="py-20 lg:py-28 bg-v3-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-v3-emerald/10 text-v3-emerald text-xs font-semibold uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Confiance & Sécurité
          </motion.span>
          <motion.h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-v3-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Collaborez l'esprit tranquille.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-v3-emerald/10 to-v3-coral/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-v3-emerald" />
                </div>
                <h3 className="font-bold text-v3-dark mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
