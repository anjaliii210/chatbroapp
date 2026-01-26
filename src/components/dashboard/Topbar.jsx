export default function Topbar() {
  return (
    <header className="dashboard-topbar">
      <span>Welcome back 👋</span>
      <button className="btn btn-outline-primary btn-sm" onClick={() => {localStorage.removeItem("token");window.location.href = "/";
  }}
>
  Logout
</button>

    </header>
  );
}