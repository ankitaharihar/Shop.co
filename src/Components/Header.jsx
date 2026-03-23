import React, { useState } from "react";
import {
  IconX,
  IconSearch,
  IconShoppingCart,
  IconUserFilled,
  IconChevronDown,
  IconMenu2,
} from "@tabler/icons-react";

function Header() {
  const [open, setOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  return (
    <header className="w-full">

      {/* Announcement Bar */}
      {showBanner && (
        <div className="bg-black text-white">
          <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 md:px-6 py-2 text-xs md:text-sm">
            <div></div>
            <div className="flex items-center gap-2 text-center">
              <p>Sign up and get 10% off your first order!</p>
              <a href="/signup" className="underline">Sign Up</a>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              type="button"
              aria-label="Close"
              className="hover:opacity-70 transition-opacity"
            >
              <IconX size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <div className="bg-white border-b">
        <div className="max-w-[1280px] mx-auto flex items-center px-4 md:px-6 py-4">

          <div className="flex items-center gap-4 md:gap-10">
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <IconMenu2 />
            </button>
            <a href="/" className="text-xl md:text-2xl font-extrabold">
              SHOP.CO
            </a>
            <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
              <div className="flex items-center gap-1 cursor-pointer hover:text-black">
                Shop <IconChevronDown size={16} />
              </div>
              <a href="/" className="hover:text-black">On Sale</a>
              <a href="/" className="hover:text-black">New Arrivals</a>
              <a href="/" className="hover:text-black">Brands</a>
            </nav>
          </div>

          <div className="flex-1 px-3 md:px-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#e6e6e6] rounded-full pl-10 pr-4 py-2.5 w-full outline-none text-sm"
              />
              <IconSearch
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <IconShoppingCart className="cursor-pointer hover:scale-110 transition" />
            <IconUserFilled className="cursor-pointer hover:scale-110 transition" />
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3 font-medium">
          <a href="/" className="block hover:text-gray-500">Shop</a>
          <a href="/" className="block hover:text-gray-500">On Sale</a>
          <a href="/" className="block hover:text-gray-500">New Arrivals</a>
          <a href="/" className="block hover:text-gray-500">Brands</a>
        </div>
      )}

    </header>
  );
}

export default Header;