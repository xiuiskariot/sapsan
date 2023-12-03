import React from "react";

const CloseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      fill="black"
      fillOpacity="0.4"
    />
  </svg>
);

export const Modal = ({ closeModal, src }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <button
        onClick={closeModal}
        style={{
          aspectRatio: "1/1",
          outline: "none",
          border: "none",
          borderRadius: "50%",
          background: "#FFF",
          // width: "50px",
          zIndex: "100",
          position: "absolute",
          top: "33px",
          right: "33px",
        }}
      >
        {CloseIcon}
      </button>
      <div
        style={{
          //background: `url(${props.src}) no-repeat center / cover`,
          // padding: "20px",

          borderRadius: "4px",
        }}
      >
        <img
          src={src.src}
          alt=""
          style={{ width: "100%", maxHeight: "90vh" }}
        />
      </div>
    </div>
  );
};
