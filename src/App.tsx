import styles from "./global.module.scss";

import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Employees from "./components/Employees/Employees";
import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./components/Homepage/Homepage";

import type Employee from "./model/EmpInterface";
import type EmpAction from "./model/EmpAction";

interface InitialState {
  employees: Employee[];
}

const initialState: InitialState = {
  employees: [
    {
      id: "1",
      name: "Maya Chen",
      role: "Product Designer",
      imageUrl: "https://i.pravatar.cc/150?img=1",
      tasks: ["Create dashboard wireframes", "Review user feedback"],
    },
    {
      id: "2",
      name: "Jordan Lee",
      role: "Frontend Developer",
      imageUrl: "https://i.pravatar.cc/150?img=2",
      tasks: ["Build navigation component", "Fix mobile layout"],
    },
    {
      id: "3",
      name: "Amina Patel",
      role: "Project Manager",
      imageUrl: "https://i.pravatar.cc/150?img=3",
      tasks: ["Plan sprint schedule", "Update project timeline"],
    },
    {
      id: "4",
      name: "Noah Williams",
      role: "UX Researcher",
      imageUrl: "https://i.pravatar.cc/150?img=4",
      tasks: ["Schedule user interviews", "Summarize research findings"],
    },
    {
      id: "5",
      name: "Sofia Garcia",
      role: "Backend Developer",
      imageUrl: "https://i.pravatar.cc/150?img=5",
      tasks: ["Create employee API", "Add request validation"],
    },
    {
      id: "6",
      name: "Ethan Brown",
      role: "QA Engineer",
      imageUrl: "https://i.pravatar.cc/150?img=6",
      tasks: ["Test employee workflows", "Report login issues"],
    },
    {
      id: "7",
      name: "Priya Nair",
      role: "Data Analyst",
      imageUrl: "https://i.pravatar.cc/150?img=7",
      tasks: ["Prepare usage report", "Check data accuracy"],
    },
    {
      id: "8",
      name: "Lucas Martin",
      role: "DevOps Engineer",
      imageUrl: "https://i.pravatar.cc/150?img=8",
      tasks: ["Review deployment pipeline", "Update staging environment"],
    },
    {
      id: "9",
      name: "Zara Ahmed",
      role: "Content Strategist",
      imageUrl: "https://i.pravatar.cc/150?img=9",
      tasks: ["Draft help center content", "Review product copy"],
    },
    {
      id: "10",
      name: "Oliver Smith",
      role: "UI Designer",
      imageUrl: "https://i.pravatar.cc/150?img=10",
      tasks: ["Design settings page", "Update icon library"],
    },
    {
      id: "11",
      name: "Amara Okafor",
      role: "Mobile Developer",
      imageUrl: "https://i.pravatar.cc/150?img=11",
      tasks: ["Build profile screen", "Improve app loading time"],
    },
    {
      id: "12",
      name: "Daniel Kim",
      role: "Security Engineer",
      imageUrl: "https://i.pravatar.cc/150?img=12",
      tasks: ["Review access controls", "Check dependency alerts"],
    },
    {
      id: "13",
      name: "Isabella Rossi",
      role: "Marketing Specialist",
      imageUrl: "https://i.pravatar.cc/150?img=13",
      tasks: ["Prepare launch campaign", "Update social media calendar"],
    },
    {
      id: "14",
      name: "Mateo Silva",
      role: "Technical Writer",
      imageUrl: "https://i.pravatar.cc/150?img=14",
      tasks: ["Document API endpoints", "Review onboarding guide"],
    },
    {
      id: "15",
      name: "Grace Wilson",
      role: "Customer Success Manager",
      imageUrl: "https://i.pravatar.cc/150?img=15",
      tasks: ["Follow up with customers", "Prepare support trends summary"],
    },
  ],
};

function reducer(state: InitialState, action: EmpAction) {
  switch (action.type) {
    case "setEmployees":
      return { ...state, employees: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state] = useReducer(reducer, initialState);

  return (
    <main className={styles.main}>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route
            path="employees"
            element={<Employees employees={state.employees} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
