import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";

import { Carousel, Button, Image } from "antd";

import { productsContext } from "../../contexts/productsContext";
import { cartContext } from "../../contexts/cartContext";

const DetailsProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct: product } = useContext(productsContext);
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(false);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    setCheckInCart(checkItemInCart(id))
  }, [product])
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      {product ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "35vw", border: "1px solid black" }}>
              <Carousel autoplay>
                <div>
                  <Image
                    width="100%"
                    src={product.image1}
                  />
                </div>
                <div>
                  <Image
                    width="100%"
                    src={product.image2}
                  />
                </div>
              </Carousel>
            </div>
            <div style={{ width: "40vw" }}>
              <h2>{product.brand}</h2>
              <h3>{product.model}</h3>
              <h2>{"$" + product.price}</h2>
              <Button
                onClick={() => {
                  addProductToCart(product);
                  setCheckInCart(checkItemInCart(id))
                }}
                type={checkInCart ? "primary" : ""}
                size="large"
                style={{ margin: "15px 0px", width: "100%" }}
              >{checkInCart ? "REMOVE FROM CART" : "ADD TO CART"}
              </Button>
              <div>{product.description}</div>
            </div>
          </div>
          <video src={product.video} width="100%" autoPlay loop muted></video>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsProduct;
