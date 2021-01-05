import React from 'react'
import { Helmet } from 'react-helmet'
import BG from '../assets/images/bg-project.jpg'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import BS from '../assets/images/bs.png'
import BZ from '../assets/images/bz.png'
import TP from '../assets/images/tp.png'
import NL from '../assets/images/nl.png'
import FTP from '../assets/images/ftp.png' 
import JM from '../assets/images/jm.jpg' 
import BBG from '../assets/images/bbg.jpg'
import AC from '../assets/images/ac.jpg'
import JIT from '../assets/images/jit.jpg'
import SSDSW from '../assets/images/ssdsw.jpg'
import DSW from '../assets/images/dsw.jpg'
import AOS from 'aos'
import Layout from '../components/layout/Layout'


const data = [
    {
        "title": "Frontier Technology Partners",
        "image": FTP,
        "color": "#efefef",
        "height": "280px",
        "link": "http://frontiertechnologypartners.com"
    },
    {
        "title": "Jana Mon",
        "image": JM,
        "color": "#fff",
        "height": "200px",
        "link": "https://janamon.co"
    },
    {
        "title": "Austcham Myanmar",
        "image": AC,
        "color": "#efefef",
        "height": "240px",
        "link": "https://austchammyanmar.com"
    },
    {
        "title": "JIT Myanmar",
        "image": JIT,
        "color": "#efefef",
        "height": "300px",
        "link": "https://jitmyanmar.com"
    },
    {
        "title": "SSDSW",
        "image": SSDSW,
        "color": "#efefef",
        "height": "280px",
        "link": "https://www.ssdsw.gov.mm"
    },
    {
        "title": "DSW",
        "image": DSW,
        "color": "#efefef",
        "height": "240px",
        "link": "https://www.dsw.gov.mm"
    },
    {
        "title": "Bagan Business Group",
        "image": BBG,
        "color": "#fff",
        "height": "240px",
        "link": "https://bbg.com.mm"
    }
]

const dev = [
    {
        "title": "TaPaat",
        "image": TP,
        "link": "https://tapaat.netlify.app"
    },
    {
        "title": "Bagan Store",
        "image": BS,
        "link": "https://baganstore.netlify.app"
    },
    {
        "title": "Bagan Zay",
        "image": BZ,
        "link": "https://zayweb.netlify.app"
    }
]

const mobile = [
    {
        "title": "News Live",
        "image": NL,
        "link": "https://tapaat.netlify.app"
    },
    {
        "title": "TaPaat",
        "image": TP,
        "link": "https://tapaat.netlify.app"
    },
    {
        "title": "Bagan Store",
        "image": BS,
        "link": "https://baganstore.netlify.app"
    },
    {
        "title": "Bagan Zay",
        "image": BZ,
        "link": "https://zayweb.netlify.app"
    }
]

const Projects = () => {

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
                background: "#000 url("+ BG +") no-repeat center / cover",
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
                    Projects
                </h4>
            </div>
        </div>
    )

    const production = (
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
                    Production
                </h4>

                <ResponsiveMasonry
                    columnsCountBreakPoints={{
                        290: 1, 
                        320: 2, 
                        576: 3,
                        900: 4
                    }}
                >
                    <Masonry gutter="10px" >
                        {
                            data.map((p,index) => (
                                <a 
                                    key={index}
                                    href={p.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img                                         
                                        src={p.image}
                                        alt=""
                                        height={p.height}
                                        className="w-100 d-block"
                                        style={{
                                            objectFit: 'contain',
                                            background: p.color
                                        }}
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                    />
                                </a>
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    )

    const development = (
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
                    Development
                </h4>

                <div className="row">
                    <div className="col-12 col-md-8 mb-5 mb-md-0">
                        <div className="px-1">
                            <div className="row mx-n2">
                                {
                                    dev.map((p,index) => (
                                        <div
                                            key={index}
                                            className="col-6 col-md-3 mb-3 px-2"
                                            data-aos="zoom-in-up"
                                            data-aos-duration="1000"
                                        >
                                            <a 
                                                href={p.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-decoration-none"
                                            >
                                                <img 
                                                    src={p.image}
                                                    alt=""
                                                    className="w-100 h-100 p-3 rounded"
                                                    style={{
                                                        objectFit: 'contain',
                                                        background: '#080808'
                                                    }}
                                                />
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <h4 
                            className="text-light font-400 mb-4"
                            style={{
                                fontSize: '1rem'
                            }}
                            data-aos="fade-right"
                            data-aos-duration="1500"
                        >
                            Mobile
                        </h4>
                        
                        <div className="px-2">
                            <div className="row mx-n1">
                                {
                                    mobile.map((p,index) => (
                                        <div
                                            key={index}
                                            className="col-6 col-sm-4 col-md-3 mb-2 px-1"
                                            data-aos="zoom-in"
                                            data-aos-duration="1500"
                                        >
                                            <img 
                                                src={p.image}
                                                alt=""
                                                className="w-100 h-100 p-2 rounded"
                                                style={{
                                                    objectFit: 'contain',
                                                    background: '#080808'
                                                }}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <Helmet>
                <title>Projects</title>
                <meta name="description" content="There are many projects developed by Tin Ko Hein." />
                <meta property="og:description" content="There are many projects developed by Tin Ko Hein." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Projects | Modern—Nobody" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={BG} />
                <meta property="fb:app_id" content="656282674538152" />
                <meta property="twitter:image:src" content={BG} />
                <meta property="twitter:title" content="Projects | Modern—Nobody" />
                <meta property="twitter:description" content="There are many projects developed by Tin Ko Hein." />
                <link rel="canonical" href={window.location.href} />
            </Helmet>
            <Layout>
                {topPage}
                {production}
                {development}
            </Layout>
        </>
    )
}

export default Projects
