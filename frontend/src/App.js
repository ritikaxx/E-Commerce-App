import './App.css';
import Header from "./component/layout/Header/header.js";
import Footer from "./component/layout/Footer/footer.js";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js";

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
      
          <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
     </Router>
     

  );
}

export default App;
