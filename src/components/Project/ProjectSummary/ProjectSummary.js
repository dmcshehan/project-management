import React from "react";
import styles from "./projectSummary.module.scss";
import { Card } from "antd";
const { Meta } = Card;

const ProjectSummary = () => {
  return (
    <Card className={styles.card}>
      <Meta
        title="Europe Street beat"
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </Card>
  );
};

export default ProjectSummary;
