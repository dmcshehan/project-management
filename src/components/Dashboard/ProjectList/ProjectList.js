import styles from "./projectList.module.scss" 
import React from "react";
import { Card } from "antd";
const { Meta } = Card;



const ProjectList = () => {
  return (
    <div>
      <Card className={styles.card}>
        <Meta title="Europe Street beat" description="Ant Design, a design language for background applications, is refined by Ant UED Team" />
      </Card>
    </div>
  );
};

export default ProjectList;
