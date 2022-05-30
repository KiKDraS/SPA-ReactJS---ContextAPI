import React from "react";
import NavBar from "./NavBar";
import "./ViewsWrapper.css";

const ViewsWrapper =
  (Componente) =>
  ({ ...props }) => {
    return (
      <>
        <NavBar />
        <div className="main">
          <Componente {...props} />
        </div>
      </>
    );
  };
export default ViewsWrapper;
