import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Badge, Button } from "antd";
import { ShoppingCartOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";

import { useAuth } from "../../contexts/authContext";
import { cartContext } from "../../contexts/cartContext";

import "./Header.css";
import { ADMIN_EMAIL } from "../../helpers/consts";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const {
    handleLogOut,
    currentUser,
  } = useAuth();
  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  const NAV_ITEMS = [
    {
      title: "BRANDS A-Z",
      link: "/brands",
      id: 1,
    },
    {
      title: "WATCHES",
      link: "/products",
      id: 2,
    },
    {
      title: "STORES",
      link: "*",
      id: 3,
    },
    {
      title: "NEWS",
      link: "*",
      id: 4,
    },
    {
      title: "CONTACTS",
      link: "*",
      id: 5,
    },
  ];
  return (
    <>
      <nav>
        <div>
          {currentUser ? <> <Button>{currentUser}</Button> <Button onClick={handleLogOut}>Logout<LogoutOutlined /></Button></> : <Button onClick={() => navigate("/auth")}>Login / Sign up</Button>}
        </div>
      </nav>
      <div className="header">
        <div></div>
        <Link to="/">
          <img
            width="200px"
            src="https://content.thewosgroup.com/wosus/logo/wos_since_1924_uk_blk_notag.svg"
            alt=""
          />
        </Link>
        <div>
          <Link to="/cart">
            <Badge count={+cartLength}>
              <ShoppingCartOutlined
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Badge>
          </Link>
        </div>
      </div>
      <div className="navbar">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            {item.title}
          </Link>
        ))}

        {currentUser === ADMIN_EMAIL ? (
          <Link
            className={
              location.pathname === "/admin"
                ? "navbar__item-active"
                : "navbar__item"
            }
            to="/admin"
          >
            ADMIN
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Header;
