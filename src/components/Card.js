import React from 'react';

const Card = ({ item, addToCart }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img
          src={`http://localhost:8080/image/images/${item.thumbnail}`} // Use the endpoint you created
          width="200px"
          height="200px"
          className="card-img-top"
          alt={item.productName}
        />
        <div className="card-body">
          <h5 className="card-title">{item.productName}</h5>
          <p>Price: Rs.{item.price}</p>
          <p className="card-text">{item.description}</p>
          <button onClick={() => addToCart(item)} type="button" className="btn btn-success">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
