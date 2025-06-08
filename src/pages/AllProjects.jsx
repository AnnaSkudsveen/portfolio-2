import { Link } from "react-router-dom";

function AllProjects({ projects }) {
  return (
    <section className="flex flex-col p-10 items-center">
      <h2 className="text-left text-[#213547] text-3xl">Projects</h2>
      <section className="flex justify-center gap-4 flex-wrap lg:max-w-[900px] lg:mx-0 mt-10">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="flex flex-col items-center gap-4 text-left w-50 bg-white shadow-lg rounded-xl p-4"
          >
            <img
              src={`/images/${project.id}/project-${project.id}.jpg`}
              alt={project.title}
              className="w-40 h-40 object-cover cursor-pointer rounded"
            />
            <h2>{project.title}</h2>
            <p className="font-light">{project.teaserDescription}</p>
          </Link>
        ))}
      </section>
      <h2 className="text-left ml-10 text-[#213547] text-3xl mt-10">
        About me
      </h2>
      <section className="text-left mt-4 flex flex-col gap-4 max-w-[900px]">
        <p>
          I’m a frontend developer with a background in fashion design,
          currently working at Pearl Octopussy. I work mostly with React,
          JavaScript, HTML, Tailwind, Figma, and Git, and I’ve recently started
          using some TypeScript too.
        </p>
        <p>
          Before I got into coding, I studied design at Oslo Metropolitan
          University. That background has really shaped how I think — I love
          being creative, but I also enjoy structure and figuring things out.
          Problem solving is a big part of what drew me to frontend development
          in the first place.
        </p>
        <p>
          I’m especially interested in projects that connect design and tech. I
          still love fashion and the creative world, but these days I get the
          most joy from writing clean code and building things that work well
          for people.
        </p>
      </section>
    </section>
  );
}

export default AllProjects;
