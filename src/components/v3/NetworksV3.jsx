import { motion } from 'framer-motion';

const networks = [
  { name: 'Instagram', emoji: '📸' },
  { name: 'TikTok', emoji: '🎵' },
  { name: 'YouTube', emoji: '▶️' },
  { name: 'X', emoji: '💬' },
  { name: 'Facebook', emoji: '👥' },
  { name: 'LinkedIn', emoji: '💼' },
];

export default function NetworksV3() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-sm text-gray-500 mb-8 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Synchronisez vos réseaux en un clic
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {networks.map((net, i) => (
            <motion.div
              key={net.name}
              className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gray-50 hover:bg-v3-light border border-gray-100 hover:border-v3-emerald/20 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lg">{net.emoji}</span>
              <span className="text-gray-700 font-medium text-sm">{net.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
