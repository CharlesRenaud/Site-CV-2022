import React from 'react';
import logo from "../images/logo2.png";


const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} />
        </div>
    );
};

export default Header;