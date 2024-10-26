import { useState , useEffect } from "react";

const User = ({name}) =>{

    const [count  , setCount] = useState(0)

    useEffect(()=>{

        //api calls
    },[]);
    return (
        <div className="user-card">
            collectionV5RestaurantListWidget_SimRestoRelevance_food_seo
            <h1>{count}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : owk</h3>
            <h4>Contact : @12345</h4>
        </div>
    );
}

export default User