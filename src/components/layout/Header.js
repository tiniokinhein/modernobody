import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LOGO from '../../assets/images/logo.png'
import { RiMenu4Line } from 'react-icons/ri'

const Header = () => {

    const openSidebar = () => {
        document.getElementById('sidebar-toggle').classList.add('opened-sidebar')
        document.getElementById('sidebar-toggle').style.visibility = 'visible'
        document.getElementById('sidebar-toggle').style.opacity = '1'
    }

    return (
        <div
            className="header py-3"
            style={{
                background: 'transparent'
            }}
        >
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/" className="text-decoration-none">
                        <img 
                            src={LOGO}
                            alt="Modern Nobody"
                            width="40"
                        />
                    </Link>

                    <button 
                        className="btn border-0 rounded-0 shadow-none p-0 d-md-none"
                        onClick={openSidebar}
                    >
                        <RiMenu4Line size="1.6rem" color={'#fff'} />
                    </button>

                    <ul className="list-unstyled m-0 d-none d-md-block">
                        <li className="d-inline-block">
                            <NavLink
                                to="/"
                                className="text-decoration-none px-3 font-200 text-light text-uppercase"
                                activeClassName=""
                                style={{
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                Me
                            </NavLink>
                        </li>
                        <li className="d-inline-block">
                            <NavLink
                                to="/about"
                                className="text-decoration-none px-3 font-200 text-light text-uppercase"
                                activeClassName="activeMenu"
                                style={{
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="d-inline-block">
                            <NavLink
                                to="/experiences"
                                className="text-decoration-none px-3 font-200 text-light text-uppercase"
                                activeClassName="activeMenu"
                                style={{
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                Experiences
                            </NavLink>
                        </li>
                        <li className="d-inline-block">
                            <NavLink
                                to="/skills"
                                className="text-decoration-none px-3 font-200 text-light text-uppercase"
                                activeClassName="activeMenu"
                                style={{
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li className="d-inline-block">
                            <NavLink
                                to="/projects"
                                className="text-decoration-none px-3 font-200 text-light text-uppercase"
                                activeClassName="activeMenu"
                                style={{
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="d-inline-block">
                            <NavLink
                                to="/contact"
                                className="text-decoration-none ps-3 font-200 text-light text-uppercase"
                                activeClassName="activeMenu"
                                style={{
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
