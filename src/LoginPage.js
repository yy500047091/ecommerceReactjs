import {NavLink} from "react-router-dom";

import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import './LoginPage.css';
import {  useNavigate } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function LoginPage(){
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]= useState({
    status:false,
    msg:"",
    type:""
  })

   
  const handleEmail = (e) => {
    setEmail(e.target.value)
}

const handlePassword = (e) => {
    setPassword(e.target.value)
}
const handleSubmit = async () => {
  console.log("in handle submit");
  try {
    const result = await axios.post('http://localhost:8080/user/signin', {
      email: email,
      password: password
    });

    console.log(result.data);

    const user1 = result.data;
    sessionStorage.setItem("username", user1.username);
    sessionStorage.setItem("id", user1.id);

    if (user1.role === "ADMIN") navigate("/admin");
    if (user1.role === "USER") navigate("/loginhome");
  } catch (error) {
    console.error(error); // Log the error for debugging
    // Handle the error, show an error message, etc.
  }
};

 


return(
  <>
  <Header/>
  <div className="login">
   
         <section className="Form my-4 mx-5 " style={{backgroungcolor:'rgb(219,226,226'}}>
    <div className="container " >
      <div className="row no-gutters rowClass">
        <div className="col-lg-5 px-0 pt-0">
          <img src="./loginPageImage.jpg" className="img-fluid" id="Loginimg" alt="Login Image"/>
        </div>

        <div className="col-lg-7 px-5 pt-5">
          <h1 className="font-weight-bold py-1">Login</h1>
          <h4>Sign into your account</h4>
         
            <div className="form-row">
              <div className="col-lg-7">
                
                <input type="email" id="email" onChange={handleEmail} value= {email} required placeholder="Enter your Email" className="form-control my-3 pt-2 "></input>
              </div>
            </div>

            <div className="form-row">
              <div className="col-lg-7">
                
                <input type="password" id="password"  onChange={handlePassword} value= {password} required placeholder="****" className="form-control"></input>
              </div>
            </div>
            
            <div className="form-row">
              <div className="col-lg-7">
                <button type="button" className="btn1 mt-3 mb-5" id="button" onClick={handleSubmit}>Login</button>
              </div>
            </div>
            

            <a href="#">Forgot Password</a>
            <p>Don't have an account? <a href="#">Sign up</a></p>
              <Alert severity='error'>All Fields Are Required</Alert>
          
        </div>
      </div>
    </div>
   </section>
  </div>
  <Footer/>
  </>
);
}

export default LoginPage;