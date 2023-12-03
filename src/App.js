import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { useSearchImages } from "./components/api";

import { SearchItem } from "./SearchItem";

import { SearchGroup } from "./SearchGroup";

function App() {
  const [searchQ, setSearchQ] = useState({});
 

 
  const { query: searchData, isLoading } = useSearchImages(searchQ);

  return (
    <main>
      <SearchGroup setSearchQ={setSearchQ} />

      {!!Object.entries(searchQ).length && !searchData.length && (
        <p className="text-center col-12">
          К сожалению, поиск не дал результатов
        </p>
      )}
      <div className="contain">
        {searchQ &&
          searchData.map((img) => (
            <SearchItem src={img.urls.regular} key={img.id} />
          ))}
      </div>
      {isLoading && <p>Еще грузится</p>}
    </main>
  );
}

export default App;
