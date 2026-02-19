import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
const users = [
  { id: 1, name: "Michael Holz",   joined: "04/10/2013", role: "Admin",     status: "Active" },
  { id: 2, name: "Paula Wilson",   joined: "05/08/2014", role: "Publisher",  status: "Active" },
  { id: 3, name: "Antonio Moreno", joined: "11/05/2015", role: "Publisher",  status: "Suspended" },
  { id: 4, name: "Mary Saveley",   joined: "06/09/2016", role: "Reviewer",   status: "Active" },
  { id: 5, name: "Martin Sommer",  joined: "12/08/2017", role: "Moderator",  status: "Inactive" },
  { id: 6, name: "Priya Sharma",   joined: "03/14/2018", role: "Reviewer",   status: "Active" },
  { id: 7, name: "James Carter",   joined: "07/22/2019", role: "Publisher",  status: "Active" },
];
function getStatusClass(status) {
  if (status === "Active") return "status-active";
  if (status === "Suspended") return "status-suspended";
  return "status-inactive";
}
export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div className="page">
      <div className="header">
        <span className="logo">AdminPanel</span>
        <div className="header-right">
          <span className="welcome">Hi, {user.username || "User"}</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="main">
        <h2 className="page-title">User Management</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Date Joined</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.joined}</td>
                  <td>{u.role}</td>
                  <td>
                    <span className={getStatusClass(u.status)}>
                      ● {u.status}
                    </span>
                  </td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}