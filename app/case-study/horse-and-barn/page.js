'use client'
import withLoading from "@/app/withLoading";
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazyload';
import React, { useState, useEffect } from "react";



function CaseStudy() {
    let Nothome = true;

    const [isMobile, setIsMobile] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false); // New state to track if all components have loaded
    const hstyle = {
        fontSize: isMobile ? '44px' : '48px',
        lineHeight: isMobile ? '2.85rem' : '3.25rem'
    }
    const tstyle = {
        fontSize: isMobile ? '28px' : '32px',
        lineHeight: isMobile ? '2.25rem' : '2.5rem'
    }
    const space = {
        marginTop: isMobile ? '-70px' : ''
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        setAllLoaded(true);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!allLoaded) {
        return <div>Loading...</div>; // Or any other loading indicator
    }


    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle={"From Complexity to Clarity: How a Single Website Drove 3X Revenue Growth"} Nothome={Nothome}>
                <section className="services__details-area main-font">
                    <div className="container">
                        <div className="services__details-wrap">
                            <p className="text-2xl text-black"><span className="font-bold text-2xl">Client:</span> A Real Estate Company Specializing in Horse and Barn Properties</p>
                            <p className="text-2xl text-black"><span className="font-bold text-2xl">Industry:</span> Real Estate</p>

                            <div className="mt-8">
                                <p className="title text-2xl font-bold text-black">Background</p>
                                <p className="mt-7">The client is a real estate company focused on listing horse and barn properties within a specific geographic region. Previously, the company operated three separate websites, each built on a different tech stack to manage various aspects of their business: one for property listings, another for classifieds, and a third for horse sales. This fragmented setup required distinct sets of resources to manage and maintain each website, creating inefficiencies and higher operational costs.</p>

                            </div>

                            <div className="mt-8">
                                <p className="title text-2xl font-bold text-black">Challenges</p>
                                <p>The primary challenge was to unify these separate websites into a single, cohesive platform that would allow users to explore all services in one place. The new website needed to:</p>
                                {isMobile ? (
                                    <div className="relative max-w-xs mx-auto">
                                        <img src="/assets/img/icon/case_challenges_mobile.png" alt="" className="w-full justify-center mx-auto" />
                                        <div className="absolute top-[40%] left-[7%]">
                                            <p className="text-center text-sm font-bold">Three Separate <br /> Websites</p>
                                        </div>
                                        <div className="absolute top-[40%] right-[10%]">
                                            <p className="text-center text-sm font-bold">Multiple<br /> Tech Stacks</p>
                                        </div>
                                        <div className="absolute -bottom-[13%] left-[5%]">
                                            <p className="text-center text-sm font-bold">Distinct Resource<br /> Requirements</p>
                                        </div>
                                        <div className="absolute -bottom-[13%] right-[3%]">
                                            <p className="text-center text-sm font-bold">Increased Costs and<br /> Inefficiencies</p>
                                        </div>
                                    </div>

                                ) : (
                                    <div className="relative">
                                        <img src="/assets/img/icon/case_challenges.png" alt="" className="w-[300px] justify-center mx-auto" />
                                        <div className="absolute top-[60px] left-[200px]">
                                            <p className="text-left text-lg font-bold">Three Seperate Websites</p>
                                        </div>
                                        <div className="absolute top-[60px] right-[250px]">
                                            <p className="text-left text-lg font-bold">Mutiple Tech Stacks</p>
                                        </div>
                                        <div className="absolute bottom-[30px] left-[260px]">
                                            <p className="text-right text-lg font-bold">Distinct Resource<br /> Requirements</p>
                                        </div>
                                        <div className="absolute bottom-[30px] right-[250px]">
                                            <p className="text-left text-lg font-bold">Increased Costs and<br /> Inefficiencies</p>
                                        </div>

                                    </div>
                                )}


                                <div className={`${isMobile ? 'mt-16' : 'mt-9'} `}>
                                    <h4 className="text-2xl mb-6 text-black">The new website needed to:</h4>
                                    <div className="about__list-box-custom content-center">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-arrow-button" />Integrate property listings with MLS for real-time updates.</li>
                                            <li><i className="flaticon-arrow-button" />Enable users to create accounts and manage their property profiles, listings, and advertisements.</li>
                                            <li><i className="flaticon-arrow-button" />Include features for listing horses for sale.</li>
                                            <li><i className="flaticon-arrow-button" />Incorporate web scraping functionality to gather relevant property listings from third-party websites, specifically targeting barn and horse properties.</li>
                                            <li><i className="flaticon-arrow-button" />Consolidate all functionality into a single tech stack to reduce resource requirements.</li>

                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className={`${isMobile ? "w-full" : "w-[95%]"}`}>
                                <p className="title text-2xl font-bold text-black mt-12">Solutions</p>
                                <p className="text-lg italic text-gray-900">We developed a comprehensive website that brought together all the features from the previous sites into one user-friendly platform.</p>
                                <p className="mt-12">Key features include:</p>
                                <ul className={`${isMobile ? "ml-4" : "ml-12"}  text-justify`}>
                                    <li className="list-disc"><p className="">
                                        <span className="font-bold">
                                            MLS Integration:
                                        </span>
                                        The website automatically syncs with MLS listings to ensure property data is always current. Users can also manually add listings through an intuitive backend.
                                    </p>
                                    </li>
                                    <li className="list-disc"><p className="">
                                        <span className="font-bold">
                                            User Account Management:                                        </span>
                                        Users can create accounts, build profiles, and manage their listings, advertisements, and classifieds in a centralized location.                                    </p>
                                    </li>
                                    <li className="list-disc"><p className="">
                                        <span className="font-bold">
                                            Horse Sale Listings:                                        </span>
                                        The website’s design prominently featured equestrian and rural imagery, including high-quality photos of horses, barns, and open fields. The color scheme was inspired by natural tones, such as earthy browns, greens, and whites, to evoke a sense of the outdoors and rural life. The logo and typography were carefully selected to reflect the elegance and tradition associated with horse properties.
                                    </p>   </li>

                                    <li className="list-disc"><p className="">
                                        <span className="font-bold">
                                            Visual Identity and Branding:                                        </span>
                                        The website automatically syncs with MLS listings to ensure property data is always current. Users can also manually add listings through an intuitive backend.
                                    </p>
                                    </li>
                                    <li className="list-disc"><p className="">
                                        <span className="font-bold">
                                            Showcasing Horse and Barn Properties:                                        </span>
                                        To highlight the client’s specialty, the website featured dedicated sections for horse and barn properties, complete with detailed descriptions, photo galleries, and virtual tours. Property pages were designed to emphasize key features such as stables, riding arenas, and large pastures. Additionally, a dedicated section for horse sales provided detailed information on each horse, including breed, age, and training level, along with images and videos.                                    </p>
                                    </li>
                                    <li className="list-disc"><p className="">
                                        <span className="font-bold">
                                            Web Scraping Integration:                                        </span>
                                        The website incorporates a sophisticated web scraping feature that aggregates listings from third-party websites, ensuring comprehensive coverage of barn and horse properties.                                    </p>
                                    </li>
                                    <li className="list-disc"><p className="">
                                        <span className="font-bold">
                                            Unified Tech Stack:                                        </span>
                                        The three previously separate websites were redesigned and consolidated into a single platform, simplifying management and reducing the need for multiple sets of resources.                                    </p>
                                    </li>

                                </ul>


                            </div>

                            <div className={` ${isMobile ? "w-full" : "w-[60%]"} bg-[#00235f] rounded-2xl p-3 mt-12`}>
                                <div className="flex ">
                                    <img src="/assets/img/icon/case_dev.png" alt="" className="w-14" />
                                    <h3 className="text-xl content-center text-white ml-4">Development and Hosting Platform</h3>
                                </div>


                            </div>
                            <div className="flex mt-7">
                                <div className="flex flex-col">
                                    <p className="text-xl">Presentation Framework</p>
                                    <p className="text-xl">Programming Language</p>
                                    <p className="text-xl">Server</p>
                                    <p className="text-xl">Browser</p>
                                </div>
                                <div className="flex flex-col ml-8">
                                    <p className="text-xl font-bold">HTML5, CSS, Bootstrap, Jquery</p>
                                    <p className="text-xl font-bold">Core PHP</p>
                                    <p className="text-xl font-bold">Apache</p>
                                    <p className="text-xl font-bold">Chrome, Firefox, Safari etc.</p>
                                </div>
                            </div>

                            <div>
                                <p className="title text-2xl font-bold text-black mt-12">Results</p>
                                {isMobile ? (
                                    <div className="relative max-w-xs mx-auto">
                                        <img src="/assets/img/icon/case_results_mobile.png" alt="" className="w-full justify-center mx-auto" />
                                        <div className="absolute top-[40%] left-[16%]">
                                            <p className="text-center text-sm font-bold">3X<br /> Revenue<br /> Growth</p>
                                        </div>
                                        <div className="absolute top-[40%] right-[16%]">
                                            <p className="text-center text-sm font-bold">Increased <br /> Website <br /> Traffic</p>
                                        </div>
                                        <div className="absolute -bottom-[10%] left-[16%]">
                                            <p className="text-center text-sm font-bold">FTE <br /> Savings</p>
                                        </div>
                                        <div className="absolute -bottom-[15%] right-[15%]">
                                            <p className="text-center text-sm font-bold">5X Boost <br /> in User <br />Engagement</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative w-fit mx-auto">
                                        <img src="/assets/img/icon/case_results.png" alt="" className="w-[800px] mx-auto" />
                                        <div className="absolute -bottom-[70px] left-[70px] ">
                                            <p className="text-center text-lg font-bold">3X<br /> Revenue<br /> Growth</p>
                                        </div>
                                        <div className="absolute -bottom-[70px] left-[255px]">
                                            <p className="text-center text-lg font-bold">Increased <br /> Website <br /> Traffic</p>
                                        </div>
                                        <div className="absolute -bottom-[45px] right-[270px]">
                                            <p className="text-center text-lg font-bold">FTE <br /> Savings</p>
                                        </div>
                                        <div className="absolute -bottom-[70px] right-[60px]">
                                            <p className="text-center text-lg font-bold">5X Boost <br /> in User <br />Engagement</p>
                                        </div>
                                    </div>
                                )}

                            </div>




                        </div>
                    </div>
                    <section className="call-back-area call-back-area-two mt-24">
                        <div className="">
                            <div className="call-back-wrap bg-lblue">
                                <div className="row align-items-center">
                                    <div className="call-back-content flex flex-row justify-center items-center text-left" >
                                        <div className="section-title white-title tg-heading-subheading animation-style3">
                                            <h2 className="mb-0 text-4xl text-white tg-element-title">Get a <span className="text-ly">30-minute</span>,<br /> no-cost consulting session with our <span className="text-ly">Business Consultant</span>
                                            </h2>

                                            <p className="text-white  text-xl mt-3">Get started by talking to our experts about how to enable business insights at scale with the right data foundation, modernization and platform management.</p>
                                            <Link href="/schedule" className="btn mt-5">BOOK A CONSULTATION</Link>
                                        </div>
                                        {/* {!isMobile ? (<div className="">
                                            <img src="/assets/img/images/callback_photo.jpg" alt="" style={{ width: '1100px' }} className="ml-2 rounded-2xl" />

                                        </div>) : null} */}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={`${isMobile ? "w-full mt-16" : "w-[95%] mt-24"} container`}>

                        <p className="text-lg italic text-gray-900 ">The launch of the new unified website resulted in significant improvements:
                        </p>
                        <ul className={`${isMobile ? "ml-4" : "ml-12"}  text-justify`}>
                            <li className="list-disc"><p className="">
                                <span className="font-bold">
                                    Increased Website Traffic:
                                </span>
                                The consolidated platform led to a noticeable increase in user visits as clients found it more convenient to access all services from a single site.
                            </p>
                            </li>
                            <li className="list-disc"><p className="">
                                <span className="font-bold">
                                    Enhanced User Engagement:                                        </span>
                                With all services integrated, users spend more time on the site, utilizing various features.                                    </p>
                            </li>
                            <li className="list-disc"><p className="">
                                <span className="font-bold">
                                    Revenue Growth:                                        </span>
                                The streamlined website directly contributed to a remarkable 3X increase in revenue for the company.
                            </p>   </li>

                            <li className="list-disc"><p className="">
                                <span className="font-bold">
                                    Resource Optimization:                                        </span>
                                By consolidating to a single tech stack, the client reduced the need for multiple resources to manage and maintain the website. Previously, multiple Full-Time Equivalents (FTEs) were required to handle the different sites. Now, a single resource efficiently manages everything through one touchpoint, significantly improving operational efficiency and reducing costs.
                            </p>
                            </li>


                        </ul>

                        <div className="mt-8">
                            <p className="text-xl text-center">This project successfully unified the client’s online presence, transforming it into a one-stop-shop for all horse property needs within their specific market.
                            </p>
                        </div>
                    </div>

                </section>
            </Layout>
        </>
    )
}

export default withLoading(CaseStudy);