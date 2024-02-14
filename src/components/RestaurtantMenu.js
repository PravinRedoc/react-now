import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimer from './Shimer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { MENU_URL } from  '../utils/constants'
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

export const RestaurtantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

            
     if(resInfo === null){
        return <Shimer/>;
     } 
     else {     
        const {itemCards} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
        console.log(itemCards);
        console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
        const categories = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((cat)=>cat.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        console.log(categories);

  return(    
    <div className='menu text-center'>
        <h1 className='font-bold my-8 text-lg'>{resInfo.cards[0].card.card.info.name}</h1>
        <h3 className='font-bold text-lg'>{resInfo.cards[0].card.card.info.cuisines.join(", ")}</h3>
        <h3>{resInfo.cards[0].card.card.info.costForTwoMessage}</h3>
        {categories.map((cat) => <RestaurantCategory key={cat.card.card.title} data={cat.card.card}/>)}
        
    </div>
  )
     };
}

export default RestaurtantMenu;
