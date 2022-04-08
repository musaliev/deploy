import React, { useReducer } from "react";
import axios from "axios";

import { CASE_GET_ONE_PRODUCT, CASE_GET_PRODUCTS } from "../helpers/cases";
import { PRODUCTS_API } from "../helpers/consts";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
  productsTotalCount: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        productsTotalCount: action.payload.headers["x-total-count"],
      };
    case CASE_GET_ONE_PRODUCT:
      return { ...state, oneProduct: action.payload.data };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createProduct(newProduct) {
    await axios.post(PRODUCTS_API, newProduct);
    getProducts();
  }
  async function getProducts() {
    let result = await axios.get(`${PRODUCTS_API}${window.location.search}`);
    // console.log("getProducts result", result);
    dispatch({
      type: CASE_GET_PRODUCTS,
      payload: result,
    });
  }

  async function getOneProduct(id) {
    let result = await axios.get(`${PRODUCTS_API}/${id}`);
    dispatch({
      type: CASE_GET_ONE_PRODUCT,
      payload: result,
    });
  }

  async function deleteProduct(id) {
    await axios.delete(`${PRODUCTS_API}/${id}`);
    getProducts();
  }

  async function updateProduct(id, editedProduct) {
    await axios.patch(`${PRODUCTS_API}/${id}`, editedProduct);
    getProducts();
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        oneProduct: state.oneProduct,
        productsTotalCount: state.productsTotalCount,
        getProducts,
        getOneProduct,
        deleteProduct,
        updateProduct,
        createProduct,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
export default ProductsContextProvider;
