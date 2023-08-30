import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null); 
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [thumbnail, setThumbnail] = useState(undefined);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/category');
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading categories:', error);
      setLoading(false);
    }
  };

  const onFileSelect = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (!thumbnail || productName === '' || description === '' || price === '' || isNaN(stock) || !selectedCategory) {
      alert('Please fill in all the required fields.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('thumbnail', thumbnail);
    formData.append('fk_category_id', selectedCategory);

    axios.post('http://localhost:8080/product', formData)
    .then((response) => {
      console.log('API Response:', response); // Add this line to log the response
      const result = response.data;
      if (result.status === 'success') {
        alert('Successfully added product');
        navigate('/ProductHome');
      } else {
        setError(result.message || 'Error while adding product');
      }
    })
    .catch((error) => {
      console.error('Error adding product:', error);
      setError(error.message || 'Unknown Error: Unable to connect to the server');
    });
};
  return (
    <div>
      <h1 className="page-title">Add Product</h1>

      <div className="col-md-6">
        <label htmlFor="productName">Product Name</label>
        <input
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="stock">Stock</label>
        <input
          id="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="form-control"
        >
          <option value="">Select a category</option>
          {loading ? (
            <option>Loading categories...</option>
          ) : (
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))
          )}
        </select>
      </div>

      <div className="col-md-6">
        <label htmlFor="thumbnail">Thumbnail</label>
        <input
          id="thumbnail"
          accept="image/*"
          onChange={onFileSelect}
          type="file"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <button onClick={handleSubmit} className="btn btn-success">
          {loading ? 'Adding...' : 'Add'}
        </button>
        &nbsp;&nbsp;
        <Link to="/ProductHome">
          <button className="btn btn-warning">Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default AddProduct;
