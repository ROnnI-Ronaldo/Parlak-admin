import React, { useEffect, useState } from "react";
import Layout from "../../containers/Layout/layout";
import Modal from "../../components/Modal/Modal.component";
import Input from "../../components/Input/Input.component";
import Select from "../../components/Select/Select.component";
import CustomButton from "../../components/Button/Button.component";

import { FaCloudUploadAlt } from "react-icons/fa";

import { GoDiffAdded } from "react-icons/go";

import { addCategory } from "../../redux/reducers/categories/categories.actions";

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

  const submitCategory = () => {
    const form = new FormData();
    form.append("categoryName", formData.categoryName);
    form.append("parentId", formData.parentId);
    form.append("categoryImage", formData.categoryImage);
    dispatch(addCategory(form, formData.parentId));
    hideModal();
  };

  const modalHeader = () => (
    <h1 style={{ color: "#FF6B6B", textAlign: "center" }}>Add New Category</h1>
  );
  const modalFooter = () => (
    <CustomButton
      variant='contained'
      color='primary'
      styles={{ width: "100%" }}
      label='Add new Product'
      startIcon={<FaCloudUploadAlt />}
      onClick={submitCategory}
      data-tool-tip='tool tip'
    />
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
          <CustomButton
            variant='contained'
            color='primary'
            startIcon={<GoDiffAdded />}
            onClick={addNewCategory}
            data-tool-tip='Add new Category'
          />
        </div>
        <div>
          <ul>{listCategoryData(cat.categories)}</ul>
        </div>
        {toggleModal ? (
          <Modal
            header={modalHeader()}
            footer={modalFooter()}
            onClick={hideModal}
          >
            <Input
              type='text'
              label='Category Name'
              placeholder='Category Name...!'
              width='400px'
              styles={{ margin: "0 20px" }}
              onChange={(e) =>
                setFormData({ ...formData, categoryName: e.target.value })
              }
            />
            <Select
              label='Select parent category'
              width='400px'
              styles={{ margin: "20px 0" }}
              valueField='value'
              labelField='name'
              onChange={(e) =>
                setFormData({ ...formData, parentId: e.target.value })
              }
              options={categoryListOptions(cat.categories)}
            />
            <input
              accept='image/*'
              type='file'
              style={{ margin: "20px", width: "90%" }}
              onChange={fileOnChange}
              onChange={(e) =>
                setFormData({ ...formData, categoryImage: e.target.files[0] })
              }
            />
          </Modal>
        ) : null}
      </div>
    </Layout>
  );
};

export default Categories;
