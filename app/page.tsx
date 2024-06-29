"use client";

import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Food from "./components/homepage/Food";
import { useFetchData } from "./hooks/useFetchData";

interface Props {
  name: string;
  price: number;
  description?: string;
  image?: string;
  rate?: number;
  orderCount?: number;
  // Include other properties as needed
}
function UseFetchData(url: string): Props[] | null {
  return useFetchData(url);
}

export default function Home() {
  const data = UseFetchData("/api/home");

  return (
    <>
      <NavBar />
      <Carousel />
      <main className="flex flex-row flex-wrap justify-center">
        {data
          ? data.map((item, index) => <Food key={index} item={item} />)
          : null}
      </main>
      <Footer />
    </>
  );
}
