import User from "./User"
import UserClass from "./userClass";
import React from "react";

class About extends React.Component{


    
    constructor(props){
        super(props);
        // console.log("parent constructor")
 
    }


    componentDidMount(){

        // console.log("parent compomentDidMatch");
    }
    render(){

        // console.log("parent render")

        return (
       
            <div>
               
                <h1>About Us Page</h1>
                
                <UserClass name={"Thota LakshmiDevi"} Location={"OWK"}/>
               
            </div>
        );
    }
    
};



export default About