import React, { useContext, useEffect, useState } from "react";
import CardContainer from "../components/CardComponent";
import { NewsContext } from "../context/context";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { SearchContext } from "../context/context3";



const useStyles = makeStyles((theme) => ({
  image:{
   marginLeft:'30%',
   marginTop:'40%',
   width:'40%',
   height:'30%',
   [theme.breakpoints.up('lg')]: {
    marginTop:'6%',
    marginLeft:'25rem',
    display:'flex',
  },
  },
  text:{
    textAlign:'center',
    [theme.breakpoints.up('lg')]: {
      
      marginLeft:'26rem',
      display:'flex',
    },
  }
    
}));



export default function Search({ searchs }) {
  console.log(searchs);
  const value = useContext(NewsContext);
  const { apiKey } = useContext(NewsContext);
  const [data, setData] = useState([]);
  const [search, setSearch] = useContext(SearchContext);
  console.log(value);


  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${search}&sortBy=relevancy&language=en&pageSize=100&apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.articles));
  }, [search]);

 
  const classes = useStyles();



  return (
    <>
      {data && data.length == 0 ? (
        <Container style={{ justifyContent: "center", marginTop: "2%" ,}}>
  
          <img  className={classes.image} src="https://i.pinimg.com/originals/2d/16/75/2d16752412daa809899e7711aa44dadb.gif"/>
          <Typography variant={'h3'} className={classes.text}>No Result Found </Typography>
        </Container>
      ) : (
        
        <Container>
          <CardContainer data={data} />
        </Container>
      )}
    </>
  );
}
