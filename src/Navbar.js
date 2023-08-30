import { Link } from "react-router-dom";
import "./Home.css";
function Navbar() {
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
            <Link to="/Login">
              <a className="navbar-brand ">
                <i className="bi bi-person"> Login </i>
              </a>
            </Link>
            <Link to="/SignUp">
              <a className="navbar-brand" href="#">
                <i className="bi bi-person-plus"> SignUp</i>
              </a>
            </Link>
            <a className="navbar-brand" href="#">
              <i className="bi bi-cart3"> Cart</i>{" "}
            </a>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-light justify-content-center ">
        <div className="container-fluid  ">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/Menswear">
                <div className="me-4">
                  <u className="menswear"> Mens Wear </u>
                  <br />

                  <img
                    src="./assets/menswear.jpeg"
                    width="70"
                    height="70"
                    class="img-thumbnail"
                    alt="..."
                  />
                </div>
              </Link>

              <div className="me-4">
                <u className="womenswear"> Womens Wear</u>
                <br />

                <img
                  src="./assets/womenswear.jpeg"
                  width="70"
                  height="70"
                  class="img-thumbnail"
                  alt="..."
                />
              </div>
              <div className="me-4">
                <u className="winterwear"> Winter Wear</u>
                <br />

                <img
                  src="./assets/winterwear.jpeg"
                  width="70"
                  height="70"
                  class="img-thumbnail"
                  alt="..."
                />
              </div>
              <div className="me-4">
                <u className="accessories"> Accessories</u>
                <br />

                <img
                  src="./assets/accessories1.jpeg"
                  width="100"
                  height="70"
                  class="img-thumbnail"
                  alt="..."
                />
              </div>
              <div className="me-4">
                <u className="winterwear"> FootWear</u>
                <br />

                <img
                  src="./assets/footwear.jpeg"
                  width="70"
                  height="70"
                  class="img-thumbnail"
                  alt="..."
                />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
