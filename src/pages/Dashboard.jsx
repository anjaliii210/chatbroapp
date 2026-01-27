import DashboardLayout from "../components/dashboard/DashboardLayout";
import { Link } from "react-router-dom";

function LoggedInLinks() {
  return (
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/chat">Chat</Link>
    </div>
  );
}

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h2>Dashboard</h2>
      <p>Upload documents and start chatting with them.</p>

      <LoggedInLinks />

      <div className="dashboard-cards">
        <div className="card">📄 Documents</div>
        <div className="card">💬 Chats</div>
        <div className="card">⚡ Usage</div>
      </div>
    </DashboardLayout>
  );
}
