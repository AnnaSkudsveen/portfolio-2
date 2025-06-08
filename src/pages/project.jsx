import { Link, useParams } from "react-router-dom";
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

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy link:", err);
      alert("Failed to copy link.");
    }
  };

  return (
    <section>
      {project ? (
        <section className="flex flex-col items-center gap-4">
          <section className="flex flex-col md:flex-row w-full lg:max-w-[900px] mt-10 gap-10 px-4">
            <img
              src={`/images/${project.id}/project-${project.id}.jpg`}
              alt={project.title}
              className="w-auto h-64 md:h-80 object-cover"
            />
            <section>
              <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
              <p className="text-gray-700 text-lg">{project.description}</p>
              <p className="font-semibold">
                {project.apiIntegration ? "Integrated with external API" : ""}
              </p>
            </section>
          </section>
          <section className="flex flex-col items-start justify-start w-full lg:max-w-[900px] px-10 mb-10 gap-4">
            <section className="flex items-center gap-6">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-[#213547] transition"
                >
                  Live Demo
                </a>
              )}
              {project.githubRepo && (
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-[#213547] transition"
                >
                  Github README.md
                </a>
              )}
              <p
                onClick={handleCopyLink}
                className="font-semibold cursor-pointer px-4 py-2 bg-transparent hover:text-[#213547] transition"
              >
                Copy Link
              </p>
            </section>
            <section className="flex flex-col gap-4">
              {project.stack ? (
                <section>
                  <h2 className="text-2xl font-semibold">Stack</h2>
                  <div className="flex gap-4">
                    {project.stack
                      ? project.stack.map((stackItem) => <p>{stackItem}</p>)
                      : ""}
                  </div>
                </section>
              ) : (
                ""
              )}
              {project.reflectionsImprovements ? (
                <section>
                  <h2 className="text-2xl font-semibold">
                    Reflections and improvements
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {project.stack
                      ? project.reflectionsImprovements.map(
                          (reflectionsImprovement) => (
                            <li>{reflectionsImprovement}</li>
                          )
                        )
                      : ""}
                  </ul>
                </section>
              ) : (
                ""
              )}
            </section>
          </section>
        </section>
      ) : (
        <div className="animate-pulse space-y-4">
          <div className="h-64 bg-gray-300 rounded-md"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      )}
    </section>
  );
}

export default Project;
