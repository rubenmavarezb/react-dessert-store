import React from 'react'
import './Navbar.css'

const NavbarToggle = () => {

    const openMenu = () => {
        document.querySelector('body').classList.add('fixed-position');
        document.querySelector('nav').classList.add('menu-active');
    }

    return(
        <React.Fragment>
            <div className="menu-toggle" onClick={openMenu}>
                <i className="fas fa-bars"></i>
            </div>
            <div className='cart-toggle'>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </React.Fragment>
    )
}

export default NavbarToggle