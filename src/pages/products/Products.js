import React, { useState } from "react";

import Layout from "../../containers/Layout/layout";
import Modal from "../../components/Modal/Modal.component";
import Input from "../../components/Input/Input.component";
import Select from "../../components/Select/Select.component";

import "./products.styles.scss";

const ProductsPage = (props) => {
  const [showModal, setShowModal] = useState(true);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  const modalHeader = () => (
    <h1 style={{ color: "#FF6B6B", textAlign: "center" }}>Add New Product</h1>
  );
  const modalFooter = () => <button>Add new Product</button>;
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
            />
            <Input
              type='number'
              label='Price'
              width='400px'
              styles={{ margin: "0 20px" }}
            />
            <Input
              type='text'
              label='Description'
              width='400px'
              styles={{ margin: "0 20px" }}
            />
            <Input
              type='number'
              label='Quantity'
              width='400px'
              styles={{ margin: "0 20px" }}
            />
            <Select
              label='Category'
              width='400px'
              styles={{ margin: "20px 0" }}
            />
          </Modal>
        ) : null}
      </div>
    </Layout>
  );
};

export default ProductsPage;
