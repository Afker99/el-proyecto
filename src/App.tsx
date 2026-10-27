import styles from "./global.module.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import GeneralTab from "./Pages/GeneralTab/GeneralTab";
import Employees from "./Pages/Employees/Employees";
import EmployeesTab from "./Pages/EmployeesTab/EmployeesTab";

import Sidebar from "./components/Sidebar/Sidebar";

import { EmployeeProvider } from "./Contexts/EmployeeContext";
import Content from "./components/Content/Content";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import { Suspense } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";
import CreateNewEmployee from "./Pages/CreateNewEmployee/CreateNewEmployee";

function App() {
  return (
    <main className={styles.main}>
      <EmployeeProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Sidebar />
            <Content>
              <Routes>
                <Route index element={<GeneralTab />} />
                <Route path="employees" element={<Employees />}>
                  <Route index element={<EmployeesTab />} />
                  <Route
                    path="add-new-employee"
                    element={<CreateNewEmployee />}
                  />
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Content>
          </Suspense>
        </BrowserRouter>
      </EmployeeProvider>
    </main>
  );
}

export default App;
