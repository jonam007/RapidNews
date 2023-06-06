import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia, Container, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { FacebookShareButton, TwitterShareButton ,EmailShareButton,WhatsappShareButton,TelegramShareButton } from "react-share";
import { FacebookIcon, TwitterIcon,EmailIcon ,WhatsappIcon,TelegramIcon} from "react-share";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Heading from "./Heading";
import IconButton from '@material-ui/core/IconButton';
import Loading from "./Loading";
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
   
    transition: "transform 0.15s ease-in-out"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  subColor: {
    color: "red",
  },
  Button: {
    width: "50%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    float: "right",
  },
  button2: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    float: "right",
    marginTop: "5%",
  },
  header:{
    color:'#E94B3CFF'
  }
}));




function Favorites() {
  
  const [data,setData]=useState([]);
  const [Favo,setFavo]=useState([])
  const classes = useStyles();
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })

useEffect(()=>{

  const newsFavourities = JSON.parse(
    
    localStorage.getItem("name")
  )
  
  
  setData(newsFavourities);
  

 

},[])




const saveToLocalStorage = (items) => {
  localStorage.setItem("name", JSON.stringify(items));
};
  
const RemoveNews = (value) => {
  // console.log(i)
  const newFavouriteList = data.filter(
    (data) => data.title !== value.title
  );
  setData(newFavouriteList);
  saveToLocalStorage(newFavouriteList);
};



  return (
    <div>
      {
        data && data.lenght == 0?(
          <>
          <Loading/>
          </>

        ):(
        <Container>
          <Heading title={"Your Favorite"}/>
          <Grid container spacing={3}>
          { 
            data &&
            data.map((i) => {
            const value=i;
            
            let str = value.publishedAt;

            let date = str.slice(0, 10);
            let reverseDate = date.split("-").reverse().join("-");
            
            return (
              <Grid key={i.id} item xs={12} md={6} lg={6}>
                <Card
                  variant="outlined"
                  style={{
                    background: "black",
                    borderRadius: 10,
                    borderColor: "#ff6208",
                    boxShadow: "#ff6208",
                  }}
                  classes={{root: state.raised ? classes.cardHovered : ""}}
                  onMouseOver={()=>setState({ raised: true, shadow:3})} 
                  onMouseOut={()=>setState({ raised:false, shadow:1 })} 
                  raised={state.raised} zdepth={state.shadow}
                >
                  <CardHeader
                    
                    title={i.title}
                    action={
                      <IconButton aria-label="add to favorites"  color="secondary" >
                      <DeleteForeverIcon fontSize='large' onClick={()=>RemoveNews(value)} />
                    </IconButton>
                    }
                    style={{ color: "#E94B3CFF", textTransform: "uppercase" }}
                  />
                  <CardHeader
                    title={
                      <Typography
                        style={{ color: "white", fontWeight: "bold" }}
                      >
                        Source: {i.source.name}

                      </Typography>
                    }
                    subheader={
                      <Typography className={classes.subColor}>
                        {reverseDate}
                      </Typography>
                    }
                    style={{ color: "black", fontSize: 10 }}
                  />
                   
                  
                  <CardMedia className={classes.media} image={i.urlToImage} />
                  <CardContent>
                    <Typography
                      variant="h6"
                      color="secondary"
                      style={{ fontWeight: "bold", textTransform: "uppercase" }}
                    >
                      {i.description}
                    </Typography>
                    <Divider color="secondary" />
                    <Typography
                      variant="h6"
                      style={{ marginTop: "5%", color: "#fff" }}
                    >
                      {i.content}
                    </Typography>
                    <Button variant="contained" color="secondary" href={i.url}>
                      Know More
                    </Button>
                    <div className={classes.Button}>
                    
                      <TwitterShareButton
                        url={i.url}
                        title={i.title}
                        className={classes.button2}
                      >
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                      <EmailShareButton
                        url={i.url}
                        subject={i.title}
                        body={
                          i.description
                        }
                        className={classes.button2}
                      >
                        <EmailIcon size={35} round />
                      </EmailShareButton>
                      <FacebookShareButton
                        url={i.url}
                        quote={i.title}
                        hashtag={"#intersting News"}
                        description={i.description}
                        className={classes.button2}
                      >
                        <FacebookIcon size={32} round /> 
                      </FacebookShareButton>
                      <WhatsappShareButton
                        url={i.url}
                        title={i.description}
                        className={classes.button2}
                      >
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                      < TelegramShareButton
                        url={i.url}
                        title={i.description}
                        className={classes.button2}
                      >
                        < TelegramIcon size={32} round />
                      </ TelegramShareButton>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
        </Container>

        )
      }
      
      {/* <DomainSearch source={source}/> */}
    </div>
    
    
  );
}

export default Favorites;