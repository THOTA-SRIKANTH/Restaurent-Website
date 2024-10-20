import React from "react";
import ReactDOM from "react-dom/client";
import dosa from "./images/Home-page/body/dosa.jpg";
import Header from "./components/Header.js"
import Body from "./components/Body.js"













const AppLayout = () =>{

    console.log(<Body />)
    return (

        <div  className="app"> 
            <Header/>
            <Body />
        </div>

    );

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)
