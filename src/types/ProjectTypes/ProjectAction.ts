import type Project from "./ProjectInterface";

type ProjectAction =
  | { type: "projects/createProject"; payload: Project }
  | { type: "projects/deleteProject"; payload: string };

export type { ProjectAction as default };
