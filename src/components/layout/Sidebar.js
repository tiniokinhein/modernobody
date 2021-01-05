import React from 'react'
import { NavLink } from 'react-router-dom'
import { COLOR } from './Color'
import { IoMdClose } from 'react-icons/io'

const Sidebar = () => {

    const closeSidebar = () => {
        document.getElementById('sidebar-toggle').classList.remove('opened-sidebar')
        document.getElementById('sidebar-toggle').style.visibility = 'hidden'
        document.getElementById('sidebar-toggle').style.opacity = '0'
    }

    return (
        <div 
            id="sidebar-toggle"
            className="position-fixed"
            style={{
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 9,
                visibility: 'hidden',
                opacity: 0,
                transition: '0.3s ease'
            }}
        >
            <div 
                className="px-4 py-5 h-100 sidebar-toggled"
                style={{
                    background: COLOR.F
                }}
            >
                <button 
                    onClick={closeSidebar}
                    className="btn btn-closed rounded-0 border-0 shadow-none p-0 text-light position-absolute"
                    style={{
                        left: '15px',
                        top: '15px',
                        zIndex: 999
                    }}
                >
                    <IoMdClose size="2.2rem" />
                </button>

                <div className="d-table w-100 h-100">
                    <div className="d-table-cell align-middle">
                        <ul className="list-unstyled m-0 text-center" onClick={closeSidebar}>   
                            <li>
                                <NavLink
                                    to="/"
                                    className="text-decoration-none py-2 font-200 text-light text-uppercase d-inline-block"
                                    activeClassName=""
                                    style={{
                                        fontSize: '1.2rem',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Me
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="text-decoration-none py-2 font-200 text-light text-uppercase d-inline-block"
                                    activeClassName="activeMenu"
                                    style={{
                                        fontSize: '1.2rem',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/experiences"
                                    className="text-decoration-none py-2 font-200 text-light text-uppercase d-inline-block"
                                    activeClassName="activeMenu"
                                    style={{
                                        fontSize: '1.2rem',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Experiences
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/skills"
                                    className="text-decoration-none py-2 font-200 text-light text-uppercase d-inline-block"
                                    activeClassName="activeMenu"
                                    style={{
                                        fontSize: '1.2rem',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Skills
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects"
                                    className="text-decoration-none py-2 font-200 text-light text-uppercase d-inline-block"
                                    activeClassName="activeMenu"
                                    style={{
                                        fontSize: '1.2rem',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="text-decoration-none py-2 font-200 text-light text-uppercase d-inline-block"
                                    activeClassName="activeMenu"
                                    style={{
                                        fontSize: '1.2rem',
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
        </div>
    )
}

export default Sidebar
