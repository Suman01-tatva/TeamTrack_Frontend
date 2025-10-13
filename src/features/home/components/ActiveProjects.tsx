import { Calendar, Users } from "lucide-react";
import type { Project } from "../types/DashboardComponents.types";

interface ActiveProjectsProps {
  projects: Project[];
}

export default function ActiveProjects({ projects }: ActiveProjectsProps) {
  return (
    <div className="lg:col-span-2 bg-gray-800 rounded-xl border border-gray-700 shadow-sm">
      <div className="p-6 border-b border-gray-700 flex items-center justify-between">
        <h2 className="text-xl font-bold text-blue-300">Active Projects</h2>
        <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">
          View All
        </button>
      </div>
      <div className="p-6 space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-700 rounded-lg p-4 hover:border-blue-600 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-100">{project.name}</h3>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.dueDate}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {project.team} members
                  </span>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === "active"
                    ? "bg-green-800 text-green-300"
                    : "bg-yellow-800 text-yellow-300"
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Progress</span>
                <span className="font-medium text-blue-300">
                  {project.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
