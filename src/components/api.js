import React, { useState, useEffect, Component } from "react";
import axios from "axios";
const API_KEY = "Ip0XA55zY7b7-d19osq1L5btGg-YCeDZVpnnJjXqHxs";

const apiAxios = axios.create({ baseURL: "https://api.unsplash.com" });

export function useSearchImages(params) {
  const [query, setQuery] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false)

  console.log({params, page, query});

  const fetchData = async () => {
    if (!Object.entries(params).length) return;
    setIsLoading(true)
    try {
      const response = await apiAxios.get("/search/photos", {
        params: {
          ...params,
          client_id: API_KEY,
          page,
          per_page: 30,
        },
      });

      setQuery((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    setPage(1)
    setQuery([]);
    fetchData();
  }, [params]);

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

  return {query, isLoading};
}

export default useSearchImages;
