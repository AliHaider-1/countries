import React from "react";

 function Region({handleSelect, data }){
    let regions = data.map((item)=>item.region);
    let filteredRegions = [...new Set(regions)]
    
    
  return (
    <select className="" 
        onChange={handleSelect}
    >
        <option>Choose Region</option>
    {filteredRegions.map((data,index)=>{
     return  (    
     <option key= {index}>{data}</option>
  )
    })}
     

    </select>
  );
};

export default Region;