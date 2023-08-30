import { blue, green } from '@mui/material/colors'
import React from 'react'



const Slider = () => {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 1"></button>
    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/Slider/slider1.jpg" className="d-block w-100 "  style={{padding:20}} height={"550px"} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 style={{color: "red" , textshadow: "2px 2px yellow"}}>Shop First On SYGMA</h1>
        <p  style={{color:"green"}}><h3>Click To View All Products</h3></p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="./images/Slider/women-fashion.jpg" className="d-block w-100 " style={{padding:20}} height={"550px"} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>


    <div className="carousel-item">
      <img src="./images/Slider/mens-slider.png" className="d-block w-100 " style={{padding:20}} height={"550px"} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="./images/Slider/footwearslider.jpg" className="d-block w-100 " style={{padding:20}} height={"550px"} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="./images/Slider/winterslider.png" className="d-block w-100 " style={{padding:20}} height={"550px"} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color:"black"}}>Second slide label</h5>
        <p style={{color:"black"}}>Some representative placeholder content for the second slide.</p>
      </div>
    </div>

    <div className="carousel-item">
        
      <img src="./images/Slider/Accessories-slider.jpg" className="d-block w-100 " style={{padding:20}} height={"550px"} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>

   

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider