import React from "react";

 function Region({handleSelect, data }){
    let regions = data.map((item)=>item.region);
    let filteredRegions = [...new Set(regions)]
     filteredRegions.sort();
    
  return (
    <select className="" 
        onChange={handleSelect}
    >
    {filteredRegions.map((data)=>{
     return  (
     <option>{data}</option>
  )
    })}
     

    </select>
  );
};

export default Region;