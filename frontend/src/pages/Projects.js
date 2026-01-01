import { useEffect, useState } from "react";
import api from "../services/api";
import Layout from "../components/Layout";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then(res => setProjects(res.data.projects));
  }, []);

  return (
    <Layout>
      <h2>Projects</h2>
      {projects.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </Layout>
  );
}
