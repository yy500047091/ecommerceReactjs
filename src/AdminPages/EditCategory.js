import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditCategory = () => {
   
    let navigate = useNavigate();

  
    const {id} =useParams()

    const [category, setCategory] = useState({
        name: "",
        desciption: "",
       
    });

    const { name, description} = category;

    const onInputChange = (e) => {
        
        setCategory({ ...category, [e.target.name]: e.target.value });
        
    };

    useEffect(()=>{
        loadCategory()
    },[])

    const onSubmit = async (e) => {
        e.preventDefault();
       
        await axios.put(`http://localhost:8080/category/${id}`, category);
        navigate("/");
    };


   
    const loadCategory  = async () => {
        const result=await axios.get(`http://localhost:8080/category/${id}`)
        setCategory(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                
                <div
                    className={
                        "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
                    }
                >
                    <h2 className={"text-center m-4"}>Edit Category</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className={"mb-3"}>
                            <label htmlFor={"Name"} className={"form-label"}>
                                Name
                            </label>
                            <input
                                type={"text"}
                                className={"form-control"}
                                placeholder={"Enter your name"}
                                name={"name"}
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className={"mb-3"}>
                            <label htmlFor={"Name"} className={"form-label"}>
                                Category Description
                            </label>
                            <input
                                type={"text"}
                                className={"form-control"}
                                placeholder={"Enter your username"}
                                name={"description"}
                                value={description}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        

                        <button type={"submit"} className={"btn btn-success"}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditCategory;