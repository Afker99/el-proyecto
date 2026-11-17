import styles from "./styles.module.scss";

import Button from "../Button/Button";
import { useTeam } from "../../Contexts/TeamContext";
import type TeamMember from "../../types/TeamMemberTypes/TeamMemberInterface";
import { useState } from "react";
import { EllipsisVertical, X } from "lucide-react";
import { getTasksLength } from "../../helper/getTasksLength";

interface EmployeesProps {
  teamMembers: TeamMember[];
  currentPage: number;
  teamMembersPerPage: number;
}

function TeamMembersTable(): React.JSX.Element {
  const { teamMembers, currentPage, teamMembersPerPage }: EmployeesProps =
    useTeam();

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const theaders: string[] = [
    "No",
    "Team Member",
    "Role",
    "Email",
    "Joined on",
    "Tasks Assigned",
    "Status",
    "More Action",
  ];

  const currentItems: TeamMember[] = teamMembers.slice(
    (currentPage - 1) * teamMembersPerPage,
    currentPage * teamMembersPerPage,
  );

  function handleClick(id: number) {
    setOpenMenuId((currentId) => (currentId === id ? null : id));
  }

  return (
    <main className={styles.main}>
      <table className={styles.table}>
        <thead className={styles.tableHeaders}>
          <tr>
            {theaders.map((header) => (
              <th key={header} className={styles.tableHeadersCell}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((member) => {
            const { id, name, imageUrl, role, email, joinedOn } = member;

            return (
              <tr key={id} className={styles.tableRow}>
                <td className={styles.tableCell}>{id}</td>
                <td className={`${styles.tableCell}`}>
                  <div className={styles.tableMember}>
                    <img
                      className={styles.tableMemberPic}
                      src={imageUrl}
                      alt={name}
                    />
                    <span className={styles.tableMemberName}>{name}</span>
                  </div>
                </td>
                <td className={styles.tableCell}>{role}</td>
                <td className={styles.tableCell}>{email}</td>
                <td className={styles.tableCell}>{joinedOn}</td>
                <td className={styles.tableCell}>{getTasksLength(id)}</td>
                <td className={styles.tableCell}>
                  {getTasksLength(id) < 3 ? (
                    <span
                      className={`${styles.tableStatus} ${styles.tableStatusAvailable}`}
                    >
                      Available
                    </span>
                  ) : (
                    <span
                      className={`${styles.tableStatus} ${styles.tableStatusUnavailable}`}
                    >
                      Unavailable
                    </span>
                  )}
                </td>
                <td className={styles.tableCell}>
                  <Button
                    variant="Secondary"
                    hasIcon
                    onClick={() => {
                      handleClick(member.id);
                    }}
                  >
                    {openMenuId === member.id ? (
                      <X size={16} />
                    ) : (
                      <EllipsisVertical size={16} />
                    )}
                  </Button>

                  <ul
                    className={`${styles.moreAction} ${
                      openMenuId === member.id ? "" : styles.moreActionHidden
                    }`}
                  >
                    <li
                      className={styles.moreActionOption}
                      onClick={() => console.log("Edit")}
                    >
                      Edit
                    </li>
                    <li
                      className={styles.moreActionOption}
                      onClick={() => console.log("Delete")}
                    >
                      Delete
                    </li>
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default TeamMembersTable;
