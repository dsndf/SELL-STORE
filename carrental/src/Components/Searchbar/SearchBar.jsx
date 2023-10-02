import React, { useContext, useState } from "react";
import {FiSearch} from 'react-icons/fi'
import { Context } from "../../context/ApiContext";
import debouncing from "../../utils/debouncing";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
   const [keyword,setKeyword] = useState("");
   const   {setLoader,setCarsApi,setPageCounts,setPageNo}  = useContext(Context);
   const navigation = useNavigate();
   const searchHandler  =  debouncing({setKeyword,setCarsApi,setPageCounts,navigation,setPageNo,setLoader});
   return (
    <div className= "bg-blue-100 shadow-lg w-full rounded-lg flex justify-left items-center  h-12 p-3 ">
      <div className="relative" >
        <FiSearch className="absolute text-gray-500 text-[19px] top-1.5 right-2.5 "/>
        <input type="text" placeholder="Search" value={keyword} onChange={searchHandler}  className="border rounded-lg p-1 w-[300px] text-[14px] focus:outline-none " />
      </div>
    </div>
  );
};

export default SearchBar;
