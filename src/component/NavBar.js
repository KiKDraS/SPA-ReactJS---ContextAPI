import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const { auth, logOut } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg bg-primary p-2">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="#">
          App
        </Link>
        {auth && (
          <NavLink
            className="nav-link text-white"
            aria-current="page"
            to="#"
            onClick={logOut}>
            LogOut
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
