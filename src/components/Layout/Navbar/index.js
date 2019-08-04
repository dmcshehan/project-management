import styles from "./navbar.module.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Layout, Menu, Typography, Button } from "antd";

const { Title } = Typography;
const { Header } = Layout;

const index = () => {
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <div className={styles.logo}>
        <Link to="/">
          <Title level={4} style={{ marginBottom: 0, color: "#fff" }}>
            Mario Project
          </Title>
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <NavLink to="/">Signup</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/">Login</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/">New Project</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/logout">Log Out</NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <Button shape="circle">SD</Button>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default index;
