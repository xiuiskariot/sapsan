import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { LoadImages, SearchImages } from "./components/api";
import Image from "./components/image";

import { SearchGroup } from "./SearchGroup";

function App() {
  const [searchQ, setSearchQ] = useState();
  const [query, setQuery] = useState();

  const search = () => {
    setSearchQ(query);
  };
  const searchData = SearchImages(searchQ);

  return (
    <div style={{ padding: "80px" }}>
      <SearchGroup
        setSearchQ={setSearchQ}
        setQuery={setQuery}
        search={search}
      />

      {searchData && searchQ && searchData.length == 0 && (
        <p className="text-center col-12">No result found</p>
      )}
      <div className="contain">
        {searchQ &&
          searchData.map((img, key) => <Image src={img.urls.full} key={key} />)}
      </div>
    </div>
  );
}

export default App;
