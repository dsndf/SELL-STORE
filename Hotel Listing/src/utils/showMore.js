const showMore = (properties,setPorperties,apiData)=>{
setPorperties(apiData.slice(0,properties.length+3));
}
export default showMore;