import React from 'react'
import "./contactUs.css"

const ContactUs = () => {
  return (
     <div class="container" id="ContactUs">
    <h2>Get in Touch with our experts</h2>
    <div class="contact-info">
        <form action="">
            <h3>Write Us</h3>
            <input type="text" name="fullname" id="fullname" placeholder="Full Name *" required/>
            <input type="email" name="email" id="email" placeholder="Email *" required/>
            <input type="text" name="company" id="company" placeholder="Company *" required/>
            <label for="customercheck">Are you an existing customer? *</label>
            <div class="customer-check-wrap">
                <span>Yes</span>
                <input type="radio" name="customercheck" id="customercheck" value="yes" required/>
                <span>No</span><input type="radio" name="customercheck" id="customercheck" value="no" required/>

            </div>
            <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Your Message Here..."></textarea>
            <button type="submit">Send</button>
        </form>
        <div class="details">
            <h3>Meet our experts</h3>
            <p>Live support available for 6am-5pm Mon-Fri
                </p>
                    <div class="expert-wrapper">
                        <div class="expert">
                          
                            <p>Manasi Neve </p>
                        </div>
                        <div class="expert">
                         
                            <p>Sameer Gomte</p>
                        </div>
                        <div class="expert">
                           
                            <p>Akash Ghodke</p>
                        </div>
                        <div class="expert">
                           
                           <p>Gourav Rathore</p>
                       </div>
                       <div class="expert">
                           
                           <p>Yogesh</p>
                       </div>

                    </div>

        </div>

    </div>

</div>
  )
};

export default ContactUs