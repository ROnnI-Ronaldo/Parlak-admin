import axios from "../../../config";
import { categoriesTypes } from "./categories.types";

const fetchCategoriesStarts = () => ({
  type: categoriesTypes.FETCH_CATEGORIES_STARTS,
});

const fetchCategoriesSuccess = (categories) => ({
  type: categoriesTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

const fetchCategoriesFailed = (errorMsg) => ({
  type: categoriesTypes.FETCH_CATEGORIES_FAILED,
  payload: errorMsg,
});

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStarts());
    const res = await axios.get("/categories");

    if (res.status === 200) {
      dispatch(fetchCategoriesSuccess(res.data.categories));
    } else {
      dispatch(fetchCategoriesFailed(res.msg));
    }
  };
};

const addCategoryStart = () => ({
  type: categoriesTypes.ADD_CATEGORY_STARTS,
});

const addCategorySuccess = (msg) => ({
  type: categoriesTypes.ADD_CATEGORY_SUCCESS,
  payload: msg,
});

const addCategoriesFailed = (errMsg) => ({
  type: categoriesTypes.ADD_CATEGORY_FAILED,
  payload: errMsg,
});

export const addCategory = (form, parentId) => {
  return async (dispatch) => {
    dispatch(addCategoryStart());

    const res = await axios.post("/category/create", form);

    if (res.status === 200) {
      dispatch(addCategorySuccess({ category: res.data, parentId }));
    } else {
      dispatch(addCategoriesFailed(res.err));
    }
  };
};
