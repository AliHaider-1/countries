import React from "react";

 function Search({handleInput}){
    

  return (
    <form className="">

      <input
        type="text"
        className="form-control"
        placeholder="Search"
        onChange={handleInput}
      />

    </form>
  );
};

export default Search;