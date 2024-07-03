import axios from "axios";
import { Gamer } from "../DataProvider";

interface CardProps {
    gamer: Gamer;
}

const Card = ({gamer}: CardProps) => {
    if (gamer) {
        return (
            <div className="mx-auto my-auto shadow-md bg-dark-2 p-8 rounded-2xl">
                <img className="w-custom h-custom outline-none border-none shadow-lg" src={axios.defaults.baseURL + "/core" + gamer.avatar}/>
                <p>{axios.defaults.baseURL + "/core" + gamer.avatar}</p>
                <p>{gamer.avatar}</p>
            </div>
        );
    }
    else {
        return (
            <p className="mx-auto my-auto shadow bg-dark-2 p-20">
                Больше нет рекомендаций!
            </p>
        );
    }
}

export default Card;