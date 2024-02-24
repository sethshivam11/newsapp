import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary text-center"
        data-bs-theme={props.mode}
      >
        <div className="container-fluid">
          <img
            src="favicon.png"
            alt=""
            style={{ height: "50px", width: "50px", marginRight: "10px" }}
          />
          <Link className="navbar-brand" to="/" style={{ fontWeight: "500" }}>
            News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
