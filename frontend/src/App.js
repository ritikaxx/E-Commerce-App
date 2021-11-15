import './App.css';
import Header from "./component/layout/Header/header.js";
import Footer from "./component/layout/Footer/footer.js";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js";
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';

function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto" , "Droid Sans" , "Chilnka"],
      },
    });
  }, [] );
  return (
    
     <Router>
      <Header />  
       
      <Routes>
      
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/products" element={<Products />} />


      </Routes>
      <Footer />
     </Router>
     

  );
}

export default App;
