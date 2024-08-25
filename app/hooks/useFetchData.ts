import { useEffect, useState } from "react";
export const UseFetchData = <T>(url: string, method: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            apiKey: process.env.NEXT_PUBLIC_API_KEY,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setData(data);
          });
      } catch (error) {
        console.error(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method]);

  return { data, loading };
};
