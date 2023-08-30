import React from "react";
import { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


function Signup(){
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUserName] = useState('')
  const [mobileno, setMobileNo] = useState('')
  const [gender, setGender] = useState('')
  const [role, setRole] = useState('')
  const [error, setError]= useState({
    status:false,
    msg:"",
    type:""
  })

  const handleName = (e) => {
    setUserName(e.target.value)
}

const handleMobileNo = (e) => {
  setMobileNo(e.target.value)
}
  const handleEmail = (e) => {
    setEmail(e.target.value)
}

const handlePassword = (e) => {
    setPassword(e.target.value)
}


 const handleSubmit =async () => {
  console.log("in handle submit")
  let user1 =await axios.post('http://localhost:8080/user',
  { 
    username:username,
      email : email,
      password : password,
      mobileno:mobileno,
      gender:gender,
      role:role
  })
  .then(result =>{
         console.log(result.data)
        
         return result.data;
  })

console.log(user1.username)
  
sessionStorage.setItem("username",user1.username)
sessionStorage.setItem("id",user1.id)

sessionStorage.getItem("username")
  navigate("/login")



//   const data = new FormData(e.currentTarget);
//   const actualData ={
//   email : data.get('email'),
//   password: data.get('password')
//   }
//   if(actualData.email && actualData.password){
//     console.log(actualData);
//     document.getElementById('login-form').reset()
//   }else{
//      setError({status:true , msg:"All Fields are Required", type:'error'})
// }
 }
    return(
    <div >
      <Header/>
       <section className="rem-100" style={{backgroundColor:'rgb(219, 226 , 226)'}} >
  <div className="container " >
    
      <div className="col-lg-10 col-xl-11">
        <div className="card text-black rounded" style={{backgroundColor:'rgb(219, 226 , 226)', border:"none"}}>
          <div className="card-body p-md-5" style={{backgroundColor:'rgb(219, 226 , 226)', boxShadow:"none" , border:"none"} }  >
            <div className="row rowClass" style={{boxshadow:"none"}}>
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <p>Your Name</p>
                      <input type="text" name="username" id="username" onChange={handleName} value= {username} className="form-control" placeholder="Enter Name" required/>
                      <label className="form-label" for="username"></label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <p>Your email</p>
                    <input type="email" id="email" onChange={handleEmail} value= {email} required placeholder="Enter your Email" className="form-control my-3 pt-2 "></input>
             
                      <label className="form-label" for="email"></label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <p>Mobile No.</p>
                      <input type="tel" name="mobileno" onChange={handleMobileNo} value={mobileno} id="mobileno" className="form-control" />
                      <label className="form-label" for="mobileno"></label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <p>password</p>
                        <input type="password" id="password"  onChange={handlePassword} value= {password} required placeholder="****" className="form-control"></input>
           
                      <label className="form-label" for="password"></label>
                    </div>
                  </div>
                  Select Gender
                  <div className="form-check">
                   
                  <input className="form-check-input" type="radio" name="gender" value="Male"  onChange={e => setGender(e.target.value)} />Male
                   </div>
                  <div className="form-check">
                   
                     <input className="form-check-input" type="radio" name="gender" value="Female"  onChange={e => setGender(e.target.value)} />Female
                  </div>
                 <br/>

                   Select Role
                   <div className="form-check">
                                      
                     <input className="form-check-input" type="radio" name="role" value="USER"  onChange={e => setRole(e.target.value)} />USER
                  </div>
                  <div className="form-check">
                  <input className="form-check-input" type="radio" name="role" value="ADMIN"  onChange={e => setRole(e.target.value)} />ADMIN
                  </div>
                  <br/>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="./assets/signup_backgroung_image.jpg" className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    
  </div>
</section>
<Footer/>
    </div>   

    );
}
export default Signup;