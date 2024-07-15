'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';


export default function About3() {

    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile === null) {
        return null;  // Or render a loading spinner or placeholder component here
    }
    
    return (
        <>
            <section className="about__area-three about__bg-two">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="about__img-wrap-three">
                                {isMobile ? <div /> : <img src="/assets/img/images/about_3.png" className='w-full' alt="" />
                                }
                                {/* <img src="/assets/img/images/h3_about_img02.jpg" alt="" data-parallax="{&quot;x&quot; : 50 }" /> */}
                                <div className="shape">
                                    <img src="/assets/img/images/h3_about_img_shape.png" alt="" className="alltuchtopdown" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about__content-three">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <span className="sub-title">About Our Company</span>
                                    <h2 className="title tg-element-title">Digital Transformation for Global Impact</h2>
                                </div>
                                <p className='text-lb mt-2'>We are leveraging advanced digital technologies such as artificial intelligence to expand our global presence and enhance our market impact. By integrating these innovative tools, we aim to optimize operations and drive growth, strengthening our competitive edge.</p>
                                <div className="about__content-inner about__content-inner-two">
                                    <div className="experience__box-three ">
                                        <div className="title px-3 py-3">
                                            <span>14+</span>
                                        </div>
                                        <p className='ml-5'>Years of<span>Experience</span></p>
                                    </div>
                                    <div className="about__list-box about__list-box-two">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-arrow-button" />Operational Efficiency</li>
                                            <li><i className="flaticon-arrow-button" />Strategic Innovation</li>
                                            <li><i className="flaticon-arrow-button" />Proven Reliability</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={`about-bottom sm:text-lg about-bottom-two `}>
                                    <div className="author-wrap">
                                        <h4 className='title text-lb'>Mission</h4>
                                        <p className='text-lb'>
                                        We are dedicated to agility, customer focus, and innovation. Our aim is to drive value and growth by partnering strategically in our clients' transformative journeys.                                        </p>

                                    </div>
                                    <div className="about__phone">
                                        <h4 className='title text-lb'>Vision</h4>
                                        <p className='text-lb'>
                                        We aim to lead in providing innovative, technology-driven solutions that empower and accelerate transformative client experiences, ensuring lasting impact and value.                                        </p>
                                        {/* <div className="icon">
                                            <i className="flaticon-phone-call" />
                                        </div>
                                        <div className="content">
                                            <span>Hot Line Number</span>
                                            <Link href="tel:0123456789">+123 8989 444</Link>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="about__shape-wrap-three">
                                    <img src="/assets/img/images/h3_about_shape01.png" alt="" className="rotateme" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
