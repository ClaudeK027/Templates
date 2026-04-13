import StatCounter from '../common/StatCounter';
import { stats } from '../../data/content';

export default function StatsV2() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-v2-gray-50 rounded-2xl border border-v2-gray-200 p-10 lg:p-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <StatCounter key={stat.label} {...stat} variant="v2" index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
