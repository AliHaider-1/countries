import React,{useState} from "react";
import AppHeader from "./AppHeader";
import "./App.css"
import DisplayCountries from "./DisplayCountries";
import Search from "./Search";
import countriesAll from "./countriesAll";
import Region from "./Region";
import Detail from "./Detail";
function App() {
 let [ change , setchange] = useState(false);
  let [searchInput, setSearchInput] = useState("");
  let [select, setSelect] = useState("");

  let [image , setImage]=useState("");
  let [click,setclick] =useState(true);
 
  let filteredRegion= countriesAll.filter((item)=>{
      return item.region.includes(select) ;
    })

let  input = searchInput.toUpperCase();
    let filteredcountries= filteredRegion.filter((item)=>{
      return item.name.toUpperCase().includes(input) || item.capital.toUpperCase().includes(input);
    })

   let clickcountry = filteredRegion.filter((item)=>{
      return item.flag.includes(image);
    })


function handleInput(e){
  setSearchInput(e.target.value);
  setchange(false)
}

function handleSelect(e){
  setSelect(e.target.value);
  setchange(true)
}

function imgClick(e){
   setImage(e.target.src);
   setclick(false);
}
    
  return (
   <div className="App-header bg-primary m-auto">
      <AppHeader />
    {click ? <Search handleInput={handleInput} searchInput={searchInput} />:("")}
    {click ? <Region handleSelect={handleSelect} data={countriesAll} />:("")}
    {click ? ( change ? <DisplayCountries data={filteredRegion} imgClick={imgClick}/> : <DisplayCountries data={filteredcountries} imgClick={imgClick}/>) : (<Detail data={clickcountry} /> )}
    </div>
    
  );
}

export default App;
