import "./Child.css";
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium
        fugiat porro modi quod, in provident magnam deleniti suscipit nostrum
        odio ut molestias illum natus consectetur voluptate explicabo hic at?
      </p>
    </React.Fragment>
  );
};

export default Child;
