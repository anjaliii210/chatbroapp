import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="dashboard-sidebar">
      <h3 className="logo">ChatBRO</h3>

      <nav>
        <Link to="/dashboard">Overview</Link>
        <Link to="/dashboard">My Documents</Link>
        <Link to="/dashboard">Chat History</Link>
        <Link to="/dashboard">Settings</Link>
      </nav>
    </aside>
  );
}