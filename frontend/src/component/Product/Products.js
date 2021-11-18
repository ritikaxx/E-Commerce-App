import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import {getProduct } from "../../actions/productActions";
import Loader from "../layout/loader/loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";


const Products = ({match}) => {

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState([0, 25000]);
    const {
      products,
      loading,
      error,
      productsCount,
      resultPerPage,
      categories,
      filteredProductsCount,
      } = useSelector((state) => state.products);

      const keyword = match.params.keyword;

      const setCurrentPageNo = (e) => {
        setCurrentPage(e);
      };

      const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
      };

      let count = filteredProductsCount;

    useEffect(() => {

        dispatch(getProduct(keyword,currentPage));
      }, [dispatch,keyword,currentPage]);

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

     
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
    );
}


export default Products;