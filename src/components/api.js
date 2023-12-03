import React, { useState, useEffect, Component } from "react";
import axios from "axios";
const API_KEY = "Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs";

export function useSearchImages(params) {
  const [query, setQuery] = useState([]);
  const [page, setPage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${params}&page=${page}&per_page=30`
        );
        setQuery((prevQuery) => [...prevQuery, ...response.data.results]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [params, page]);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (isAtBottom) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log({query});

  return query;


  
}





