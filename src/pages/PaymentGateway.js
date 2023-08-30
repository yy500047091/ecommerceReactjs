import React from 'react'
import './PaymentGateway.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginHeader from '../LoginHeader'
const PaymentGateway = () => {
  return (
    
    <div id="Payment">
        <LoginHeader></LoginHeader>
        <div class="container" id="PaymentGateway">

<form action="">

    <div class="row">

        <div class="col">

            <h3 class="title">billing address</h3>

            <div class="inputBox">
                <span>full name :</span>
                <input type="text" required placeholder="abc"/>
            </div>
            <div class="inputBox">
                <span>email :</span>
                <input type="email" required placeholder="example@example.com"/>
            </div>
            <div class="inputBox">
                <span>address :</span>
                <input type="text" required placeholder="room - street - locality"/>
            </div>
            <div class="inputBox">
                <span>city :</span>
                <input type="text" required placeholder="pune"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>state :</span>
                    <input type="text" required placeholder="india"/>
                </div>
                <div class="inputBox">
                    <span>zip code :</span>
                    <input type="text" required placeholder="123 456"/>
                </div>
            </div>

        </div>

        <div class="col">

            <h3 class="title">payment</h3>

            <div class="inputBox">
                <span>cards accepted :</span>
                <img src="./images/Payment/card_img.png" alt=""/>
            </div>
            <div class="inputBox">
                <span>name on card :</span>
                <input type="text" required placeholder="mr. abc"/>
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" required placeholder="1111-2222-3333-4444"/>
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input type="text" required placeholder="january"/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input type="number" required placeholder="2022"/>
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" required placeholder="1234"/>
                </div>
            </div>

        </div>

    </div>

   <a href="/success"> <input type="submit" value="proceed to checkout"  class="submit-btn"/></a>

</form>

</div> 
<Footer></Footer>
    </div>

  )
}

export default PaymentGateway