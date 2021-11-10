import './App.css';
import Header from "./component/layout/header.js";
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
     </Router>
  );
}

export default App;
