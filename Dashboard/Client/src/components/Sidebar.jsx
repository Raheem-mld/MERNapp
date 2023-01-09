import React from 'react';
import '../styles/Sidebar.css';
import Axios from 'axios';
import { useHistory, NavLink } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { CgLogOut } from 'react-icons/cg';
import logo from '../assets/images/logo1.png'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FactCheckIcon from '@mui/icons-material/FactCheck';

function Sidebar() {

    let history = useHistory();

    function logoutClick() {
        Axios.post("http://localhost:3001/logout")
        history.go("/login");
    }

    return (
        < div className="sidebar" >
            <div className="logo__container">
                <img src={logo} alt="" />
                
            </div>
            <ul className="menu">
                <li className="active">
                    <NavLink to="/home/dashboard">
                        <div className="menu__icon">
                            <MdDashboard />
                        </div>
                        Dashboard
                    </NavLink >
                </li>
                <li>
                    <NavLink to="/home/reservations" >
                        <div className="menu__icon">
                            <FactCheckIcon/>
                        </div>
                        Reservations
                    </NavLink >
                </li>
                <li >
                    <NavLink to="/home/announcements">
                        <div className="menu__icon">
                            <FormatListBulletedIcon />
                        </div>
                        Announcements
                    </NavLink>
                </li>
                <li onClick={logoutClick}>
                    <NavLink to="/home/annoncess">
                        <div className="menu__icon">
                            <CgLogOut />
                        </div>
                        Logout
                    </NavLink>
                </li>
            </ul>
            <div className="copyRight">
                <div>
                    <span>ModernPlace</span> <br />
                    © 2022 All Rights Reserved
                </div>
            </div>
        </div >
    )
}

export default Sidebar
