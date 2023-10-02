import React, { createContext, useEffect, useState } from 'react'
import getApiData from '../utils/getApiData'; 
const Context = createContext();
const ApiContext = ({children}) => {
 const [carsApi,setCarsApi]  = useState([]);
 const [pageCounts,setPageCounts] = useState(1);
 const [pageNo,setPageNo] = useState(1);
 const [loader,setLoader] = useState(false)
 useEffect(()=>{
  const {data,pageCounts} = getApiData();
  setCarsApi(data);
  setPageCounts(pageCounts);
 },[])

  return (
    <Context.Provider value={{loader,setLoader,pageNo,setPageNo,setPageCounts,setCarsApi,carsApi,totalCars:carsApi.length,pageCounts}}  >
     {children}
    </Context.Provider>
  
  )
}
export {Context};
export default ApiContext;

