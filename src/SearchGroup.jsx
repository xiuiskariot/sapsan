import React, { useState } from "react";

const SearchIcon = (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.796875 6.9375C0.796875 10.4453 3.64844 13.2969 7.15625 13.2969C8.46094 13.2969 9.65625 12.8984 10.6562 12.2188L14.25 15.8125C14.4688 16.0391 14.7734 16.1406 15.0781 16.1406C15.7422 16.1406 16.2188 15.6406 16.2188 14.9922C16.2188 14.6797 16.1094 14.3906 15.8984 14.1719L12.3281 10.5938C13.0703 9.57031 13.5156 8.30469 13.5156 6.9375C13.5156 3.42969 10.6641 0.578125 7.15625 0.578125C3.64844 0.578125 0.796875 3.42969 0.796875 6.9375ZM2.45312 6.9375C2.45312 4.34375 4.55469 2.23438 7.15625 2.23438C9.75 2.23438 11.8594 4.34375 11.8594 6.9375C11.8594 9.53125 9.75 11.6406 7.15625 11.6406C4.55469 11.6406 2.45312 9.53125 2.45312 6.9375Z"
      fill="#C4C4C4"
    />
  </svg>
);

export const DeleteIcon = (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.46875 16.4297C12.8828 16.4297 16.5391 12.7812 16.5391 8.35938C16.5391 3.94531 12.8828 0.289062 8.46094 0.289062C4.04688 0.289062 0.398438 3.94531 0.398438 8.35938C0.398438 12.7812 4.05469 16.4297 8.46875 16.4297ZM5.90625 11.6719C5.49219 11.6719 5.17188 11.3438 5.17188 10.9219C5.17188 10.7344 5.25 10.5547 5.39062 10.4141L7.42969 8.36719L5.39062 6.32812C5.25 6.1875 5.17188 6.00781 5.17188 5.8125C5.17188 5.39844 5.49219 5.08594 5.90625 5.08594C6.11719 5.08594 6.28125 5.15625 6.42188 5.29688L8.46875 7.33594L10.5312 5.28906C10.6797 5.14062 10.8438 5.07031 11.0547 5.07031C11.4609 5.07031 11.7812 5.39062 11.7812 5.80469C11.7812 6 11.7188 6.17188 11.5703 6.32031L9.52344 8.36719L11.5625 10.4062C11.7031 10.5469 11.7812 10.7266 11.7812 10.9219C11.7812 11.3438 11.4531 11.6719 11.0391 11.6719C10.8281 11.6719 10.6406 11.5938 10.5078 11.4531L8.46875 9.41406L6.44531 11.4531C6.29688 11.5938 6.11719 11.6719 5.90625 11.6719Z"
      fill="#C4C4C4"
    />
  </svg>
);

export const SearchGroup = ({ setSearchQ, setQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    //setQuery(e.target.value);
  };

   const search = () => {
     setSearchQ(inputValue);
   };

  return (
    <div style={{ display: "flex", width: "100%", marginBottom: '16px' }}>
      <div
        style={{
          display: "flex",
          background: "#EEEEEE",
          padding: "12px 8px",
          borderRadius: "12px",
          marginRight: "8px",
          width: "33%",
        }}
      >
        <div style={{ padding: "2px", marginRight: "4px" }}>{SearchIcon}</div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          style={{
            border: "none",
            outline: "none",
            background: "none",
            fontFamily: "SF Pro Display",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            width: "100%",
          }}
        />
        <button
          style={{
            padding: "2px",
            marginLeft: "4px",
            background: "none",
            outline: "none",
            border: "none",
          }}
          onClick={() => {
            setSearchQ("");
            setInputValue("");
          }}
        >
          {inputValue ? DeleteIcon : <div style={{ width: "17px" }}></div>}
        </button>
      </div>
      <button
        style={{
          outline: "none",
          border: "none",
          background: inputValue ? "#C30000" : "#EB0C0C",
          borderRadius: "12px",
          color: "#FFFFFF",
          padding: "14px 16px",
          transition: "background 0.3s",
          fontFamily: "SF Pro Display",
          lineHeight: "19px",
        }}
        onClick={search}
        onMouseOver={(e) => (e.target.style.background = "#C30000")}
        onMouseOut={(e) =>
          inputValue && (e.target.style.background = "#EB0C0C")
        }
      >
        Искать
      </button>
    </div>
  );
};
