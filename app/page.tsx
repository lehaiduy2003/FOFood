"use client";

export default function Home() {
  const testApi = async () => {
    fetch("/api/home")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch();
  };

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
