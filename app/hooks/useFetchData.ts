import { Base64 } from "js-base64";
import { useEffect, useState } from "react";
export const UseFetchData = (url: string, method: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            apiKey: Base64.encode("Basic " + process.env.NEXT_PUBLIC_API_KEY),
          },
        });
        if (!response.ok) {
          throw new Error("bad response");
        }
        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {
        console.error(error);
        setData(null);
      }
    };

    fetchData();
  }, [method, url]);

  return data;
};
