import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css';

class Header extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/page1">pageOne</Link></li>
                    <li><Link to="/page2">pageTwo</Link></li>
                    <li><Link to="/page3">pageThree</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;