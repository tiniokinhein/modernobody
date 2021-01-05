import React from 'react'
import { Helmet } from 'react-helmet'
import BG from '../assets/images/experience.jpg'
import { COLOR } from '../components/layout/Color'
import AOS from 'aos'
import Layout from '../components/layout/Layout'

const Experiences = () => {

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
                background: "#000 url("+ BG +") no-repeat left bottom / cover",
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
                    Experiences
                </h4>
            </div>
        </div>
    )

    const body = (
        <>
            <div 
                style={{
                    padding: '8rem 0',
                    background: '#080808'
                }}
            >
                <div className="container">
                    <h4 
                        className="text-light font-400 mb-0"
                        style={{
                            fontSize: '1.3rem'
                        }}
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        Current
                    </h4>

                    {/* <div className="prev-exp px-0 px-md-5 mt-5">
                        <div 
                            className="d-flex flex-column flex-md-row align-items-md-center"
                        >
                            <div className="col-12 col-md-6 text-start text-md-end px-0 px-md-3 mb-3 mb-md-0">
                                <h4 
                                    className="font-300 mb-0"
                                    style={{
                                        fontSize: '1.2rem',
                                        color: COLOR.T,
                                        lineHeight: '1.6'
                                    }}
                                >
                                    Warehouse Supervisor
                                </h4>
                            </div>
                            <div className="col-12 col-md-6 px-0 px-md-3">
                                <div className="">
                                    <p
                                        className="font-300"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6',
                                            color: COLOR.L
                                        }}
                                    >
                                        JT Jayatek Engineering Sdn.Bhd, <br />
                                        Malaysia
                                    </p>
                                    <p
                                        className="text-secondary font-500 mb-0"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        Jan 2005 — Dec 2008
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
            </div>

            <div 
                style={{
                    padding: '8rem 0'
                }}
            >
                <div className="container">
                    <h4 
                        className="text-light font-400 mb-5"
                        style={{
                            fontSize: '1.3rem'
                        }}
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        Previously
                    </h4>

                    <div className="prev-exp px-0 px-md-5">
                        <div 
                            className="d-flex flex-column flex-md-row align-items-md-center my-4 py-5 px-3 px-md-0"
                            style={{
                                background: '#080808'
                            }}
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div className="col-12 col-md-6 text-start text-md-end px-0 px-md-3 mb-3 mb-md-0">
                                <h4 
                                    className="font-300 mb-0"
                                    style={{
                                        fontSize: '1.2rem',
                                        color: COLOR.L,
                                        lineHeight: '1.6'
                                    }}
                                >
                                    Web | Mobile Application Developer
                                </h4>
                            </div>
                            <div className="col-12 col-md-6 px-0 px-md-3">
                                <div className="">
                                    <p
                                        className="text-light font-300"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        Bagan Business Group Co.Ltd, <br />
                                        Yangon, Myanmar
                                    </p>
                                    <p
                                        className="text-secondary font-500 mb-0"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        Aug 2016 — Nov 2020
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div 
                            className="d-flex flex-column flex-md-row align-items-md-center my-4 py-5 px-3 px-md-0"
                            style={{
                                background: '#080808'
                            }}
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div className="col-12 col-md-6 text-start text-md-end px-0 px-md-3 mb-3 mb-md-0">
                                <h4 
                                    className="font-300 mb-0"
                                    style={{
                                        fontSize: '1.2rem',
                                        color: COLOR.L,
                                        lineHeight: '1.6'
                                    }}
                                >
                                    Senior Drupal Developer
                                </h4>
                            </div>
                            <div className="col-12 col-md-6 px-0 px-md-3">
                                <div className="">
                                    <p
                                        className="text-light font-300"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        Pentas IT Co.Ltd, <br />
                                        Yangon, Myanmar
                                    </p>
                                    <p
                                        className="text-secondary font-500 mb-0"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        May 2016 — Jul 2016
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div 
                            className="d-flex flex-column flex-md-row align-items-md-center my-4 py-5 px-3 px-md-0"
                            style={{
                                background: '#080808'
                            }}
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div className="col-12 col-md-6 text-start text-md-end px-0 px-md-3 mb-3 mb-md-0">
                                <h4 
                                    className="font-300 mb-0"
                                    style={{
                                        fontSize: '1.2rem',
                                        color: COLOR.L,
                                        lineHeight: '1.6'
                                    }}
                                >
                                    Web Drupal Developer
                                </h4>
                            </div>
                            <div className="col-12 col-md-6 px-0 px-md-3">
                                <div className="">
                                    <p
                                        className="text-light font-300"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        World Trade Center Yangon Co.Ltd, <br />
                                        Yangon, Myanmar
                                    </p>
                                    <p
                                        className="text-secondary font-500 mb-0"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        Dec 2014 — Apr 2016
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div 
                            className="d-flex flex-column flex-md-row align-items-md-center my-4 py-5 px-3 px-md-0"
                            style={{
                                background: '#080808'
                            }}
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div className="col-12 col-md-6 text-start text-md-end px-0 px-md-3 mb-3 mb-md-0">
                                <h4 
                                    className="font-300 mb-0"
                                    style={{
                                        fontSize: '1.2rem',
                                        color: COLOR.L,
                                        lineHeight: '1.6'
                                    }}
                                >
                                    Textile Label Designer
                                </h4>
                            </div>
                            <div className="col-12 col-md-6 px-0 px-md-3">
                                <div className="">
                                    <p
                                        className="text-light font-300"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        Hwa Jong Label Mfg.Co.Ltd, <br />
                                        Vietnam
                                    </p>
                                    <p
                                        className="text-secondary font-500 mb-0"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        Jun 2010 — Jul 2013
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div 
                            className="d-flex flex-column flex-md-row align-items-md-center my-4 py-5 px-3 px-md-0"
                            style={{
                                background: '#080808'
                            }}
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div className="col-12 col-md-6 text-start text-md-end px-0 px-md-3 mb-3 mb-md-0">
                                <h4 
                                    className="font-300 mb-0"
                                    style={{
                                        fontSize: '1.2rem',
                                        color: COLOR.L,
                                        lineHeight: '1.6'
                                    }}
                                >
                                    C.N.C Punching Programming
                                </h4>
                            </div>
                            <div className="col-12 col-md-6 px-0 px-md-3">
                                <div className="">
                                    <p
                                        className="text-light font-300"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        JT Jayatek Engineering Sdn.Bhd, <br />
                                        Malaysia
                                    </p>
                                    <p
                                        className="text-secondary font-500 mb-0"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        Jan 2009 — Dec 2009
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div 
                            className="d-flex flex-column flex-md-row align-items-md-center mt-4 py-5 px-3 px-md-0"
                            style={{
                                background: '#080808'
                            }}
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div className="col-12 col-md-6 text-start text-md-end px-0 px-md-3 mb-3 mb-md-0">
                                <h4 
                                    className="font-300 mb-0"
                                    style={{
                                        fontSize: '1.2rem',
                                        color: COLOR.L,
                                        lineHeight: '1.6'
                                    }}
                                >
                                    Warehouse Supervisor
                                </h4>
                            </div>
                            <div className="col-12 col-md-6 px-0 px-md-3">
                                <div className="">
                                    <p
                                        className="text-light font-300"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        JT Jayatek Engineering Sdn.Bhd, <br />
                                        Malaysia
                                    </p>
                                    <p
                                        className="text-secondary font-500 mb-0"
                                        style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        Jan 2005 — Dec 2008
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        < >
            <Helmet>
                <title>Experiences</title>
                <meta name="description" content="If you want to discuss one of your projects with me, or maybe you have your own project, please feel free to write me back." />
                <meta property="og:description" content="If you want to discuss one of your projects with me, or maybe you have your own project, please feel free to write me back." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Experiences | Modern—Nobody" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={BG} />
                <meta property="fb:app_id" content="656282674538152" />
                <meta property="twitter:image:src" content={BG} />
                <meta property="twitter:title" content="Experiences | Modern—Nobody" />
                <meta property="twitter:description" content="If you want to discuss one of your projects with me, or maybe you have your own project, please feel free to write me back." />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <Layout>
                {topPage}
                {body}
            </Layout>
        </>
    )
}

export default Experiences
