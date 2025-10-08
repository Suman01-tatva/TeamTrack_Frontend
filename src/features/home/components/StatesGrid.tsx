import type { Stat } from "../types/DashboardComponents.types";

interface StatsGridProps {
  stats: Stat[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-blue-400">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-green-400 font-medium">
                {stat.trend} this week
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-900 bg-opacity-20 rounded-lg flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
