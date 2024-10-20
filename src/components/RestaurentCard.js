
import { RESCARD_URL } from "../utils/constants.js"; 
const RestaurentCard = (props) =>{

    const {resData} = props //heres props is an js object
    // console.log(props)

    const {
        name,
        cuisines,
        costForTwo, 
        deliveryTime ,
        avgRating
    } = resData?.data
  

    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
            <img 
                className="res-logo" 
                src={RESCARD_URL}
                alt="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{costForTwo/100 } FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{avgRating} stars</h4>
        </div>
        
    ); 
};


export default RestaurentCard;