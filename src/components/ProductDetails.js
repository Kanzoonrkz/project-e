import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import ReactStars from "react-rating-stars-component";
import data from "../dummy/products.json";
import { HeartIcon, StarIcon } from "@heroicons/react/outline";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = data.find((item) => item.id == productId);

  return (
    <div className="mb-[200px]">
      
      <Navbar />
      <div className="bg-gray-100 w-full flex-cc py-8">
        <Link to="/">HOME</Link>&nbsp;/&nbsp;SHOP DETAILS
      </div>
      <div className="max-w-6xl mx-auto mt-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex-cs">
            <img
              className="object-scale-down max-h-[400px] max-w-[300px] group-hover:scale-110 transition duration-500 mb-8"
              src={product.image}
              alt=""
            />
          </div>
          <div>
            <p className="pb-1 font-medium text-lg">{product.title}</p>
            <p className="text-red-500">$ {product.price}</p>
            <div className="row flex-sc py-2 divide-x gap-4">
              <ReactStars
                count={5}
                value={product.rating.rate}
                isHalf={true}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              <p className="pl-4 text-purple-600">
                {product.rating.count} Reviews
              </p>
            </div>
            <p className="pb-3 border-b">{product.description}</p>
            <div className="py-3 grid grid-rows-2 grid-flow-col auto-cols-min gap-x-7 gap-y-1 font-medium">
              <p>Color</p>
              <div className="row gap-3 items-center">
                <button className="rounded-full w-4 h-4 bg-blue-800"></button>
                <button className="rounded-full w-4 h-4 bg-red-600"></button>
                <button className="rounded-full w-4 h-4 bg-green-800"></button>
                <button className="rounded-full w-4 h-4 bg-amber-800"></button>
              </div>
              <p>Size</p>
              <div className="row gap-2 font-normal">
                <button className="bg-gray-200  px-2 flex-cc">S</button>
                <button className="bg-gray-200  px-2 flex-cc">M</button>
                <button className="bg-gray-200  px-2 flex-cc">L</button>
                <button className="bg-gray-200  px-2 flex-cc">XL</button>
                <button className="bg-gray-200  px-2 flex-cc">XXL</button>
              </div>
            </div>
            <div className="row gap-3 items-stretch py-3">
              <div className="border flex-cc gap-4 px-2">
                <button>-</button>0<button>+</button>
              </div>
              <div className="bg-gray-700 text-white font-bold px-6 py-5">
                ADD TO CART
              </div>
              <HeartIcon className="h-7 my-auto pl-3" />
            </div>
            <p className="pt-3 text-gray-500">Category: {product.category}</p>
          </div>
        </div>
        <div className="col mt-16 flex-cc ">
          <div className="border-b w-full mb-8">
            <div className="row gap-7 text-xl flex-cc pb-2">
              <span>Additional Information</span>
              <span>Description</span>
              <span>Reviews ({product.rating.count})</span>
            </div>
          </div>
          {product.description}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
