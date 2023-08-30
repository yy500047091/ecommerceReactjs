import Home from "./pages/Home";
import SignUp from "./SignUp";
import LoginPage from "./LoginPage";

import Menswear from "./Mens/Menswear";

// import Navbar from "./Navbar";
// import Admin from "./AdminPages/Admin";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddCategory from "./AdminPages/AddCategory";
import CategoryHome from "./AdminPages/CategoryHome";
import EditCategory from "./AdminPages/EditCategory";
import AddProduct from "./AdminPages/AddProduct";
import Dashboard from "./AdminPages/Dashboard";
import LoginHome from "./LoginHome";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import PaymentGateway from "./pages/PaymentGateway";
import Success from "./pages/Success";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ProductHome from "./AdminPages/ProductHome";

function App(){
  return (

<div>
<BrowserRouter>


<Routes>
<Route path="" element={<Home/>}/>
  <Route path="/signUp" element={<SignUp/>}/>
 <Route path="/login" element={<LoginPage/>}/>
 <Route path="/loginhome" element={<LoginHome/>}/>
 <Route path="/home" element={<Home/>}/>

 <Route path="/menswear" element={<Menswear/>}/>
 <Route path="/adminPages/AddCategory" element={<AddCategory/>}/>


 <Route path="/admin" element={<Dashboard/>}/>
 <Route path="/adminPages/CategoryHome" element={<CategoryHome/>}/>
 <Route path="/EditCategory/:id" element={<EditCategory/>}/>
 <Route path="/adminPages/addProduct" element={<AddProduct/>}/>
 
 <Route path="/addCategory" element={<AddCategory/>}/>

 <Route path="/CategoryHome" element={<CategoryHome/>}/>
  
 <Route path="/addProduct" element={<AddProduct/>}/>
 <Route path="/ProductHome" element={<ProductHome/>}/>
 <Route path="/product" element={<Product/>}/>
 <Route path="/cart" element={<Cart/>}/>
 <Route path="/payment" element={<PaymentGateway/>}/>
 <Route path="/success" element={<Success/>}/>
 <Route path="/aboutus" element={<AboutUs/>}/>
 <Route path="/contactus" element={<ContactUs/>}/>

 


  


  
</Routes>

</BrowserRouter>

</div>


  );
}
export default App;