import React, { Fragment, useEffect } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import {getProduct } from "../../actions/productActions";
import Loader from "../layout/loader/loader";
import ProductCard from "../Home/ProductCard";
const Products = () => {

    const dispatch = useDispatch();

    const {
        products,
        loading,
      } = useSelector((state) => state.products);

    useEffect(() => {

        dispatch(getProduct());
      }, [dispatch]);

    return (
        <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
    
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

         
        </Fragment>
      )}
    </Fragment>
    );
}


export default Products;