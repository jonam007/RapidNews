import React ,{ createContext,memo, useState}from 'react'

export const NewsContext = createContext();
export const NewsProvider = memo((props)=> {
    
    return <NewsContext.Provider value={{apiKey:"88216eddeb1445b497e0a91d982c65e2",}}  > {props.children} </NewsContext.Provider>
}
)