import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon  from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import './Header.css';

const Header = () => {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube Logo"/>
                </Link>
            </div>

            <div className="header__input">
                <input type="text" placeholder="Search" value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
                <Link to={`/search/${inputSearch}`} style={{ padding: 'none' }}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar src="https://www.pinclipart.com/picdir/big/78-780477_about-us-avatar-icon-red-png-clipart.png" alt="Avatar" />
            </div>
            
        </div>
    )
};
export default Header;
