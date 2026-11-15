export default interface Project {
  id: string;
  title: string;
  desc: string;
  startDate: string;
  endDate: string;
  priority: "Urgent" | "Normal" | "Low";
  assignTo: number;
  status: "Not started" | "In progress" | "Completed";
  workspaceId: string;
}
