import React, { useContext, useEffect } from "react";
import { Card } from "antd";

import { brandsContext } from "../../contexts/brandsContext";

const BrandsList = () => {
  const { getBrands, brands } = useContext(brandsContext);
  useEffect(() => {
    getBrands();
  }, []);
  //   console.log(brands);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {brands.map((item) => (
        <Card
          key={item.id}
          hoverable
          style={{ width: "240px", height: "240px", margin: "10px" }}
          cover={<img alt="example" src={item.logo} />}
        />
      ))}
    </div>
  );
};

export default BrandsList;
