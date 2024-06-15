import Hero from "./pages/landing/Hero";
import CompanyOv from "./pages/landing/Company";
import Product from "./pages/landing/Product";
import Testimonies from "./pages/landing/Testimonies";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Product/>
      <Testimonies/>
      <CompanyOv/>
    </main>
  );
}
