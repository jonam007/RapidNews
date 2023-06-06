import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { BookLoader } from "react-awesome-loaders";
import { Circle, Heart } from 'react-spinners-css';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    width: "100%",
    marginRight: "20%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  subColor: {
    color: "#fff",
  },
  Button: {
    width: "50%",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    float: "right",
  },

  bookloader: {
    marginTop:'50%',
    marginLeft:'3rem',
    [theme.breakpoints.up('md')]: {
      marginTop:'30%',
      marginLeft:'20rem',
      display:'flex',
    },
    
    [theme.breakpoints.up('lg')]: {
      marginTop:'20%',
      marginLeft:'25rem',
      display:'flex',
    },
  },
 
}));

function Loading() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} >
      <div className={classes.loader}>
        <Grid xs={12} md={12} lg={12}  direction="column" justifyContent="center"
    alignItems="center">
       <BookLoader
        className={classes.bookloader}
        background={"linear-gradient(135deg, #6066FA, #4645F6)"}
        desktopSize={"100px"}
        mobileSize={"80px"}
        textColor={"#4645F6"}
      />
      </Grid>
      </div>
    </Grid>
  );
}

export default Loading;
