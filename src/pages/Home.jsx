import Navbar from "../Components/navbar/Navbar";
import Hero from "../Components/hero/Hero";
import Brands from "../Components/brands/Brands";
import ProductsSection from "../components/product/ProductsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <ProductsSection />
    </>
  );
}