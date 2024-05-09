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
    return (
        <>
            <section className={`banner__area-two banner__bg-two object-cover ${isMobile ? "object-right" : ""}`} style={{
                backgroundImage: `url(${isMobile ? "" : "/assets/img/banner/banner.png"})`
            }}>
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-8 ${isMobile ? "mt-10" : ""}`}>
                            <div className="banner__content-two mb-24">
                                <h2 className="text-5xl font-bold mb-6" data-aos="fade-up" data-aos-delay={100}>Empowering Global Innovation</h2>
                                <h3 className='text-3xl text-black col-lg-10'>Your Partner in <span className="text-pink-400">Technology Transformation </span> and Customer-Centric <span className='text-blue-400'>Growth</span></h3>
                                <Link href="#" className="btn border-btn mt-14" data-aos="fade-up" data-aos-delay={600}>Get Started</Link>
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
                    <img src="/assets/img/banner/h3_banner_shape01.png" alt="" className="heartbeat" />
                </div>
            </section>
        </>
    )
}
