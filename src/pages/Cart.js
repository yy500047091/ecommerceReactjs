import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const navigate = useNavigate();

  const getCartItems = () => {
    const userId = sessionStorage.getItem("id");
    axios
      .get(`http://localhost:8080/cart/${userId}`)
      .then((response) => {
        console.log(response);
        const cartItems = Array.isArray(response.data) ? response.data : [response.data];
        setCartData(cartItems);
        calculateTotalBill(cartItems);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const calculateTotalBill = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    setTotalBill(total);
  };

  const handleIncrement = (cartItem) => {
    const updatedCartData = cartData.map((item) => {
      if (item.id === cartItem.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartData(updatedCartData);
    calculateTotalBill(updatedCartData);
  };

  const handleDecrement = (cartItem) => {
    if (cartItem.quantity > 1) {
      const updatedCartData = cartData.map((item) => {
        if (item.id === cartItem.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      setCartData(updatedCartData);
      calculateTotalBill(updatedCartData);
    }
  };

  const handleRemove = (cartItem) => {
    const updatedCartData = cartData.filter((item) => item.id !== cartItem.id);
    setCartData(updatedCartData);
    calculateTotalBill(updatedCartData);
  };

  const handleAddressSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const addressData = {
      address: formData.get("street"),
      city: formData.get("city"),
      state: formData.get("state"),
      pinCode: formData.get("zipCode"),
      country: formData.get("country"),
    };

    // Send the address data to the backend to store it
    axios
    .post("http://localhost:8080/address", addressData)
    .then((response) => {
      // Address successfully stored, now proceed to place the order
      const userId = sessionStorage.getItem("id"); // Get the userId from session storage
      handleCheckout(userId); // Pass userId to handleCheckout function
    })
      .catch((error) => {
        console.log(error);
        // Handle error if necessary
      });
  };
  const handleCheckout = () => {
    const productIds = cartData.map((item) => item.product.id);
  
    // Create the transientOrder object with the required properties
    const transientOrder = {
      orderDate: new Date().toISOString(),
      totalAmount: totalBill,
      status: "TRANSACTION_SUCCESSFUL",
      // Other properties of the Orders object can be set here if needed
    };
  
    const userId = sessionStorage.getItem("id");
    
    // Use URLSearchParams to encode the productIds
    const params = new URLSearchParams();
    productIds.forEach((id) => {
      params.append('productIds', id);
    });
  
    axios
      .post(`http://localhost:8080/orders/add?userId=${userId}&${params.toString()}`, transientOrder)
      .then((response) => {
        navigate("/PaymentGateway");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Details</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((cartItem) => (
            <tr key={cartItem.id}>
              <td>
                <img src={`http://localhost:8080/image/images/${cartItem.product.thumbnail}`} alt="Product" height={100} width={100} />
                <span>{cartItem.product.productName}</span>
              </td>
              <td>
                <button onClick={() => handleDecrement(cartItem)}>-</button>
                {cartItem.quantity}
                <button onClick={() => handleIncrement(cartItem)}>+</button>
              </td>
              <td>{cartItem.product.price}</td>
              <td>{cartItem.product.price * cartItem.quantity}</td>
              <td>
                <button onClick={() => handleRemove(cartItem)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="total">
        <h3>Total: {totalBill}</h3>
      </div>
      {/* Address Form */}
      <div className="address-form">
        <h2>Enter Your Address</h2>
        <Form onSubmit={handleAddressSubmit}>
          <Form.Group controlId="street">
            <Form.Label>Street</Form.Label>
            <Form.Control type="text" name="street" required />
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" required />
          </Form.Group>
          <Form.Group controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" name="state" required />
          </Form.Group>
          <Form.Group controlId="zipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" name="zipCode" required />
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" name="country" required />
          </Form.Group>
          {/* Add other address fields here */}
          <Button variant="primary" type="submit">Submit Address</Button>
        </Form>
      </div>
      <div className="checkout">
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
