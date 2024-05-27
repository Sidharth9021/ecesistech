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

    const [showTypewriter, setShowTypewriter] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowTypewriter(false);
      }, 4200); // 5000 milliseconds = 5 seconds
  
      return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, []);
  

    return (
        <>
            <footer>
                <div className="footer__area-three">
                    <div className="footer__top-three">
                        <div className={`${isMobile ? "w-full" : "container"} mx-auto px-4`}>
                            <div className={`flex ${isMobile ? "flex-col-reverse" : "flex-row justify-between items-start"}`}>
                                <div className={`${isMobile ? "mt-5" : "mt-2"} footer-widget text-lb flex-1`}>
                                    <img src="/assets/img/logo/Logo.png" className={`${isMobile ? "hidden" : ""} h-14 mb-5`} alt="logo" />
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
                                    <div className='footer-link-list w-fit flex' style={{marginTop: '41px'}}>
                                        <ul className='list-wrap'>
                                            <li className=''><Link href="#"><p className='normal-text font-bold'>Privacy & Cookies Policy</p></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="max-w-full">
                                    <LazyLoad height={200} offset={100} once>
                                        <h3 className={`${isMobile ? "font28 text-left"  : "text-4xl text-left"} ${showTypewriter ? "typewriter" : "typewriter-none"} mb-2`} >
                                            <span className='text-blue-400'>Evolve.</span>
                                            <span className='text-pink-400'>Transform.</span>
                                            <span>Grow.</span>
                                        </h3>
                                    </LazyLoad>
                                    <div className="">
                                        <Request3 />
                                    </div>
                                    <div className="footer-link-list mt-6">
                                        <ul className={`list-wrap ${isMobile ? "" : "flex ml-auto"} justify-end`}>
                                            <li className='mr-5'><Link href="#"><p className='normal-text font-bold'>Careers</p></Link></li>
                                            <li className='mr-5'><Link href="#"><p className='normal-text font-bold'>About Us</p></Link></li>
                                            <li className=''><Link href="#"><p className='normal-text font-bold'>Contact Us</p></Link></li>
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
