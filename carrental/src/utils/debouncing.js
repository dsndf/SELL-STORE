import getApiData from "./getApiData";
const debouncing = ({setLoader,setKeyword,setCarsApi,setPageCounts,setPageNo,navigation})=>{
let tid;
return (e)=>{
    setKeyword(e.target.value);
    if(tid){
        clearTimeout(tid);
    }
    setLoader(true)
    setTimeout(() => {
     const {data,pageCounts} =  getApiData(e.target.value);
     setCarsApi(data);
     setPageCounts(pageCounts);
     setPageNo(1);
      setLoader(false);
     navigation('/page/1');
    }, 3000);

}


}
export default debouncing;