import RestaurentCard  from "./RestaurentCard";
import { useState , useEffect } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{


    //whenver state variables update    react triggers a reconcillation cycle (re-enders the component)

    const [listOfRestaurents, SetListOfRestaurents] = useState([]);
    const [filteredRestaurent , setFilteredRestaurent] =useState([]);
    const [searchText , setSearchText] = useState("");


    useEffect(() =>{

        fetchData();
    } ,[]);


    // const fetchData = async () => {
    //     const lat = 12.8399090;
    //     const lng = 77.6629680;
    //     const isDineoutCollection = false;
    
    //     try {
    //         const response = await fetch(`http://localhost:5000/api/getRestaurants?lat=${lat}&lng=${lng}&isDineoutCollection=${isDineoutCollection}`);
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         const jsonData = await response.json();
    //         console.log(jsonData); // Log the response data
            
    //         // Assuming the structure of the returned data is correct
    //         SetListOfRestaurents(jsonData.data.success.cards[0].card.card.gridElements.infoWithStyle.restaurants);
    //         setFilteredRestaurent(jsonData.data.success.cards[0].card.card.gridElements.infoWithStyle.restaurants);
    //     } catch (error) {
    //         console.error('Fetch error:', error);
    //     }
    // }
    


    const fetchData = async () => {
        const url = "https://www.swiggy.com/api/seo/getListing?lat=12.8399090&lng=77.6629680&isDineoutCollection=false";
        const proxyUrl = "https://thingproxy.freeboard.io/fetch/";

        // https://cors-anywhere.herokuapp.com/
        // https://thingproxy.freeboard.io/fetch/
        // https://api.allorigins.win/raw?url=
        
        // Construct the complete payload
        const requestBody = {
            lat: 12.960059122809971,
            lng: 77.57337538383284,
            isDineoutCollection: false,
            sortAttribute: "relevance",
            isFiltered: false,
            nextOffset: "CJY7ELQ4KIDA4Z7D0pfxEzDUEDgE",
            queryId: "seo-data-b2e80253-e09c-4f50-81d6-fad42fd20342",
            seoParams: {
                apiName: "CityPage",
                brandId: "",
                seoUrl: "www.swiggy.com/city/bangalore",
                pageType: "CITY_PAGE",
                businessLine: "FOOD"
            },
            widgetOffset: {
                NewListingView_category_bar_chicletranking_TwoRows: "",
                NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
                Restaurant_Group_WebView_PB_Theme: "",
                Restaurant_Group_WebView_SEO_PB_Theme: "",
                collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "86",
                inlineFacetFilter: "",
                restaurantCountWidget: ""
            }
        };
    
        try {
            const response = await fetch(proxyUrl+url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const jsonData = await response.json();

            // console.log(jsonData.data.success.cards[0].card.card.gridElements.infoWithStyle.restaurants)


            // Optional chaining to safely access nested properties

            SetListOfRestaurents(jsonData.data.success.cards[0].card.card.gridElements.infoWithStyle.restaurants);
            setFilteredRestaurent(jsonData.data.success.cards[0].card.card.gridElements.infoWithStyle.restaurants);
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    };

    // const fetchData = async () =>{
    //     const data  = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.37240&lng=78.43780&str=Biryani&trackingId=0ef0abf9-f38d-e4eb-c96d-15d8005d6f1d&submitAction=ENTER&queryUniqueId=f96dba25-3f64-975f-80fc-b9d4e3d943d8");

    //     const jsonData = await data.json();
    //     // console.log("inside of useEffect")
    //     // console.log(jsonData.data.cards[1].groupedCard.cardGroupMap.DISH.cards);


    //     // Optional chaining
    //      SetListOfRestaurents(jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);  
    //      setFilteredRestaurent(jsonData?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards)
    // };

    //The below rendering is conditional rendering
    // if(listOfRestaurents.length === 0){
    //     return <Shimmer/>
    // }


    return listOfRestaurents.length === 0  ? <Shimmer/> :(

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
                                    res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))

                                setFilteredRestaurent(filteredSearchRestaurent);
                                setSearchText("");
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
                                    return res?.info?.avgRating >= 4.4;
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

                if(restaurent?.info){
                    return (
                        

                        // <RestaurentCard key={restaurent.info.id} resData={restaurent} />

                        // <Link 
                        //     key={restaurent.info.id}
                        //     to={"/restaurents/" + restaurent.info.id}
                        //     className="restaurent-link"
                        // >
                        //     <RestaurentCard resData={restaurent} />
                        // </Link>
                        <Link
                            key={restaurent.info.id}
                            to={`/restaurents/${restaurent.info.id}`}
                            className="restaurent-link"
                            style={{ textDecoration: "none" }} // Optional to remove underline
                        >
                            <RestaurentCard resData={restaurent} />

                        </Link>

                    );
                }
            })
           }

              

        
           
            </div>
        </div>
    );
}

export default Body