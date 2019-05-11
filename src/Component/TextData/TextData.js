import React from "react";
import "../TextData/TextData.css";

const TextData = props => {
  return (
    
      <div className="textdata">
        <p>
          Country- {props.name} has {props.points} points
        </p>
      </div>
    
  );
};

export default TextData;
