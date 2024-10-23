import RestaurentCard  from "./RestaurentCard";
import { useState , useEffect } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Shimmer from "./Shimmer";
const Body = () =>{


    //whenver state variables update    react triggers a reconcillation cycle (re-enders the component)

    const [listOfRestaurents, SetListOfRestaurents] = useState([]);
    const [filteredRestaurent , setFilteredRestaurent] =useState([]);
    const [searchText , setSearchText] = useState("");
    console.log("renderd")

    useEffect(() =>{

        fetchData();
    } ,[]);

    const fetchData = async () =>{
        const data  = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.37240&lng=78.43780&str=Biryani&trackingId=0ef0abf9-f38d-e4eb-c96d-15d8005d6f1d&submitAction=ENTER&queryUniqueId=f96dba25-3f64-975f-80fc-b9d4e3d943d8");

        const jsonData = await data.json();

        // console.log(jsonData.data.cards[1].groupedCard.cardGroupMap.DISH.cards);

        // Optional chaining
         SetListOfRestaurents(jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);  
         setFilteredRestaurent(jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards)
    };

    //The below rendering is conditional rendering
    // if(listOfRestaurents.length === 0){
    //     return <Shimmer/>
    // }
  
    return listOfRestaurents.length === 0  ?<Shimmer/> :(

         <div className="body">
            <div className="filter">

                <div className="search-bar">
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" 
                                    label="Search"
                                    variant="outlined" 
                                    sx={{ 
                                        '& .MuiInputBase-root': { height: 51 },  // Adjust the height
                                        '& .MuiInputBase-input': { padding: '8px 14px' }  // Adjust the padding inside the input
                                    }}

                                    value = {searchText}
                                    onChange={(event) =>{
                                        setSearchText(event.target.value);
                                       

                                    }}
                        />
                        
                    </Box>
                </div>
                <div className="search">
                    <Button variant="contained"
                             sx={{ fontSize: '15px', padding: '12px 10px' }}

                             onClick={()=>{
                                //fliter the restaurent cards and update the UI
                                //searchText
                                const filteredSearchRestaurent = listOfRestaurents.filter((res) =>
                                    res?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase()))

                                setFilteredRestaurent(filteredSearchRestaurent);
                                setSearchText("");
                                console.log(searchText);
                             }}
                    >
                        Search
                    </Button>  
                </div>

                <div className="filter-btn">
                        <Button variant="contained" 
                            disableElevation
                            sx={{
                                padding: '10px 16px', 
                                margin: '13px',       
                                fontSize: '14px',
                                minHeight: '52px'
                            
                            }}
                            onClick={() => { 

                                const filteredData = listOfRestaurents.filter((res) => {
                                    return res?.card?.card?.restaurant?.info?.avgRating >= 4.4;
                                });
                                setFilteredRestaurent(filteredData);

                        }}

                        onMouseOver={() =>(console.log("moused hoverd"))}
                        >
                            Top Rated Restaurants
                        </Button>
                </div>
            
            </div> 
            <div className="res-container">

           {
           filteredRestaurent.length === 0 ? <h1> No Results Found </h1> : filteredRestaurent.map((restaurent , index) =>{

                if(restaurent.card?.card?.info){
                    return (
                        <RestaurentCard key ={restaurent.card.card.info.id} 
                        resData ={restaurent}
                        />

                    );
                }
            })
           }

              

        
           
            </div>
        </div>
    );
}

export default Body