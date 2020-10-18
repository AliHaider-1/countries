import React, { useEffect, useState } from "react";
import countriesAll from "./countriesAll";
import AppHeader from "./AppHeader";
import "./App.css"
import DisplayCountries from "./DisplayCountries";
function App() {
 

  return (
   <div className="App-header bg-primary m-auto">
      <AppHeader />
      <DisplayCountries />
    </div>
    
  );
}

export default App;
