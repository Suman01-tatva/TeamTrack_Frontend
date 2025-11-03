import type { Activity } from "../types/DashboardComponents.types";

interface ActivityTimelineProps {
  activities: Activity[];
}

export default function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="mt-6 bg-gray-800 rounded-xl border border-gray-700 shadow-sm">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold text-white">Recent Activity</h2>
      </div>
      <div className="p-6 space-y-4">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-900 bg-opacity-20 rounded-full flex items-center justify-center">
              <activity.icon className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-100">
                {activity.action}
              </p>
              <p className="text-sm text-gray-400">{activity.detail}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
