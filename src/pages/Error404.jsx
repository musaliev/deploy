import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Result, Button } from "antd";

const Error404 = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button onClick={() => navigate("/")} type="primary">Back Home</Button>
        }
      />
    </div>
  );
};

export default Error404;
