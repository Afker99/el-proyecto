import type TeamMember from "./TeamMemberInterface";

export default interface InitialStateTeam {
  teamMembers: TeamMember[];
  teamMembersPerPage: number;
  currentPage: number;
}
