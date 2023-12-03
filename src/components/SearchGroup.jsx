import React, { useState } from "react";
import { SearchIcon, DeleteIcon } from "../assets/icon";


export const SearchGroup = ({ setSearchQ, searchQ }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearchQ(Object.fromEntries(formData));
  };

  return (
    <form
      style={{
        display: "flex",
        width: "100%",
        marginBottom: "32px",
        marginTop: Object.entries(searchQ).length ? "0" : "30vh",
        justifyContent: Object.entries(searchQ).length ? "normal" : "center",
        transition: "margin 0.3s ease-in-out",
      }}
      onSubmit={search}
    >
      <div className="search-container">
        <div style={{ padding: "2px", marginRight: "4px" }}>{SearchIcon}</div>
        <input
          type="text"
          name="query"
          onChange={handleInputChange}
          placeholder="Телефоны, яблоки, груши..."
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
          value={"Reset"}
          style={{
            padding: "2px",
            marginLeft: "4px",
            background: "none",
            outline: "none",
            border: "none",
          }}
          type="reset"
          onClick={() => {
            setSearchQ({});
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
        type="submit"
        onMouseOver={(e) => (e.target.style.background = "#C30000")}
        onMouseOut={(e) =>
          inputValue && (e.target.style.background = "#EB0C0C")
        }
      >
        Искать
      </button>
    </form>
  );
};
