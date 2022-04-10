import React from "react";
import { HeartIcon } from "@heroicons/react/outline";

const ItemCard = (data) => {
  return (
    <div className="group h-full">
      <div className="flex-cc h-72 bg-white shadow-sm">
        <img
          className="object-scale-down h-3/4 w-3/4 group-hover:scale-110 transition duration-500"
          src={data.image}
          alt=""
        />
      </div>
      <div className="row pt-4 gap-3">
        <div className="col flex-grow">
          <p className="pb-2 ">{data.title}</p>
          <p>$ {data.price}</p>
        </div>
        <a href="">
          <HeartIcon className="h-6 stroke-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default ItemCard;
