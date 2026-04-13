import SectionTitle from '../common/SectionTitle';
import { trustFeatures } from '../../data/content';
import { motion } from 'framer-motion';

export default function TrustV1() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          variant="v1"
          tag="Confiance & Sécurité"
          title="Votre sécurité, notre priorité."
          subtitle="Chaque interaction est protégée par nos systèmes de vérification et de paiement sécurisé."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="text-center p-6 rounded-2xl bg-v1-warm-gray border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-v1-purple/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-v1-purple" />
                </div>
                <h3 className="font-bold text-v1-black mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
