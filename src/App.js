import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { useSearchImages } from "./components/api";

import { SearchItem } from "./SearchItem";

import { SearchGroup } from "./SearchGroup";
import { Spinner } from "./Spinner";

function App() {
  const [searchQ, setSearchQ] = useState({});

  
 

 
  const { query: searchData, isLoading } = useSearchImages(searchQ);
  console.log(searchData);
 
  return (
    <main>
      <SearchGroup setSearchQ={setSearchQ} searchQ={searchQ} />

      {!!Object.entries(searchQ).length && !searchData.length && (
        <p className="not-found">
          К сожалению, поиск не дал результатов
        </p>
      )}
      <div className="contain">
        {searchQ &&
          searchData.map((img, i) => (
            <SearchItem src={img.urls.regular} key={i} />
            
          ))}
      </div>
      {isLoading && <Spinner />}
    </main>
  );
}

export default App;
