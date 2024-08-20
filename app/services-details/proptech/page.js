'use client'
import Layout from '@/components/layout/Layout'
import Banner_prop from '@/components/sections/Banner_prop'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Counter3 from '@/components/sections/Counter3';
import Marquee2 from '@/components/sections/Marquee2';


export default function Proptech() {
    let Nothome = false;

    const [isMobile, setIsMobile] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false); // New state to track if all components have loaded


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
            <Layout headerStyle={3} footerStyle={3} Nothome={Nothome}>
                <Banner_prop />

                {/* <Marquee2 /> */}
                {/* Hero Section */}
                <section className="text-center py-12">
                    <div className={` ${isMobile ? 'w-full' : 'container'} flex flex-row flex-wrap justify-between `}>
                        <div className='flex flex-col justify-center px-2' style={{ width: isMobile ? '100vw' : '700px' }}>

                            <h1 className={`text-4xl font-bold mb-3 ${isMobile ? "text-center" : "text-left"} `}>Experience the ECESIS difference.</h1>

                            <p className={`title ${isMobile ? "text-center" : "text-left"}`}>We offer cutting-edge PropTech solutions designed to optimize operations, enhance decision-making, and drive growth.
                                With our expertise in AI, custom software development, and web design, we deliver tailored solutions that address your unique challenges.
                            </p>
                            
                            <Link href="/services-details/proptech " className={`but2 text-lg ${isMobile ? 'w-full' : 'w-fit'} `}>Contact us for a free consultation</Link>

                            

                        </div>

                        <div className={`${isMobile ? '' : 'flex justify-center flex-col'} mt-6`}>
                            <img src="/assets/videos/Proptech.gif" alt="About ECESIS" width={400} height={300} />
                        </div>

                    </div>


                </section>
                <Counter3 />

                {/* Core Values */}
                {!isMobile && (<section className="">
                    <h3 className="mt-12 text-4xl font-bold text-center mb-16">Core Values</h3>
                    <div className='px-3 w-full'>
                        <div className="mt-16 mb-12 flex justify-center items-center ">
                            <div className={`flex ${isMobile ? "flex-row flex-wrap" : "flex-row"} gap-x-4 gap-y-4`} >
                                <div className="ebt">
                                    <div className="title  px-3 py-5 border-2 text-center justify-center rounded-2xl bg-gradient-to-br" style={{ width: isMobile ? '180px' : '250px', height: isMobile ? '180px' : '250px' }} >
                                        <h4 className="mt-3 text-2xl">
                                            Innovation
                                        </h4>

                                        <h6 className="mt-3 text-black  font-medium">
                                            Embracing new technologies to deliver groundbreaking solutions.
                                        </h6>
                                    </div>
                                </div>
                                <div className="ebt">
                                    <div className="title px-2 py-5  border-2 text-center justify-center rounded-2xl " style={{ width: isMobile ? '180px' : '250px', height: isMobile ? '180px' : '250px' }}>
                                        <h4 className="mt-3 text-2xl">
                                            Client-Centricity
                                        </h4>
                                        <h6 className="mt-3 text-black  font-medium">
                                            Building strong partnerships based on trust and collaboration.                                    </h6>
                                    </div>
                                </div>
                                <div className="ebt">
                                    <div className="title px-2 py-5 border-2 text-center justify-center rounded-2xl " style={{ width: '250px', height: '250px' }}>
                                        <h4 className="mt-3 text-2xl">
                                            Expertise
                                        </h4>
                                        <h6 className="mt-3 text-black  font-medium" >
                                            Leveraging our deep industry knowledge to drive results.                                    </h6>
                                    </div>
                                </div>
                                <div className="ebt">
                                    <div className="title px-2 py-5 border-2 text-center justify-center rounded-2xl" style={{ width: '250px', height: '250px' }}>
                                        <h4 className="mt-3 text-2xl">
                                            Excellence                                    </h4>
                                        <h6 className="mt-3 text-black  font-medium" >
                                            Delivering exceptional products and services that exceed expectations.                                       </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                )}




                {/* About Us */}

                <section className="my-12">
                    <div className="container ">
                        <div className='flex flex-row flex-wrap'>
                            <div className='flex flex-col justify-center' style={{ width: '700px' }}>
                                <h2 className={`text-3xl font-bold ${isMobile ? "text-center" : "text-left"} mb-6`}>About Us</h2>
                                <h4 className={` ${isMobile ? 'text-center' : ''} text-2xl`}>
                                    Propelling<span className='text-blue-400'> Real Estate</span> Forward with <span className='text-pink-400'>Artificial Intelligence</span>
                                </h4>
                                <p className={`mt-4 ${isMobile ? 'text-center' : ''}`}>
                                    We are a visionary PropTech company dedicated to revolutionizing the real estate industry through cutting-edge technology. With a proven track record of delivering innovative solutions, we empower clients to achieve unprecedented success.
                                </p>
                            </div>

                            <div className={`${isMobile ? '' : ' flex-col'} flex justify-center items-center mt-6`}>
                                <img src="/assets/img/images/proptech_about.png" className={`${isMobile ? 'w-[175px] h-[175px] ml-[23vw]' : 'ml-[175px] w-[300px] h-[300px]'}`} alt="About ECESIS" />
                            </div>
                        </div>

                    </div>


                </section>


                {/* Services */}
                <section className="my-12">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-center mb-6">AI Software Development Services for Real Estate</h2>
                        <div className='flex justify-center items-center'>
                            <p className='w-[600px] text-center '>Whether you’re building a proptech solution from scratch, looking to
                                automate real estate workflows with AI, enhancing your technology team,
                                or in need of a thorough third-party code audit, ECESIS provides a full
                                spectrum of real estate software development services to fulfill your
                                unique requirements.</p>
                        </div>

                        <div className="">
                            <div className="mt-16 mb-12 flex justify-center items-center">
                                <div className={`grid ${isMobile ? "grid-cols-1 gap-y-4 gap-x-16 " : "grid-cols-2 gap-y-20 gap-x-4 "}  `} >
                                    {/* Artificial Intelligence in Real Estate */}
                                    <div className='relative'>
                                        <img src="/assets/img/images/AI_Proptech.png" alt="" className={`${isMobile ? 'scale-135' : 'scale-110 w-full'}`} />
                                        <div className={`absolute ${isMobile ? 'top-[6.5rem]' : 'top-60'} `} style={{ width: isMobile ? '325px' : '410px', left: isMobile ? '0px' : '97px' }}>
                                            <h1 className={`title text-center ${isMobile ? 'text-lg' : 'text-2xl'}`}>Artificial Intelligence in Real Estate</h1>
                                            <p className={`text-center  ${isMobile ? 'text-[13px] mt-2' : 'mt-4'} text-black`}>ECESIS harnesses the power of AI to transform the real estate landscape. Our AI solutions streamline property management, enhance decision-making, and automate routine tasks.</p>
                                            <ul className={`list-disc ${isMobile ? 'text-[13px]' : ''} ml-4 text-black`}>
                                                <li className=''><span className='font-bold'>PropVision:</span> Our advanced image recognition software provides valuable insights from property images.</li>
                                                <li className=''><span className='font-bold'>Smart Value:</span> Our AI-powered valuation tool offers accurate property valuations.</li>
                                                <li className=''><span className='font-bold'>Predictive Analytics:</span> Utilize AI to predict market trends and optimize investment strategies.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Tailored Software for Real Estate */}
                                    <div className='relative'>
                                        <img src="/assets/img/images/Soft_Proptech.png" alt="" className={`${isMobile ? 'scale-135 mt-36' : 'scale-110 w-full'}`} />
                                        <div className={`absolute ${isMobile ? 'top-64' : 'top-60'} `} style={{ width: isMobile ? '325px' : '410px', left: isMobile ? '0px' : '97px' }}>
                                            <h1 className={`title text-center ${isMobile ? 'text-lg' : 'text-2xl'}`}>Tailored Software for Real Estate</h1>
                                            <p className={`text-center  ${isMobile ? 'text-[13px] mt-2' : 'mt-4'} text-black`}>Every real estate business is unique. ECESIS delivers
                                                tailored software solutions to meet your specific needs.</p>
                                            <ul className={`list-disc ${isMobile ? 'text-[13px]' : ''} ml-4 text-black`}>
                                                <li className=''><span className='font-bold'>Property Management Systems:</span> Streamline operations with custom-built property managementsoftware.</li>
                                                <li className=''><span className='font-bold'>CRM Integration:</span> Enhance customer relationships with seamless CRM integration.</li>
                                                <li className=''><span className='font-bold'>Custom Applications:</span> Develop specialized tools to solve your business challenges.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='relative'>
                                        <img src="/assets/img/images/Web_Proptech.png" alt="" className={`${isMobile ? 'scale-140 mt-36' : 'scale-110 w-full'}`} />
                                        <div className={`absolute ${isMobile ? 'top-[270px]' : 'top-60'} `} style={{ width: isMobile ? '325px' : '410px', left: isMobile ? '5px' : '97px' }}>
                                            <h1 className={`title text-center ${isMobile ? 'text-lg' : 'text-2xl'}`}>Web Development</h1>
                                            <p className={`text-center  ${isMobile ? 'text-[13px] mt-2' : 'mt-4'} text-black`}>Your website is your digital storefront. ECESIS creates stunning, user-friendly websites optimized for real estate businesses.</p>
                                            <ul className={`list-disc ${isMobile ? 'text-[13px]' : ''} ml-4 text-black`}>
                                                <li className=''><span className='font-bold'>Responsive Design:</span> Ensure your website looks great on all devices.</li>
                                                <li className=''><span className='font-bold'>User Experience:</span> Create intuitive designs that engage visitors.</li>
                                                <li className=''><span className='font-bold'>SEO Optimization:</span> Improve search engine visibility for increased traffic.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='relative'>
                                        <img src="/assets/img/images/Sol_Proptech.png" alt="" className={`${isMobile ? 'scale-140 mt-36' : 'scale-110 w-full'}`} />
                                        <div className={`absolute ${isMobile ? 'top-64' : 'top-56'} `} style={{ width: isMobile ? '325px' : '410px', left: isMobile ? '5px' : '97px' }}>
                                            <h1 className={`title text-center ${isMobile ? 'text-lg' : 'text-2xl'}`}>Comprehensive PropTech Solutions</h1>
                                            <p className={`text-center  ${isMobile ? 'text-[13px] mt-2' : 'mt-4'} text-black`}>ECESIS offers a range of specialized services to address the complex challenges facing the real estate industry.</p>
                                            <ul className={`list-disc ${isMobile ? 'text-[13px]' : ''} ml-4 text-black`}>
                                                <li className=''><span className='font-bold'>PropTech Consulting & Software Audit:</span> Our experts provide in-depth analysis of your tech stack to identify opportunities for improvement and optimization.</li>
                                                <li className=''><span className='font-bold'>Legacy System Modernization:</span> Upgrade outdated systems to enhance performance, security, and user experience.</li>
                                                {/* <li className=''><span className='font-bold'>AI Document Processing:</span> Automate document-intensive tasks with our AI-powered solutions, saving time and reducing errors.</li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Approach Section */}
                <section className="my-12 ">
                    <div className="container mx-auto px-4 mt-28">
                        <h2 className="text-3xl font-bold text-center mb-6">Our Approach</h2>
                        <div className='flex justify-center items-center '>
                            <p className="w-[800px] text-lg mb-6 text-center ">
                                <span className='text-blue-400 text-xl font-semibold'>Client-Centric</span>, <span className='text-pink-400 text-xl font-bold'>Results-Driven</span>. At ECESIS, our approach is simple: we put our clients first. We work closely with you to understand your unique needs, and then develop tailored solutions that deliver real results. From the initial consultation to the final implementation, we’re with you every step of the way.
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src="/assets/img/images/Approach_Proptech.png" alt="" className={`${isMobile ? 'w-[800px]' : 'w-[700px]'}`} />

                        </div>


                    </div>
                </section>



                {/* Who Can Leverage Our Real Estate Software Development Services */}
                <section className="my-4 py-6">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-6">Who Can Leverage Our Real Estate Software Development Services</h2>
                        <div className="">
                            <div className="mt-16 mb-12 flex justify-center items-center">
                                <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-x-4 gap-y-4 `} >
                                    {/* Artificial Intelligence in Real Estate */}
                                    <div className='rounded-xl bg-slate-100 p-3'>
                                        <h1 className='title text-center text-2xl'>Real Estate Firms Embracing AI Transformation</h1>
                                        <p className='text-center mt-4 text-black'>Struggling with manual workflows and disjointed data? Ecesis can streamline your processes with innovative AI-powered real estate software. We specialize in developing custom solutions that enhance efficiency, boost customer loyalty, and open up new revenue opportunities.</p>
                                        <div className='flex justify-center items-center mt-[45px]'>
                                            <Link href="/services-details/manpower-staffing" className="btn">Know More</Link>

                                        </div>
                                    </div>
                                    {/* Tailored Software for Real Estate */}
                                    <div className='rounded-xl bg-slate-100 p-3'>
                                        <h1 className='title text-center text-2xl'>Proptech Startups</h1>
                                        <p className='text-center mt-4 text-black'>Have a groundbreaking idea that could revolutionize real estate? Let’s turn it into reality. Ecesis will help you build a cutting-edge MVP that will help you secure funding. We conduct in-depth workshops to understand your target audience, identify trends, oversee development, and provide ongoing support to ensure your solution’s financial and operational success.</p>
                                        <div className='flex justify-center items-center mt-[22px]'>
                                            <Link href="/services-details/manpower-staffing" className="btn">Know More</Link>

                                        </div>
                                    </div>
                                    <div className='rounded-xl bg-slate-100 p-3'>
                                        <h1 className='title text-center text-2xl'>Established Proptechs Expanding Market Presence</h1>
                                        <p className='text-center mt-4 text-black'>Passionate about advancing real estate technology but need industry expertise or tech support? Ecesis is here to help. Whether you’re launching new software or enhancing existing solutions, we offer code audits, team augmentation, and full-cycle development to deliver custom real estate software that drives business growth.</p>
                                        <div className='flex justify-center items-center mt-[45px]'>
                                            <Link href="/services-details/manpower-staffing" className="btn">Know More</Link>

                                        </div>
                                    </div>
                                    <div className='rounded-xl bg-slate-100 p-3'>
                                        <h1 className='title text-center text-2xl'>Venture Capital Firms Investing in Proptech</h1>
                                        <p className='text-center mt-4 text-black'>Ecesis partners with venture capital firms to ensure the long-term success of their proptech investments. From due diligence to technology implementation, we provide comprehensive support to assess MVPs, oversee development, and maintain the scalability and performance of your portfolio companies.</p>
                                        <div className='flex justify-center items-center mt-[45px]'>
                                            <Link href="/services-details/manpower-staffing" className="btn">Know More</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>



                {/* Contact CTA */}
                <section className=" text-white text-center py-7">
                    <div className="container w-[900px]">
                        <h2 className="text-3xl font-bold mb-6">Start Your Journey with <span className='text-pink-400'>ECESIS</span></h2>
                        <p className="mb-3 text-black font-bold text-xl">Ready to Innovate? Let’s Talk.</p>
                        <p className="mb-6 text-black text-lg">Whether you’re looking to automate your operations, engage more effectively with clients, or simply stay ahead in a competitive market, ECESIS is here to help. Contact us today to learn more about how our PropTech solutions can transform your real estate business.</p>
                    </div>
                </section>

                <section className="call-back-area call-back-area-two">
                    <div className="">
                        <div className="call-back-wrap bg-lblue">
                            <div className="row align-items-center">
                                <div className="call-back-content flex flex-row justify-center items-center" >
                                    <div className="section-title white-title tg-heading-subheading animation-style3 text-center">
                                        <h2 className="mb-0 text-4xl text-white tg-element-title">Get a <span className="text-ly">30-minute</span>,<br /> No-cost consulting session with our <span className="text-ly">Proptech expert</span>
                                        </h2>
                                        <Link href="/contact" className="btn mt-5">Let's Talk</Link>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Success Stories */}
                {/* <section className="my-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Client Success Stories</h2>
                </section> */}
            </Layout>
        </>



    )
}
