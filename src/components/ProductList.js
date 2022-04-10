import { Link } from "react-router-dom";
import Paras from "./Paras";
import data from "../dummy/products.json";
import ItemCard from "./ItemCard";

const ProductList = () => {
  console.log(data);
  return (
    <>
      <Paras />
      <div className="flex-cc col">
        <p className="font-bold text-4xl mb-6">New Arrivals</p>
        <div className="row gap-9 text-lg mb-12 text-gray-600 font-medium">
          <p>All Products</p>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Tows</p>
        </div>
        <div className="max-w-6xl grid grid-cols-2 lg:grid-cols-4 ">
        {data.map((key) => (
          <Link key={key} to={`/products/${key.id}`} className="p-4">
            <ItemCard
              data={key}
              title={key.title}
              image={key.image}
              price={key.price}
              />
          </Link>
        ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
