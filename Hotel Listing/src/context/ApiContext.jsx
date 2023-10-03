import React, { createContext, useEffect, useState } from 'react'
import getApiData from '../utils/getApiData';
export const Context = createContext();
const ApiContext = ({children}) => {
const [apiData,setApiData] = useState([]);
const [propertyData,setPropertyData] = useState({});
const [city,setCity] = useState("London");
useEffect(()=>{
setApiData(getApiData(city));
},[city])

  return (
  <Context.Provider value={{city,setCity,apiData,setApiData,propertyData,setPropertyData}}>
     {children}
  </Context.Provider>
  )
}

export default ApiContext
