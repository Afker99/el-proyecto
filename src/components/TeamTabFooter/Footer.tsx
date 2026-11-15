import styles from "./styles.module.scss";

import Button from "../Button/Button";

import { useTeam } from "../../Contexts/TeamContext";
import type Employee from "../../types/TeamMemberTypes/TeamMemberInterface";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Footer(): React.JSX.Element {
  const { teamMembers, teamMembersPerPage, currentPage, dispatch } = useTeam();

  const totalPages = Math.ceil(teamMembers.length / teamMembersPerPage);

  const currentItems: Employee[] = teamMembers.slice(
    (currentPage - 1) * teamMembersPerPage,
    currentPage * teamMembersPerPage,
  );

  return (
    <footer>
      <div>
        <p className={styles.employeesCount}>
          Showing {currentItems.length} of {teamMembers.length} Employees
        </p>
      </div>
      <div>
        <Button
          variant="Secondary"
          disabled={currentPage === 1}
          // onClick={() => setCurrentPage((prev) => prev - 1)}
          onClick={() => dispatch({ type: "prevPage" })}
          hasIcon
        >
          <ArrowLeft size={14} />
        </Button>
        <Button
          variant="Secondary"
          disabled={currentPage === totalPages}
          onClick={() => dispatch({ type: "nextPage" })}
          hasIcon
        >
          <ArrowRight size={14} />
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
