import React, { Fragment, useEffect } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import {getProduct } from "../../actions/productActions";
import Loader from "../layout/loader/loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";

const Products = ({match}) => {

    const dispatch = useDispatch();

    const {
        products,
        loading,
      } = useSelector((state) => state.products);

      const keyword = match.params.keyword;
    useEffect(() => {

        dispatch(getProduct(keyword));
      }, [dispatch,keyword]);

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
        </Fragment>
      )}
    </Fragment>
    );
}


export default Products;