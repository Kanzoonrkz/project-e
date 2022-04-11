import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  HeartIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  SearchIcon,
  MenuIcon,
  ChevronLeftIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  let [navExpand, setNavExpand] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    if (width < 768) {
      navExpand = false;
    }
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <nav className="max-w-6xl mx-auto divide-y px-4">
      <section className="hidden md:flex-bc py-2 text-sm">
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
        <Link to="/">
          <div className="font-bold text-4xl">Flone.</div>
        </Link>
        {(navExpand || width >= 768) && (
          <div>
            <div className="md:hidden absolute bg-black bg-opacity-50 w-full h-full top-0 left-0 z-10"></div>
            <ul className="fixed md:static top-0 right-0 h-full pl-10 pr-32 pt-10 z-20 md:p-0 bg-white col md:row gap-6 font-medium ">
              <button
                className="md:hidden"
                onClick={() => {
                  setNavExpand(!navExpand);
                }}
              >
                <ChevronLeftIcon className="h-6" />
              </button>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">Collection</a>
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        )}
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
          <button
            onClick={() => {
              setNavExpand(!navExpand);
            }}
          >
            <MenuIcon className="h-6 pl-3 md:hidden" id="toggle-nav" />
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
