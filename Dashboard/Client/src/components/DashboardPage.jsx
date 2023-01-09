import React from 'react'
import '../styles/DashboardPage.css'
import Graph1 from './Graph1'
import Graph2 from './Graph2'
import Afficherusers from './AfficherUsers'
import { MdAppRegistration } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function DashboardPage() {
    return (
        <section className="dashboard">
            <div className="cards">
                <div className="card">
                    <div className="card-info">
                        <div className="number">
                            12
                        </div>
                        <div className="title">
                            Reservations
                        </div>
                    </div>
                    <FactCheckIcon />
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="number">
                            351
                        </div>
                        <div className="title">
                            Announcements
                        </div>
                    </div>
                    <FormatListBulletedIcon />
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="number">
                            23
                        </div>
                        <div className="title">
                            Checked reservations
                        </div>
                    </div>
                    <CheckBoxIcon />
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="number">
                            $682.25
                        </div>
                        <div className="title">
                            Incomes
                        </div>
                    </div>
                    <MdAttachMoney />
                </div>
            </div>
            <div className="graph-container">
                <div className="graph1">
                    <div className="graph-info">
                        <div className="divider"></div>
                        <div className="title">
                            Announcement
                        </div>
                        <div className="text">
                            Here is your announcement of all time.
                        </div>
                    </div>
                    <Graph1 />
                </div>
                <div className="graph2">
                    <div className="graph-info">
                        <div className="divider"></div>
                        <div className="title">
                            Reservations
                        </div>
                        <div className="text">
                            Her is your checked reservations.
                        </div>
                    </div>
                    <Graph2 />
                </div>
            </div>
            <div className="table-container">
                <div className="table-info">
                    <div className="divider"></div>
                    <div className="title">
                        Admins
                    </div>
                    <div className="text">
                        Admin's informations.
                    </div>
                </div>
                <Afficherusers/>
            </div>
        </section>
    )
}

export default DashboardPage
