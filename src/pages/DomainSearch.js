import React,{useContext,useEffect,useState} from 'react'

import CardContainer from '../components/CardComponent'
import { NewsContext } from '../context/context'
import { Container, Typography } from '@material-ui/core'
import Heading from '../components/Heading'
import { DomainContext } from '../context/context4';
export default function DomainSearch() {

  const value = useContext(NewsContext)
  const {apiKey} = useContext(NewsContext);
    const [data, setData] = useState([]);
    const [domain,setDomain] = useContext(DomainContext)
  
  
    useEffect(() => {
      fetch(`https://newsapi.org/v2/everything?domains=${domain}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => setData(data.articles))
    }, [domain])
    return (
       
        <Container>
          <Heading title={`Top Headlines from ${domain}`}/>
          <CardContainer data={data}/>
        </Container>
    )
}
