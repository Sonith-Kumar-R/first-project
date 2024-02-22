import axios from "axios";
import { ActionTypes } from "./action-types";
//ActionTypes is to perform the 'OPERATIONS'.
export const fetchProducts =  () => {//we can add asyn to inner func and not for main func  here only
  return async function(dispatch,getState){
    const response=await axios.get("/products")

    dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
  }
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,// Data feild of the action
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
