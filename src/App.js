import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./COMPONENTS/Home";
import About from "./COMPONENTS/About";
import Contact from "./COMPONENTS/Contact";
import Cart from "./COMPONENTS/Cart";
import Checkout from "./COMPONENTS/Checkout";




function App() {
  return (
     <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="About" element={<About/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
        <Route path="Cart" element={<Cart/>}></Route>
        <Route path="Checkout" element={<Checkout/>}></Route>
      </Routes>

     </BrowserRouter>
    
  
  );
}

export default App;
