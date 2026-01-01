export default function Users() {
  return (
    <div>
      <h1 className="page-title">Users</h1>

      <table style={{ width: "100%", background: "white", padding: 10 }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test@test.com</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
