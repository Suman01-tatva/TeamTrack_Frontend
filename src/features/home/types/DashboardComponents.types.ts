import type { IconType } from "react-icons/lib";

export interface Project {
  id: number;
  name: string;
  progress: number;
  status: string;
  dueDate: string;
  team: number;
}

export interface Stat {
  label: string;
  value: string;
  icon: IconType;
  trend: string;
  color: string;
}

export interface Task {
  id: number;
  title: string;
  project: string;
  priority: string;
  assignee: string;
}

export interface Activity {
  action: string;
  detail: string;
  time: string;
  icon: IconType;
}
