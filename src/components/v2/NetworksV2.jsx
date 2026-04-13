import { motion } from 'framer-motion';

const networks = [
  { name: 'Instagram', color: 'bg-pink-50 text-pink-600 border-pink-100' },
  { name: 'TikTok', color: 'bg-gray-50 text-gray-800 border-gray-200' },
  { name: 'YouTube', color: 'bg-red-50 text-red-600 border-red-100' },
  { name: 'X', color: 'bg-gray-50 text-gray-800 border-gray-200' },
  { name: 'Facebook', color: 'bg-blue-50 text-blue-600 border-blue-100' },
  { name: 'LinkedIn', color: 'bg-blue-50 text-blue-700 border-blue-100' },
];

export default function NetworksV2() {
  return (
    <section className="py-12 bg-white border-y border-v2-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-xs text-v2-gray-600 uppercase tracking-[0.2em] mb-8 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Intégrations natives avec les principales plateformes
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {networks.map((net, i) => (
            <motion.div
              key={net.name}
              className={`px-5 py-2.5 rounded-lg border text-sm font-medium ${net.color}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              {net.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
