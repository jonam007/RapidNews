import React,{useContext,useEffect,useState} from 'react'

import { Container, Typography } from '@material-ui/core'

export default function Heading(props) {

    
    return (
        
        <Container>
          <Typography  Wrap variant='h5' style={{background:'#2D2926FF',margin:5,padding:10,width:'50%',color:'#E94B3CFF',borderRadius:10,textTransform:'uppercase'}}>{props.title}</Typography>
          
        </Container>
    )
}

