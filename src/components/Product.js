// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Product.css';

// const Product = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     GetAllProducts();
//     console.log('getting called');
//   }, []);

//   const GetAllProducts = () => {
//     axios.get('http://localhost:8080/product').then((response) => {
//       const result = response.data;
//       console.log(result);
//       setProducts(result);
//     });
//   };

//   const addToCart = (item) => {
//     const fk_prodId = item.id;
//     const userId = sessionStorage.getItem('id');

//     const payload = {
//       quantity: 1,
//     };

//     axios
//       .post(`http://localhost:8080/cart?fk_prodId=${fk_prodId}&id=${userId}`, payload)
//       .then((response) => {
//         if (response.status === 200) {
//           alert('Added to cart!');
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <h1 className="text-center text-info pt-4 ">Let's Shop bro</h1>
//       <h3 className="text-center">All Products</h3>
//       <div className="container-fluid mx-20">
//         <div className="row mt-5 mx-2">
//           {products.map((item) => {
//             return (
//               <div className="col-md-3 mb-4" key={item.id}>
//                 <div className="card">
//                   <img
//                     src={`http://localhost:8080/images/product_images/${item.thumbnail}`}
//                     width="50px"
//                     className="card-img-top"
//                     alt="img"
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{item.productName}</h5>
//                     <p>Price: Rs.{item.price}</p>

//                     <p className="card-text">{item.description}</p>
//                     <button
//                       onClick={() => {
//                         addToCart(item);
//                       }}
//                       type="button"
//                       className="btn btn-success"
//                     >
//                       Add To Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetAllProducts();
  }, []);

  const GetAllProducts = () => {
    axios
      .get('http://localhost:8080/product')
      .then((response) => {
        const result = response.data;
        setProducts(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  };
  const addToCart = (itemId) => {
    const userId = sessionStorage.getItem('id');

    const payload = {
      quantity: 1,
    };

    axios
      .post(`http://localhost:8080/cart?fk_prodId=${itemId}&id=${userId}`, payload)
      .then((response) => {
        if (response.status === 200) {
          alert('Added to cart!');
        }
      })
      .catch((err) => console.log(err));
  };
  const renderProductCard = (item) => {
    return (
      <div className="col-md-3 mb-4" key={item.id}>
        <div className="card">
          <img
            src={`http://localhost:8080/image/images/${item.thumbnail}`}
            width="200px"
            height="200px"
            className="card-img-top"
            alt={item.productName}
          />
          <div className="card-body">
            <h5 className="card-title">{item.productName}</h5>
            <p>Price: Rs.{item.price}</p>
            <p className="card-text">{item.description}</p>
            <button
              onClick={() => {
                addToCart(item.id);
              }}
              type="button"
              className="btn btn-success"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-center text-info pt-4">Let's Shop bro</h1>
      <h3 className="text-center">All Products</h3>
      <div className="container-fluid mx-20">
        {loading ? (
          <div className="text-center mt-5">
            <h4>Loading...</h4>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center mt-5">
            <h4>No products available</h4>
          </div>
        ) : (
          <div className="row mt-5 mx-2">
            {products.map((item) => renderProductCard(item))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
