import type Workspace from "../types/WorkspaceTypes/WorkspaceInterface";
import { sampleUserId } from "./sampleUser";

export const sampleWorkspaceId = crypto.randomUUID();

export const sampleWorkspace: Workspace[] = [
  {
    id: sampleWorkspaceId,
    name: "Engineers Team",
    userId: sampleUserId,
  },
];
