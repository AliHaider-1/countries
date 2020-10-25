import React from "react";
import countriesAll from "./countriesAll";
function Detail({data , imgClick ,theme}){
 let border =  data[0].borders.map(x=>x);
        return(
          <div>  
              <button className="btn-warning" onClick={()=>{window.location.reload()}}>Back</button>
          <div className={"col-12  row m-auto  "+(theme)}>
          <div className="card col-lg-4 col-xs-12 col-md-5 m-3  "  id={data.name}>
            <div className="cardbody">
            <img className="col-10  m-auto " src={data[0].flag} alt="" width="100" height="300" />
            <h4 className=" m-2">{data[0].name}</h4>
            <h5 className=" m-2">Population: {data[0].population} </h5>
            <h5 className=" m-2">Region: {data[0].region} </h5>
            <h5 className=" m-2">Capital: {data[0].capital}</h5>
            <h5 className=" m-2">Sub Region: {data[0].subRegion}</h5>
            <h5 className=" m-2">Latitude: {data[0].latlng[0]}</h5>
            <h5 className=" m-2">Longitude: {data[0].latlng[1]}</h5>
            <h5 className=" m-2">Area: {data[0].area}</h5>
            <h5 className=" m-2">Time Zone: {data[0].timezones[0]}</h5>
            <h5 className=" m-2">Native Name: {data[0].nativeName}</h5>
            <h5 className=" m-2">Currencies: {data[0].currencies.map(x=>`${x.name} `)}</h5>
            <h5 className=" m-2">Languages: {data[0].languages.map(x=>` ${x.name} `)}</h5>
          <h5 className=" m-2">Borders: {data[0].borders.map(x=>` ${x} `)}</h5>
          </div>
          </div>
             
        
          
        <div className="col-7 col-md-6 col-xs-12 row  m-auto ">
            <h3 className="col-lg-12 col-md-12 col-xs-12  ">Neighbouring Countries </h3>
            {border.map(function(item){
              console.log(item);
             let border1 =countriesAll.filter(x=>x.alpha3Code.includes(item));
             console.log(border1);
              return (
                <div className="col-lg-4 col-md-8 col-xs-12 m-auto ">
              <div className="card col-lg-12 col-xs-12 col-md-12 m-3 "  id={border1[0].name}>
            <div className="cardbody">
            <img className="col-10  m-auto " src={border1[0].flag} alt="" width="100" height="300" onClick={imgClick}   />
            <h4 className=" m-2">{border1[0].name}</h4>
          </div>
          </div>
          </div>)
            })}
        </div>

    </div>
    </div>)
   
}

export default Detail;