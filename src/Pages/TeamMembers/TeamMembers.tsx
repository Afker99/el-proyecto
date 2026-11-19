import styles from "./styles.module.scss";

import TeamIcon from "../../assets/teamMembers.svg";
import { UserRoundPlus } from "lucide-react";

import Header from "../../components/TabHeader/Header";
import TeamMembersTable from "../../components/TeamTabTable/TeamMembersTable";
import Footer from "../../components/TeamTabFooter/Footer";
import EmptyState from "../../components/EmptyState/EmptyState";

import { useTeam } from "../../Contexts/TeamContext";
import InviteMembers from "../../components/InviteMembers/InviteMembers";

function TeamMembersTab(): React.JSX.Element {
  const { teamMembers } = useTeam();

  function handleClick() {
    alert("Link copied");
  }

  {
    if (teamMembers.length === 0)
      return (
        <EmptyState
          title="Invite team members to collabrate!"
          buttonText="Invite Members"
          onClick={handleClick}
          folderIcon={TeamIcon}
        />
      );
  }

  return (
    <div className={styles.container}>
      <Header
        title="All Team Members"
        desc="View and manage your all team members"
        buttonChild={<UserRoundPlus size={16} />}
        buttonText="Invite Members"
        modal={<InviteMembers />}
      />
      <TeamMembersTable />
      <Footer />
    </div>
  );
}

export default TeamMembersTab;
