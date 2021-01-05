import React from 'react'
import { Helmet } from 'react-helmet'
import ME from '../assets/images/me.png'
import AOS from 'aos'
import HomeAbout from '../components/about/HomeAbout'
import HomeProject from '../components/project/HomeProject'
import ContactComponent from '../components/contact/ContactComponent'
import Layout from '../components/layout/Layout'

const Home = () => {

    React.useEffect(() => {
        window.scrollTo(0,0)
        AOS.init()
    }, [])
    
    return (
        <>
            <Helmet>
                <meta name="description" content="I am Tin Ko Hein, Front-End Developer, Web Application Developer and Mobile Application Developer from Yangon, Myanmar." />
                <meta name="keywords" content="mn , modernobody, modern nobody, tin ko hein, tin ko oo" />
                <meta property="og:description" content="I am Tin Ko Hein, Front-End Developer, Web Application Developer and Mobile Application Developer from Yangon, Myanmar." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Modern—Nobody" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={ME} />
                <meta property="fb:app_id" content="656282674538152" />
                <meta property="twitter:image:src" content={ME} />
                <meta property="twitter:title" content="Modern—Nobody" />
                <meta property="twitter:description" content="I am Tin Ko Hein, Front-End Developer, Web Application Developer and Mobile Application Developer from Yangon, Myanmar." />
                <link rel="canonical" href={window.location.href} />
            </Helmet>

            <Layout>
                <HomeAbout />
                <HomeProject />

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

export default Home
