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
 let [ theme  , setTheme] = useState("primary");
 
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

function changeTheme(){
  if(theme === "primary"){
    setTheme("secondary")
  }
  else{
    setTheme("primary")
  }
}
    
  return (
   <div className={"App-header m-auto "+(theme)}>
      <AppHeader changeTheme={changeTheme} theme={theme} />
    {click ? <Search handleInput={handleInput} searchInput={searchInput} />:("")}
    {click ? <Region handleSelect={handleSelect} data={countriesAll} />:("")}
    {click ? ( change ? <DisplayCountries data={filteredRegion} imgClick={imgClick} theme={theme}/> : <DisplayCountries data={filteredcountries} imgClick={imgClick} theme={theme}/>) : (<Detail data={clickcountry} imgClick={imgClick} theme={theme} /> )}
    </div>
    
  );
}

export default App;
