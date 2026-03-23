import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=4");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Products load nahi ho sake. Please try again.");
      }
    }

    getProducts();
  }, []);

  if (error) {
    return (
      <div className="my-8 text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="my-8">
      <h1 className="text-center font-bold text-4xl">New Arrivals</h1>
      <div className="flex gap-10 px-24 justify-center">
        {products.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.rating} / 5</p>
              <p>${product.price}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NewArrivals;