import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginHeader from "../LoginHeader";
function Success(){

    return(
        <div>
           <LoginHeader></LoginHeader>
            <div>
                <h1>Thank you for Shopping!!!!!!!</h1>
                
            </div>
            <div>
                <p>Your Payment is Successful</p>
                <p>Order will be shipped within 5-7 working days</p>
                
            </div>
            <div>
                <a href="/">Continue Shopping</a>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Success;