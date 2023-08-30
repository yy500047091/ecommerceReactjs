import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddCategory=()=>{

    let navigate=useNavigate();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    // const[category, setCategory]= useState({
    //     Name:"",
    //     description:"",    
    // });

  

    // const onInputChange=(e)=>{
    //     setCategory({...category,[e.target.name]: e.target.value});
    // };
    const handleName = (e) => {
      setName(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
}

    // const onSubmit = async (e) => {
    //     e.preventDefault();
      
    //     await axios.post("http://localhost:8080/category");
    //     navigate("/adminPages/ViewCategory");
    //   };
    const onSubmit =async (e) => {
      e.preventDefault();
      console.log("in handle submit")
      let category1 =await axios.post('http://localhost:8080/category',
      {  name:name,
      description:description 
       
      })
      .then(result =>{
             console.log(result.data)
            
             return result.data;
      })

      console.log(category1.name)
      navigate("/adminPages/CategoryHome")
    
    }

    return(
        <div className="container">
        <div className="row">
         
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add Category</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor={"Name"} className={"form-label"}>
                  Category Name
                </label>
                {/* <input
                  type={"text"}
                  className={"form-control"}
                  placeholder={"Enter Category name"}
                  name={"name"}
                  value={name}
                  onChange={(e) => onInputChange(e)}
                /> */}
                <input type="text" id="name" onChange={handleName} value= {name} required placeholder="Enter Category name" className="form-control my-3 pt-2 "></input>
              </div>
  
              <div className={"mb-3"}>
                <label htmlFor={"Name"} className={"form-label"}>
                   Description
                </label>
                {/* <input
                  type={"text"}
                  className={"form-control"}
                  placeholder={"Enter Category Specification"}
                  name={"description"}
                  value={description}
                  onChange={(e) => onInputChange(e)}
                /> */}
                <input type="text" id="description" onChange={handleDescription} value= {description} required placeholder="Enter Description" className="form-control my-3 pt-2 "></input>
              </div>
  
                
              <button type={"submit"} className={"btn btn-outline-primary"}>
                Submit
              </button>
  
              <Link className={"btn btn-outline-danger mx-2"} to={"/"}>Cancel</Link>
  
            </form>
          </div>
        </div>
      </div>
    );
}

export default AddCategory;