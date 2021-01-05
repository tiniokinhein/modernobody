import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { COLOR } from '../layout/Color'
import AOS from 'aos'

const ContactComponent = () => {

    const [email,setEmail] = React.useState('')
    const [message,setMessage] = React.useState('')
    const [success, setSuccess] = React.useState(false)

    React.useEffect(() => {
        if(window.location.search.includes('success=true')) {
            setSuccess(true)
        }
        AOS.init()
    }, [])

    const formList = (
        <form
            autoComplete="off"
            name="portfolio-contact"
            method="POST"
            data-nelify="true"
            action="/?success=true"
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            <input type="hidden" name="form-name" value="portfolio-contact" />
            <div className="form-group mb-3">
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    className="form-control shadow-none rounded-0 text-secondary bg-transparent border-secondary px-3"
                    style={{
                        height: '44px',
                        fontSize: '0.85rem'
                    }}
                    required
                />
            </div>
            <div className="form-group mb-4">
                <textarea
                    rows="5"
                    name="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Your message"
                    className="form-control shadow-none rounded-0 text-secondary bg-transparent border-secondary px-3"
                    style={{
                        fontSize: '0.85rem'
                    }}
                    required
                />
                <span
                    className="d-inline-block my-2 text-secondary"
                    style={{
                        fontSize: '0.7rem'
                    }}
                >
                    I agree to <strong>Privacy Policy</strong> by clicking <span style={{color:COLOR.L}}>"Send"</span> button
                </span>
            </div>
            <div className="form-group">
                <button 
                    className="btn btn-dark text-secondary shadow-none rounded-0 border-0 px-5 py-2 text-uppercase font-200"
                    style={{
                        fontSize: '0.8rem',
                        height: '40px',
                        letterSpacing: '2px'
                    }}
                    type="submit"
                >
                    Send
                </button>
            </div>
        </form>
    )

    const successMessage = (
        <div 
            className="position-fixed"
            style={{
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 99,
                cursor: 'pointer',
                background: 'rgba(0,0,0,0.76)'
            }}
            onClick={() => {
                setEmail('')
                setMessage('')
                setSuccess(false)
            }}
        >
            <div className="d-table w-100 h-100">
                <div className="d-table-cell align-middle">
                    <div className="col-12 col-sm-8 col-md-4 px-0 mx-auto">
                        <div 
                            className="px-4 rounded position-relative"
                            style={{
                                background: COLOR.F,
                                paddingTop: '5rem',
                                paddingBottom: '5rem'
                            }}
                        >
                            <button
                                className="btn rounded-circle border-0 shadow-none p-0 position-absolute"
                                style={{
                                    right: '-20px',
                                    top: '-20px',
                                    background: COLOR.F,
                                    width: '36px',
                                    height: '36px'
                                }}
                            >
                                <IoMdClose size="1.5rem" color={'#ffffff'} />
                            </button>

                            <p 
                                className="mb-0 text-light text-center font-300"
                            >
                                Thank you for your message!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <p
                className="mb-5 text-light font-200"
                style={{
                    lineHeight: '1.8em',
                    fontSize: '1rem'
                }}
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                Thank you for checking out my portfolio. 
                If you want to discuss one of your projects with me, or maybe you have your own project, 
                please feel free to write me back.
            </p>
            {formList}
            {
                success &&
                successMessage
            }
        </>
    )
}

export default ContactComponent
