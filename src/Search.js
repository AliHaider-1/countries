import React from "react";

 function Search({handleInput}){
    

  return (
    <form className="">

      <input
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={(e)=>handleInput(e)}
      />

    </form>
  );
};

export default Search;