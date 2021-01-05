import React from 'react'
import { Helmet } from 'react-helmet'
import BG from '../assets/images/skill.jpg'
import { COLOR } from '../components/layout/Color'
import { FaBootstrap, FaDrupal, FaGithub, FaHtml5, FaPhp, FaPython, FaReact, FaSass, FaWordpress } from 'react-icons/fa'
import { IoLogoCss3, IoLogoIonic, IoLogoNodejs } from 'react-icons/io'
import { SiDjango, SiFirebase, SiMongodb, SiMysql, SiRedux } from 'react-icons/si'
import { VscJson } from 'react-icons/vsc'
import AOS from 'aos'
import Layout from '../components/layout/Layout'


const Skills = () => {

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
                background: "#000 url("+ BG +") no-repeat right center / cover",
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
                    Skills
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
                        className="text-light font-400 mb-5"
                        style={{
                            fontSize: '1.3rem'
                        }}
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        Front-End
                    </h4>   

                    <div className="prev-exp px-0 px-md-5">
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <FaReact size="3rem" color={COLOR.T} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    React JS
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <FaHtml5 size="3rem" color={COLOR.L} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    HTML , HTML5
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <IoLogoCss3 size="3rem" color={COLOR.T} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    CSS , CSS3
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <FaSass size="3rem" color={COLOR.L} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    SASS
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <FaBootstrap size="3rem" color={'#ffffff'} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    Bootstrap
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center pt-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <SiRedux size="3rem" color={COLOR.T} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    Redux
                                </p>
                            </div>
                        </div>
                    </div>                 
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
                        Back-End
                    </h4>   

                    <div className="prev-exp px-0 px-md-5">
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <IoLogoNodejs size="3rem" color={COLOR.L} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    Node JS
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <FaPhp size="3rem" color={'#6c757d'} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    PHP
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <FaPython size="3rem" color={COLOR.L} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    Python
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center pt-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <SiDjango size="3rem" color={COLOR.T} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    Django
                                </p>
                            </div>
                        </div>
                    </div>                 
                </div>
            </div>

            <div 
                style={{
                    padding: '8rem 0',
                    background: '#080808'
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
                        Database | Serverless
                    </h4>   

                    <div className="prev-exp px-0 px-md-5">
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <SiMysql size="3rem" color={'#6c757d'} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    MySQL
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <SiMongodb size="3rem" color={COLOR.T} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    Mongo DB
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center pt-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <SiFirebase size="3rem" color={COLOR.L} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    Firebase
                                </p>
                            </div>
                        </div>
                    </div>                 
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
                        Cross Platform Application
                    </h4>   

                    <div className="prev-exp px-0 px-md-5">
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <IoLogoIonic size="3rem" color={'#6c757d'} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    Ionic Framework
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center pt-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <FaReact size="3rem" color={COLOR.T} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    React Native
                                </p>
                            </div>
                        </div>
                    </div>                 
                </div>
            </div>

            <div 
                style={{
                    padding: '8rem 0',
                    background: '#080808'
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
                        CMS
                    </h4>   

                    <div className="prev-exp px-0 px-md-5">
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <FaDrupal size="3rem" color={COLOR.T} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    Drupal
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center pt-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <FaWordpress size="3rem" color={'#ffffff'} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    Wordpress
                                </p>
                            </div>
                        </div>
                    </div>                 
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
                        Others
                    </h4>   

                    <div className="prev-exp px-0 px-md-5">
                        <div 
                            className="d-flex align-items-center py-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <VscJson size="3rem" color={COLOR.T} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    JSON
                                </p>
                            </div>
                        </div>
                        <div 
                            className="d-flex align-items-center pt-3"
                        >
                            <div 
                                className="col-6 text-end px-3"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <FaGithub size="3rem" color={'#6c757d'} />
                            </div>
                            <div className="col-6 px-3">
                                <p
                                    className="text-secondary font-300 mb-0"
                                    style={{
                                        fontSize: '1rem',
                                        lineHeight: '1.6'
                                    }}
                                    data-aos="flip-right"
                                    data-aos-duration="1500"
                                >
                                    Github
                                </p>
                            </div>
                        </div>
                    </div>                 
                </div>
            </div>

        </>
    )

    return (
        <>
            <Helmet>
                <title>Skills</title>
                <meta name="description" content=" In order to become better, I spend much time in practice and coding." />
                <meta property="og:description" content=" In order to become better, I spend much time in practice and coding." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Skills | Modern—Nobody" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={BG} />
                <meta property="fb:app_id" content="656282674538152" />
                <meta property="twitter:image:src" content={BG} />
                <meta property="twitter:title" content="Skills | Modern—Nobody" />
                <meta property="twitter:description" content=" In order to become better, I spend much time in practice and coding." />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <Layout>
                {topPage}
                {body}
            </Layout>
        </>
    )
}

export default Skills
