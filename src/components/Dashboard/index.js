import React, { Component } from "react";
import { Row, Col } from "antd";

import Notifications from "./Notifications/Notifications";
import ProjectList from "./ProjectList/ProjectList";

//redux
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <Row gutter={64}>
        <Col span={12}>
          <ProjectList projects={projects} />
        </Col>
        <Col span={12}>
          <Notifications />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
