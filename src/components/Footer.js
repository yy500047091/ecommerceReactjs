import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid bg-dark ' style={{overflow: "hidden"}}>
        <div className='row'>
            <div className='col-md-12 mx-5 '>
                <div className='row pt-4 ' style={{color:"Grey"}}>
                    <div className='col-md-3 '  >
                        <h3>ABOUT</h3>
                        <ul >
                            <li ><a href='/aboutus'target={"_blank"}>About Us</a></li>
                            <li><a href='/contactus'target={"_blank"}>Contact Us</a></li>
                          
                        </ul>
                    </div>
                    
                    <div className='col-md-3'>
                        <h3>SERVICES</h3>
                        <ul>
                            <li><a href='#' target={"_blank"}>Shipping</a></li>
                            <li><a href='#' target={"_blank"}>Supplier</a></li>
                                                  
                        </ul>
                    </div>

                    <div className='col-md-3'>
                        <h3>CONNECT WITH US</h3>
                        <ul>
                            <li><a href='#' target={"_blank"}><i class="bi bi-facebook"></i> Facebook</a></li>
                            <li><a href='#' target={"_blank"}><i class="bi bi-instagram"></i> Instagram</a></li>
                            <li><a href='#' target={"_blank"}><i class="bi bi-twitter"></i> Twitter</a></li>                        
                        </ul>
                    </div>

                    <div className='col-md-3'>
                        <h3>POLICY</h3>
                        <ul>
                            <li><a href='#'target={"_blank"}>Terms and Conditions</a></li>
                            <li><a href='#'target={"_blank"}>Return Policy</a></li>
                                                
                        </ul>
                    </div>

                </div>
            </div>
            <hr className='text-white'></hr>
             <div className=''>
                <p className='main-hero-para text-center w-100 text-white'>
                    Copyright <i class="bi bi-c-circle"></i> 2022 SYGMA. All rights reserved.
                </p>
             </div>

        </div>
         
    </div>
  )
}

export default Footer