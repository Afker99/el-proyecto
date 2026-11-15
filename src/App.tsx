import styles from "./global.module.scss";

import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Content from "./components/Content/Content";
import Projects from "./Pages/Projects/Projects";

import Sidebar from "./components/Sidebar/Sidebar";
import GeneralTab from "./Pages/GeneralTab/GeneralTab";
import TeamMembersTab from "./Pages/TeamMembersTab/TeamMembersTab";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import ProjectsTab from "./components/ProjectsTab/ProjectsTab";
import CreateProject from "./Pages/CreateProject/CreateProject";

import { TeamProvider } from "./Contexts/TeamContext";
import { ProjectProvider } from "./Contexts/ProjectContext";
import { TasksProvider } from "./Contexts/TaskContext";

function App() {
  return (
    <main className={styles.main}>
      <ProjectProvider>
        <TasksProvider>
          <TeamProvider>
            <BrowserRouter>
              <Suspense fallback={<SpinnerFullPage />}>
                <Sidebar />
                <Content>
                  <Routes>
                    <Route index element={<GeneralTab />} />
                    <Route path="team" element={<TeamMembersTab />} />
                    <Route path="projects" element={<Projects />}>
                      <Route index element={<ProjectsTab />} />
                      <Route path="new-project" element={<CreateProject />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                  </Routes>
                </Content>
              </Suspense>
            </BrowserRouter>
          </TeamProvider>
        </TasksProvider>
      </ProjectProvider>
    </main>
  );
}

export default App;
