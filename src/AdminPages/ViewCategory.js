// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const ViewCategory = () => {
//   const [category, setCategory] = useState([] );
//   useEffect(() => {
//     const getcategory = async (id) =>{
//     const res = await axios.get('http://localhost:8080/category/${id}')
//     //const getdata = await res.json();
//     setCategory(res);
//     console.log(res);
//   } 
//     getcategory();
  
//   },[]);
 

//   return (
//     <div className="container">
//       <div className="row">
//         <div
//           className={
//             "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
//           }>
//           <h2 className={"text-center m-4"}>Category Detail</h2>

//           <div className="card">
//             <div className="card-header">
//               {/* Details of Category id : {data.category.id}
//              */}
//               {/* <ul className={"list-group list-group-flush"}>
//                 <li className="list-group-item">
//                   <b>Name: </b>
//                   {data.category.name}
//                 </li>
//                 <li className="list-group-item">
//                   <b>Description: </b>
//                   {data.category.description}
//                 </li>
                
//               </ul> */}
//               <table class="table table-striped table-secondary">
//                  <thead className="table-dark">
//                     <tr>
//                   <th>Sr.No</th>
//                  <th> Name</th>
                
//                  <th>Description</th>
                
               
//                  </tr>
//                      </thead>
//                  <tbody>
        
//                  {
//              category
//              .map(({getcate})=>
//              <tr>
//               <td>
//                 {getcate.id}
//               </td>
//               <td>
//                 {getcate.name}
//               </td>
//               <td>
//                 {getcate.description}
//               </td>
              
//              </tr>
//              )}
//                  </tbody>

//               </table>

//             </div>

//           </div>
//           <Link className={"btn btn-primary my-2"} to={"/"}>Back to Dash</Link>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default ViewCategory;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewCategory = () => {
  const [category, setCategory] = useState({
    name: "",
    description: ""

});

  const { id } = useParams();

  useEffect(() => {
    loadCategory();
  });

  const loadCategory = async () => {
    const result = await axios.get(`http://localhost:8080/category/${id}`);
    setCategory(result);

  };

  return (
    <div className="container">
      <div className="row">
        <div
          className={
            "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
          }>
          <h2 className={"text-center m-4"}>Category Detail</h2>

          <div className="card">
            <div className="card-header">
           
              Details of Category id : {category.id}
              <ul className={"list-group list-group-flush"}>
                <li className="list-group-item">
                  <b>Name: </b>
                  {category.name}
                </li>
                <li className="list-group-item">
                  <b>Description: </b>
                  {category.description}
                </li>
                
              </ul>
         

            </div>

          </div>
         

          <Link className={"btn btn-primary my-2"} to={"/"}>Back to Dash</Link>
        </div>

      </div>

    </div>
  );
};

export default ViewCategory;