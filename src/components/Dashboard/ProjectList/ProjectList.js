import React from "react";
import ProjectSummary from "../../Project/ProjectSummary/ProjectSummary";
import { Typography } from "antd";
const { Title } = Typography;

const ProjectList = ({ projects }) => {
  return (
    <div>
      <Title level={4}>Projects</Title>
      {projects &&
        projects.map(project => (
          <ProjectSummary key={project.id} project={project} />
        ))}
    </div>
  );
};

export default ProjectList;
