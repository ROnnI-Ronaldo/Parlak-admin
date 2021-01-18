import { productsTypes } from "./products.types";
const INITIAL_STATE = {
  loading: true,
  product: {},
  errorMsg: "",
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsTypes.CREATE_PRODUCT_STARTS:
      return {
        ...INITIAL_STATE,
      };
    case productsTypes.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: { ...action.payload },
        errorMsg: "",
      };
    case productsTypes.CREATE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
