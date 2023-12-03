import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { useSearchImages } from "./components/api";
import Image from "./components/image";
import { SearchItem } from "./SearchItem";

import { SearchGroup } from "./SearchGroup";

function App() {
  const [searchQ, setSearchQ] = useState();
 

 
  const searchData = useSearchImages(searchQ);
  console.log({searchData})

  return (
    <div style={{ padding: "80px" }}>
      <SearchGroup
        setSearchQ={setSearchQ}
      
      
      />

      {searchData && searchQ && searchData.length == 0 && (
        <p className="text-center col-12">No result found</p>
      )}
      <div className="contain">
        {searchQ &&
          searchData.map((img) => <SearchItem src={img.urls.regular} key={img.id} />)}
      </div>
    </div>
  );
}

export default App;
