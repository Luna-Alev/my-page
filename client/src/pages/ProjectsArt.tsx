import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";

type Project = {
  id: number;
  title: string;
  imageUrl: string;
};

const slugify = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric chars
    .replace(/\s+/g, '-')         // replace spaces with hyphens
    .replace(/-+/g, '-');         // collapse multiple hyphens
};

const ProjectsArt: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('fetching')
        const response = await axios.get('http://localhost:3000/project', {
          params: { category: 1 }
        });
        console.log(response.data);
        if (Array.isArray(response.data)) {
          const formattedProjects = response.data.map((project) => ({
            id: project.Id,
            title: project.Title,
            imageUrl: project.Url,
          }));

          setProjects(formattedProjects);
        } else {
          console.error("Invalid data format:", response.data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Axios error:", error.response?.data, error.message);
        } else {
          console.error("Unknown error:", error);
        }
      }
    };
  
    fetchProjects();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imageUrl={project.imageUrl}
            link={slugify(project.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsArt;
