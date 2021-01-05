import React from 'react'
import BG from '../assets/images/contact.jpg'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import Layout from '../components/layout/Layout'
import ContactComponent from '../components/contact/ContactComponent'

const Contact = () => {

    React.useEffect(() => {
        window.scrollTo(0,0)
        AOS.init()
    }, [])

    const topPage = (
        <div 
            className="position-relative"
            style={{
                height: '100vh',
                minHeight: '600px',
                background: "#000 url("+ BG +") no-repeat left center / cover"
            }}
        >
            <div className="container position-relative h-100">
                <h4 
                    className="position-absolute text-light font-100 text-uppercase pageHeader"
                    style={{
                        fontSize: '4rem',
                        lineHeight: '1.5',
                        right: '15px',
                        bottom: '50%',
                        zIndex: 5,
                        marginBottom: '-48px' 
                    }}
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    Contact
                </h4>
            </div>
        </div>
    )

    return (
        <>
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="If you want to discuss one of your projects with me, or maybe you have your own project, please feel free to write me back." />
                <meta property="og:description" content="If you want to discuss one of your projects with me, or maybe you have your own project, please feel free to write me back." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contact | Modern—Nobody" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={BG} />
                <meta property="fb:app_id" content="656282674538152" />
                <meta property="twitter:image:src" content={BG} />
                <meta property="twitter:title" content="About me | Modern—Nobody" />
                <meta property="twitter:description" content="If you want to discuss one of your projects with me, or maybe you have your own project, please feel free to write me back." />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <Layout>
                {topPage}
                
                <div 
                    className=""
                    style={{
                        padding: '8rem 0'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 mb-4 mb-md-0">
                                <h4 
                                    className="text-light font-400 m-0"
                                    style={{
                                        fontSize: '1.3rem'
                                    }}
                                    data-aos="fade-right" 
                                    data-aos-duration="1500"
                                >Let's talk?</h4>
                            </div>
                            <div className="col-12 col-md-6">
                                <ContactComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Contact
