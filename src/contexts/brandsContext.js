import React, { useReducer } from "react";
import axios from "axios";

import { CASE_GET_BRANDS } from "../helpers/cases";
import { BRANDS_API } from "../helpers/consts";

export const brandsContext = React.createContext();

const INIT_STATE = {
  brands: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_BRANDS:
      return { ...state, brands: action.payload.data };
    default:
      return state;
  }
};

const BrandsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createBrand(newBrand) {
    await axios.post(BRANDS_API, newBrand);
    getBrands();
  }
  async function getBrands() {
    let result = await axios.get(BRANDS_API);
    dispatch({
      type: CASE_GET_BRANDS,
      payload: result,
    });
  }

  async function deleteBrand(id) {
    await axios.delete(`${BRANDS_API}/${id}`);
    getBrands();
  }

  return (
    <brandsContext.Provider
      value={{
        brands: state.brands,
        getBrands,
        deleteBrand,
        createBrand,
      }}
    >
      {children}
    </brandsContext.Provider>
  );
};
export default BrandsContextProvider;
