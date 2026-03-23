export default function HeroSection() {
  return (
    <div className="w-full">

      {/* Promo */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Sign up and get 20% off to your first order.
        <span className="underline ml-1 cursor-pointer">Sign Up Now</span>
      </div>

      {/* Navbar */}
      <div className="border-b">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-5">

          <h1 className="text-2xl font-bold">SHOP.CO</h1>

          <ul className="hidden md:flex gap-8 font-medium">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>

          <div className="flex items-center gap-4">
            <input
              placeholder="Search for products..."
              className="bg-gray-100 px-5 py-2 rounded-full w-64 outline-none"
            />
            🛒 👤
          </div>

        </div>
      </div>

      {/* HERO */}
      <section className="bg-[#f2f2f2] py-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 items-center gap-10 px-6">

          {/* LEFT */}
          <div>
            <h1 className="text-[64px] font-extrabold leading-[1.05]">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>

            <p className="text-gray-500 mt-6 max-w-md">
              Browse through our diverse range of meticulously crafted garments.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-full mt-8">
              Shop Now
            </button>

            <div className="flex gap-14 mt-12">
              <div>
                <h2 className="text-3xl font-bold">200+</h2>
                <p className="text-gray-500 text-sm">International Brands</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">2,000+</h2>
                <p className="text-gray-500 text-sm">High-Quality Products</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">30,000+</h2>
                <p className="text-gray-500 text-sm">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-end pr-10">
  <div className="bg-[#e8e8e8] w-[480px] h-[600px] relative overflow-hidden">

    <img
      src="/src/assets/model.jpg"
      className="absolute bottom-0 right-[0.5px] h-[600px] object-cover w-120"
      alt="model"
    />

  </div>
</div>
        </div>
      </section>

      {/* Brands */}
      <div className="bg-black text-white flex justify-around py-6 text-2xl font-semibold">
        <span>VERSACE</span>
        <span>ZARA</span>
        <span>GUCCI</span>
        <span>PRADA</span>
        <span>Calvin Klein</span>
      </div>

    </div>
  );
}