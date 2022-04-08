import React from "react";
import "./Footer.css";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="first-footer">
      <div className="back">
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BACK TO TOP
        </a>
      </div>
      <div className="footer">
        <div className="foot">
          <h3>CUSTOMER CAR</h3>
          <a style={{ color: "black" }}>ContactUs</a>
          <a style={{ color: "black" }}>Luxury Services</a>
          <a style={{ color: "black" }}>Delivery Information</a>
          <a style={{ color: "black" }}>Click & Collect</a>
          <a style={{ color: "black" }}>Affirm Finance</a>
          <a style={{ color: "black" }}>WOS Credit Card</a>
          <a style={{ color: "black" }}>Return Policy</a>
          <a style={{ color: "black" }}>Frequently Asked Questions</a>
          <a style={{ color: "black" }}>Your Feedback</a>
        </div>

        <div className="foot">
          <h3>INFORMATION</h3>
          <a style={{ color: "black" }}>Your Security</a>
          <a style={{ color: "black" }}>Terms Of Service</a>
          <a style={{ color: "black" }}>Privacy Policy</a>
          <a style={{ color: "black" }}>Cookie Policy</a>
          <a style={{ color: "black" }}>Accessibility</a>
          <a style={{ color: "black" }}>Corporate Social Responsibility</a>
          <a style={{ color: "black" }}>PayByLink Terms</a>
          <a style={{ color: "black" }}>Calibre</a>
        </div>

        <div className="foot">
          <h3>ABOUT WOS US</h3>
          <a style={{ color: "black" }}>About Us</a>
          <a style={{ color: "black" }}>Press Room</a>
          <a style={{ color: "black" }}>Careers</a>
          <a style={{ color: "black" }}>Newsletter Sign Up</a>
        </div>

        <div className="foot">
          <h3>CATEGORIES</h3>
          <a style={{ color: "black" }}>Watches</a>
          <a style={{ color: "black" }}>Brands</a>
        </div>

        <div className="foot">
          <h3>FOLLOW US ON</h3>
          <div className="ins">
            <a>
              <InstagramOutlined />
            </a>
            <a>
              <FacebookOutlined />
            </a>
            <a>
              <TwitterOutlined />
            </a>
            <a>
              <YoutubeOutlined />
            </a>
            <a>
              <WhatsAppOutlined />
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://www.watchesofswitzerland.com/medias/usa-payment-options-group-1121.png?context=bWFzdGVyfHJvb3R8NTA1M3xpbWFnZS9wbmd8aDIwL2hkNS85MTIyMTcxMTI1NzkwLnBuZ3wzZDQ5ZGZhMjc2NjM4MzBlZjZhMjk1NzcyOWEyOGUwYzVjNGZiNzAzZGZmYjQ5Y2U5M2E1MTUxYzU5ZWRmMjVj"
        alt=""
      />

      <p style={{ marginTop: "3%", marginLeft: "1%" }}>
        Copyright © 2021 Watches of Switzerland. All rights reserved.
      </p>

      <a style={{ marginLeft: "1%", color: "black" }}>
        The Watches of Switzerland Group Corporate Site
      </a>

      <div className="img2">
        <a>
          <img
            src="https://a0a73a99cbfedf7e3b28-a6fed8c1b4fb343f790cc1a783af6690.ssl.cf3.rackcdn.com/footer/wos-corp-logo.png"
            alt=""
          />
          <img
            src="https://content.thewosgroup.com/wosus/logo/wos_since_1924_uk_blk_notag.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
