import Image from "next/image";
import Navbar from "../Components/Navbar";
import FirstSection from "../Components/FirstSection";
import Collaborations from "../Components/Collaborations";
import Categories from "../Components/Categories";
import Faq from "../Components/Faq";
import Promotion from "../Components/Promotion";
import Footer from "../Components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <FirstSection />
      <Collaborations />
      <Categories />
      <Promotion />
      <Footer />
    </main>
  );
}
