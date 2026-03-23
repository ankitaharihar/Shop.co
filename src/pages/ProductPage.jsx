import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  async function getProductData() {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await res.json();

    setProduct(data);
  }

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="my-10">
      {product && (
        <>
          <div className="flex px-24 justify-between gap-12">
            <div className="bg-gray-200 rounded-2xl w-1/3 flex justify-center items-center">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="w-2/3 space-y-4">
              <h1 className="text-4xl font-bold">{product.title}</h1>
              <p>Rating: {product.rating} / 5</p>
              <div className="flex gap-8 items-center">
                <p className="font-bold text-lg">${product.price}</p>
                <p className="bg-green-300 rounded-2xl p-1 text-sm">
                  -{product.discountPercentage}%
                </p>
              </div>
              <p className="text-gray-500">{product.description}</p>
              <hr />
            </div>
          </div>

          <div className="px-24 my-10">
            <h2>Ratings & Reviews</h2>
            <div className="grid grid-cols-2 gap-8 py-8">
              {product.reviews.map((review) => {
                return (
                  <div className="border p-4 rounded-2xl border-gray-300 flex flex-col gap-2">
                    <p>{review.rating}</p>
                    <p className="font-bold ">{review.reviewerName}</p>
                    <p className="text-xs">{review.reviewerEmail}</p>
                    <p>{review.comment}</p>
                    <p>{review.date.split("T")[0]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductPage;
