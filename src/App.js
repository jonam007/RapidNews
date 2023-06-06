import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createTheme, ThemeProvider, Typography } from '@material-ui/core'
import Layout from './components/Layout';
import HeadLines from './pages/HeadLines';



import Categories from './pages/Categories';

import { NewsProvider } from './context/context';
import { CountryProvider } from './context/context2';
import { SearchProvider } from './context/context3';
import Search from './pages/Search';

import { DomainProvider } from './context/context4';

import Favorites from './components/Favorites';
import { FavouriteProvider } from './context/context5';
import Domains from './pages/Domains';
import DomainSearch from './pages/DomainSearch';
import Portfolio from './pages/Portfolio';
const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary:{
      main:"#E94B3CFF"
    }
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  }
})


const noPage = ()=>{
  return<Typography>Error 404</Typography>
}




function App() {

  return (
    <FavouriteProvider>
    <DomainProvider>
    <CountryProvider>
    <SearchProvider>
    <NewsProvider>
    <ThemeProvider theme={theme}>
    <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HeadLines/>
            </Route>
           
            <Route exact path="/Search">
              <Search/>
            </Route>
            <Route exact path="/DomainSearch">
              <DomainSearch/>
            </Route>
            <Route exact path="/Category/:categories" component={Categories}/>
            <Route exact path="/TopDomains/:domain" component={Domains}/> 
            <Route exact path="/Portfolio" component={Portfolio}/> 
            <Route exact path="/Favorites">
              <Favorites/>
            </Route>
            <Route component={noPage}/>
          </Switch>
        </Layout>
      </Router>
      </ThemeProvider>
      </NewsProvider>
      </SearchProvider>
      </CountryProvider>
      </DomainProvider>
      </FavouriteProvider>
  );
}

export default App;
