import React,{useState,useEffect} from "react";
import AppHeader from "./AppHeader";
import "./App.css"
import DisplayCountries from "./DisplayCountries";
import Search from "./Search";
import countriesAll from "./countriesAll";
import Region from "./Region";
function App() {
 let [ change , setchange] = useState(false);
  let [searchInput, setSearchInput] = useState("");
  let [select, setSelect] = useState("");
 
  let filteredRegion= countriesAll.filter((item)=>{
      return item.region.includes(select) ;
    })
    
let  input = searchInput.toUpperCase();
    let filteredcountries= filteredRegion.filter((item)=>{
      return item.name.toUpperCase().includes(input) || item.capital.toUpperCase().includes(input);
    })



function handleInput(e){
  setSearchInput(e.target.value);
  console.log(searchInput);
  setchange(false)
}

function handleSelect(e){
  setSelect(e.target.value);
  console.log("select:  "+select);
  console.log(filteredRegion);
  setchange(true)
}
    
  return (
   <div className="App-header bg-primary m-auto">
      <AppHeader />
     <Search handleInput={handleInput} searchInput={searchInput} />
     <Region handleSelect={handleSelect} data={countriesAll} />
     {change ? <DisplayCountries data={filteredRegion}/> : <DisplayCountries data={filteredcountries}/>}
    </div>
    
  );
}

export default App;
