import { useEffect, useState } from "react";

export const UseFetchData = (url: string, method: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { method: method });
        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.error(error);
        setData(null);
      }
    };

    fetchData();
  }, [url, method]);

  return data;
};
