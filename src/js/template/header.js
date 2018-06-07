import React from 'react';
import logo from '../../../img/gupy_logo.png';



export default props => {
    console.log(logo);
    return(
    <header className="header">
        <ul>
            <img className="header__logo" src={logo} />

            <div className="header__links">
                <li><a href="/">VIEW RESUMES</a></li>
                <li><a href="/candidate">ADD CANDIDATE</a></li>
            </div>
        </ul>
    </header>
)}