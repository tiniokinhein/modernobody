import React from 'react'
import { Helmet } from 'react-helmet'
import { COLOR } from '../components/layout/Color'
import Layout from '../components/layout/Layout'

const Default = () => {
    return (
        <Layout>
            <Helmet>
                <title>404</title>
            </Helmet>
            <div 
                style={{
                    height: '100vh',
                    minHeight: '600px',
                    background: COLOR.S
                }}
            >
                <div className="container h-100">
                    <div className="d-table w-100 h-100">
                        <div className="d-table-cell align-middle">
                            <h1 
                                className="font-800 text-center text-light"
                                style={{
                                    fontSize: '5rem'
                                }}
                            >
                                404
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Default
