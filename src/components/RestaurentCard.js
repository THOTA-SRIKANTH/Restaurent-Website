
import { RESCARD_URL } from "../utils/constants.js"; 
const RestaurentCard = (props) =>{

    const {resData} = props //heres props is an js object
    // console.log(props)

    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info

    // const {costForTwo , avgRating } = resData?.card.card.restaurant.info

    // const {deliveryTime} = resData?.card.card.restaurant.info.sla

    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
            <img 
                className="res-logo" 
                src={RESCARD_URL}
                alt="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4> 
            <h4>deliveryTime:{sla.deliveryTime} minutes</h4>
        </div>
        
    ); 
};



export default RestaurentCard;