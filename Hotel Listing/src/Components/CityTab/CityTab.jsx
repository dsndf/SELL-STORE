import React from 'react'

const CityTab = ({isActive,cityHandler,city}) => {
  return (
  <button className={`p-2 px-4 text-[13px] rounded-full ${isActive?"bg-blue-700 text-white":"bg-gray-300 text-black"}` } onClick={()=>cityHandler(city)}>{city}</button>
  )
}

export default CityTab
