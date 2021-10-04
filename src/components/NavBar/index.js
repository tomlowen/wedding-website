import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export function NavBar() {
  return (
    <Router>
      <div className="navbar">
        <nav className="linksList">
          <li>
            <HashLink smooth to="/#hello" className="navLink">
              HELLO
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" className="navLink">
              DETAILS
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#users" className="navLink">
              VENUE
            </HashLink>
          </li>
          <li>
            <HashLink className="navLink rsvpButton" smooth to="/#rsvpform">
              RSVP!
            </HashLink>
          </li>
        </nav>
      </div>
    </Router>
  );
}
