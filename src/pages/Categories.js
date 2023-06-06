import React,{useContext,useEffect,useState} from 'react'
import Grid from '@material-ui/core/Grid'
import CardContainer from '../components/CardComponent'
import { NewsContext } from '../context/context'
import { Container, Typography } from '@material-ui/core'
import { CountryContext } from '../context/context2';
import Heading from '../components/Heading'
import Loading from '../components/Loading'

export default function Categories({match}) {
  const value = useContext(NewsContext)
  const {apiKey} = useContext(NewsContext);
    const [data, setData] = useState([]);
    const [country,setCountry] = useContext(CountryContext)
  
  
    useEffect(() => {
      fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${match.params.categories}&pageSize=100&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => setData(data.articles))
    }, [country,data])
    return (
        <>
        {
          data && data.length == 0?(
         
            <Container style={{justifyContent:"center",marginTop:'2%'}}>
            <Loading/>
            </Container>
            
    
          ):(
    
            <Container>
          <Heading title={`Latest ${match.params.categories} News`}/>
          
            
              <CardContainer data={data}/>  
            
          
              
        </Container>
    
          )
        }
        </>
    )
}
