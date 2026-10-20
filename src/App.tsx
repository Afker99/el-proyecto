import styles from "./global.module.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Employees from "./components/Employees/Employees";
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./components/Homepage/Homepage";

import { EmployeeProvider } from "./Contexts/EmployeeContext";



function App() {
  return (
    <main className={styles.main}>
      <EmployeeProvider>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="employees" element={<Employees />} />
          </Routes>
        </BrowserRouter>
      </EmployeeProvider>
    </main>
  );
}

export default App;
