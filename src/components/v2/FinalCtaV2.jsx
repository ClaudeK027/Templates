import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CtaButton from '../common/CtaButton';

export default function FinalCtaV2() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-v2-gray-50 to-white">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="bg-white rounded-3xl border border-v2-gray-200 shadow-xl shadow-v2-navy/5 p-10 lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-v2-gold/10 text-v2-gold text-xs font-semibold uppercase tracking-wider mb-6 border border-v2-gold/20">
            Commencez aujourd'hui
          </span>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-playfair text-v2-gray-900 leading-tight">
            Prêt à transformer votre
            <br />
            <span className="text-v2-navy">stratégie d'influence ?</span>
          </h2>

          <p className="mt-6 text-lg text-v2-gray-600 max-w-2xl mx-auto">
            Rejoignez la plateforme de référence pour le marketing d'influence en Afrique. Inscription gratuite, sans engagement.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CtaButton variant="v2" type="primary" size="lg">
              Créer un compte gratuit <ArrowRight size={20} className="ml-2" />
            </CtaButton>
            <CtaButton variant="v2" type="secondary" size="lg">
              Demander une démo
            </CtaButton>
          </div>

          <p className="mt-6 text-xs text-v2-gray-600">
            Aucune carte de crédit requise · Annulation à tout moment
          </p>
        </motion.div>
      </div>
    </section>
  );
}
