
import React ,{ createContext, memo, useState}from 'react'
export const FavouriteContext = createContext();
export const FavouriteProvider = memo((props)=> {

    const [favourites,setFavourites]=useState([])
    
    return <FavouriteContext.Provider value={[favourites,setFavourites]} > {props.children} </FavouriteContext.Provider>
}
)