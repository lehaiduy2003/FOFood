"use client";

import useFetchData from "./hooks/useFetchData";

export default function Home() {
  const data = useFetchData("/api/home");

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          window.location.href = "/sign-in";
        }}
      >
        login
      </button>
    </>
  );
}
