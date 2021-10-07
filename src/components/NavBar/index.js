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
          <div className="flex mr-6 items-center">
            <div className="animate-pulse border border-pink-500 border-solid rounded-md p-2">
              <HashLink smooth to={`/#rsvp`}>
                RSVP
              </HashLink>
            </div>
          </div>
        </div>
      </nav>
    </Router>
  );
}

export default NavBar;
