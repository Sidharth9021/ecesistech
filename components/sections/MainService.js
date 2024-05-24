'use client'
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import { useState, useEffect } from "react";
import Marquee2 from "./Marquee2";
import Request3 from "./Request3";


export default function MainService() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [isOpen, setIsOpen] = useState(false);
    const toggleRing = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div>
                <section className="services__area-six services__bg-six" data-background="/assets/img/bg/services_bg1.jpeg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="section-title white-title mb-10">
                                    {/* <span className="sub-title">WHAT WE OFFER</span> */}
                                    <h2 className={`text-lblue text-5xl ${isMobile ? "text-center" : "text-left"}`}>Our Services</h2>
                                </div>
                            </div>

                            {/* <div className="col-lg-6">
                                    <div className="section-more-btn">
                                        <Link href="/services" className="btn border-btn">See More Services</Link>
                                    </div>
                                </div> */}
                        </div>

                        <div className="row">
                            <div className="col-12">

                                <div className="services__tab-wrap">

                                    {/* <div className={`fab-container ${isMobile ? "" : "hidden"}`}>
                                        <button className="fab-button" onClick={toggleRing}>+</button>
                                        <div className={`ring ${isOpen ? 'show' : ''}`}>
                                                <button className="ring-button"  onClick={() => handleOnClick(1)}>
                                                   
                                                </button>
                                           
                                        </div>
                                    </div> */}

                                    <ul className={`nav nav-tabs`} id="myTab" role="tablist">
                                        <div className="col-lg-12">
                                            <div className="section-title white-title ">
                                                <span className={`text-lblue text-2xl font-extrabold`}>Digital Solutions</span>

                                            </div>
                                        </div>
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex == 1 ? "nav-link active" : "nav-link"} id="health-tab" data-bs-toggle="tab" data-bs-target="#health-tab-pane" type="button" role="tab" aria-controls="health-tab-pane" aria-selected="true">Artificial Intelligence</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex == 2 ? "nav-link active" : "nav-link"} id="travel-tab" data-bs-toggle="tab" data-bs-target="#travel-tab-pane" type="button" role="tab" aria-controls="travel-tab-pane" aria-selected="false">Automation Solutions </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex == 3 ? "nav-link active" : "nav-link"} id="vehicle-tab" data-bs-toggle="tab" data-bs-target="#vehicle-tab-pane" type="button" role="tab" aria-controls="vehicle-tab-pane" aria-selected="false">Cloud Infrastructure</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                                            <button className={activeIndex == 4 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false">Web & App Solutions</button>
                                        </li>
                                        {/* <li className="nav-item" onClick={() => handleOnClick(5)}>
                                            <button className={activeIndex == 5 ? "nav-link active" : "nav-link"} id="fire-tab" data-bs-toggle="tab" data-bs-target="#fire-tab-pane" type="button" role="tab" aria-controls="fire-tab-pane" aria-selected="false"><i className="flaticon-house" />Fire Insurance</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                                            <button className={activeIndex == 6 ? "nav-link active" : "nav-link"} id="bike-tab" data-bs-toggle="tab" data-bs-target="#bike-tab-pane" type="button" role="tab" aria-controls="bike-tab-pane" aria-selected="false"><i className="flaticon-motorbike" />Bike Insurance</button>
                                        </li> */}
                                        <div className="col-lg-12 mt-14">
                                            <div className="section-title white-title">
                                                <span className="text-lblue text-2xl font-extrabold mb-3">Business Consulting</span>

                                            </div>
                                        </div>
                                        {/* <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex == 1 ? "nav-link active" : "nav-link"} id="health-tab" data-bs-toggle="tab" data-bs-target="#health-tab-pane" type="button" role="tab" aria-controls="health-tab-pane" aria-selected="true"><i className="flaticon-healthcare" /> Health Insurance</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex == 2 ? "nav-link active" : "nav-link"} id="travel-tab" data-bs-toggle="tab" data-bs-target="#travel-tab-pane" type="button" role="tab" aria-controls="travel-tab-pane" aria-selected="false"><i className="flaticon-travel-insurance" />Travel Insurance</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex == 3 ? "nav-link active" : "nav-link"} id="vehicle-tab" data-bs-toggle="tab" data-bs-target="#vehicle-tab-pane" type="button" role="tab" aria-controls="vehicle-tab-pane" aria-selected="false"><i className="flaticon-protection" />Vehicle Insurance</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                                            <button className={activeIndex == 4 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false"><i className="flaticon-ship" />Cargo Insurance</button>
                                        </li> */}
                                        <li className="nav-item" onClick={() => handleOnClick(5)}>
                                            <button className={activeIndex == 5 ? "nav-link active" : "nav-link"} id="fire-tab" data-bs-toggle="tab" data-bs-target="#fire-tab-pane" type="button" role="tab" aria-controls="fire-tab-pane" aria-selected="false">Real Estate Valuation</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                                            <button className={activeIndex == 6 ? "nav-link active" : "nav-link"} id="bike-tab" data-bs-toggle="tab" data-bs-target="#bike-tab-pane" type="button" role="tab" aria-controls="bike-tab-pane" aria-selected="false">Accounting & Finance</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(7)}>
                                            <button className={activeIndex == 7 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false">Manpower Staffing</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(8)}>
                                            <button className={activeIndex == 8 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false">Digital Marketing</button>
                                        </li>
                                    </ul>


                                    <div className={`tab-content ${isMobile ? "hidden" : ""}`} id="myTabContent">
                                        <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="health-tab-pane" role="tabpanel" aria-labelledby="health-tab" tabIndex={0}>
                                            <div className="services__item-four  shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/AI.webp" className="" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Artificial Intelligence</Link></h2>
                                                    <p>Harness the power of Artificial Intelligence (AI) to propel your business to new heights. Our data-driven approach leverages cutting-edge AI and machine learning to transform your operations. Make smarter decisions, streamline processes, and craft personalized customer experiences that drive lasting success</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" /> AI Solutions Tailored for You </li>
                                                            <li><i className="fas fa-check" /> Machine Learning Expertise </li>
                                                            <li><i className="fas fa-check" /> Solve complex challenges and drive innovation </li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="travel-tab-pane" role="tabpanel" aria-labelledby="travel-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Automation.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Automated Solutions</Link></h2>
                                                    <p>Drive substantial business growth through automation. Our strategic approach helps streamline processes, reduce costs, and improve overall efficiency, fostering a robust environment for sustained expansion.
                                                        <br /><br />
                                                        Tailored to meet the unique needs of your business, our solutions enhance operational speed and accuracy, ensuring you stay ahead in a competitive marketplace
                                                    </p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Streamlined Operations</li>
                                                            <li><i className="fas fa-check" />Cost Reduction</li>
                                                            <li><i className="fas fa-check" />Scalability</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="vehicle-tab-pane" role="tabpanel" aria-labelledby="vehicle-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Cloud.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Cloud Infrastructure</Link></h2>
                                                    <p>Drive substantial business growth through robust cloud infrastructure. Our comprehensive suite of services including VPN, VPS, and dedicated servers enhances your operational capabilities. These offerings ensure a secure, scalable, and highly available infrastructure, fostering a resilient environment for sustained expansion.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />VPN Security</li>
                                                            <li><i className="fas fa-check" />VPS Flexibility</li>
                                                            <li><i className="fas fa-check" />Dedicated Servers</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="cargo-tab-pane" role="tabpanel" aria-labelledby="cargo-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Web.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Web Application</Link></h2>
                                                    <p>Tailored to meet the unique needs of your business, our web application solutions enhance online visibility and operational efficiency, ensuring you stay ahead in a competitive marketplace.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Software Development</li>
                                                            <li><i className="fas fa-check" />Website Development</li>
                                                            <li><i className="fas fa-check" />Comprehensive Support</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="fire-tab-pane" role="tabpanel" aria-labelledby="fire-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/RealEstate.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Real Estate Valuation</Link></h2>
                                                    <p>For over a decade, we have provided US-based realtors, brokers, and real estate companies with precise valuations and Comparative Market Analysis (CMA). Our commitment to high-quality, value-driven deliverables ensures that you remain proactive, decisive, and adaptable as your business evolves and expands.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Trusted partner to 150+ US realtors</li>
                                                            <li><i className="fas fa-check" />Round-the-clock support</li>
                                                            <li><i className="fas fa-check" />3X Revenue Growth For Clients</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 6 ? "tab-pane fade show active" : "tab-pane fade"} id="bike-tab-pane" role="tabpanel" aria-labelledby="bike-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/Accounting.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Accounting & Finance</Link></h2>
                                                    <p>We specialize in unlocking accounting gaps and navigating the complexities of tax compliance with confidence and ease. Our suite of services is designed to bring harmony, accuracy, and strategic insight to all your financial processes.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Bookkeeping</li>
                                                            <li><i className="fas fa-check" />Payroll Management</li>
                                                            <li><i className="fas fa-check" />Purchase Order Matching</li>
                                                            <li><i className="fas fa-check" />Accounts Payable & Reconciliation</li>
                                                            <li><i className="fas fa-check" />Tax Preparation, Filings, and Reporting</li>

                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 7 ? "tab-pane fade show active" : "tab-pane fade"} id="bike-tab-pane" role="tabpanel" aria-labelledby="bike-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/ManpowerStaffing.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Manpower Staffing</Link></h2>
                                                    <p>We specialize in placing trained precision and assembly line engineers and other skilled manpower for various sectors. Choose us for a staffing strategy that goes beyond conventional solutions, delivering unparalleled results tailored to your organizational goals. We offer sophisticated solutions encompassing end-to-end recruitment, general staffing, executive hiring, and various other services to meet contractual or permanent hiring needs.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Precision Placements</li>
                                                            <li><i className="fas fa-check" />Client-Centric Approach</li>
                                                            <li><i className="fas fa-check" />Proven Expertise</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 8 ? "tab-pane fade show active" : "tab-pane fade"} id="bike-tab-pane" role="tabpanel" aria-labelledby="bike-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/DigitalMarketing.webp" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Digital Marketing</Link></h2>
                                                    <p>We help you in positioning and promoting your brand, connecting you to new leads at optimum costs and helping you win new & exciting business deals that improve your brand value. Whether its to help you define your digital goals or achieve them, were with you every step of the way.
                                                        <br /><br />
                                                        We help online businesses get better returns on their marketing expenditure, e-commerce sites sell more goods, local businesses dominate their geographic areas and corporate entities have a better brand reputation.
                                                    </p>
                                                    {/* <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div> */}
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="">
                        <img src="/assets/img/project/h3_project_shape01.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        <img src="/assets/img/project/h3_project_shape02.png" alt="" className="alltuchtopdown" />
                    </div> */}
                    {/* <Request3/> */}
                </section>
                {/* services-area-end */}
                {/* brand-area */}


                



            </div>

        </>
    )
}