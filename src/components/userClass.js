import React from "react";

class UserClass extends React.Component{


    constructor(props){
        super(props)

        this.state={

            userInfo:{
                name:"Dummy name",
                location: "deafault",
                avtar_url:"https://dummy.photo.com"
            }
        }
    }


    async componentDidMount(){
        // console.log("enterd into componentDidMount")
        const data =  await fetch("https://api.github.com/users/akshaymarch7");

        const jsonData =  await data.json();

        this.setState({
            userInfo:jsonData
        })
        
        // console.log(jsonData)
    }


    componentDidUpdate(){
        // console.log("component did updated")
    }
    //the following will return some jsx;
    render(){

       
        // console.log("entered into child render")
       
       const {name , location ,avatar_url} = this.state.userInfo;


       return (
        <div className="user-card">
            <img src={avatar_url} />
            <h2>Name :{name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @12345</h4>
           
        </div>
       )
    }

}

export default UserClass;