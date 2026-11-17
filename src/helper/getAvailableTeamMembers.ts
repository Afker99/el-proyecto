import { useTeam } from "../Contexts/TeamContext";
import type TeamMember from "../types/TeamMemberTypes/TeamMemberInterface";
import { getTeamMemberStatus } from "./getTeamMemberStatus";

export function getAvailableTeamMembers(): TeamMember[] {
  let availabeTeamMembers: TeamMember[] = [];
  const { teamMembers } = useTeam();
  availabeTeamMembers = teamMembers.filter(
    (member) => getTeamMemberStatus(member.id) === "available",
  );

  return availabeTeamMembers;
}
