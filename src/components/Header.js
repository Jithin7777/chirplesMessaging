import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="navigation bg-primary text-white d-flex justify-content-center mt-auto mt-lg-0">
      <Navbar.Brand
        onClick={() => navigate("/Chat")}
        className="logo-display fs-1 text-center"
        title="Chirples"
      >
        <i className="bi bi-feather2"></i>
      </Navbar.Brand>
      <Nav className="justify-content-center my-auto" variant="pills">
        <NavLink
          to="/Chat"
          title="Chat"
          className={({ isActive }) =>
            isActive ? "nav-link fs-4 active" : "nav-link fs-4"
          }
        >
          <i className="bi bi-chat-right"></i>
        </NavLink>
        <NavLink
          to="/People"
          title="People"
          className={({ isActive }) =>
            isActive ? "nav-link fs-4 active" : "nav-link fs-4"
          }
        >
          <i className="bi bi-people"></i>
        </NavLink>
        <NavLink
          to="/Setting"
          title="Setting"
          className={({ isActive }) =>
            isActive ? "nav-link fs-4 active" : "nav-link fs-4"
          }
        >
          <i className="bi bi-gear"></i>
        </NavLink>
      </Nav>
    </div>
  );
};

export default Header;