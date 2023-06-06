
import React ,{ createContext, memo, useState}from 'react'

export const SearchContext = createContext();
export const SearchProvider = memo((props)=> {

    const [search,setSearch]=useState('')
    
    return <SearchContext.Provider value={[search,setSearch]} > {props.children} </SearchContext.Provider>
}
)