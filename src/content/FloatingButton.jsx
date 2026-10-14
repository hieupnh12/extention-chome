import React, { useRef } from "react";

const FloatingButton = ({ onClick, open }) => {
  const ref = useRef(null);

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  }

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      aria-label="Mở EduNet Assistant"
      aria-expanded={open}
      onClick={onClick}
      onKeyDown={handleKeyDown}
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
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </div>
  );
};

export default FloatingButton;
