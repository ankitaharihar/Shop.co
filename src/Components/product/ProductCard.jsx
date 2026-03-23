import React from "react";
import { useParams} from "react-router-dom";


export default function ProductCard() {
  
  //   <div className="group cursor-pointer">

  //     {/* IMAGE */}
  //     <div className="bg-[#f4f4f4] rounded-2xl overflow-hidden">
  //       <img
  //         src={product.image}
  //         className="w-full h-[260px] object-cover 
  //         group-hover:scale-110 transition duration-500"
  //       />
  //     </div>

  //     {/* INFO */}
  //     <div className="mt-4">

  //       <h3 className="font-semibold">{product.title}</h3>

  //       <div className="flex items-center gap-2 mt-1">
  //         ⭐⭐⭐⭐☆
  //         <span className="text-gray-500 text-sm">(4.5)</span>
  //       </div>

  //       <div className="flex items-center gap-3 mt-2">
  //         <span className="font-bold">${product.price}</span>

  //         {product.oldPrice && (
  //           <span className="text-gray-400 line-through text-sm">
  //             ${product.oldPrice}
  //           </span>
  //         )}
  //       </div>

  //     </div>

  //   </div>
  const {productId} = useParams();
  console.log(productId);
  return (
    <div>
      <h1>Product Card</h1>
      <p>Product ID: {productId}</p>
    </div>
  );

  
}