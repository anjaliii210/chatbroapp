import DashboardLayout from "../components/dashboard/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h2>Dashboard</h2>
      <p>Upload documents and start chatting with them.</p>

      <div className="dashboard-cards">
        <div className="card">📄 Documents</div>
        <div className="card">💬 Chats</div>
        <div className="card">⚡ Usage</div>
      </div>
    </DashboardLayout>
  );
}