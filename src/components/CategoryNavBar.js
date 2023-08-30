
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import Product from './Product'
import Slider from './Slider'
import './CategoryNavBar.css'

const CategoryNavBar = () => {

    const[product , setProduct]=useState([Product])

    const filterResult=(catItem)=>{
        const result=Product.filter((curData)=>{
            return curData.category === catItem;
        });

        setProduct(result);
    }

  return (
    <div className='container-fluid '> <nav className="navbar navbar-expand-lg bg-light justify-content-center " >
    <div className="container-fluid  mx-5 ">



        <div className="collapse navbar-collapse mx-5 " id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">



            <Link to={{ pathname: '/product', search:'id=1' }}>
                    <div className='me-4 ' >
                      <button className="Category"onClick={()=>filterResult('Men')}><u>Mens Wear</u> </button>
                        <br/>
                   
                    <img src="./assets/menswear.jpeg" width="70" height="70" class="img-thumbnail" alt="..."/>

                    </div>
             </Link>
             <Link to={{ pathname: '/product', search:'id=2' }}>
                    <div className='me-4'>
                       <u className='womenswear' > Womens  Wear</u>
                        <br/>
                   
                    <img src="./assets/womenswear.jpeg" width="70" height="70" class="img-thumbnail" alt="..."/>


                    </div>

                    </Link>


                    <Link to={{ pathname: '/product', search:'id=3' }}>
                    <div className='me-4'>
                       <u className='winterwear' > Winter Wear</u>
                        <br/>
                   
                    <img src="./assets/winterwear.jpeg" width="70" height="70" class="img-thumbnail" alt="..."/>


                    </div>
                    </Link>


                    <Link to={{ pathname: '/product', search:'id=4' }}>

                       <div className='me-4'>
                       <u className='accessories' > Accessories</u>
                        <br/>
                   
                    <img src="./assets/accessories1.jpeg" width="100" height="70" class="img-thumbnail" alt="..."/>


                    </div>

                    </Link>


                    <Link to={{ pathname: '/product', search:'id=5' }}>
                    <div className='me-4'>
                       <u className='winterwear' > FootWear</u>
                        <br/>
                   
                    <img src="./assets/footwear.jpeg" width="70" height="70" class="img-thumbnail" alt="..."/>

                    </div>
                    </Link>

              
            </ul>

        </div>
    </div>
</nav>
<Slider/>
<Product/>

</div>
  )
}

export default CategoryNavBar