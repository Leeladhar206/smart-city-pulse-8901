import React, { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import AddProject from "../components/AddProject";
import { useDispatch, useSelector } from "react-redux";
import {
  addProjectFun,
  getAllUsersFun,
  getProjectsFun,
  updateProjectFun,
} from "../redux/projectReducer/action";
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import AddCollaborators from "../components/AddCollaborator";

export const Projects = () => {
  const [isAddProjectModalOpen, setAddProjectModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isAddCollaboratorModalOpen, setAddCollaboratorModalOpen] =
    useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const { user } = useSelector((store) => store.userReducer);
  const { projects, users } = useSelector((store) => store.projectReducer);
  const dispatch = useDispatch();

  const userData = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const handleAddProject = (projectData) => {
    const colleborators = [];
    colleborators.push(userData._id);
    const tasks = [];

    projectData.colleborators = colleborators;
    projectData.tasks = tasks;

    console.log(projectData);

    dispatch(addProjectFun(projectData));
    setAddProjectModalOpen(false);
  };

  const handleAddTask = (project) => {
    // Implement your logic for adding task
    console.log("Adding task to project:", project);
  };

  const handleAddCollaborator = (userId) => {
    const updatedProjects = projects.map((project) => {
      if (project._id === selectedProject._id) {
        const newCollaborators = [...project.colleborators, userId];
        return { ...project, colleborators: newCollaborators };
      }
      return project;
    });

    let patchProject = {};

    updatedProjects.forEach((el) => {
      if (el._id == selectedProject._id) {
        patchProject = el;
      }
    });

    // console.log(patchProject, "hi", selectedProject._id);

    dispatch(updateProjectFun(patchProject, userId, token));

    setAddCollaboratorModalOpen(false);
    setRefresh(!refresh);
  };

  useEffect(() => {
    dispatch(getProjectsFun(token));
    dispatch(getAllUsersFun(token));
  }, [dispatch, refresh, setRefresh]);

  // console.log(projects,users);

  return (
    <div>
      <Box m="auto">
        <Button onClick={() => setAddProjectModalOpen(true)}>
          Add Project
        </Button>
        <AddProject
          isOpen={isAddProjectModalOpen}
          onClose={() => setAddProjectModalOpen(false)}
          onAddProject={handleAddProject}
        />

        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              onAddCollaborator={() => {
                setSelectedProject(project);
                setAddCollaboratorModalOpen(true);
              }}
              users={users}
              onAddTask={handleAddTask}
            />
          ))}

        <AddCollaborators
          isOpen={isAddCollaboratorModalOpen}
          onClose={() => setAddCollaboratorModalOpen(false)}
          users={users}
          onAddCollaborator={handleAddCollaborator}
        />
      </Box>
    </div>
  );
};
