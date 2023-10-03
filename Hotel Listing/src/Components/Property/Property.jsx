import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropertyCard from '../Property Card/PropertyCard';
import { Context } from '../../context/ApiContext';

const Property = () => {
   const {id} = useParams();
   const {apiData,setPropertyData,propertyData} = useContext(Context);
 
   useEffect(()=>{
   setPropertyData(apiData.find((p)=>p.id == id));
   },[id])
  return (
  <section className='flex h-[100vh] justify-center bg-gray-200 items-center'>
 <PropertyCard

              name={propertyData?.name}
              location={propertyData?.location}
              streetAddress={propertyData?.street_address}
              id={propertyData?.id}
              bed={propertyData?.bed}
              Price={propertyData?.price_per_month}
              image={propertyData?.image}
              forRent={propertyData?.for_rent}
              forSale={propertyData?.for_sale}
              sqft={propertyData?.sqft}
              bath={propertyData?.bathrooms}
              room={propertyData?.rooms}
            />


  </section>
  )
}

export default Property
