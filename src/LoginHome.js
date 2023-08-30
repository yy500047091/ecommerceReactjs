import { Link, Navigate } from "react-router-dom";
import CategoryNavBar from "./components/CategoryNavBar";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

import "./Home.css";
function LoginHome() {
  const navigate = useNavigate();
  const Logout = () => {
    alert(
      sessionStorage.getItem("username") +
        "  You have successfully logged out!!!!"
    );
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("mobileno");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("gender");

    navigate("/");
  };

  return (
    //Front page View
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {" "}
            <img
              src="./logo.jpeg"
              className="rounded float-start"
              width="70"
              height="50"
              alt="SYGMA"
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarTogglerDemo02"
          >
            <form className="d-flex justify-content-center" role="search">
              <input
                className="form-control me-2"
                id="searchboxsize"
                type="search"
                placeholder="Search for products and more"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success , text-white"
                id="btn_size"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="d-flex justify-content-end">
            <Link
              to="/login"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Welcome {sessionStorage.getItem("username")}
            </Link>
            {/* <Link to="/logout" className='text-white' style={{textDecoration:"none"}}> Logout</Link>  */}
            <button onClick={Logout}>Logout</button>
            <a className="navbar-brand" href="#">
              <Link
                to="/cart"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <i className="bi bi-cart3"> Cart</i>
              </Link>{" "}
            </a>
          </div>
        </div>
      </nav>
      <CategoryNavBar />
      <Footer />
    </>
  );
}

export default LoginHome;
