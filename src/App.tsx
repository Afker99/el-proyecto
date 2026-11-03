import styles from "./global.module.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import GeneralTab from "./Pages/GeneralTab/GeneralTab";
import EmployeesTab from "./Pages/EmployeesTab/EmployeesTab";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

import { EmployeeProvider } from "./Contexts/EmployeeContext";
import Content from "./components/Content/Content";
import { Suspense } from "react";

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
                <Route path="employees" element={<EmployeesTab />} />
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
