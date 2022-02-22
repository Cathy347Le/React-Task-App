import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
      <div className="nav-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Notes">Notes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
