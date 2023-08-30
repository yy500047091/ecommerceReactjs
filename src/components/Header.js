import React, { Fragment } from 'react'
import './Header.css'


const Header = () => {
  return (
    <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid" >
            <a className="navbar-brand" href="/"> <img src="./images/logo.png " className="rounded float-start mx-5" width="70" height="50" alt="SYGMA"></img></a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarTogglerDemo02">

                    <form className="d-flex justify-content-center" role="search">
                        <input className="form-control me-2" id="searchboxsize" type="search" placeholder="Search for products and more" aria-label="Search" />
                        <button className="btn btn-outline-success , text-white" id ="btn_size" type="submit">Search</button>
                    </form>
                </div>
               
                <div className="d-flex justify-content-end" >
  
                </div>

                <div className="d-flex justify-content-end">
                 <a className="navbar-brand " href='./login'><i className="bi bi-person"> Login </i></a>
                <a className="navbar-brand" href='./signUp'><i className="bi bi-person-plus">  SignUp</i></a>
                   <a className="navbar-brand" href='./cart'><i className="bi bi-cart3"> Cart</i> </a>
                </div>

            </div>
        </nav>
    </Fragment>
  )
}

export default Header