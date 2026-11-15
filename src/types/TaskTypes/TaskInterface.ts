export default interface Task {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  priority: "Urgent" | "Normal" | "Low";
  assignto: number;
  projectId: string;
  status: "Not started" | "In progress" | "Completed";
}
