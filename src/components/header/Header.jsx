import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import './Header.css';

export const Header = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <header>
            <div className="container flexSB">
                <nav className='flexSB'>
                    <div className="logo">
                        <img src="/public/images/logo1.png" alt="" />
                    </div>
                    <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
                        <Link to='/'>Home</Link>
                        <Link to='/series'>Series</Link>
                        <Link to='/movies'>Movies</Link>
                        <Link to='/pages'>Pages</Link>
                        <Link to='/pricing'>Pricing</Link>
                        <Link to='/contact'>Contact</Link>
                    </ul>
                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? "<i className='fa fa-times'></i>" : "<i className='fa fa-bars'></i>"}
                    </button>
                </nav>
                <div className="account flexSB"></div>
                <i className='fa fa-search'></i>
                <i className='fa fa-bell'></i>
                <i className='fa fa-user'></i>
                <button>Subcribe Now</button>
            </div>
        </header>
    )
}
