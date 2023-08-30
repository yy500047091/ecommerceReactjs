
import {Link} from 'react-router-dom'


import React from 'react';




function Admin() {

  return (
       <div>
        <nav className="navbar bg-light">
       <div className="container-fluid">
       <Link to="/adminPages/AddCategory"><a className="navbar-brand" href="#"> Add Category</a></Link> 

       </div>
     </nav>
     

    

    
     </div>
  );
} 

export default Admin;