import React, { useContext, useEffect, useState } from "react";
import { Drawer, Hidden, Typography } from "@material-ui/core";
import { makeStyles,useTheme ,alpha } from "@material-ui/core";
import { CountryContext } from '../context/context2';
import { SearchContext } from '../context/context3';
import { DomainContext } from '../context/context4';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {  useHistory, useLocation } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import GavelIcon from '@material-ui/icons/Gavel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListSubheader from "@material-ui/core/ListSubheader";
import { AddCircleOutlineOutlined, SubjectOutlined,  } from "@material-ui/icons";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AppBar from '@material-ui/core/AppBar'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import PublicIcon from '@material-ui/icons/Public';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import TheatersIcon from '@material-ui/icons/Theaters';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SpaIcon from '@material-ui/icons/Spa';







const drawerWidth = 240;
const useStyles = makeStyles((theme)=>{
  return {
    root: {
      display: "flex",
     
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      color:'#EEA47FFF'
    },

    page: {
    
      width: "100%",
    },
    drawer: {
      
      width: drawerWidth,
   
    },
    smDrawer:{
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },  
    },
    title2: {
      textAlign: "center",
      color:'#E94B3CFF', 
      padding: theme.spacing(2),
    },
    drawerPaper: {
      background: "#2D2926FF",
      width: drawerWidth,
    },
   
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    active: {
      background: '#EEA47FFF',
      
    },
    list:{
      color:'#E94B3CFF'
    },
    list2:{
      color:'black'
    },
    subheader:{
      color:'#E94B3CFF',
      textTransform:'uppercase'
      
    },
    appBar: {
     
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        background: '#fca877',
      },
     
    },
    title: {
      flexGrow: 1,
      display: 'none',
      textAlign: "left",
      color:'#EEA47FFF',  
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      justifyContent:'space-between ',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderColor:'#00539CFF',
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: '#fff',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    toolbar:theme.mixins.toolbar




  }
  
});


const Top =[

  {
    text: "TopHeadlines",
    icon: <WhatshotIcon color="secondary" />,
    path: "/",
  },




]





const Menus = [
  {
    text: "General",
    icon: <SubjectOutlined color="secondary" />,
    path: "/General",
    category:'general'
  },
  {
    text: "Entertainment",
    icon: <TheatersIcon color="secondary" />,
    path: "/Entertainment",
    category:'entertainment'
  },
  {
    text: "Health",
    icon: <LocalHospitalIcon color="secondary" />,
    path: "/Health",
    category:'health'
  },
  {
    text: "Science",
    icon: <SpaIcon color="secondary" />,
    path: "/Science",
    category:'science'
  },
  {
    text: "Sports",
    icon: <SportsBasketballIcon color="secondary" />,
    path: "/Sports",
    category:'sports'
  },
  {
    text: "Technology",
    icon: <DevicesOtherIcon color="secondary" />,
    path: "/Technology",
    category:'technology'
  },
  {
    text: "Business",
    icon: <BusinessCenterIcon color="secondary" />,
    path: "/Business",
    category:'business'
  },
  {
    text: "Politics",
    icon: <GavelIcon color="secondary" />,
    path: "/Politics",
    category:'politics'
  },
];

const Bottom =[
  {
    text: "BccNews",
    icon: <PublicIcon color="secondary" />,
    path: "/BccNews",
    url:"bbc.co.uk"
  },
  {
    text: "NewYorkTimes",
    icon: <PublicIcon color="secondary" />,
    path: "/NewYorkTimes",
    url:"nytimes.com"
  },
  {
    text: "CNN",
    icon: <PublicIcon color="secondary" />,
    path: "/Cnn",
    url:"cnn.com"
  },
  {
    text: "UsaToday",
    icon: <PublicIcon color="secondary" />,
    path: "/UsaToday",
    url:"usatoday.com"
  },
  {
    text: "GoogleNews",
    icon: <PublicIcon color="secondary" />,
    path: "/GoogleNews",
    url:"google.com"
  },
  {
    text: "Ndtv",
    icon: <PublicIcon color="secondary" />,
    path: "/Ndtv",
    url:"ndtv.com"
  },
  {
    text: "FoxNews",
    icon: <PublicIcon color="secondary" />,
    path: "/FoxNews",
    url:"foxnews.com"
  },
  {
    text: "LATimes",
    icon: <PublicIcon color="secondary" />,
    path: "/LATimes",
    url:"latimes.com"
  },
  {
    text: "HuffPost",
    icon: <PublicIcon color="secondary" />,
    path: "/HuffPost",
    url:"huffpost.com"
  },
]

