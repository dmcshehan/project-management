import React from "react";
import { Menu } from "antd";
import Aux from "../../../hoc/Aux/Aux";

const SignInLinks = () => {
  return (
    <Aux>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Aux>
  );
};

export default SignInLinks;
