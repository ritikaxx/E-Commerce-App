import './App.css';
import Header from "./component/layout/Header/header.js";
import Footer from "./component/layout/Footer/footer.js";
import {BrowserRouter as Router} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";

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
       <Footer />
     </Router>

  );
}

export default App;
