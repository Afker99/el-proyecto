import type Project from "./ProjectInterface";

type ProjectAction =
  | { type: "projects/addProject"; payload: Project }
  | { type: "projects/deleteProject"; payload: string };

export type { ProjectAction as default };
