import { categoriesTypes } from "./categories.types";

const INITIAL_STATE = {
  loading: true,
  categories: [],
  errorMsg: "",
};

const buildNewCategoryList = (categories, categoryToAdd, parentId) => {
  const newCategoriesList = [];

  if (!parentId) {
    return [
      ...categories,
      {
        _id: categoryToAdd._id,
        categoryName: categoryToAdd.categoryName,
        slug: categoryToAdd.slug,
        categoryUrl: categoryToAdd.categoryUrl,
        parentId: categoryToAdd.parentId,
      },
    ];
  }

  for (let category of categories) {
    if (category._id === parentId) {
      newCategoriesList.push({
        ...category,
        children:
          category.children && category.children.length > 0
            ? [...category.children, categoryToAdd]
            : [categoryToAdd],
      });
    } else {
      newCategoriesList.push({
        ...category,
        children:
          category.children && category.children.length > 0
            ? buildNewCategoryList(category.children, categoryToAdd, parentId)
            : [],
      });
    }
  }

  return newCategoriesList;
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoriesTypes.FETCH_CATEGORIES_STARTS:
      return {
        ...INITIAL_STATE,
      };
    case categoriesTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        errorMsg: "",
      };
    case categoriesTypes.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case categoriesTypes.ADD_CATEGORY_STARTS:
      return {
        ...state,
        loading: true,
      };
    case categoriesTypes.ADD_CATEGORY_SUCCESS:
      const categoryToAdd = action.payload.category.category;
      const parentId = action.payload.parentId;
      const newListOfCategories = buildNewCategoryList(
        state.categories,
        categoryToAdd,
        parentId
      );
      return {
        ...state,
        loading: false,
        categories: newListOfCategories,
      };
    case categoriesTypes.ADD_CATEGORY_FAILED:
      return {
        ...state,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};
