import React from "react";
import countriesAll from "./countriesAll";
function Detail({data}){
    console.log(data[0].name);
 let border =  data[0].borders.map(x=>x);
 console.log(border);
 let filteredborder1 = countriesAll.filter(x=>x.alpha3Code.includes(border[0]));
 let filteredborder2 = countriesAll.filter(x=>x.alpha3Code.includes(border[1]));
 let filteredborder3 = countriesAll.filter(x=>x.alpha3Code.includes(border[2]));
 let filteredborder4 = countriesAll.filter(x=>x.alpha3Code.includes(border[3]));
 let filteredborder5 = countriesAll.filter(x=>x.alpha3Code.includes(border[4]));
 let filteredborder6 = countriesAll.filter(x=>x.alpha3Code.includes(border[5]));
 console.log(filteredborder6);
  


        return(
          <div>  
              <button className="btn-warning" onClick={()=>{window.location.reload()}}>Back</button>
          <div className="container col-12 row  m-auto bg-primary">
          <div className="card col-4  m-auto bg-temporary"  id={data.name}>
            <div className="cardbody">
            <img className="col-10  m-auto " src={data[0].flag} alt="" width="100" height="300" />
            <h4 className="text-primary m-2">{data[0].name}</h4>
            <h5 className="text-dark m-2">Population: {data[0].population} </h5>
            <h5 className="text-dark m-2">Region: {data[0].region} </h5>
            <h5 className="text-dark m-2">Capital: {data[0].capital}</h5>
            <h5 className="text-dark m-2">Sub Region: {data[0].subRegion}</h5>
            <h5 className="text-dark m-2">Latitude: {data[0].latlng[0]}</h5>
            <h5 className="text-dark m-2">Longitude: {data[0].latlng[1]}</h5>
            <h5 className="text-dark m-2">Area: {data[0].area}</h5>
            <h5 className="text-dark m-2">Time Zone: {data[0].timezones[0]}</h5>
            <h5 className="text-dark m-2">Native Name: {data[0].nativeName}</h5>
            <h5 className="text-dark m-2">Currencies: {data[0].currencies.map(x=>`${x.name} `)}</h5>
            <h5 className="text-dark m-2">Languages: {data[0].languages.map(x=>` ${x.name} `)}</h5>
          <h5 className="text-dark m-2">Borders: {data[0].borders.map(x=>` ${x} `)}</h5>
          </div>
          </div>
             
          {filteredborder1[0] ?( <div className="card col-7  m-auto bg-temporary"  id={data.name}>
               <h3 className="">Neighbouring Countries </h3>
            <div className="row">
                 <div className="card   m-auto bg-temporary"  id={data.name}>
            <div className="cardbody">
            <img className="col-10  m-auto " src={filteredborder1[0].flag} alt="" width="100" height="300" />
            <h4 className="text-primary m-2">{filteredborder1[0].name}</h4>
          </div>
          </div>
               <div className="card   m-auto bg-temporary"  id={data.name}>
            <div className="cardbody">
            <img className="col-10  m-auto " src={filteredborder2[0].flag} alt="" width="100" height="300" />
            <h4 className="text-primary m-2">{filteredborder2[0].name}</h4>
          </div>
          </div>
       
          </div>
          </div>
          ):("")}
          
    </div>
    </div>)
   
}

export default Detail;