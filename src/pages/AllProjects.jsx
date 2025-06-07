import { Link } from "react-router-dom";

function AllProjects({ projects }) {
  return (
    <div className="flex gap-4 flex-wrap">
      {projects.map((project) => (
        <Link key={project.id} to={`/project/${project.id}`}>
          <img
            src={`/images/${project.id}/project-${project.id}.jpg`}
            alt={project.title}
            className="w-40 h-40 object-cover cursor-pointer rounded"
          />
          <h2>{project.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default AllProjects;
