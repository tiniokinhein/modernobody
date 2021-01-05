import React from 'react'
import { Helmet } from 'react-helmet'
import BG from '../assets/images/bg-me.jpg'
import ME from '../assets/images/me-profile.jpg'
import { COLOR } from '../components/layout/Color'
import ReactTypingEffect from 'react-typing-effect'
import { FaBootstrap, FaDrupal, FaHtml5, FaPhp, FaPython, FaReact, FaSass, FaWordpress } from 'react-icons/fa'
import { IoLogoCss3, IoLogoIonic, IoLogoNodejs } from 'react-icons/io'
import { SiDjango, SiFirebase, SiMongodb, SiMysql, SiRedux } from 'react-icons/si'
import { VscJson } from 'react-icons/vsc'
import AOS from 'aos'
import Layout from '../components/layout/Layout'
import ContactComponent from '../components/contact/ContactComponent'

const About = () => {

    React.useEffect(() => {
        window.scrollTo(0,0)
        AOS.init()
    }, [])

    const topPage = (
        <div 
            className="position-relative bg-effect"
            style={{
                height: '100vh',
                minHeight: '600px',
                background: "#000 url("+ BG +") no-repeat center bottom / cover",
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
                    About Me
                </h4>
            </div>
        </div>
    )

    const body = (
        <>
            <div 
                style={{
                    padding: '8rem 0'
                }}
            >
                <div className="container">
                    <h2 
                        className="font-200 text-center"
                        style={{
                            fontSize: '1.5rem',
                            lineHeight: '1.5',
                            color: COLOR.L,
                            marginBottom: '8rem'
                        }}
                        data-aos="flip-right"
                        data-aos-duration="1500"
                    >
                        Eager to learn, love Coding & Designing
                    </h2>

                    <div 
                        className="row"
                    >
                        <div className="col-12 col-md-6" />
                        <div className="col-12 col-md-6">
                            <h4 
                                className="text-light font-100 mb-0 text-uppercase"
                                style={{
                                    fontSize: '3rem',
                                    letterSpacing: '-5px'
                                }}
                                data-aos="flip-right"
                                data-aos-duration="1500"
                            >
                                Quote
                            </h4>
                            <p
                                className="text-secondary font-400 mt-5 mb-4"
                                style={{
                                    fontSize: '0.9rem'
                                }}
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                Although there is sunset in everyevening, we all can't see and watch it in everyevening.
                            </p>
                            <h4 
                                className="text-light font-400 mb-0"
                                style={{
                                    fontSize: '1rem'
                                }}
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                Modern Nobody
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    padding: '0 0 8rem'
                }}
            >
                <div className="container">
                    <div 
                        className="row"
                    >
                        <div 
                            className="col-12 col-md-6 text-start text-md-end"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                        >
                            <img 
                                src={ME}
                                alt=""
                                className="sticky-top"
                                style={{
                                    height: '200px',
                                    width: '100px',
                                    objectFit: 'cover',
                                    top: '60px',
                                    zIndex: 2
                                }}
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <h4
                                className="mb-0 font-400 text-light"
                                style={{
                                    fontSize: '1.2rem'
                                }}
                                data-aos="zoom-in"
                                data-aos-duration="1500"
                            >Tin Ko Hein</h4>
                            <ReactTypingEffect
                                text={["Front-End Developer", "Web Application Developer", "Mobile Application Developer"]}
                                typingDelay="100"
                                eraseDelay="500"
                                eraseSpeed="100"
                                speed="100"
                                className="font-400"
                                style={{
                                    fontSize: '0.95rem',
                                    color: COLOR.T
                                }}
                            />

                            <div 
                                className="mt-5"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                <p
                                    className="text-secondary"
                                    style={{
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    I am a Front-End Developer, Web Application Developer and Mobile Application Developer
                                    from Yangon, Myanmar.
                                </p>

                                <p
                                    className="text-secondary"
                                    style={{
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    I have diploma in Information Technology, studied at Government Technical College (GTC - Mawlamyine)
                                    from 2000 to 2002.
                                </p>

                                <p
                                    className="text-secondary"
                                    style={{
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    I have certificates Web Development and Web Development with PHP & Drupal CMS in Efficient Soft,
                                    Yangon from June 2014 to November 2014. In order to become better, I spend much time in practice
                                    and coding.
                                </p>

                                <p
                                    className="text-secondary"
                                    style={{
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    My hobbies are listening to music, swimming, walking, watching movies, editing videos,
                                    playing table-tennis & video games with friends.
                                </p>

                                <p
                                    className="mb-0 text-secondary"
                                    style={{
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Thank you for checking out my portfolio. 
                                    If you want to discuss one of your projects with me, or maybe you have your own project, 
                                    please feel free to write me back.
                                </p>
                            </div>

                            <div className="mt-4">
                                <p
                                    className="font-400 text-light mb-2"
                                    style={{
                                        fontSize: '0.9rem'
                                    }}
                                >Develop with —</p>
                                <span className="d-inline-block my-1 me-2">
                                    <FaReact size="2rem" color={COLOR.T} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <IoLogoIonic size="2rem" color={'#6c757d'} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <IoLogoNodejs size="2rem" color={COLOR.L} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <SiRedux size="2rem" color={COLOR.T} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <SiMysql size="2rem" color={'#6c757d'} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <SiMongodb size="2rem" color={COLOR.T} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <SiFirebase size="2rem" color={COLOR.L} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <VscJson size="2rem" color={'#6c757d'} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <FaPhp size="2rem" color={COLOR.T} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <FaPython size="2rem" color={COLOR.L} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <SiDjango size="2rem" color={COLOR.T} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <FaHtml5 size="2rem" color={COLOR.L} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <IoLogoCss3 size="2rem" color={'#ffffff'} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <FaSass size="2rem" color={COLOR.L} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <FaBootstrap size="2rem" color={'#6c757d'} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <FaDrupal size="2rem" color={COLOR.T} />
                                </span>
                                <span className="d-inline-block my-1 me-2">
                                    <FaWordpress size="2rem" color={'#ffffff'} />
                                </span>
                            </div>
                                    
                            <div 
                                style={{
                                    paddingTop: '10rem'
                                }}
                            >
                                <h4 
                                    className="text-light font-400 mb-4"
                                    style={{
                                        fontSize: '1.3rem'
                                    }}
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                >Let's talk?</h4>
                                <ContactComponent />
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
                <title>About me</title>
                <meta name="description" content="I am Tin Ko Hein, Front-End Developer, Web Application Developer and Mobile Application Developer from Yangon, Myanmar." />
                <meta property="og:description" content="I am Tin Ko Hein, Front-End Developer, Web Application Developer and Mobile Application Developer from Yangon, Myanmar." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About me | Modern—Nobody" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={BG} />
                <meta property="fb:app_id" content="656282674538152" />
                <meta property="twitter:image:src" content={BG} />
                <meta property="twitter:title" content="About me | Modern—Nobody" />
                <meta property="twitter:description" content="I am Tin Ko Hein, Front-End Developer, Web Application Developer and Mobile Application Developer from Yangon, Myanmar." />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <Layout>
                {topPage}
                {body}
            </Layout>
        </>
    )
}

export default About
