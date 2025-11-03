import type { Task } from "../types/DashboardComponents.types";

interface RecentTasksProps {
  tasks: Task[];
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "urgent":
      return "bg-red-800 text-red-300 border-red-600";
    case "high":
      return "bg-orange-800 text-orange-300 border-orange-600";
    case "medium":
      return "bg-yellow-800 text-yellow-300 border-yellow-600";
    case "low":
      return "bg-green-800 text-green-300 border-green-600";
    default:
      return "bg-gray-800 text-gray-300 border-gray-600";
  }
};

export default function RecentTasks({ tasks }: RecentTasksProps) {
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-sm">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold text-white">Recent Tasks</h2>
      </div>
      <div className="p-6 space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border border-gray-700 rounded-lg p-3 hover:border-blue-600 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-100 text-sm flex-1">
                {task.title}
              </h4>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{task.project}</span>
              <span
                className={`px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Assigned to {task.assignee}
            </div>
          </div>
        ))}
        <button className="w-full mt-4 text-center py-2 text-sm text-blue-400 hover:bg-blue-800 rounded-lg font-medium transition-colors">
          View All Tasks
        </button>
      </div>
    </div>
  );
}
