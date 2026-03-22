import Container from "../layout/Container";
import ProductCard from "./ProductCard";

import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";

export default function ProductsSection() {

  const products = [
    { id: 1, title: "T-shirt with Tape Details", price: 120, image: p1 },
    { id: 2, title: "Skinny Fit Jeans", price: 240, image: p2 },
    { id: 3, title: "Checkered Shirt", price: 180, image: p3 },
    { id: 4, title: "Sleeve Striped T-shirt", price: 130, image: p4 },
  ];

  return (
    <section className="py-24">

      <Container>

        {/* TITLE */}
        <h2 className="text-4xl font-extrabold text-center">
          NEW ARRIVALS
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-8 mt-14">

          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}

        </div>

        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center mt-16">
          <button className="border px-10 py-3 rounded-full 
          hover:bg-black hover:text-white transition">
            View All
          </button>
        </div>

      </Container>

    </section>
  );
}