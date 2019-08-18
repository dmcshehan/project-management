import React from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
import backgroundImage from "../../resources/background.jpg";

const { Content } = Layout;

const index = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <Content
        style={{
          padding: "0 50px",
          paddingTop: 94,
          minHeight: "calc(100vh - 69px)",
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div
          style={{
            padding: 50,
            minHeight: 380
          }}
        >
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default index;
