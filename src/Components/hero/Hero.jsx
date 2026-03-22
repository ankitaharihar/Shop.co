import Container from "../layout/Container"
import model from "../../assets/model.png"

export default function Hero() {
  return (
    <section className="bg-[#f2f2f2] pt-32 pb-24 relative overflow-hidden">

      {/* FLOATING STARS */}
      <div className="absolute top-40 right-40 text-6xl">✦</div>
      <div className="absolute bottom-32 left-[45%] text-3xl">✦</div>

      <Container className="grid md:grid-cols-2 items-center gap-12">

        {/* LEFT */}
        <div>

          <h1 className="text-[48px] md:text-[64px] font-extrabold leading-[1.05]">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>

          <p className="text-gray-500 mt-6 max-w-[420px] leading-relaxed">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality.
          </p>

          <button className="bg-black text-white px-10 py-4 rounded-full mt-8 
          hover:scale-105 active:scale-95 transition duration-300">
            Shop Now
          </button>

          {/* STATS */}
          <div className="flex gap-14 mt-14 flex-wrap">

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

        {/* RIGHT IMAGE FRAME */}
        <div className="flex justify-end">

          <div className="bg-[#e8e8e8] w-[480px] h-[620px] relative overflow-hidden">

            <img
              src={model}
              className="absolute bottom-0 right-[-60px] h-[720px] object-cover"
              alt=""
            />

          </div>

        </div>

      </Container>
    </section>
  )
}