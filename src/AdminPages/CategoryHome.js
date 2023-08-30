import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

const CategoryHome = () => {
  const [category, setCategory] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    const result = await axios.get(`http://localhost:8080/category`);
    setCategory(result.data);
  };

  const deleteCategory = async (id) => {
    await axios.delete(`http://localhost:8080/category/${id}`);
    loadCategory();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logging the formData before making the request
    console.log("Form Data before POST request:", formData);
    try {
      // Send the new category data to the server
      await axios.post("http://localhost:8080/category", formData);
      // Clear the form after adding
      setFormData({ name: "", description: "" });
      // Refresh the category list after adding
      loadCategory();
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <Header />
      <div className={"container"}>
        <div className="py-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Category
            </button>
          </form>

          <table className="table border shadow mt-4">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {category.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>
                    <Link
                      className={"btn btn-outline-primary mx-2"}
                      to={`/EditCategory/${category.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className={"btn btn-danger btn-lg mx-2"}
                      onClick={() => deleteCategory(category.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryHome;
