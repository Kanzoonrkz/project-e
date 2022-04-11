import { Link } from "react-router-dom";
import Paras from "./Paras";
import data from "../dummy/products.json";
import ItemCard from "./ItemCard";

const ProductList = () => {
  return (
    <div className="mb-[200px]">
      <Paras />
      <div className="flex-cc col px-4">
        <p className="font-bold text-2xl md:text-4xl mb-6">New Arrivals</p>
        <div className="row gap-4 md:gap-9 md:text-lg mb-6 md:mb-12 text-gray-600 font-medium">
          <p>All</p>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Tows</p>
        </div>
        <div className="max-w-6xl grid grid-cols-2 lg:grid-cols-4 ">
          {data.map((products) => (
            <Link
              data={products}
              to={`/products/${products.id}`}
              className="p-4"
            >
              <ItemCard
                data={products}
                title={products.title}
                image={products.image}
                price={products.price}
              />
            </Link>
          ))}
        </div>
        <button className="rounded-full bg-red-700 text-white font-medium py-4 px-7">DISCOVER MORE</button>
      </div>
    </div>
  );
};

export default ProductList;
