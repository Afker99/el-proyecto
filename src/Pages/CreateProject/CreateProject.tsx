import styles from "./styles.module.scss";

import { useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import Button from "../../components/Button/Button";
import { sampleWorkspaceId } from "../../data/sampleWorkspace";
import { getAvailableTeamMembers } from "../../helper/getAvailableTeamMembers";
import type Project from "../../types/ProjectTypes/ProjectInterface";
import { useProjects } from "../../Contexts/ProjectContext";
import { useNavigate } from "react-router-dom";

function CreateProject() {
  const { createProject } = useProjects();
  const navigate = useNavigate();
  const availableTeamMembers = getAvailableTeamMembers();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState<Project["priority"]>("Normal");
  const [assignTo, setAssignTo] = useState(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newProject: Project = {
      id: crypto.randomUUID(),
      title,
      desc,
      startDate,
      endDate,
      priority,
      assignTo,
      status: "Not started",
      workspaceId: sampleWorkspaceId,
    };
    createProject(newProject);
    navigate("/projects");
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Create a Project</h2>
        <BackButton />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="title">Project title:</label>
          <input
            className={styles.formInput}
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="desc">Project description:</label>
          <textarea
            className={styles.formInput}
            id="desc"
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="startDate">Start date</label>
          <input
            className={styles.formInput}
            type="date"
            id="startDate"
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="endDate">End date</label>
          <input
            className={styles.formInput}
            type="date"
            id="endDate"
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="priority">Priority</label>
          <select
            className={styles.formInput}
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as Project["priority"])}
            required
          >
            <option value="Urgent">Urgent</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="assignTo">Assign to:</label>
          <select
            className={styles.formInput}
            id="assignTo"
            onChange={(e) => setAssignTo(+e.target.value)}
            required
          >
            {availableTeamMembers.map((member) => (
              <option value={member.id} key={member.id}>
                <div>
                  <img src={member.imageUrl} />
                  <span>{member.name}</span>
                </div>
              </option>
            ))}
          </select>
        </div>
        <Button variant="Primary">Create Projcet</Button>
      </form>
    </div>
  );
}
/*
  id: string;
  title: string;
  desc: string;
  startDate: string;
  endDate: string;
  priority: "Urgent" | "Normal" | "Low";
  assignTo: number;
  status: "Not started" | "In progress" | "Completed";
  workspaceId: string;
 */
export default CreateProject;
