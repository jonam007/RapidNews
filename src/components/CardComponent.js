import React, { useState,useContext } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { FacebookShareButton, TwitterShareButton ,EmailShareButton,WhatsappShareButton,TelegramShareButton } from "react-share";
import { FacebookIcon, TwitterIcon,EmailIcon ,WhatsappIcon,TelegramIcon} from "react-share";
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { FavouriteContext } from '../context/context5';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
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
}));




function CardComponent({ data }) {
  
  const classes = useStyles();
 

  const [favourites, setFavourites] = useContext(FavouriteContext);
  const [Favo,setFavo]=useState([])
  const saveToLocalStorage = (items) => {
    localStorage.setItem("name", JSON.stringify(items));
  };


  const handleFavorite =(value)=>{
    
       const newFavouriteList=[...favourites,value];
       setFavourites(newFavouriteList)
       saveToLocalStorage(newFavouriteList)
 }
 
//  const checkRepeat=(value)=>{
   
//     const repeat = favourites.filter((i)=> i.title === value.title)
//     return repeat
    
  
// }

  return (
    <div>
      <Grid container  
      spacing={3}      
      >
        {data &&
          data.map((i) => {
            const value=i;
            let str = i.publishedAt;
            let date = str.slice(0, 10);
            let reverseDate = date.split("-").reverse().join("-");
            return (
              <Grid key={i.id} item xs={12} md={12} lg={6} direction="row">
                <Card
                  variant="outlined"
                  style={{  
                    background: "#2D2926FF",
                    borderRadius: 10,
                    borderColor: "#ff6208",
                    boxShadow: "#ff6208",
                    marginLeft:'5%',
                    minheight:'30%'
                  }}
                >
                  
                  <CardHeader
                    title={i.title}
                    action={
                      <IconButton aria-label="add to favorites"  color="secondary">
                      <FavoriteIcon onClick={()=>handleFavorite(value)} />
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
                   
                  
                  <CardMedia className={classes.media} image={i.urlToImage == null?'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS4AAACnCAMAAACYVkHVAAAAJ1BMVEX09PTa2trc3Nz29vbj4+Pg4ODv7+/Y2Njy8vLt7e3q6urm5ubn5+eHk7pVAAAEMklEQVR4nO2ci46jMAxFSZw3/P/3ru0QFtoppSPtUsn3rDSLmFaCIycxjplpAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxzSLj7Ir4b8UPdU6lL8MvdF/TtiKjSQnQ5O+cClbsv6OvQEddDKrEo7xTPuAhdeySUivgqqc5xmBq6+MfdF/hVSFxRSYuEVGY93j/ocunuS/wCxujjsTeLKOe3aFJlfMKHJfDJXK2vjUVNldpCl7SLJvXlY2hJBmiSs4vlXGJM596tpvxel+OQSrt0S05Gk7aKGuhjT91sAbUeSUhNx7SUIv8i3nXFt8KiJKTyELVN5jz2ZhY1PSfwNMnk5S0mEhT6JL4be1kjqhZN4Pkj5dELURO5xeBopPnvbJXV1CKz+ekzIesSu8mirjrCSseemprerXmUOCDdbFAXJwWsK3ZR178VOXXdL4125jGJrjBUlbKWHd4QZSXYn7j3Hv4fPSn48HYpcHTtl8ZkJbxUlx/B5a+yJWcrVuZ9muXOR1LgfosZXVXutkLXNahwQp9HKfmQ20PXT4igsB6LrvgZIZrSJXO9H7VR0RXW1OBSRkHr5GdHVxBdayIgh+GTO2dhwZSuadHb7cerrpKuMpnTlTLPXm3U/USXrJZZGf+/pE7WdBWpR8xHXb6vkMctjWe8QV381Ohz/FlXCKfpg0ldUl5Yl8ajrkWWvvkkvizq4kyAh1xfGg+65t4XMUPXHi0l57407nR5N61Pkg+Zvl//GdXFSyPfb9PDva5RpiB/mO99f1Cyq0sfrHty+l4X/6ZuFWuTuki2GPu24WEw1j531d1glNJW5QefmvvOtkldum2oh4ep3nddx+abntDyfGdVF1GT7F3n9aMu30ppx4nLz9p2UihY1aVL41ohfEhTnxKHv8/fFMzqKnLDywVduz0Q0iK/RV0TbSbe6OLPbNGl+yA2dUlPiS6Np7rysYuEik1dWrLqj0Gnuh57biiZHIxEC1vSx6DXurzLz92oNVdz5cHRVyIJ1Ul0/dSMSnMzqEtmbacVwidd+cyWtv4a1CUVQu2oOejiTCGUIM3O2buXjc4GdfFTo1QIy0N0xUaFmqajy0sdFnVJhdCnH8qD8irLItu2L1tsLOpqWvKS9F51ScEwbsOP0nzSj2RRl75YMG+6qne7zdly2rRrUBcvjU4rhCO6fDv00Z991aIubbmMI7okni7fvkVda1/J0PXcS3/yVXu6aJr1DdjwcUuJSV3T1NzY3IGuCyS3vbf4WcOSSV2l9N0x+Rnef3yHxUdsJm4t4D58grVmyw6F0Goqr2r0J/QvGNM19TenPnW1YU1Xz7Sg6yL9di+/5PII/kwCeMsv/1JLmSy+aQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjiD11yHkXgwpzGAAAAAElFTkSuQmCC':i.urlToImage} />
                  <CardContent>
                    <Typography
                      variant="h6"
                      
                      style={{ fontWeight: "bold", textTransform: "uppercase" ,color:'#E94B3CFF'}}
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
      
    </div>
    
  );
}

export default CardComponent;
