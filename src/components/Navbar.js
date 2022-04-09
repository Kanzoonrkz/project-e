import React from "react";
import {
  HeartIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <nav className="w-full divide-y px-24">
      <section className="flex-bc py-2 text-sm">
        <div className="row divide-x">
          <p className="pr-4">English</p>
          <p className="px-4">USD</p>
          <p className="pl-4">Call Us 396541</p>
        </div>
        <div className="row">
          Free delivery on order over &#8202;
          <p className="text-red-500">$200</p>
        </div>
      </section>
      <section className="flex-bc py-4">
        <div className="font-bold text-4xl">Flone.</div>
        <div className="row gap-6 font-medium">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">Collection</a>
          <a href="">Pages</a>
          <a href="">Blog</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div className="row">
          <a href="">
            <SearchIcon className="h-6" />
          </a>
          <a href="">
            <UserCircleIcon className="h-6 pl-3" />
          </a>
          <a href="">
            <HeartIcon className="h-6 pl-3" />
          </a>
          <a href="">
            <ShoppingBagIcon className="h-6 pl-3" />
          </a>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
