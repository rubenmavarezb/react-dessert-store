import React from 'react'
import '../../assets/global.css';
import Navbar from '../rm-navbar/Navbar';
import Header from '../rm-header/Header';
import InputField from '../rm-input/Input';
import Products from '../rm-product-section/Product-section';
import Details from '../rm-productdetails/Details'
import Footer from '../rm-footer/Footer';
import '../../assets/queries.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const Layout = () => {
    

    return(
            <Router>
                <Navbar/>
                <Switch>
                <Route exact path='/'>
                    <Header/>
                    <InputField/>
                </Route>
                <Route exact path='/products'>
                    <Header/>
                    <InputField/>
                    <Products/>
                </Route>
                <Route exact path='/products/:id'>
                    <Header/>
                    <InputField/>
                    <Details/>
                </Route>
                </Switch>
                <Footer/>
            </Router>
    )
}

export default Layout