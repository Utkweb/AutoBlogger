import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Header.css';
import { UserContext } from "./UseContext";

const Header = () => {
  const navigate = useNavigate();

  const { loggedIn, setLoggedIn, currentUser } = useContext(UserContext);
  const logout = () => {
    sessionStorage.removeItem("user")
    setLoggedIn(false)
    navigate('/login');
  }
  return (
    <div>
      {/* <!-- Navbar --> */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <!-- Container wrapper --> */}
  <div className="container-fluid">
    {/* <!-- Toggle button --> */}
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <!-- Navbar brand --> */}
      <NavLink className="navbar-brand mt-2 mt-lg-0" to="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </NavLink>
      {/* <!-- Left links --> */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Team</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Projects</NavLink>
        </li>
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}

    {/* <!-- Right elements --> */}
    <div className="d-flex align-items-center">
      {/* <!-- Icon --> */}
      <div className="d-flex align-items-center">
        <button type="button" className="btn btn-link px-3 me-2">
          {/* <NavLink>Login</NavLink> */}
          Login
          
        </button>
        <button type="button" className="btn btn-primary me-3">
          Sign up for free
        </button>
      </div>

    
      {/* <!-- Avatar --> */}
      <div className="dropdown">
        <NavLink
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          to="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </NavLink>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <NavLink className="dropdown-item" to="#">My profile</NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="#">Settings</NavLink>
          </li>
          {!loggedIn ? (
              <li className="nav-item">
                <NavLink className="nav-link active text-white" to="/main/login">
                  Login
                </NavLink>
              </li>
              )
              :
              <button className="btn btn-danger w-100" onClick={logout}>Logout</button>
}
        </ul>
        
      </div>
    </div>
    {/* <!-- Right elements --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}
    </div>
  );
};

export default Header;