import React from "react";
import styles from "./projectSummary.module.scss";
import { Card } from "antd";
const { Meta } = Card;

const ProjectSummary = ({ project }) => {
  return (
    <Card className={styles.card}>
      <Meta title={project.title} description={project.content} />
    </Card>
  );
};

export default ProjectSummary;
