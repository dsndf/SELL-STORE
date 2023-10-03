import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/ApiContext";
import CityTab from "../CityTab/CityTab";
import PropertyCard from "../Property Card/PropertyCard";
import showMore from "../../utils/showMore";
import {GiSandsOfTime} from  'react-icons/gi';

const Properties = () => {
  const { city, setCity, apiData } = useContext(Context);
  const cityHandler = (cityName) => setCity(cityName);
  const cities = ["New York", "Mumbai", "Paris", "London"];
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    setProperties(apiData.slice(0, 6));
  }, [apiData]);
  return (
    <section className="p-8 bg-gray-100 px-28">
      <h1 className="text-center text-2xl font-semibold">Featured Listed Property</h1>
      <div className="flex justify-between  px-5 py-2 w-full items-center">
        <div className="flex justify-between  items-center gap-4">
          {cities &&
            cities.map((cityName, ind) => (
              <CityTab
                key={ind}
                isActive={city === cityName}
                city={cityName}
                cityHandler={cityHandler}
              />
            ))}
        </div>
        <button className="text-[13px] px-4 border border-blue-700 text-blue-700 rounded-full p-2">
          View All
        </button>
      </div>
      <div className="my-2 grid grid-cols-3 grid-rows-2 gap-y-5 place-items-center">
        {properties &&
          properties.map((property, ind) => (
            <PropertyCard
              key={ind}
              name={property.name}
              location={property.location}
              streetAddress={property.street_address}
              id={property.id}
              bed={property.bed}
              Price={property.price_per_month}
              image={property.image}
              forRent={property.for_rent}
              forSale={property.for_sale}
              sqft={property.sqft}
              bath={property.bathrooms}
              room={property.rooms}
            />
          ))}
      </div>
      <div className="w-full group sticky bottom-4 p-2 py-2 ">
        {" "}
        <button
          className= "transition-all group-hover:bg-white group-hover:text-blue-700  flex items-center gap-1 p-2 shadow-2xl shadow-black px-4 text-[13px] rounded-full m-auto  block bottom-0 left-[300px]   bg-blue-700 text-white  "
          onClick={() => showMore(properties, setProperties, apiData)}
        >
          Show More <GiSandsOfTime/>
        </button>
      </div>
    </section>
  );
};

export default Properties;
