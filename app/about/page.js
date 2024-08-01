'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Counter3 from "@/components/sections/Counter3"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import React, { useState, useEffect } from 'react';

export default function About() {
    let Nothome = true;


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="About Us" Nothome={Nothome}>
                <div>
                    <section className="about__area-four">
                        <div className="container">
                        {/* <div className=" ml-5 mb-16">
                            <h2 className="">
                                About Us
                            </h2>
                        </div> */}
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-9 col-sm-10">
                                    <div className="about__img-wrap-four">
                                        <img src="/assets/img/images/inner_about01.jpg" alt="" />
                                        <img src="/assets/img/images/inner_about02.jpg" alt="" />
                                        <img src="/assets/img/bg/bg_about_photos.png" className={`${isMobile ? 'scale-150 mt-20' : ''} about_photo_bg`} style={{marginLeft: isMobile ? '50px' : '',}} alt="" />

                                        {/* <div className="about__award-box">
                                            <div className="icon">
                                                <i className="flaticon-trophy" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title">15+</h2>
                                                <p>World Best Agency <br /> Award Got</p>
                                            </div>
                                        </div> */}
                                        {/* <div className="shape">
                                            <img src="/assets/img/images/inner_about_shape.jpg" alt="" className="alltuchtopdown" />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about__content-four">
                                        <div className="section-title mb-30">
                                            <h2 className="title">Pioneering Business Solutions for Tomorrow’s Markets</h2>
                                        </div>
                                        <div className="about__content-inner-three mt-2">
                                            <div className="about__list-box">
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-arrow-button" />Comprehensive Services Portfolio</li>
                                                    <li><i className="flaticon-arrow-button" />Innovative Work Culture</li>
                                                    <li><i className="flaticon-arrow-button" />Future-Focused Strategy</li>
                                                </ul>
                                            </div>
                                            {/* <div className="about__list-img-two">
                                                <img src="/assets/img/images/about_list_img02.png" alt="" />
                                            </div> */}
                                        </div>
                                        <p>At Ecesis, we've evolved from a BPO provider to a globally recognized conglomerate with expertise spanning various sectors including software development, digital marketing, and staffing solutions.
                                            <br/> Every day, we push the boundaries of growth, driven by our unwavering commitment to meeting our clients' needs. Our ability to adapt and thrive in an ever-changing marketplace makes us a preferred partner in our clients’ transformation journeys.</p>
                                        <Link href="/services" className="btn">Know More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Counter3/>

                    {/* team-area */}
                    <section className="team__area-four">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section-title text-center mb-40">
                                        <span className="sub-title">MEET OUR TEAM</span>
                                        <h2 className="title">Business Expertise Is Here <br /> For You Can Trust</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="team__item-four shine-animate-item">
                                        <div className="team__thumb-four shine-animate">
                                            <img src="/assets/img/team/h4_team_img01.jpg" alt="" />
                                        </div>
                                        <div className="team__content-four">
                                            <h2 className="title"><Link href="/team-details">Floyd Miles</Link></h2>
                                            <span>Finance Advisor</span>
                                            <div className="team__social-four">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="team__item-four shine-animate-item">
                                        <div className="team__thumb-four shine-animate">
                                            <img src="/assets/img/team/h4_team_img01.jpg" alt="" />
                                        </div>
                                        <div className="team__content-four">
                                            <h2 className="title"><Link href="/team-details">Floyd Miles</Link></h2>
                                            <span>Finance Advisor</span>
                                            <div className="team__social-four">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-center">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/h4_team_img01.jpg" alt="" />
                                            </div>
                                            <div className="team__content-four">
                                                <h2 className="title"><Link href="/team-details">Floyd Miles</Link></h2>
                                                <span>Finance Advisor</span>
                                                <div className="team__social-four">
                                                    <ul className="list-wrap">
                                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/h4_team_img02.jpg" alt="" />
                                            </div>
                                            <div className="team__content-four">
                                                <h2 className="title"><Link href="/team-details">Ralph Edwards</Link></h2>
                                                <span>Finance Advisor</span>
                                                <div className="team__social-four">
                                                    <ul className="list-wrap">
                                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/h4_team_img03.jpg" alt="" />
                                            </div>
                                            <div className="team__content-four">
                                                <h2 className="title"><Link href="/team-details">Eleanor Pena</Link></h2>
                                                <span>Finance Advisor</span>
                                                <div className="team__social-four">
                                                    <ul className="list-wrap">
                                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/h4_team_img04.jpg" alt="" />
                                            </div>
                                            <div className="team__content-four">
                                                <h2 className="title"><Link href="/team-details">Jone Cooper</Link></h2>
                                                <span>Finance Advisor</span>
                                                <div className="team__social-four">
                                                    <ul className="list-wrap">
                                                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* team-area-end */}
                    
                </div>
            </Layout>
        </>
    )
}