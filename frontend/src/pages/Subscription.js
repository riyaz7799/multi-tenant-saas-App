export default function Subscription() {
  return (
    <div>
      <h1 className="page-title">Subscription Plans</h1>

      <div style={{ display: "flex", gap: 20 }}>
        <Plan title="Free" users="5" projects="3" />
        <Plan title="Pro" users="25" projects="15" />
        <Plan title="Enterprise" users="100" projects="50" />
      </div>
    </div>
  );
}

function Plan({ title, users, projects }) {
  return (
    <div style={{
      background: "white",
      padding: 20,
      borderRadius: 8,
      width: 200
    }}>
      <h3>{title}</h3>
      <p>Users: {users}</p>
      <p>Projects: {projects}</p>
      <button style={{
        marginTop: 10,
        padding: 8,
        width: "100%",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: 5
      }}>
        Choose
      </button>
    </div>
  );
}
