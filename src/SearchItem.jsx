import React, { useState } from "react";
import { DeleteIcon } from "./SearchGroup";

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
      fill-opacity="0.4"
    />
  </svg>
);



export const SearchItem = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <div
        style={{
          aspectRatio: "1/1",
          background: `url(${props.src}) no-repeat center / cover`,
          objectFit: "fill",
          border: "1px solid #EBEBEB",
          borderRadius: "4px",
          cursor: "zoom-in",
        }}
        onClick={openModal}
      ></div>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)", // Полупрозрачный фон
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "99",
            "@media (max-width: 950px)": {
              background: "red", // Пример изменения цвета фона для ширин менее 950 пикселей
            },
          }}
          onClick={closeModal}
        >
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
              src={props.src}
              alt=""
              style={{ width: "100%", maxHeight: "90vh" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
