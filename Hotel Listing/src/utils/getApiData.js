import data from '../Data.js/data.json';

const getApiData = (city)=>{
 const properties = data.properties;
 console.log(properties);   
 
if(!city){
    return properties;
}

return properties.filter((hotel)=>hotel.city === city);
}
export default getApiData;