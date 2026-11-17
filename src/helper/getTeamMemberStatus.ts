import { getTasksLength } from "./getTasksLength";

export function getTeamMemberStatus(id: number): string {
  let status = "available";
  const tasksLength = getTasksLength(id);
  if (tasksLength >= 3) status = "unavailable";

  return status;
}