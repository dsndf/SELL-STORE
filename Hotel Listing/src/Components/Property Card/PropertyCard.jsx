import React from 'react'
import {MdOutlineMeetingRoom} from 'react-icons/md'
import {LiaBedSolid,LiaBathSolid, LiaHeart} from 'react-icons/lia'
import {CiLocationOn} from 'react-icons/ci'
import { Link } from 'react-router-dom'
const PropertyCard = ({name,location,streetAddress,bed,bath,sqft,forRent,forSale,Price,id,image,room}) => {
  return (
    <Link to={`/property/${id}`}>   
    <div className='bg-white border h-[400px] w-[350px] p-1 rounded-md'>
        <div className='h-[170px] relative rounded-md overflow-hidden'>
          <img className='w-[100%]' src={image&&image} alt="" />
          <span className='absolute top-4 left-2 text-[12px] font-semibold p-2 bg-white text-blue-700 rounded-full'>{forRent?"For Rent":"For Sale"}</span>
          <span className='absolute top-4  right-2 text-[14px]  p-2 bg-white text-blue-700 rounded-full'><LiaHeart/></span>

        </div>
        <div className=' h-[calc(400px-194px)] flex flex-col justify-around pt-2 px-3'>
            <small className='flex items-center gap-1'><CiLocationOn />{streetAddress?streetAddress:"8558 Rainoy Rd."}</small>
            <p className='text-[15px] font-semibold'>{name?name:"RCE Theaters-907 S Beckford Dr,Henderson,NC 27536"}+{location?location:""}</p>
            <div className='flex justify-between items-center gap-2 text-gray-700  text-[12px]'>
              <div>
                <MdOutlineMeetingRoom className='text-[16px]'/>
                <span>{room?room:3} Room</span>
              </div>
              <div>
              < LiaBedSolid className='text-[16px]'/>

                <span>{bed?bed:4} Bed</span>
              </div>
              <div>
              <LiaBathSolid className='text-[16px]'/>
             
                <span>{bath?bath:1} Bath</span>
              </div>
              <div>
              <MdOutlineMeetingRoom className='text-[16px]'/>
        
                <span>{sqft?sqft:700}ft</span>
              </div>
            </div>
            <div className='flex justify-between items-center text-[15px]'>
                <p className='text-blue-700 font-semibold'>${Price?Price:7999}<span className='text-[13px] text-black'>/month</span></p>
                <button className='text-[12px]  font-semibold px-4 border border-blue-700 text-blue-700 rounded-full p-2'>Read More</button>
            </div>
        </div>
    </div>
    </Link>
 
  )
}

export default PropertyCard
