import Button from "./Button";

export default function Sidebar({
  onProjectState,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-9 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>

      <Button onClick={onProjectState}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssClass += " bg-stone-800 text-stone-200";
          } else {
            cssClass += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClass}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
