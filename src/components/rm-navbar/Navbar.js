import React from 'react';
import './Navbar.css';
import NavbarToggle from './NavbarToggle'
import NavbarItems from './NavbarItems'


const Navbar = () =>{
        return (
            <header>
                <NavbarToggle/>
                <NavbarItems/>
            </header>
        )

}

export default Navbar