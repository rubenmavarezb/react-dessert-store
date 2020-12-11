import React from 'react'
import './Navbar.css'

const NavbarCart = () => {
    return (
        <React.Fragment>
            <div id="cart-length"><span className='length-transition'>0</span><i className="fas fa-shopping-cart"></i> Cart</div>
        </React.Fragment>
    )
}

export default NavbarCart