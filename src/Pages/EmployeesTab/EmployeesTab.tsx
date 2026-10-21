import styles from "./styles.module.scss";

import EmployeesTable from "../../components/EmployeesTabTable/EmployeesTable";
import Header from "../../components/EmployeesTabHeader/Header";
import Footer from "../../components/EmployeesTabFooter/Footer";

function EmployeesTab(): React.JSX.Element {
  return (
    <div className={styles.employees}>
      <Header />
      <EmployeesTable />
      <Footer />
    </div>
  );
}

export default EmployeesTab;
