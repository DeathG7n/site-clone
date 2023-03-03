import React from "react";
import {ThreeCircles} from "react-loader-spinner";

const SpinnerLoader = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0 0 0/ 0.7)",
        width: "100%",
        height: "100vh",
        position: "fixed",
        zIndex: "100000",
        alignItems: "center",
        display: "flex",
        justifyContent:"center",
      }}
    >
        <ThreeCircles
          type="Puff"
          color="#f64803"
          height={100}
          width={100}
        />
    </div>
  );
};

export default SpinnerLoader;
