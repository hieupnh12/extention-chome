import React, { useRef } from "react";

const FloatingButton = ({ onClick }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "56px",
        height: "56px",
        backgroundColor: "#e54686ff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        cursor: "pointer",
        zIndex: 999999,
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></svg>
    </div>
  );
};

export default FloatingButton;
