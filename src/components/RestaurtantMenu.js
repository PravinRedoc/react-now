import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimer from './Shimer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { MENU_URL } from  '../utils/constants'
import useRestaurantMenu from '../utils/useRestaurantMenu';

export const RestaurtantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

            
     if(resInfo === null){
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
