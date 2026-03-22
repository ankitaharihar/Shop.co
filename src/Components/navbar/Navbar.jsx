import Container from "../layout/Container"

export default function Navbar() {
  return (
    <>
      <div className="bg-black text-white text-center py-2 text-sm">
        Sign up and get 20% off to your first order.
        <span className="underline ml-1 cursor-pointer">Sign Up Now</span>
      </div>

      <div className="border-b">
        <Container className="flex items-center justify-between py-5">

          <h1 className="text-2xl font-extrabold">SHOP.CO</h1>

          <ul className="hidden md:flex gap-8 font-medium">
            <li className="hover:text-gray-500 cursor-pointer">Shop</li>
            <li className="hover:text-gray-500 cursor-pointer">On Sale</li>
            <li className="hover:text-gray-500 cursor-pointer">New Arrivals</li>
            <li className="hover:text-gray-500 cursor-pointer">Brands</li>
          </ul>

          <div className="flex items-center gap-4">
            <input
              placeholder="Search for products..."
              className="bg-gray-100 px-5 py-2 rounded-full w-56 md:w-72 outline-none"
            />
            🛒 👤
          </div>

        </Container>
      </div>
    </>
  )
}