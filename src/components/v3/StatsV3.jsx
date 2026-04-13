import StatCounter from '../common/StatCounter';
import { stats } from '../../data/content';

export default function StatsV3() {
  return (
    <section className="py-16 lg:py-20 bg-v3-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} {...stat} variant="v3" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
