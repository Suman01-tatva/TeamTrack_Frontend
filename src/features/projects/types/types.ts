import type { ProjectStatusEnum } from "../../common/enums/ProjectEnums";

export interface Project {
  id: number;
  name: string;
  status: ProjectStatusEnum;
  isActive?: boolean;
  // members: string[];
  description: string;
}