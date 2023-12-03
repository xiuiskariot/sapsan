import React from "react";
import { CloseIcon } from "../assets/icon";

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
          borderRadius: "4px",
        }}
      >
        <img
          src={src.src}
          alt="es"
          style={{ width: "100%", maxHeight: "90vh" }}
        />
      </div>
    </div>
  );
};
