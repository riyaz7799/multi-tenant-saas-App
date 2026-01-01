import { Link, useNavigate } from "react-router-dom";
import "./layout.css";

export default function Layout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="logo">SaaS Pro</h2>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/users">Users</Link>
        <Link to="/subscription">Subscription</Link>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </aside>

      <main className="content">{children}</main>
    </div>
  );
}
