import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/posts">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="text-center">
        <h1 className="my-3">Home</h1>
      </div>
    </>
  );
}

export default Home;
