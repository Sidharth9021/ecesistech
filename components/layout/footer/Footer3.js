import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Request3 from "@/components/sections/Request3";
import LazyLoad from 'react-lazyload';

export default function Footer3() {

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
            <footer>
                <div className="footer__area-three">
                    <div className="footer__top-three">
                        <div className={`${isMobile ? "w-full" : "container"} mx-auto px-4`}>
                            <div className={`flex ${isMobile ? "flex-col-reverse" : "flex-row justify-between items-start"}`}>
                                <div className={`${isMobile ? "mt-5" : "mt-2"} footer-widget text-lb flex-1`}>
                                    <img src="/assets/img/logo/Logo.png" className="h-12 mb-5" alt="logo" />
                                    <div className="footer__social-three">
                                        <span className="title">Follow Us on:</span>
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            {/* <li><Link href="#"><i className="fab fa-youtube" /></Link></li> */}
                                        </ul>
                                    </div>
                                    <div className='footer-link-list w-fit flex mt-14'>
                                        <ul className='list-wrap'>
                                            <li className=''><Link href="#"><h5>Privacy & Cookies Policy</h5></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                    <LazyLoad height={200} offset={100} once>
                                        <h3 className={`${isMobile ? "text-3xl text-left" : "text-4xl text-left"} typewriter mb-2`} >
                                            <span className='text-blue-400'>Evolve.</span>
                                            <span className='text-pink-400'>Transform.</span>
                                            <span>Grow.</span>
                                        </h3>
                                    </LazyLoad>
                                    <div className="">
                                        <Request3 />
                                    </div>
                                    <div className="footer-link-list mt-6">
                                        <ul className={`list-wrap ${isMobile ? "" : "flex ml-auto"}`}>
                                            <li className='mr-5'><Link href="#"><h5>Careers</h5></Link></li>
                                            <li className='mr-5'><Link href="#"><h5>About Us</h5></Link></li>
                                            <li className='mr-5'><Link href="#"><h5>Contact Us</h5></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom-three">
                        <div className="container">
                            <div className="">
                                <div className="copyright-text">
                                    <p>Copyright ©<Link href="/">ECESIS 2024</Link> | All Right Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
