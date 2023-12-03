import React, { useState } from "react";
import { DeleteIcon } from "./SearchGroup";
import { Modal } from "./Modal";




export const SearchItem = (src) => {

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
          background: `url(${src.src}) no-repeat center / cover`,
          objectFit: "fill",
          border: "1px solid #EBEBEB",
          borderRadius: "4px",
          cursor: "zoom-in",
        }}
        onClick={openModal}
      ></div>
      {isModalOpen && (
       <Modal src={src} closeModal={closeModal}/>
      )}
    </div>
  );
};
