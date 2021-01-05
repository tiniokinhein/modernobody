import React from 'react'
import { Link } from 'react-router-dom'
import { COLOR } from './Color'

const Footer = () => {
    return (
        <div 
            className="pb-5 footer"
            style={{
                background: '#080808',
                paddingTop: '8rem'
            }}
        >
            <div className="container">
                <p 
                    className="mb-0 text-center font-200"
                    style={{
                        fontSize: '0.8rem'
                    }}
                >
                    <span className="text-uppercase" style={{color:COLOR.L}}>Designed by</span> <Link to="/" className="text-decoration-none text-light">Modern—Nobody</Link>
                </p>
            </div>
        </div>
    )
}

export default Footer
