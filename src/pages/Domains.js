import React,{useContext,useEffect,useState} from 'react'
import Grid from '@material-ui/core/Grid'
import CardContainer from '../components/CardComponent'
import { NewsContext } from '../context/context'
import { Container, Typography } from '@material-ui/core'
import Heading from '../components/Heading'
import Loading from '../components/Loading'

export default function Domains({match}) {
    const value = useContext(NewsContext)
    const {apiKey} = useContext(NewsContext);
    const [data, setData] = useState([]);
 
    useEffect(() => {
      fetch(`https://newsapi.org/v2/everything?domains=${match.params.domain}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => setData(data.articles))
    }, [data,match])
    return (
      <>
    {
    data && data.length == 0?(
     
        <Container style={{justifyContent:"center",marginTop:'2%'}}>
        <Loading/>
        </Container>
        

      ):(

        <Container>
      <Heading title={`Top Headlines from ${match.params.domain} `}/>
      
        
          <CardContainer data={data}/>  
          
      
          
    </Container>

      )
    }
    </>



    )
    

}

