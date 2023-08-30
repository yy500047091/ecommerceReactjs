import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Header.css"

function Header(){
return(
<div>
    <header>
  <div class="container-fluid">
    <div class="header-content" id="header-content">
        <div class="side-head">
            <span class="text-white text-center">Admin Panel</span> &nbsp;
            <i class="bi bi-list"  id="menu-btn"></i>
        </div>
        <div class="header-nav">
            <ul>
                
   
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    </div>
  </div>
  </header>
</div>
);
}

export default Header;