const Saved =[
  {
    text: "Favorites",
    icon: <BookmarkIcon color="secondary" />,
    path: "/Favorites",
  },
]


export default function Layout(props) {
  const history = useHistory();
  const location = useLocation();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [country,setCountry] = useContext(CountryContext)
  const [search,setSearch] = useContext(SearchContext)
  const [domain,setDomain] = useContext(DomainContext)
 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const handleChange = (event) => {
    
    setCountry(event.target.value);
  };

  const handleSearch = async(event)=>{
    event.preventDefault()
    const keyword = await event.target.value;
    
     
     setSearch(keyword)
    
    
  };
  const handleDomain = async(event)=>{
    const keyword = await event.target.value;
    
     
     setDomain(keyword)
    
    
  };

  const container = window !== undefined ? () => window().document.body : undefined;


  const drawer =(
    
        <div>
          <Typography variant="h5" className={classes.title2}>
                Rapid News
              </Typography>
          {/* <div className={classes.toolbar} /> */}
            <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" style={{color:'#E94B3CFF'}}>Select country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          onChange={handleChange}
          style={{color:'#E94B3CFF'}}
        >
          <MenuItem value={'ae'}>United Arab Emirates</MenuItem>
          <MenuItem value={'ar'}>Argentina</MenuItem>
          <MenuItem value={'at'}>Austria</MenuItem>
          <MenuItem value={'au'}>Australia</MenuItem>
          <MenuItem value={'be'}>Belgium</MenuItem>
          <MenuItem value={'bg'}>Bulgaria</MenuItem>
          <MenuItem value={'br'}>Brazil</MenuItem>
          <MenuItem value={'ca'}>Canada</MenuItem>
          <MenuItem value={'ch'}>Switzerland</MenuItem>
          <MenuItem value={'cn'}>China</MenuItem>
          <MenuItem value={'co'}>Colombia</MenuItem>
          <MenuItem value={'cu'}>Cuba</MenuItem>
          <MenuItem value={'cz'}>Czechia</MenuItem>
          <MenuItem value={'de'}>Germany</MenuItem>
          <MenuItem value={'eg'}>Egypt</MenuItem>
          <MenuItem value={'fr'}>France</MenuItem>
          <MenuItem value={'gb'}>United Kingdom</MenuItem>
          <MenuItem value={'gr'}>Greece</MenuItem>
          <MenuItem value={'hk'}>Hong Kong</MenuItem>
          <MenuItem value={'hu'}>Hungary</MenuItem>
          <MenuItem value={'id'}>Indonesia</MenuItem>
          <MenuItem value={'ie'}>Ireland</MenuItem>
          <MenuItem value={'il'}>Israel</MenuItem>
          <MenuItem value={'in'}>India</MenuItem>
          <MenuItem value={'it'}>Italy</MenuItem>
          <MenuItem value={'jp'}>Japan</MenuItem>
          <MenuItem value={'kr'}>South Korea</MenuItem>
          <MenuItem value={'lt'}>Lithuania</MenuItem>
          <MenuItem value={'lv'}>Latvia</MenuItem>
          <MenuItem value={'ma'}>Morocco</MenuItem>
          <MenuItem value={'mx'}>Mexico</MenuItem>
          <MenuItem value={'my'}>Malaysia</MenuItem>
          <MenuItem value={'ng'}>Nigeria</MenuItem>
          <MenuItem value={'nl'}>Netherlands</MenuItem>
          <MenuItem value={'no'}>Norway</MenuItem>
          <MenuItem value={'nz'}>New Zealand</MenuItem>
          <MenuItem value={'ph'}>Philippines</MenuItem>
          <MenuItem value={'pl'}>Poland</MenuItem>
          <MenuItem value={'pt'}>Portugal</MenuItem>
          <MenuItem value={'ro'}>Romania</MenuItem>
          <MenuItem value={'rs'}>Serbia</MenuItem>
          <MenuItem value={'ru'}>Russia</MenuItem>
          <MenuItem value={'sa'}>South Africa</MenuItem>
          <MenuItem value={'se'}>Sweden</MenuItem>
          <MenuItem value={'sg'}>Singapore</MenuItem>
          <MenuItem value={'si'}>Slovenia</MenuItem>
          <MenuItem value={'sk'}>Slovakia</MenuItem>
          <MenuItem value={'th'}>Thailand</MenuItem>
          <MenuItem value={'tr'}>Turkey</MenuItem>
          <MenuItem value={'tw'}>Taiwan</MenuItem>
          <MenuItem value={'ua'}>Ukraine</MenuItem>
          <MenuItem value={'us'}>United States</MenuItem>
          <MenuItem value={'ve'}>Venezuela</MenuItem>
          <MenuItem value={'za'}>South Africa</MenuItem>
        </Select>
      </FormControl>
              
              <List
                subheader={
                  <ListSubheader className={classes.subheader} disableSticky={true} component="div" id="nested-list-subheader">
                    Latest
                  </ListSubheader>
                }
              >
                {Top.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    onClick={() =>{
                      history.push(item.path);
                      
                    
                    } }
                    className={
                      location.pathname == item.path ? classes.active : null
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                      {item.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText className={
                      location.pathname == item.path ? classes.list2 : classes.list
                    } primary={item.text} />
                  </ListItem>
                ))}
              </List>
    
              <List
                subheader={
                  <ListSubheader className={classes.subheader} disableSticky={true} component="div" id="nested-list-subheader">
                    Categories
                  </ListSubheader>
                }
              >
                {Menus.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    onClick={() => history.push(`/Category/${item.category}`)}
                    className={
                      location.pathname == `/Category/${item.category}` ? classes.active : null
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                      {item.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText  className={
                      location.pathname == item.path ? classes.list2 : classes.list
                    } primary={item.text} />
                  </ListItem>
                ))}
              </List>



              <List
                subheader={
                  <ListSubheader className={classes.subheader} disableSticky={true} component="div" id="nested-list-subheader">
                    Top Domains
                  </ListSubheader>
                }
              >
                {Bottom.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    onClick={() => history.push(`/TopDomains/${item.url}`)}
                    className={
                      location.pathname == `/TopDomains/${item.url}` ? classes.active : null
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                      {item.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText  className={
                      location.pathname == item.path ? classes.list2 : classes.list
                    } primary={item.text} />
                  </ListItem>
                ))}
              </List>




              <List
                subheader={
                  <ListSubheader className={classes.subheader} disableSticky={true} component="div" id="nested-list-subheader">
                    Saved
                  </ListSubheader>
                }
              >
                {Saved.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    onClick={() => history.push(item.path)}
                    className={
                      location.pathname == item.path ? classes.active : null
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                      {item.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText  className={
                      location.pathname == item.path ? classes.list2 : classes.list
                    } primary={item.text} />
                  </ListItem>
                ))}
              </List>

            </div>
    
    
    
    )




  return (
    <div className={classes.root}>
       <CssBaseline />
       
      {/* Nav */}
    <AppBar
      position="fixed"
      style={{backgroundColor:'#2D2926FF', display:'flex'}}
      className={classes.appbar}
    >
      <Toolbar>
      <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon color="secondary"/>
          </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          NEWS
        </Typography>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Domains...."
              onClick={() => history.push('/DomainSearch')}
              onChange={(event)=>handleDomain(event)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'domains' }}
            />
          </div>
      
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onClick={() => history.push('/Search')}
              onChange={(event)=>handleSearch(event)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
         
      </Toolbar>
    </AppBar>


      {/* sidebar */}
      <nav className={classes.smDrawer} >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div>

        {/* main content */}
       <div className={classes.toolbar}></div>  
      
     
         {props.children}
      
      </div>
     
       
    

    </div>
    
  );
  
}
