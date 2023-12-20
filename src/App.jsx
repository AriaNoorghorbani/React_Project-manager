import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./Components/Sidebar";

function App() {
  const [projectState, SetProjectState] = useState({
    projectSelectedId: undefined,
    projects: [],
  });

  function handleProjectState() {
    SetProjectState((prevState) => {
      return {
        ...prevState,
        projectSelectedId: null,
      };
    });
  }

  let content;
  if (projectState.projectSelectedId === null) {
    content = <NewProject />;
  } else {
    content = <NoProjectSelected onProjectState={handleProjectState} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onProjectState={handleProjectState} />
        {content}
      </main>
    </>
  );
}

export default App;
