import React from "react";
import ProjectSummary from "../../Project/ProjectSummary/ProjectSummary";
import { Typography } from "antd";
const { Title } = Typography;

const ProjectList = () => {
  return (
    <div>
      <Title level={4}>Projects</Title>
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectList;
