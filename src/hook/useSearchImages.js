import { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = "yx19L-TfZ12LJzks8RFnAO8r4fnS3AMsXgWIjPSYGog";

const apiAxios = axios.create({ baseURL: "https://api.unsplash.com" });

export function useSearchImages(params) {
  const [query, setQuery] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (!Object.entries(params).length) return;
    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    setPage(1);
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

  return { query, isLoading };
}

export default useSearchImages;
