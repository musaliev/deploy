import React, { useContext, useEffect, useState } from "react";
import { List, Avatar, Pagination, Popconfirm, message } from "antd";
import { Link, useSearchParams } from "react-router-dom";

import { productsContext } from "../../contexts/productsContext";

const AdminProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getProducts, deleteProduct, products, productsTotalCount } =
    useContext(productsContext);

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 10
  );
  useEffect(() => {
    setSearchParams({
      q: "",
      _page: currentPage,
      _limit: limit,
    });
  }, []);
  useEffect(() => {
    setSearchParams({
      q: "",
      _page: currentPage,
      _limit: limit,
    });
  }, [currentPage, limit]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  //   console.log(window.location.search);
  function confirmDelete(id) {
    deleteProduct(id)
    message.success('Product removed!');
  }

  function cancelDelete(e) {
    message.error('Canceled');
  }
  return (
    <>
      <List
        className="demo-loadmore-list items-list"
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Popconfirm
                title="Are you sure to delete this product?"
                onConfirm={() => confirmDelete(item.id)}
                onCancel={cancelDelete}
                okText="Yes"
                cancelText="No"
              >
                <a
                  key="list-loadmore-edit"
                >
                  Delete
                </a>
              </Popconfirm>,
              <Link to={`/edit/${item.id}`}>edit</Link>,
              <Link to={`/products/${item.id}`}>more</Link>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.image1} />}
              title={
                <a>
                  {item.brand}, {item.model}
                </a>
              }
            />
          </List.Item>
        )}
      />
      <Pagination
        onChange={(page, limit) => {
          setCurrentPage(page);
          setLimit(limit);
        }}
        current={+currentPage}
        defaultCurrent={1}
        total={+productsTotalCount}
        pageSize={+limit}
      />
    </>
  );
};

export default AdminProductsList;
