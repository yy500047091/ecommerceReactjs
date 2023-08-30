import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true;

const ProductHome = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
    
  }, []);

  const loadProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/product');
      setProducts(response.data);
      console.log(response);
      
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/product/${id}`);
      // After successful deletion, refresh the product list
      loadProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h1 className="page-title">Product List</h1>
      <div className="container py-4">
        <table className="table border shadow mt-4">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Thumbnail</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <img src={product.thumbnail} alt={`Thumbnail for ${product.productName}`} style={{ width: '100px' }} />
                </td>
                <td>
                  <Link className="btn btn-outline-primary mx-2" to={`/EditProduct/${product.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger btn-lg mx-2" onClick={() => deleteProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductHome;
