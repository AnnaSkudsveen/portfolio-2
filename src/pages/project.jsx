import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "../json/projects.json";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      const projectData = projects.projects.find(
        (project) => project.id === id
      );
      setProject(projectData);
    };
    if (id) getProject();
  }, [id]);

  return (
    <div>
      {project ? (
        <>
          <img
            src={`/images/${project.id}/project-${project.id}.jpg`}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      ) : (
        <p>Loading project...</p>
      )}
    </div>
  );
}

export default Project;
