'use client'
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import React, { useEffect, useState } from 'react';

export default function ServicesDetails() {

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
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Accounting & Finance">
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-100 order-0 order-lg-2">
                                        <div className="services__details-content">
                                            <h2 className="title">Simplify <span className="text-pink-400">Accounting & Tax</span>  Processes With Our Expert Solutions! </h2>
                                            <p>We are established with a vision to empower individuals and businesses with tangible accounting strategies, We are dedicated to delivering top-notch financial operational services that help you navigate the complexities of day to day transactional accounting. Transparency and communication are the cornerstones of our client relationships.</p>
                                            <h2 className="title mt-12">We Specialize In <span className="text-blue-400">Unlocking Accounting Gaps</span> , Navigating Tax Complexity<span className="text-ly"> With Confidence & Ease.</span></h2>
                                            <p>We provide an all-encompassing array of accounting and tax services meticulously tailored for individuals, businesses, and diverse organizations. Our aim is to simplify your financial accounting, ensuring that it's cost-effective and instilling confidence at every juncture of our collaborative journey. Consider us your steadfast partner for all your accounting, compliance and regulatory requirements, delivering trustworthiness with every service.</p>

                                            <div className="services__details-inner">
                                                <div className="row gutter-24 align-items-center">
                                                    {/* <div className="col-44">
                                                        <div className="services__details-inner-img">
                                                            <img src="/assets/img/services/services_details_inner01.jpg" alt="" />
                                                            <VideoPopup />
                                                        </div>
                                                    </div>
                                                    <div className="col-56">
                                                        <div className="services__details-inner-content">
                                                            <h4 className="title">Raise capital faster  negotiate <br /> on your own terms</h4>
                                                            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen bookhas survived not only five centuries.</p>
                                                            <div className="about__list-box">
                                                                <ul className="list-wrap">
                                                                    <li><i className="flaticon-arrow-button" />Business Growth</li>
                                                                    <li><i className="flaticon-arrow-button" />Analysis  Research</li>
                                                                    <li><i className="flaticon-arrow-button" />100% Secure</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    <h2 className="title mt-9 text-center">Why Us?</h2>
                                                        <div className="flex justify-center items-center " style={{maxWidth: '775px'}}>
                                                        <img src="/assets/img/images/acc_values.png" className="aspect-auto h-auto w-full" alt="" style={{marginLeft : isMobile ? "" : "450px"}} />
                                                        </div>
                                                    <div className="mt-16">
                                                        <h2 className="title text-center mb-5">Our Services</h2>

                                                        <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} gap-x-4 gap-y-4`}>
                                                            <div className="ebt">
                                                                <div className="title px-3 py-5 border-2 text-center justify-center rounded-2xl bg-gradient-to-br" style={{ width: '390px', height: '275px' }} >
                                                                    <span style={{ fontSize: '65px' }}>01</span>
                                                                    <h4 className="mt-3">
                                                                        Bookkeeping
                                                                    </h4>

                                                                    <h6 className="mt-3 text-gray-500  font-medium">
                                                                        Ensuring that your financial scales are always in perfect harmony
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="ebt">
                                                                <div className="title px-2 py-5  border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px', paddingTop: '26px', paddingBottom: '26px' }}>
                                                                    <span style={{ fontSize: '65px' }}>02</span>
                                                                    <h4 className="mt-3">
                                                                        Payroll Management
                                                                    </h4>

                                                                    <h6 className="mt-3 text-gray-500  font-medium">
                                                                        Making sure every paycheck is accurate and on time
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="ebt">
                                                                <div className="title px-2 py-5 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                                    <span style={{ fontSize: '65px' }}>03</span>
                                                                    <h4 className="mt-3">
                                                                        Purchase Order Matching
                                                                    </h4>

                                                                    <h6 className="mt-3 text-gray-500  font-medium" >
                                                                        Connecting the dots between your orders, invoices, and payments
                                                                    </h6>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className={` flex justify-center mt-4 ${isMobile ? "flex-col" : ""} `}>
                                                            <div className="ebt">
                                                                <div className="title px-2 py-5 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                                    <span style={{ fontSize: '65px' }}>04</span>
                                                                    <h4 className="mt-3">
                                                                        Accounts Payable & Reconciliation
                                                                    </h4>

                                                                    <h6 className="mt-3 text-gray-500  font-medium" >
                                                                        Designed to streamline financial records with precision and attention to detail.                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className={`ebt ${isMobile ? "mt-6" : "ml-6"} `}>
                                                                <div className="title px-2 py-5 border-2 text-center justify-center rounded-2xl " style={{ width: '390px', height: '275px' }}>
                                                                    <span style={{ fontSize: '65px' }}>05</span>
                                                                    <h4 className="mt-3">
                                                                        Tax Preparation, Filings and Reporting
                                                                    </h4>

                                                                    <h6 className=" text-gray-500  font-medium" style={{ marginTop: "16px" }}>
                                                                        Analyzing, strategizing, & preparing your taxes                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                
                </div>
            </Layout>
        </>
    )
}
