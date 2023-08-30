import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import WorkingPanel from "./WorkingPanel";

function Sidebar() {
  return (
    <div>
      <div className="wrapper">
        <section className="sidebar">
          <img src="./images/logo.png" height="70px" id="img" alt="Logo" />
          <h3>Admin Panel</h3>
          <ul className="nav-bar">
            <li>
              <Link to="#">
                <i className="bi bi-grid-fill"></i> Dashboard
              </Link>
            </li>
            <li>
              <div className="dropdown">
                <Link
                  to="/CategoryHome"
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-browser-edge"></i> Category
                </Link>
                <ul className="dropdown-menu text-center bg-dark text-white hover-none">
                  <li>
                    <Link to="/addCategory" className="dropdown-item">
                      AddCategory
                    </Link>
                  </li>
                  <li>
                    <Link to="/CategoryHome" className="dropdown-item">
                      CategoryHome
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <Link
                  to="/ProductHome"
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-handbag-fill"></i> Product
                </Link>
                <ul className="dropdown-menu text-center bg-dark text-white hover-none">
                  <li>
                    <Link to="/addProduct" className="dropdown-item">
                      AddProduct
                    </Link>
                  </li>
                  <li>
                    <Link to="/ProductHome" className="dropdown-item">
                      ProductHome
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="#">
                <i className="bi bi-people-fill"></i> User
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="bi bi-box-arrow-left"></i> Logout
              </Link>
            </li>
          </ul>
        </section>
        <WorkingPanel />
      </div>
    </div>
  );
}

export default Sidebar;
