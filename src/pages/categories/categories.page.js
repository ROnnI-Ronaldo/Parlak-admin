import React, { useEffect, useState } from "react";
import Layout from "../../containers/Layout/layout";
import Modal from "../../components/Modal/Modal.component";

import { GoDiffAdded } from "react-icons/go";

import {
  fetchCategories,
  addCategory,
} from "../../redux/reducers/categories/categories.actions";

import { useDispatch, useSelector } from "react-redux";

import "./categories.styles.scss";

const Categories = (props) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [formData, setFormData] = useState({
    categoryName: null,
    parentId: null,
    categoryImage: null,
  });

  const dispatch = useDispatch();
  const cat = useSelector((state) => state.categories);

  const listCategoryData = (categories) => {
    const myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category._id}>
          {category.categoryName}
          {category.children && category.children.length > 0 ? (
            <ul>{listCategoryData(category.children)}</ul>
          ) : null}
        </li>
      );
    }

    return myCategories;
  };

  const categoryListOptions = (categories, options = []) => {
    //return an array with all list of categories

    for (let category of categories) {
      options.push({
        value: category._id,
        name: category.categoryName,
      });

      if (category.children && category.children.length > 0) {
        categoryListOptions(category.children, options);
      }
    }
    return options;
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const submitCategory = () => {
    const form = new FormData();
    form.append("categoryName", formData.categoryName);
    form.append("parentId", formData.parentId);
    form.append("categoryImage", formData.categoryImage);
    dispatch(addCategory(form, formData.parentId));
    hideModal();
  };

  const modalHeader = () => <h1>Add New Category</h1>;
  const modalFooter = () => (
    <button className='add-category__button' onClick={submitCategory}>
      Add Category
    </button>
  );

  const addNewCategory = () => {
    setToggleModal(true);
  };

  const hideModal = () => {
    setToggleModal(false);
  };

  const fileOnChange = (e) => {
    setFormData({ ...formData, categoryImage: e.target.files[0] });
  };

  return (
    <Layout sideNav>
      <div style={{ display: "block", width: "78%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Category List</h1>
          <button className='add-new__category' onClick={addNewCategory}>
            <GoDiffAdded />
          </button>
        </div>
        <div>
          <ul>{listCategoryData(cat.categories)}</ul>
        </div>
        {toggleModal ? (
          <Modal
            header={modalHeader()}
            footer={modalFooter()}
            width='40%'
            height='60%'
            onClick={hideModal}
          >
            <div className='modal-children'>
              <input
                className='add-category__input'
                placeholder='Category Name...!'
                type='text'
                onChange={(e) =>
                  setFormData({ ...formData, categoryName: e.target.value })
                }
              />
              <select
                className='select-category__parent'
                onChange={(e) =>
                  setFormData({ ...formData, parentId: e.target.value })
                }
              >
                <option value='0'>Select parent category</option>
                {categoryListOptions(cat.categories).map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.name}
                  </option>
                ))}
              </select>
              <label className='file'>
                <input
                  type='file'
                  id='file'
                  aria-label='File browser example'
                  onChange={fileOnChange}
                />
                <span className='file-custom'></span>
              </label>
            </div>
          </Modal>
        ) : null}
      </div>
    </Layout>
  );
};

export default Categories;
