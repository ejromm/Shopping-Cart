
import { FaStar, FaStarHalf,  } from "react-icons/fa";
import uniqid from 'uniqid';

export default function GetStars(rating) {

        //round to nearest half
        rating = Math.round(rating * 2 ) / 2;
        let output = []; 
        
        
        //append all whole stars
        for(let i = rating ; i >= 1; i--) {
            output.push(<FaStar key={uniqid()} style={{color: 'black'}} />)
            rating--; 
           
        }
        if (rating === .5) output.push(<FaStarHalf key={uniqid()} style={{color: "black"}} />)
            

            return output;
        
    

}