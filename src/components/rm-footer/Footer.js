import React from 'react';
import './Footer.css';


const Footer = () => {
        return(
            <footer className="copyright" id="footer">
                <div className="up" id="up">
                <a href="!#"><i className="fas fa-chevron-up"></i></a>
                </div>
                <div >
                <ul className="icon-buttons">
                    <li className="icon-item">
                    <a href="!#" className="icon-link"><i className="fab fa-instagram"></i></a>
                    </li>
                    <li className="icon-item">
                    <a href="!#" className="icon-link"><i className="fab fa-facebook"></i></a>
                    </li>
                    <li className="icon-item">
                    <a href="!#" className="icon-link"><i className="fab fa-pinterest"></i></a>
                    </li>
                </ul>
                <p>&copy; <span>2020 <a href="https://www.instagram.com/rubenmavarezb">Ruben Mavarez</a></span></p>
                </div>
          </footer>
        )
}

export default Footer