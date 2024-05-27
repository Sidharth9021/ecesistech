'use client'
import Link from 'next/link'
import Banner from '../../public/assets/img/banner/banner.png'
import React, { useEffect, useState } from 'react';

export default function Banner2() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const hstyle = {
        fontSize: isMobile ? '40px' : '46px', 
        lineHeight: isMobile ? '2.75rem': '1'
    }
    const tstyle = {
        fontSize: isMobile ? '24px' : '30px', 
        lineHeight: isMobile ? '2rem': '2.25rem'
    }
    return (
        <>
            <section className={`banner__area-two banner__bg-two object-cover ${isMobile ? "object-right" : ""}`} style={{
                backgroundImage: `url(${isMobile ? "" : "/assets/img/banner/banner.png"})`
            }}>
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-8 ${isMobile ? "mt-10" : ""}`}>
                            <div className="banner__content-two mb-24">
                                <h2 className={` font-bold mb-6`}  data-aos="fade-up" data-aos-delay={100} style={hstyle}>Empowering Global Innovation</h2>
                                <h3 className={`  text-black col-lg-10`} data-aos="fade-up" data-aos-delay={200} style={tstyle}>Your Partner in <span className="text-pink-400">Technology Transformation </span> and Customer-Centric <span className='text-blue-400'>Growth</span></h3>
                                <div>
                                    <Link href="#" className="btn border-btn mt-1" data-aos="fade-up" data-aos-delay={200}>Get Started</Link>
                                </div>
                                {/* {isMobile ?
                                    <Link href="#" className="btn border-btn mt-40" data-aos="fade-up" data-aos-delay={600}>Get Started</Link>
                                    :
                                    <Link href="#" className="btn border-btn mt-10" data-aos="fade-up" data-aos-delay={600}>Get Started</Link>
                                } */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="banner-social banner-social-two">
                    <h5 className="title">Follow us</h5>
                    <ul className="list-wrap">
                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                        <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                    </ul>
                </div> */}
                <div className="banner__shape-two">
                    <img src="/assets/img/banner/h3_banner_shape01.png" alt="" className="heartbeat mt-14" />
                </div>
            </section>
        </>
    )
}
