import RestaurentCard  from "./RestaurentCard";
import resList  from "../utils/mockData";
import { useState } from "react";
import Button from '@mui/material/Button';

const Body = () =>{


    const [listOfRestaurents, SetListOfRestaurents] = useState(resList);


    return(

        <div className="body">
            <div className="filter">

            
     
                <Button variant="contained" 
                    disableElevation
                    sx={{
                        padding: '10px',
                        margin: '10px',
                    }}
                    onClick={() => {

                        const filteredData = listOfRestaurents.filter((res) => {
                            return res.data.avgRating >=4.4;
                        });
                        SetListOfRestaurents(filteredData);

                   }}

                   onMouseOver={() =>(console.log("moused hoverd"))}
                >
                    Top Rated Restaurants
                </Button>
            
                {/* <button className="filter-btn" onClick={() =>{
                    //filter logic here
                   const filteredData = restaurantList.filter((res) =>{return res.data.avgRating >=4});
                   setResList(filteredData);
                }}

                    onMouseOver={() =>{console.log("mouse hoverd")}}>Top rated restaurent </button> */}
            </div> 
            <div className="res-container">

                

           {
            listOfRestaurents.map((restaurant) => (<RestaurentCard key ={restaurant.data.id} resData ={restaurant}/>))
           }
                

        
           
            </div>
        </div>
    );
}

export default Body