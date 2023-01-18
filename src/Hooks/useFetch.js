import { useEffect, useState } from "react";

export default function useFetch(url, method, headers) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(url, {
          method: method || "GET",
          headers: headers,
        });
        const data = response.json();
        setLoading(false);
        setResult(data);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error.message);
      }
    }

    fetchPhotos();
  }, []);

  return {
    loading,
    error,
    result,
  };
}
