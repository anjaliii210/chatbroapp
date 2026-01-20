import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top custom-navbar">
      <div className="container">
        {/* BRAND */}
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
  <img
    src="src\assests\logo.png"
    alt="Logo"
    className="navbar-logo"
  />
  <span className="brand-text">ChatBRO</span>
</Link>

        {/* MOBILE TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV LINKS */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-4">
            <li className="nav-item">
              <Link className="nav-link nav-animate" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link nav-animate"
                onClick={() => scrollToSection("features")}
              >
                Features
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link nav-animate"
                onClick={() => scrollToSection("use-cases")}
              >
                Use Cases
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link nav-animate"
                onClick={() => scrollToSection("pricing")}
              >
                Pricing
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link nav-animate"
                onClick={() => scrollToSection("faqs")}
              >
                FAQ
              </button>
            </li>
          </ul>

          {/* CTA */}
          <button
            className="btn btn-primary cta-btn"
            onClick={() => navigate("/auth")}
          >
            Get Started — It’s Free
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
