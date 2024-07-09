import { useEffect, useState } from "react";

export const UseFetchData = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { method: "GET" });
        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.error(error);
        setData(null);
      }
    };

    fetchData();
  }, [url]);

  return data;
};
