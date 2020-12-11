import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/img/logo-nav.png';
import NavbarCart from './NavbarCart';
import Logo from '../rm-general-components/Logo';


function NavbarItems() {

    const ref = useRef(null);
    const navLogo = useRef(null);
    const navHome = useRef(null);
    const navThe = useRef(null);

    const closeMenu = () => {
        document.querySelector('body').classList.remove('fixed-position');
        document.querySelector('nav').classList.remove('menu-active');
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight){
                ref.current.classList.add('bg-scroll');
                navLogo.current.style.filter = 'invert(1)';
                navHome.current.style.color = 'var(--color1)';
                navThe.current.style.color = 'var(--color1)';
            } else {
                ref.current.classList.remove('bg-scroll');
                navLogo.current.style.filter = '';
                navHome.current.style.color = '';
                navThe.current.style.color = '';
            }
        })
    }, [])

    return(
        <nav ref={ref} onClick={closeMenu}>
            <div className="overlay"></div>
            <i className="fas fa-times"></i>
            <div className="logo" ref={navLogo}>
                <Logo logoPath={logo}/>
            </div>

            <div className="nav-middle">
                <ul>
                    <li>
                        <Link to='/'><span className="home" ref={navHome}>HOME</span></Link>
                    </li>
                    <li>
                        <Link to='/products'> <span className="the" ref={navThe}>THE OVEN</span></Link>
                    </li>
                    <li>
                        <a href="#footer">CONTACT</a>
                    </li>
                    <li>
                        <a href="http://rubenmavarezportfolio.epizy.com/">PORTFOLIO</a>
                    </li>
                </ul>
            </div>
            <div className="nav-right">
                <ul>
                    <li>
                        <a href="#input"> <i className="fas fa-search"></i></a>
                    </li>
                    <li className="cart-li">
                        <NavbarCart/>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/rubenmavarezb"><i className="fab fa-blogger"></i> Blog </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default NavbarItems
