import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { isLoggedIn, logOut } from "../services/authService";
import { useEffect } from "react";

const LayOut = () => {
  const navigate = useNavigate();

  const activeClass = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <>
      <header>
        <nav>
          <ul className="flex justify-center gap-2 font-bold mt-2">
            <li>
              <NavLink className={activeClass} to="/" end>
                Main Page
              </NavLink>
            </li>
            {isLoggedIn() && (
              <li>
                <button
                  className="cursor-pointer text-red-400"
                  onClick={() => logOut(navigate)}
                >
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <div className="min-w-screen min-h-screen flex justify-center items-center">
        <Outlet />
      </div>
      <footer className="text-center text-white bg-[darkcyan]">
        React demo app
      </footer>
    </>
  );
};

export default LayOut;
