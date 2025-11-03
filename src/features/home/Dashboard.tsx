import {
  FaPlus,
  FaCheckCircle,
  FaClock,
  FaChartBar,
  FaUsers,
  FaFolder
} from 'react-icons/fa';
import ActiveProjects from './components/ActiveProjects';
import RecentTasks from './components/RecentTasks';
import ActivityTimeline from './components/ActivityTimeline';

export default function TeamTrackDashboard() {

  const projects = [
    { id: 1, name: 'Website Redesign', progress: 75, status: 'active', dueDate: '2025-10-15', team: 5 },
    { id: 2, name: 'Mobile App Dev', progress: 45, status: 'active', dueDate: '2025-11-20', team: 8 },
    { id: 3, name: 'Marketing Campaign', progress: 90, status: 'review', dueDate: '2025-10-10', team: 4 },
    { id: 4, name: 'API Integration', progress: 30, status: 'active', dueDate: '2025-12-01', team: 6 }
  ];

  const stats = [
    { label: 'Active Projects', value: '12', icon: FaFolder, trend: '+3', color: 'blue' },
    { label: 'Total Tasks', value: '284', icon: FaCheckCircle, trend: '+15', color: 'green' },
    { label: 'In Progress', value: '47', icon: FaClock, trend: '+8', color: 'yellow' },
    { label: 'Team Members', value: '32', icon: FaUsers, trend: '+2', color: 'purple' }
  ];

  const recentTasks = [
    { id: 1, title: 'Update landing page design', project: 'Website Redesign', priority: 'high', assignee: 'Sarah M.' },
    { id: 2, title: 'Fix authentication bug', project: 'Mobile App Dev', priority: 'urgent', assignee: 'John D.' },
    { id: 3, title: 'Review marketing copy', project: 'Marketing Campaign', priority: 'medium', assignee: 'Emma L.' },
    { id: 4, title: 'Database optimization', project: 'API Integration', priority: 'low', assignee: 'Mike R.' }
  ];

  const activities = [
    { action: "New project created", detail: "Website Redesign started by Sarah M.", time: "2 hours ago", icon: FaFolder },
    { action: "Task completed", detail: "Landing page design approved", time: "5 hours ago", icon: FaCheckCircle },
    { action: "Team member added", detail: "John D. joined Mobile App Dev team", time: "1 day ago", icon: FaUsers },
    { action: "Milestone reached", detail: "Marketing Campaign 90% complete", time: "2 days ago", icon: FaChartBar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      {/* Main Content */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm: justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
              <p className="mt-1 text-gray-400">Welcome back! Here's what's happening today.</p>
            </div>
             <button className="mt-4 sm:mt-0 flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium">
              <FaPlus className="w-5 h-5" />
              <span>New Project</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">{stat.label}</p>
                  <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-green-400 font-medium">{stat.trend} this week</p>
                </div>
                <div className="w-12 h-12 bg-blue-900 bg-opacity-20 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ActiveProjects projects={projects}/>
          <RecentTasks tasks={recentTasks}/>
        </div>
          <ActivityTimeline activities={activities}/>
      </main>
    </div>
  );
}