import { motion } from 'framer-motion';

const networks = [
  { name: 'Instagram', color: 'from-pink-500 to-purple-600' },
  { name: 'TikTok', color: 'from-gray-900 to-gray-700' },
  { name: 'YouTube', color: 'from-red-600 to-red-500' },
  { name: 'X', color: 'from-gray-800 to-gray-600' },
  { name: 'Facebook', color: 'from-blue-600 to-blue-500' },
  { name: 'LinkedIn', color: 'from-blue-700 to-blue-600' },
];

export default function NetworksV1() {
  return (
    <section className="py-12 bg-v1-warm-gray border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Connectez et synchronisez tous vos réseaux
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {networks.map((net, i) => (
            <motion.div
              key={net.name}
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${net.color} flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">{net.name.charAt(0)}</span>
              </div>
              <span className="text-gray-700 font-medium text-sm">{net.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
