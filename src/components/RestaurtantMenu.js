import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimer from './Shimer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const RestaurtantMenu = () => {

    const [resInfo, setResInfo] = useState([]);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();      

    },[])

    const fetchMenu = async ()=> {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId
            );
            const json = await data.json();
            setResInfo(json.data)
            console.log(json);          
             };
            
     if(resInfo.length === 0){
        return <Shimer/>;
     } 
     else {     
        const {itemCards} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
        console.log(itemCards);

  return(    
    <div className='menu'>
        <h1>{resInfo.cards[0].card.card.info.name}</h1>
        <h3>{resInfo.cards[0].card.card.info.cuisines.join(", ")}</h3>
        <h3>{resInfo.cards[0].card.card.info.costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name}  - {item.card.info.price ||item.card.info.defaultPrice}</li>)}            
        </ul>
    
    </div>
  )
     };
}

export default RestaurtantMenu;
