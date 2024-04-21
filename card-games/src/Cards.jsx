import React from "react";
import { Heart, Spade, Club, Diamond } from 'lucide-react';

function Cards({index, value}){
    let suit;
    const leftMove = '-ml-' + index*4;
    let num = value%13;
    if(num===11)
        num = 'J';
    else if(num===12)
        num = 'Q';
    else if(num===0)
        num = 'K';
    else if(num===1)
        num = 'A';
    if(value>=1 && value<=13)
        suit = <Club/>;
    else if(value>13 && value<=26)
        suit = <Diamond className="text-red-500"/>;
    else if(value>26 && value<=39)
        suit = <Heart className="text-red-500"/>;
    else
        suit = <Spade/>;

    return (
       <div className={`${index===12 ? "w-32" : "w-20"} z-${index*10} -ml-2  border-[1px] border-black rounded-lg h-[125px] bg-white`}>
        <p className="text-left ml-3">
            {num}
        </p>
        <p className="text-left ml-1">
            {suit}
        </p>
       </div>
    )
}
export default Cards;
