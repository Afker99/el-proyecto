import type Project from "../types/ProjectTypes/ProjectInterface";
import { sampleWorkspaceId } from "./sampleWorkspace";

export const sampleProjectId1 = crypto.randomUUID();
export const sampleProjectId2 = crypto.randomUUID();
export const sampleProjectId3 = crypto.randomUUID();

export const sampleProjects: Project[] = [
  {
    id: sampleProjectId1,
    title: "SuperAI CO. Website",
    desc: "Build High-end luxurious multipage website",
    startDate: "2029/03/10",
    endDate: "2029/04/10",
    priority: "Urgent",
    assignTo: 1,
    status: "Completed",
    workspaceId: sampleWorkspaceId,
  },
  {
    id: sampleProjectId2,
    title: "Nexora Mobile App",
    desc: "Design and develop a modern cross-platform mobile application",
    startDate: "2029/04/01",
    endDate: "2029/08/15",
    priority: "Normal",
    assignTo: 3,
    status: "In progress",
    workspaceId: sampleWorkspaceId,
  },
  {
    id: sampleProjectId3,
    title: "CloudSync Dashboard",
    desc: "Develop an analytics dashboard for cloud infrastructure monitoring",
    startDate: "2029/05/15",
    endDate: "2029/09/30",
    priority: "Low",
    assignTo: 5,
    status: "Not started",
    workspaceId: sampleWorkspaceId,
  },
];
