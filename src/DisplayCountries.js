import React from "react";

function DisplayCountries({data ,imgClick}){
    
   
        return(
          <div className="container col-12 row m-auto bg-primary">
      {data.map((data,index) => {
        return (
          <div key={index} className="card col-2  m-3 bg-temporary"  id={data.name}>
            <div className="cardbody">
            <img className="col-9  m-auto " src={data.flag} alt="" width="100" height="200" onClick={imgClick}/>
            <h4 className="text-primary m-2">{data.name}</h4>
            <h5 className="text-dark m-2">Population: {data.population} </h5>
            <h5 className="text-dark m-2">Region: {data.region} </h5>
            <h5 className="text-dark m-2">Capital: {data.capital}</h5>
          </div>
          </div>
        );
      })}
    </div>)
   
}

export default DisplayCountries;