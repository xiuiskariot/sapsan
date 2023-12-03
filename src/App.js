import React, { useState } from "react";
import { useSearchImages } from "./hook/useSearchImages";

import { SearchItem } from "./components/SearchItem";
import { SearchGroup } from "./components/SearchGroup";
import { Spinner } from "./components/Spinner";

function App() {
  const [searchQ, setSearchQ] = useState({});

  const { query: searchData, isLoading } = useSearchImages(searchQ);

  return (
    <main>
      <SearchGroup setSearchQ={setSearchQ} searchQ={searchQ} />

      {!!Object.entries(searchQ).length && !searchData.length && !isLoading && (
        <p className="not-found">К сожалению, поиск не дал результатов</p>
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
