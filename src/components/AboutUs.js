import React from 'react'
import "./AboutUS.css";
import styled from 'styled-components';


const SubTitle = styled.h2`
    flex:1;
    color:#C4A484;
    padding:10px;
`


const Programmer = styled.div`
    margin:10px;
`
const Supporter = styled.div`
    margin:10px;
`



const AboutUs = () => {
  return (
   
        <div class="section" id="AboutUs">
    <div class="container">
        <div class="content-section">
            <div class="title">
                <h1>About Us</h1>
            </div>
            <div class="content">
                <h3>SYGMA : Fashion Fusion</h3>
                <p> Sygma Online Shopping app to buy and sell fashion from website. There are two users, Admin and Customers. Admin
                            will perform CRUD operation for data with respect to product & category. Customers can view and buy from
                            available products. Technologies we have used are Java for business logic being OOPs and platform independent
                            language, React for dynamic pages to facilitate UI experience and MySQL as backend to facilitates effective
                            management of databases.</p>
               
            </div>
        
        </div>
        <div class="image-section">
        <SubTitle>Programmer & Designer</SubTitle>
                        <Programmer>Sameer Gomte (220340120079)</Programmer>
                        <Programmer>Akash Ghodke (220340120076)</Programmer>
                        
                        <Supporter>Manasi Neve (220340120116)</Supporter>
                        <Supporter>Gourav Rathore (220340120080)</Supporter>
                        <Supporter>Yogesh Yadav (220340120235)</Supporter>
                   
        </div>
    </div>
</div>

  )
}

export default AboutUs

