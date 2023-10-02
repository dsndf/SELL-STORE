import React from "react";
import { LuFuel, LuHeart, LuUsers2 } from "react-icons/lu";
import { BsSpeedometer } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";

const Card = ({ name, seats, capacity, price, url }) => {
  return (
    <div className="h-[390px] w-[350px] p-3  shadow-md rounded-xl bg-[whitesmoke]">
      <div className="h-[170px]">
        <img
          className="rounded-xl w-full h-full"
          src={url ? url : "https://wallpapercave.com/wp/wp4543828.jpg"}
          alt=""
        />
      </div>
      <div className="flex h-[200px] flex-col justify-center gap-4 items-start">
        <div className="w-full text-[13px] pt-2   flex justify-between items-center ">
          <span className="text-[16px]">{name ? name : "Toyota RAV4"}</span>
          <span className="text-[12px] border border-blue-400 border-dashed p-1 px-3 rounded-xl">
            2024
          </span>
        </div>
        <div className=" border-0 border-b py-1 w-full text-[12px] text-gray-500 grid grid-cols-2 grid-rows-2">
          <span className="flex items-center py-2">
            <LuUsers2 className="text-[18px] mr-1 text-blue-400" />{" "}
            {seats ? seats : 4} People
          </span>
          <span className="flex items-center py-2">
            <LuFuel className="text-[18px] mr-1 text-blue-400" /> Hybrid
          </span>
          <span className="flex items-center py-2">
            <BsSpeedometer className="text-[18px] mr-1 text-blue-400" />
            {capacity?capacity:6}km/1-litre{" "}
          </span>
          <span className="flex items-center py-2">
            <GiSteeringWheel className="text-[18px] mr-1 text-blue-400" />
            Automatic
          </span>

          <span></span>
        </div>
        <div className="w-full flex items-center justify-between  font-medium text-[20px]">
          <h3>
            ${price ? price : 440} <small className="text-[12px]">/month</small>
          </h3>
          <div className="flex items-center gap-3">
            <button className="text-[14px] border p-2 bg-blue-200 rounded-lg  text-blue-600  "><LuHeart/></button>
            <button className="text-[12px] font-normal bg-blue-500 rounded-xl text-white px-4 py-2">
              Rent now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
