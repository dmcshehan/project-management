import React, { Component } from "react";
import { Row, Col } from "antd";

import Notifications from "./Notifications/Notifications";
import ProjectList from "./ProjectList/ProjectList";

class index extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <ProjectList />
        </Col>
        <Col span={12}>
          <Notifications />
        </Col>
      </Row>
    );
  }
}

export default index;
