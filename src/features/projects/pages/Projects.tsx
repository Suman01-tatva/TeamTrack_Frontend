import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import type { Project } from "../types/types";
import ProjectCard from "../components/ProjectCard";
import DynamicFormModal from "../../../common/components/formPopUp/Form";
import type { FormControlConfig } from "../../../common/types/commonTypes";
import * as Yup from "yup";
import { useGetProjectsQuery } from "../projectApi";
import { CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ProjectPage() {
  const user = useSelector((state: any) => state.auth.user);
  const { data, error, isLoading } = useGetProjectsQuery(user.dbName);

  const [open, setOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    console.log("Fetched projects data:", data);
    if (data) {
      setProjects(data.data);
    }
  }, [data]);

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const handleDelete = (id: number) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  // Form configuration for edit modal
  const editModalFormConfig: FormControlConfig[] = [
    {
      type: "input",
      config: {
        name: "name",
        label: "Project Name",
        type: "text",
        placeholder: "Enter project name",
        required: true,
      },
    },
    {
      type: "textarea",
      config: {
        name: "description",
        label: "Description",
        type: "textarea",
        required: true,
      },
    },
  ];

  const editFormInitialValue = {
    name: selectedProject?.name || "",
    description: selectedProject?.description || "",
  };

  const editFormValidationSchema = Yup.object().shape({
    name: Yup.string().required("Project Name is required"),
    description: Yup.string(),
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to fetch projects
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 px-6 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <p className="mt-1 text-gray-400">
            Manage all active and upcoming projects here.
          </p>
        </div>
        <button
          className="mt-4 sm:mt-0 flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium"
          onClick={() => setOpen(true)}
        >
          <FaPlus className="w-5 h-5" />
          <span>New Project</span>
        </button>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <Typography variant="body1" color="gray">
            No projects found.
          </Typography>
        )}
      </div>

      {/* Edit Modal */}
      <DynamicFormModal
        isOpen={open}
        onClose={handleClose}
        title={`Edit Project ${selectedProject?.name ?? ""}`}
        formConfig={editModalFormConfig}
        initialValues={editFormInitialValue}
        validationSchema={editFormValidationSchema}
        confirmText="Edit"
        onSubmit={(values) => {
          console.log("Edit form data", values);
        }}
      />
    </div>
  );
}
