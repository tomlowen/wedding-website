import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

function NavBar({ content }) {
  return (
    <Router>
      <nav className="flex justify-between bg-gray-900 text-white">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            {content.map((section) => (
              <li>
                <HashLink smooth to={`/#${section.title}`} className="navLink">
                  {section.title}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:hidden flex mr-6 items-center">
          <div className="animate-pulse border border-pink-500 border-solid rounded-md p-2"></div>
          <HashLink smooth to={`/#rsvp`}>
            RSVP
          </HashLink>
        </div>
        <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
      </nav>
    </Router>
  );
}

export default NavBar;
