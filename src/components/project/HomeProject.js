import React from 'react'
import { COLOR } from '../layout/Color'
import BS from '../../assets/images/bs.png'
import FTP from '../../assets/images/ftp.png' 
import JM from '../../assets/images/jm.jpg' 
import BBG from '../../assets/images/bbg.jpg'
import MYNET from '../../assets/images/myneth.png'
import { Link } from 'react-router-dom'
import AOS from 'aos'


const data = [
    {
        "title": "Mynet Solutions",
        "image": MYNET,
        "link": "https://mynetsolutions.net"
    },
    {
        "title": "Bagan Store",
        "image": BS,
        "link": "https://baganstore.netlify.app"
    },
    {
        "title": "Frontier Technology Partners",
        "image": FTP,
        "link": "http://frontiertechnologypartners.com"
    },
    {
        "title": "Jana Mon",
        "image": JM,
        "link": "https://janamon.co"
    },
    {
        "title": "Bagan Business Group",
        "image": BBG,
        "link": "https://bbg.com.mm"
    },
]

const HomeProject = () => {

    React.useEffect(() => {
        AOS.init()
    }, [])

    return (
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
                    Projects
                </h4>

                <div className="px-md-5">
                    {
                        data.map((p,index) => (
                            <div
                                key={index}
                                className="hover-imgs mb-4 mb-md-0"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                <div className="row">
                                    <div className="col-12 col-md-5 mb-4 mb-md-0">
                                        <img 
                                            src={p.image}
                                            alt={p.title}
                                            className="w-100"
                                            style={{
                                                height: '200px',
                                                objectFit: 'contain',
                                                background: '#fff',
                                                transition: '0.3s ease'
                                            }}
                                        />
                                    </div>
                                    <div className="col-12 col-md-7">
                                        <div className="border-bottom border-dark row mx-0 h-100 align-items-center pb-4 pb-md-0">
                                            <div className="col-12 col-md-8 px-0 mb-3 mb-md-0">
                                                <h4 
                                                    className="mb-0 font-400 text-uppercase"
                                                    style={{
                                                        fontSize: '1.2rem',
                                                        color: COLOR.T
                                                    }}
                                                >
                                                    {p.title}
                                                </h4>
                                            </div>
                                            <div className="col-12 col-md-4 text-start text-md-end px-0">
                                                <a 
                                                    href={p.link}
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-decoration-none bg-dark text-secondary font-300 d-inline-block px-5 py-2"
                                                    style={{
                                                        color: COLOR.L,
                                                        fontSize: '0.8rem'
                                                    }}
                                                >
                                                    Visit
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }   
                    <div 
                        className="text-start text-md-end mt-5"
                        data-aos="zoom-in-right"
                        data-aos-duration="1500"
                    >
                        <Link 
                            to="/projects" 
                            className="text-decoration-none font-100"
                            style={{
                                color: COLOR.L,
                                fontSize: '1rem'
                            }}
                        >
                            See all
                        </Link>
                    </div>                 
                </div>
            </div>
        </div>
    )
}

export default HomeProject
