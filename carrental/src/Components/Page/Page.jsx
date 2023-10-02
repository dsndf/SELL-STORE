import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../Searchbar/SearchBar";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";

import { Context } from "../../context/ApiContext.jsx";
import Loader from "../Loader/Loader";

const Page = () => {
  const { carsApi, pageNo, loader } = useContext(Context);
  const pageData = carsApi && carsApi.slice((pageNo - 1) * 6, pageNo * 6);
  return ( 
    <section className="h-auto px-10 py-4 ">
      <SearchBar />
      {loader ? (
        <Loader />
      ) : (
        <div className="my-4  h-[auto] grid grid-cols-3 grid-rows-2 px-20 gap-y-5  place-items-center">
          {pageData &&
            pageData.map((v, ind) => {
              return (
                <Card
                  key={ind}
                  url={v?.image}
                  name={v?.car_name}
                  seats={v?.number_of_seats}
                  capacity={v?.distance_per_litre}
                />
              );
            })}
        </div>
      )}

      <Pagination />
    </section>
  );
};

export default Page;
