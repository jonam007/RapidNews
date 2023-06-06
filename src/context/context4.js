
import React ,{ createContext, memo, useState}from 'react'
export const DomainContext = createContext();
export const DomainProvider = memo((props)=> {

    const [domain,setDomain]=useState('')
    
    return <DomainContext.Provider value={[domain,setDomain]} > {props.children} </DomainContext.Provider>
}
)