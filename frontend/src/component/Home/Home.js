import React, {Fragment} from 'react';
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";

const product = {
  name: "Blue Jeans",
  images: [{ url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Frajdaniel61%2Fnavy-blue-shirt%2F&psig=AOvVaw2hzgNNl-k-vQTBixrp43Z1&ust=1636723338420000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjbk92zkPQCFQAAAAAdAAAAABAJ"}],
  price: "$300",
  _id: "abhsihek",

}
const Home = () => {
    return (<Fragment>
        
        <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            <Product product={product}/>
          </div>



    </Fragment>
    );
};


export default Home;