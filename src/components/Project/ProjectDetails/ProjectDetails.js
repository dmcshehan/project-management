import React from "react";
import { Card } from "antd";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <Card title={`Project Details-${id}`} bordered={false}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
      voluptate impedit et, laudantium dolor reprehenderit molestias inventore
      amet eaque ea nostrum id soluta animi illum beatae! Debitis vero
      necessitatibus enim!
    </Card>
  );
};

export default ProjectDetails;
