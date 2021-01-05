import React from 'react'
import ME from '../../assets/images/me.png'
import { COLOR } from '../layout/Color'
import { TiSocialFacebookCircular, TiSocialGithubCircular, TiSocialLinkedinCircular } from 'react-icons/ti'
import ReactTypingEffect from 'react-typing-effect'
import AOS from 'aos'

const HomeAbout = () => {

    React.useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div
            className="w-100"
            style={{
                height: '100vh',
                minHeight: '600px',
                maxHeight: '1200px',
                background: COLOR.S
            }}
        >
            <div className="container position-relative h-100">
                <div 
                    className="position-absolute social-bar"
                    style={{
                        zIndex: 5
                    }}
                >
                    <div className="position-relative line-me social-icons d-table w-100 h-100">
                        <div className="d-table-cell align-bottom">
                            <ul 
                                className="list-unstyled mx-0 mb-0 mb-md-5 py-0 py-md-3 text-center text-md-start"
                                style={{
                                    background: COLOR.S
                                }}
                            >
                                <li className="m-2 d-inline-block d-md-block" data-aos="flip-right"
                            data-aos-duration="1500">
                                    <a 
                                        href="https://www.linkedin.com/in/tin-ko-hein-dev" 
                                        rel="noreferrer" 
                                        className="text-decoration-none"
                                        target="_blank"
                                    >
                                        <TiSocialLinkedinCircular size="2rem" color={'#21567e'} />
                                    </a>
                                </li>
                                <li className="m-2 d-inline-block d-md-block" data-aos="flip-right"
                            data-aos-duration="1500">
                                    <a 
                                        href="https://github.com/tiniokinhein" 
                                        rel="noreferrer" 
                                        className="text-decoration-none"
                                        target="_blank"
                                    >
                                        <TiSocialGithubCircular size="2rem" color={'#ffffff'} />
                                    </a>
                                </li>
                                <li className="m-2 d-inline-block d-md-block" data-aos="flip-right"
                            data-aos-duration="1500">
                                    <a 
                                        href="https://www.facebook.com/tiniokin.hein" 
                                        rel="noreferrer" 
                                        className="text-decoration-none"
                                        target="_blank"
                                    >
                                        <TiSocialFacebookCircular size="2rem" color={COLOR.L} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="">
                    <img 
                        src={ME}
                        alt=""
                        className="w-100"
                        style={{
                            height: '500px',
                            objectFit: 'cover',
                            paddingTop: '6rem',
                            marginBottom: '-8rem'
                        }}
                    />

                    <div className="col-12 col-md-6 px-0 mx-auto text-center">
                        <h4 
                            className="text-light mb-4 display-6 font-weight-bold"
                            style={{
                                fontFamily: "Tharlon, sans-serif"
                            }}
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                        >
                            မင်္ဂလာပါ
                        </h4>
                        <p 
                            className="m-0 font-200 text-secondary font-300"
                            style={{
                                lineHeight: '1.7'
                            }}
                        >
                            I am Tin Ko Hein,
                        </p>
                        <ReactTypingEffect
                            text={["Front-End Developer,", "Web Application Developer,", "Mobile Application Developer,"]}
                            typingDelay="100"
                            eraseDelay="500"
                            eraseSpeed="100"
                            speed="100"
                            className="font-500"
                            style={{
                                color: COLOR.L,
                                lineHeight: '1.7'
                            }}
                        />
                        <p 
                            className="m-0 font-200 text-secondary font-300"
                            style={{
                                lineHeight: '1.7'
                            }}
                        >
                            from Yangon, Myanmar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
