import React, { useContext } from "react";
import {  FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Context } from "../../context/ApiContext";
const Pagination = ({carsCount}) => {
   const {pageCounts,totalCars,setPageNo,pageNo}  = useContext(Context);
   const pages = [];
   for(let  i=1; i<=pageCounts; i++){pages.push(i)} 
  return (
    <div className="bg-[#ecfbff] shadow-lg w-full rounded-lg flex justify-between items-center  h-12 p-3 ">
      <p className="text-[14px] ">{carsCount} from {totalCars}</p>
      <div className="flex justify-between items-center">
        <Link to={`/page/${pageNo-1}` }>
          <button disabled={true?pageNo===1:false} onClick={()=>setPageNo(pageNo-1)} className="h-[30px] font-semibold px-2 text-[13px] rounded-lg bg-white mx-2">
            <FiArrowLeft />
          </button>
        </Link>
        {
          pages&&pages.map((v,ind)=> <Link to={`/page/${ind+1}`} key={ind} ><button onClick={()=>setPageNo(ind+1)} className={`h-[30px] px-3 text-[13px]  rounded-lg bg-white mx-2 ${pageNo===ind+1&&"text-blue-700"} `}>{ind+1}</button> </Link>)
        }
        <Link to={`/page/${pageNo+1}`}  >
          <button onClick={()=>setPageNo(pageNo+1)} disabled={true?pageNo===pageCounts:false} className="h-[30px] px-2 text-[13px] rounded-lg bg-white mx-2">
            <FiArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
