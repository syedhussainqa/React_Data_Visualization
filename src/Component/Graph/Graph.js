import React from "react";
import "../Graph/Graph.css";

const Graph = props => {
  return (
    <li
      className=" bar-graph bar-one"
      style={{ height: props.points * 55 + "px" }}
    >
      {`Country - ${props.name}`}
      {` | Points- ${props.points}`}
    </li>
  );
};

export default Graph;
