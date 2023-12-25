import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
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

  function handleSelectedProject(id) {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: id,
      };
    });
  }

  function handleCancelAddProject() {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: undefined,
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

  function handleDeleteProject() {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.projectSelectedId
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.projectSelectedId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
    ></SelectedProject>
  );
  if (projectState.projectSelectedId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectState.projectSelectedId === undefined) {
    content = <NoProjectSelected onProjectState={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          onProjectState={handleStartAddProject}
          projects={projectState.projects}
          onSelectProject={handleSelectedProject}
          selectedProjectId={projectState.projectSelectedId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
