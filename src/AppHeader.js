import React from "react";

function header({changeTheme , theme}){
    return ( <div>
    <header className={" m-3 "+(theme)}>Countries Around the World</header> 
     <button onClick={changeTheme}>Change Theme</button>
    </div>
    )
}

export default header;