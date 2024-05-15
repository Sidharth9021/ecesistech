'use client'
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import { useState } from "react";

export default function MainService() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
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
                                    <h2 className="text-lblue text-5xl">Our Services</h2>
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

                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <div className="col-lg-12">
                                            <div className="section-title white-title ">
                                                <span className="text-lblue text-2xl font-extrabold">Digital Solutions</span>

                                            </div>
                                        </div>
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex == 1 ? "nav-link active" : "nav-link"} id="health-tab" data-bs-toggle="tab" data-bs-target="#health-tab-pane" type="button" role="tab" aria-controls="health-tab-pane" aria-selected="true">Artificial Intelligence</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex == 2 ? "nav-link active" : "nav-link"} id="travel-tab" data-bs-toggle="tab" data-bs-target="#travel-tab-pane" type="button" role="tab" aria-controls="travel-tab-pane" aria-selected="false">RPA </button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex == 3 ? "nav-link active" : "nav-link"} id="vehicle-tab" data-bs-toggle="tab" data-bs-target="#vehicle-tab-pane" type="button" role="tab" aria-controls="vehicle-tab-pane" aria-selected="false">Cloud Infrastructure</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                                            <button className={activeIndex == 4 ? "nav-link active" : "nav-link"} id="cargo-tab" data-bs-toggle="tab" data-bs-target="#cargo-tab-pane" type="button" role="tab" aria-controls="cargo-tab-pane" aria-selected="false">Web Application</button>
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


                                    <div className="tab-content" id="myTabContent">
                                        <div className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="health-tab-pane" role="tabpanel" aria-labelledby="health-tab" tabIndex={0}>
                                            <div className="services__item-four  shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img01.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Artificial Intelligence</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="travel-tab-pane" role="tabpanel" aria-labelledby="travel-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img02.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">RPA</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="vehicle-tab-pane" role="tabpanel" aria-labelledby="vehicle-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img01.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Cloud</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="cargo-tab-pane" role="tabpanel" aria-labelledby="cargo-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img02.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Web Application</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="fire-tab-pane" role="tabpanel" aria-labelledby="fire-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img01.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Real Estate Valuation</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 6 ? "tab-pane fade show active" : "tab-pane fade"} id="bike-tab-pane" role="tabpanel" aria-labelledby="bike-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img02.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Accounting & Finance</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 7 ? "tab-pane fade show active" : "tab-pane fade"} id="bike-tab-pane" role="tabpanel" aria-labelledby="bike-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img02.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Manpower Staffing</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
                                                    <Link href="/services-details" className="btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex == 8 ? "tab-pane fade show active" : "tab-pane fade"} id="bike-tab-pane" role="tabpanel" aria-labelledby="bike-tab" tabIndex={0}>
                                            <div className="services__item-four shine-animate-item">
                                                <div className="services__thumb-four shine-animate">
                                                    <img src="/assets/img/services/h3_services_img02.jpg" alt="" />
                                                </div>
                                                <div className="services__content-four">
                                                    <h2 className="title"><Link href="/services-details">Digital Marketing</Link></h2>
                                                    <p>Explore our savings, quality care and wellness solutions to craft the perfect plan for your busineshen an unknown printer.</p>
                                                    <div className="about__list-box">
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check" />Business Growth</li>
                                                            <li><i className="fas fa-check" />Analysis  Research</li>
                                                            <li><i className="fas fa-check" />100% Secure</li>
                                                        </ul>
                                                    </div>
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
                </section>
                {/* services-area-end */}
                {/* brand-area */}
                <div className="brand__area-five">
                    <div className="container">
                        <div className="swiper-container brand-active">
                            <BrandActiveSlider />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}