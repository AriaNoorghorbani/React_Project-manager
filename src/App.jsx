import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./Components/Sidebar";

function App() {
  const [projectState, SetProjectState] = useState({
    projectSelectedId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: null,
      };
    });
  }

  function handleAddProject(project) {
    SetProjectState((prevState) => {
      const newProject = { id: Math.random(), ...project };

      return {
        ...prevState,
        projectSelectedId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;
  if (projectState.projectSelectedId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else {
    content = <NoProjectSelected onProjectState={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onProjectState={handleStartAddProject}
          projects={projectState.projects}
        />
        {content}
      </main>
    </>
  );
}

export default App;
