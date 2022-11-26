import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/posts">
                Posts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="text-center">
        <h1 className="mb-5">About Us</h1>
      </div>
    </>
  );
}

export default AboutUs;
