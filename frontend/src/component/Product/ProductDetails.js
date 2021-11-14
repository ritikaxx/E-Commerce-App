import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import {
    getProductDetails,
  } from "../../actions/productActions";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";

const ProductDetails = ( {match} ) => {
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector(
        (state) => state.productDetails
      );
    
      useEffect(() => {
          dispatch(getProductDetails(match && match.params.id))
      }, [dispatch, match && match.params.id]);
    return (
        <Fragment>
            <div className="ProductDetails">
           
                
            </div>
        </Fragment>
    );
}

export default ProductDetails;