import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Project One",
    imageUrl: "https://via.placeholder.com/300",
    link: "/projects/one",
  },
  {
    id: 2,
    title: "Project Two",
    imageUrl: "https://via.placeholder.com/300",
    link: "/projects/two",
  },
  {
    id: 3,
    title: "Project Three",
    imageUrl: "https://via.placeholder.com/300",
    link: "/projects/three",
  },
  {
    id: 4,
    title: "Project Four",
    imageUrl: "https://via.placeholder.com/300",
    link: "/projects/four",
  },
  {
    id: 4,
    title: "Project Five",
    imageUrl: "https://via.placeholder.com/300",
    link: "/projects/four"
  }
];

const ProjectsArt: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsArt;
