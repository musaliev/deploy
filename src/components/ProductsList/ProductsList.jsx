import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Input, Pagination, Empty } from "antd";

import { productsContext } from "../../contexts/productsContext";

import Filters from "../Filters/Filters";
import ProductCard from "./ProductCard";

import "./ProductsList.css";

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
  );
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([1, 1000000]);
  const [showFilters, setShowFilters] = useState(false);
  const { getProducts, products, productsTotalCount } =
    useContext(productsContext);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      brand: brand,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: limit,
      brand: brand,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, page, limit, brand, price]);
  console.log(products);
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="products-search">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
        </div>
        <Input.Search
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "25vw" }}
          placeholder="Search..."
        />
      </div>
      {showFilters ? (
        <Filters
          brand={brand}
          setBrand={setBrand}
          price={price}
          setPrice={setPrice}
        />
      ) : null}
      <div className="products-list">
        {products.length > 0 ? (
          products.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <Empty style={{ marginBottom: "20px" }} />
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {products.length > 0 ? <Pagination
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          total={+productsTotalCount}
        /> : null}

      </div>
    </div>
  );
};

export default ProductsList;
