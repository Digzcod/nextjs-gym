import Image from "next/image";
import LandingPage from "./components/00--landingPage/LandingPage";
import Navbar from "./components/00--landingPage/Navbar";
import Carousel from "./Carousel";

export default function Home() {
  
  return (
    <>
    <main className="py-[3rem] px-[3rem]">
      <LandingPage />
    </main>
    <Carousel/>
    </>
  );
}
