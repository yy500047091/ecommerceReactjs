import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Header.css"
import {  useNavigate } from "react-router-dom";
function Header(){
    const navigate = useNavigate()
    const Logout = () => {
        alert(sessionStorage.getItem("username")+'  You have successfully logged out!!!!')
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("mobileno");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("password");
        sessionStorage.removeItem("gender");

        navigate("/")
      };
return(
<div>
    <header>
  <div className="container-fluid">
    <div className="header-content" id="header-content">
        <div className="side-head">
            <span className="text-white text-center">Admin Panel</span> &nbsp;
            <i className="bi bi-list"  id="menu-btn"></i>
        </div>
        <div className="header-nav">
                <button onClick={Logout} className=" logoutbtn">Logout</button>
          
        </div>
    </div>
  </div>
  </header>
</div>
);
}

export default Header;