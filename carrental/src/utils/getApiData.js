import  apidata from '../Data.js/data.json';
const getApiData = (keyword)=>{ 
 let data = apidata;  
if(keyword!==""){
    console.log({keyword})
data = data.filter((v)=>{
    const regex = new RegExp(keyword,"gi");
    return regex.test(v.car_name);
}) 
console.log({data});
}    
if(data.length>60){
data = data.slice(0,60);
}
const pageCounts = Math.ceil(data.length/6);
return {data,pageCounts};
}
export default getApiData;