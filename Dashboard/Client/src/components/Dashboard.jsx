import React from "react";
import '../styles/Dashboard.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DashboardPage from './DashboardPage'
import AddAnnonce from "./AddAnnonce";
import AfficherUsers from "./AfficherUsers";
import AnnoncesPage from "./AnnoncesPage";
import ReservationsPage from './ReservationsPage'

function Dashboard({ loggedIn }) {

    const location = useLocation();

    if (loggedIn || location.loggedIn) {
        return (
            <Router>
                <div className="App">
                    <div className="app__body">
                        <Sidebar />
                        <div className="dashboard-container">
                            <Switch>
                                <Route path="/home/dashboard" component={() => <Navbar navTitle="Dashboard" />}></Route>
                                <Route exact path="/home/reservations" component={() => <Navbar navTitle="Reservations" />}></Route>
                                <Route exact path="/home/reservations/reserve" component={() => <Navbar navTitle="Reservations" />}></Route>
                                <Route exact path="/home/announcements" component={() => <Navbar navTitle="Announcements" />}></Route>
                                <Route exact path="/home/announcements/AddAnnonce" component={() => <Navbar navTitle="Announcements" />}></Route>               
                                <Route exact path="/home/add" component={() => <Navbar navTitle="Add" />}></Route>

                            </Switch>
                            <div className="dashboard-body">
                                <Switch>
                                    <Route path="/home/dashboard" component={() => <DashboardPage />}></Route>
                                    <Route exact path="/home/reservations" component={() => <ReservationsPage />}></Route>    
                                    <Route exact path="/home/announcements" component={() => <AnnoncesPage />}></Route>
                                    <Route exact path="/home/announcements/addannonce" component={() => <AddAnnonce />}></Route>
                                    <Route exact path="/home/add" component={() => <AddAnnonce />}></Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    } else {
        return (
            <Redirect to="/login" />
        )
    }


}

export default Dashboard;