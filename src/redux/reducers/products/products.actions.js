import { productsTypes } from "./products.types";
import axios from "../../../config";

const createProductStarts = () => ({
  type: productsTypes.CREATE_PRODUCT_STARTS,
});

const createProductSuccess = (product) => ({
  type: productsTypes.CREATE_PRODUCT_SUCCESS,
  payload: product,
});

const createProductFailed = (errorMsg) => ({
  type: productsTypes.CREATE_PRODUCT_FAILED,
  payload: errorMsg,
});

export const createProduct = (productData) => {
  return async (dispatch) => {
    dispatch(createProductStarts());
    axios
      .post("/products/createProducts", productData)
      .then((res) => {
        dispatch(createProductSuccess(res.data));
      })
      .catch((err) => {
        dispatch(createProductFailed(err.errorMsg));
      });
  };
};
