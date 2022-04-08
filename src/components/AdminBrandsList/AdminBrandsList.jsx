import React, { useContext, useEffect } from "react";
import { List, Avatar, Popconfirm, message } from "antd";
import { brandsContext } from "../../contexts/brandsContext";

const AdminBrandsList = () => {
  const { getBrands, deleteBrand, brands } = useContext(brandsContext);
  useEffect(() => {
    getBrands();
  }, []);
  function confirmDelete(id) {
    deleteBrand(id)
    message.success('Brand removed!');
  }

  function cancelDelete(e) {
    message.error('Canceled');
  }
  return (
    <List
      className="demo-loadmore-list items-list"
      itemLayout="horizontal"
      dataSource={brands}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Popconfirm
              title="Are you sure to delete this brand?"
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
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.logo} />}
            title={<a>{item.brand}</a>}
          />
        </List.Item>
      )}
    />
  );
};

export default AdminBrandsList;
