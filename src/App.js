import React from "react";
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
