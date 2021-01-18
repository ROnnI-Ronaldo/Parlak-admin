import React, { useState } from "react";

import Layout from "../../containers/Layout/layout";
import Modal from "../../components/Modal/Modal.component";
import Input from "../../components/Input/Input.component";
import Select from "../../components/Select/Select.component";
import CustomButton from "../../components/Button/Button.component";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../redux/reducers/products/products.actions";

import "./products.styles.scss";

const ProductsPage = (props) => {
  const categories = useSelector((state) => state.categories.categories);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(true);

  const [productDetails, setProductDetails] = useState({
    name: "",
    productPictures: [],
    price: 0,
    description: "",
    quantity: 0,
    category: "",
  });

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

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {
    const formCategory = new FormData();
    const {
      name,
      productPictures,
      price,
      description,
      quantity,
      category,
    } = productDetails;
    console.log(productPictures, "productPictures");
    formCategory.append("name", name);
    formCategory.append("productPictures", ...productPictures);
    formCategory.append("price", price);
    formCategory.append("description", description);
    formCategory.append("quantity", quantity);
    formCategory.append("category", category);
    formCategory.append("createdBy", user.user._id);

    dispatch(createProduct(formCategory));
  };

  const modalHeader = () => (
    <h1 style={{ color: "#FF6B6B", textAlign: "center" }}>Add New Product</h1>
  );
  const modalFooter = () => (
    <CustomButton
      variant='contained'
      color='primary'
      styles={{ width: "100%" }}
      label='Add new Product'
      startIcon={<FaCloudUploadAlt />}
      onClick={handleSubmit}
    />
  );
  return (
    <Layout sideNav>
      <div className='container'>
        <h1>Products</h1>
        <button className='add-product__button' onClick={handleModalShow}>
          Add Product
        </button>
        {showModal ? (
          <Modal
            onClick={handleModalClose}
            header={modalHeader()}
            footer={modalFooter()}
          >
            <Input
              type='text'
              label='Name'
              width='400px'
              styles={{ margin: "0 20px" }}
              onChange={(e) =>
                setProductDetails({ ...productDetails, name: e.target.value })
              }
            />
            <Input
              type='number'
              label='Price'
              width='400px'
              styles={{ margin: "0 20px" }}
              onChange={(e) =>
                setProductDetails({ ...productDetails, price: e.target.value })
              }
            />
            <Input
              type='text'
              label='Description'
              multiline
              width='400px'
              styles={{ margin: "0 20px" }}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  description: e.target.value,
                })
              }
            />
            <Input
              type='number'
              label='Quantity'
              width='400px'
              styles={{ margin: "0 20px" }}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  quantity: e.target.value,
                })
              }
            />
            <input
              accept='image/*'
              type='file'
              style={{ margin: "20px", width: "90%" }}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  productPictures: [
                    ...productDetails.productPictures,
                    e.target.files[0],
                  ],
                })
              }
            />
            <Select
              label='Category'
              width='400px'
              styles={{ margin: "20px 0" }}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  category: e.target.value,
                })
              }
              valueField='value'
              labelField='name'
              value={productDetails.category}
              options={categoryListOptions(categories)}
            />
          </Modal>
        ) : null}
      </div>
    </Layout>
  );
};

export default ProductsPage;
