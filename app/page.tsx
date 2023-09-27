import Image from "next/image";
import LandingPage from "./components/00--landingPage/LandingPage";
import Navbar from "./components/00--landingPage/Navbar";
import Carousel from "./Carousel";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };
  return (
    <>
    <Navbar/>
    <main className="py-[3rem] px-[3rem]">
      <LandingPage />
    </main>
    <Carousel/>
    </>
  );
}
