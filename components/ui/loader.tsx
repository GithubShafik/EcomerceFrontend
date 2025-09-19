import { Loader } from "lucide-react";
import React from "react";

const LoaderComponent = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // To ensure centering in both directions
      }}
    >
      <Loader className="animate-spin" size={48} />
    </div>
  );
};

export default LoaderComponent;
