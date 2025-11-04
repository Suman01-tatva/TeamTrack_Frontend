import { Edit, Trash2, FolderOpen } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Tooltip,
  IconButton,
} from "@mui/material";
import type { Project } from "../types/types";
import { ProjectStatusEnum } from "../../common/enums/ProjectEnums";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onEdit,
  onDelete,
}) => {
  return (
    <Card
      sx={{
        bgcolor: "#1f2937",
        border: "1px solid #374151",
        color: "white",
        borderRadius: "0.75rem",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 20px rgba(59,130,246,0.3)",
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: "#2563eb",
              width: 40,
              height: 40,
              fontSize: "1rem",
            }}
          >
            <FolderOpen size={20} />
          </Avatar>
        }
        title={
          <h2 className="text-lg font-semibold text-white">{project.name}</h2>
        }
        subheader={
          <span
            className={`text-sm ${
              project.status === ProjectStatusEnum.Completed
                ? "text-green-400"
                : project.status === ProjectStatusEnum.InProgress
                ? "text-yellow-400"
                : project.status === ProjectStatusEnum.OnHold
                ? "text-gray-400"
                : project.status === ProjectStatusEnum.Cancelled
                ? "text-red-400"
                : "text-blue-400"
            }`}
          >
            {ProjectStatusEnum[project.status]}
          </span>
        }
      />
      <CardContent>
        <p className="text-sm text-gray-300 mb-4">
          {project.description.length > 50
            ? project.description.slice(0, 50) + "..."
            : project.description}
        </p>

        {/* <div className="flex items-center text-gray-400 space-x-2">
          <FaUsers className="text-blue-400" />
          <span className="text-sm font-medium">
            {project.members.length} Members
          </span>
        </div> */}

        {/* <div className="flex mt-2 space-x-1">
          {project.members.map((m: string, idx: number) => (
            <Tooltip title={m} key={idx}>
              <Avatar
                sx={{
                  bgcolor: "#4f46e5",
                  width: 28,
                  height: 28,
                  fontSize: "0.8rem",
                }}
              >
                {m[0]}
              </Avatar>
            </Tooltip>
          ))}
        </div> */}
      </CardContent>

      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => onEdit(project)} color="primary">
            <Edit size={20} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete">
          <IconButton onClick={() => onDelete(project.id)} color="error">
            <Trash2 size={20} className="text-red-400" />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
