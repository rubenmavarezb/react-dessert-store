import React from 'react';
import './Header.css';
import Logo from '../rm-general-components/Logo';
import Button from '../rm-general-components/Button'
import mainLogo from '../../assets/img/logo-main-black.png';

function Header(){
        return (
        <main>
            <div className="main">
                <div className="tone-1">
                    <div className="product-info">
                        <h1>RM's kitchen</h1>
                        <p>Chef pattisiere - photographer</p>
                        <h2>By Ruben Mavarez</h2>
                        <div className="info-btns">
                            <Button cssClass="btn discover-btn" text='Explore the kitchen'/>
                            <Button cssClass="btn search-btn" text='Search'/>
                        </div>
                    </div>
                </div>
                <div className="tone-2">
                    <Logo logoPath={mainLogo}/>
                </div>
            </div>
        </main>
        )
}


export default Header