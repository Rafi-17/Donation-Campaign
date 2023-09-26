import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FiMenu,FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center py-12 px-4 lg:px-0">
        <div>
            <Logo></Logo>
        </div>
        <div className="text-2xl md:hidden " onClick={()=>setOpen(!open)}>
        {
            open ? <FiX className="text-2xl"></FiX> : <FiMenu ></FiMenu>
        }
        
      </div>
        <ul className={`md:flex gap-10 absolute md:static px-2 md:px-6 ${open? 'top-16 left-[300px] border-2 md:border-0 rounded-md' : ''}`}>
          <li className={`${open? '' : 'hidden md:inline'}`}>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className={`${open? '' : 'hidden md:inline'}`}>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline font-bold" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className={`${open? '' : 'hidden md:inline'}`}>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline font-bold" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
