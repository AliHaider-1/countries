import React,{useState,useEffect} from "react";
import AppHeader from "./AppHeader";
import "./App.css"
import DisplayCountries from "./DisplayCountries";
import Search from "./Search";
import countriesAll from "./countriesAll";
function App() {
  let [countriesdata, setcountriesdata] = useState([]);
 let [searchInput, setSearchInput] = useState("");
    useEffect(()=>{
      setcountriesdata(countriesAll);
    },[])
let  input = searchInput.toUpperCase();
    let filteredcountries= countriesdata.filter((item)=>{
      return item.name.toUpperCase().includes(input) || item.capital.toUpperCase().includes(input);
    })

 
  

function handleInput(e){
  setSearchInput(e.target.value);
  console.log(searchInput);
  
}
    
  return (
   <div className="App-header bg-primary m-auto">
      <AppHeader />
     <Search handleInput={handleInput} searchInput={searchInput} />
      <DisplayCountries data={filteredcountries}/>
    </div>
    
  );
}

export default App;
