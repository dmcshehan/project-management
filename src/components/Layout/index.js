import React from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";
const { Content } = Layout;

const index = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <Content style={{ padding: "0 50px", marginTop: 94 }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default index;
