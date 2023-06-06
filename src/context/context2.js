import React ,{ createContext, memo, useState}from 'react'

export const CountryContext = createContext();
export const CountryProvider = memo((props)=> {

    const [country,setCountry]=useState('in')
    
    return <CountryContext.Provider value={[country,setCountry]} > {props.children} </CountryContext.Provider>
    
}

)