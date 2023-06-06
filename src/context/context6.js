import React ,{ createContext, memo, useState}from 'react'
export const CategoryContext = createContext();
export const CategoryProvider = memo((props)=> {

    const [category,setCategory]=useState([])
    
    return <CategoryContext.Provider value={[category,setCategory]} > {props.children} </CategoryContext.Provider>
}
)