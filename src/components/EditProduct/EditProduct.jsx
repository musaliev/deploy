import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form, Input, Select, InputNumber } from "antd";
import { productsContext } from "../../contexts/productsContext";
import { brandsContext } from "../../contexts/brandsContext";

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);
  const { getBrands, brands } = useContext(brandsContext);
  const [form] = Form.useForm();
  useEffect(() => {
    getOneProduct(params.id);
    getBrands();
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneProduct);
  }, [oneProduct]);
  const onFinish = (values) => {
    console.log("Success:", values);
    updateProduct(params.id, values).then(() => navigate("/admin"));
  };
  return (
    <div className="container" style={{ marginTop: "15px" }}>
      <h2>Edit product</h2>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        form={form}
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
          <Select>
            {brands.map((item) => (
              <Select.Option key={item.id} value={item.brand}>
                {item.brand}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Model"
          name="model"
          rules={[
            {
              required: true,
              message: "Please input model!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input description!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price!",
            },
          ]}
        >
          <InputNumber min={1} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Image 1"
          name="image1"
          rules={[
            {
              required: true,
              message: "Please input URL of image 1!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Image 2"
          name="image2"
          rules={[
            {
              required: true,
              message: "Please input URL of image 2!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Video"
          name="video"
          rules={[
            {
              required: true,
              message: "Please input URL of video!",
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
            Edit product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProduct;
