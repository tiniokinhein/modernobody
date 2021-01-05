import React from 'react'
import Headroom from 'react-headroom'
import Footer from './Footer'
import Header from './Header'

const Layout = (props) => {
    return (
        <>
            <Headroom className="top-headroom">
                <Header />
            </Headroom>

            {props.children}
            
            <Footer />
        </>
    )
}

export default Layout
