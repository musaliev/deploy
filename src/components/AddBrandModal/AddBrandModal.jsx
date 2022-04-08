import React, { useContext, useState } from "react";
import { Modal, Button, Form, Input, message } from "antd";
import { brandsContext } from "../../contexts/brandsContext";

const AddBrandModal = () => {
  const { createBrand } = useContext(brandsContext)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createBrand(values).then(() => {
      handleCancel(); message.success("Added new product!")
    })
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add brand
      </Button>
      <Modal
        title="Add brand"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Brand"
            name="brand"
            rules={[
              {
                required: true,
                message: "Please input brand!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Logo"
            name="logo"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add brand
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddBrandModal;
