import React from 'react';
import c from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Naviganion = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/Profile" activeClassName={c.active}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/Dialogs" activeClassName={c.active}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/Users" activeClassName={c.active}>Users</NavLink>
            </div>
            <div className={c.item}>
                <a>Mews</a>
            </div>
            <div className={c.item}>
                <a>Music</a>
            </div>
            <div className={c.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Naviganion;