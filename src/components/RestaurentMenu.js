import { useEffect ,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurentMenu = ()=>{

    const [resInfo , setResInfo] = useState(null);
    const [resMenuCards , setResMenuCards] = useState(null);

    const {resId}= useParams();


    // console.log(params)

    useEffect(()=>{
        fetchMenu()

    },[]);

    const fetchMenu  = async () =>{

        const data = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await data.json();
        setResInfo(jsonData)
        setResMenuCards(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        // console.log(jsonData);  console.log(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    }

    if(resInfo === null){


        return <Shimmer/>;

    }

 

     const {name,costForTwoMessage,cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;
    //  const {title} = resMenuCards?.card?.card
   return  (
         <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(',')} - {costForTwoMessage}</p>

            <h1>Menu of {name} Restaurent</h1>
            {/* <h2>category-{title} </h2> */}


            {
    resMenuCards.map((res, resIndex) => {
        if (res?.card?.card?.itemCards) {
            const itemCards = res.card.card.itemCards;
           
            // Return JSX for itemCards

            return (
                <div key={resIndex}>
                    <h2>Category - {res.card.card.title}</h2>
                    <ul>
                        {itemCards.map((menu, menuIndex) => (
                            <li key={menuIndex}>
                                {menu?.card?.info?.name} - RS {menu?.card?.info?.price / 100  || menu?.card?.info?.defaultPrice/ 100 }
                            </li>
                        ))}
                    </ul>
                </div>
            );

        } else if (res?.card?.card?.categories) {
            const categories = res.card.card.categories;

            // Return JSX for categories

            return (
                <div key={resIndex}>
                    <h2>Category - {res.card.card.title}</h2>
                    {categories.map((categoryMenu, categoryIndex) => (
                        <div key={categoryIndex}>
                            <h3>Sub-Category - {categoryMenu.title}</h3>
                            <ul>
                                {categoryMenu.itemCards.map((subCategoryMenu, subMenuIndex) => (
                                    <li key={subMenuIndex}>
                                        {subCategoryMenu?.card?.info?.name} - RS {subCategoryMenu?.card?.info?.price / 100}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))};
                </div>
            );
        } else {
            // Return null if no matching conditions
            return null;
        }
    })
}

        
            {/* <ul>
                {
                    itemCards.map((res) => (
                        <li>
                            {res?.card?.info?.name} - RS {res?.card?.info?.price/100}
                        </li>
                    ))
                }
               
            </ul> */}
        </div>
   ); 
}

export default RestaurentMenu;

