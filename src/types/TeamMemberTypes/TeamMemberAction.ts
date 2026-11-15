import type TeamMember from "./TeamMemberInterface";

type TeamMemberAction =
  | {
      type: string;
      payload: TeamMember[];
    }
  | { type: string };

export type { TeamMemberAction as default };
