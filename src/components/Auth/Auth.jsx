import React, { useEffect, useState } from 'react';
import { useAuth } from "../../contexts/authContext";
import { Form, Input, Button, Col, Alert, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate()
  const { handleLogin, handleSignUp, error } = useAuth();
  const [hasAccount, setHasAccout] = useState(false);
  function validatePassword(rule, value, callback) {
    let regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    if (regex.test(value)) {
      callback();
    } else {
      callback("Password should contain at least one digit,one lower case,one upper case, 8 from the mentioned characters");
    }
  };

  return <Row className='container' span={24} style={{ marginTop: "20px" }}>
    <Col span={7}></Col>
    <Col span={10}>
      {error ?
        <Alert
          style={{ marginBottom: "5px" }}
          description={error}
          type="error"
        /> : null}

      <Form
        name="basic"
        onFinish={(values) => hasAccount ? handleLogin(values, navigate) : handleSignUp(values, navigate)}
        autoComplete="off"
        layout='vertical'
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{
            type: 'email',
            message: 'The input is not valid Email!',
          },
          { required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }, { validator: validatePassword }]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">{hasAccount ? "Login" : "Sign up"}</Button>
          <br />
          {hasAccount ? <span>Don't have an account? <a style={{ display: "inline", marginLeft: "2px" }} onClick={() => setHasAccout(false)}>Sign up</a></span> : <span>Have an account?<a style={{ display: "inline", marginLeft: "2px" }} onClick={() => setHasAccout(true)}>Log in</a></span>}
        </Form.Item>
      </Form>
    </Col>
  </Row>
};

export default Auth;
