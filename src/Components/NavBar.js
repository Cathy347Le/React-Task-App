import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
      <div className="nav-container">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Notes">Notes</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
