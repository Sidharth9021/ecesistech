'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Counter3 from "@/components/sections/Counter3"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import React, { useState, useEffect } from 'react';
import VideoPopup from "@/components/elements/PopupVideo"
import Modal from "../Modal"

export default function About() {
    let Nothome = true;

    const modalContents = [
        {
            title: 'T K Velayudham',
            designation: 'CEO',
            description: (
                <p className="text-xs">
                    T.K. Velayudham is a visionary leader and founder with over 35 years of expertise in establishing and driving successful ventures for clients across the globe. He began his professional journey at Keltron, where he served as an Assistant Manager from 1983 to 1993. During this time, he was the Site-in-Charge for the Metro Railway Automated Fare Collection (AFC) ticketing machine project in Calcutta (now Kolkata), a pioneering initiative that marked the beginning of his long and illustrious career. In 1995, T.K. Velayudham took on the role of Head of Medical Equipment at Terumo Penpol Limited, where he led the development and manufacturing of blood bank equipment. Over the next four years, he played a crucial role in establishing the company as a key player in the healthcare industry, particularly in the production of advanced medical equipment. His entrepreneurial spirit led him to found Enter Technologies Pvt. Ltd. in Technopark in 1999, where he served as Managing Director until 2005. Under his leadership, the company grew into a successful healthcare BPO firm catering to U.S. clients, demonstrating his ability to navigate the complexities of international business. In 2005, he became the Managing Director of Wins Infotek Pvt. Ltd., a software company he promoted as a joint venture with Wins Ltd., Japan. His leadership was instrumental in the company's growth and eventual acquisition by GES, after which it became Kimball Electronics, a Nasdaq-listed company. He held this position until 2009, during which time he expanded the company’s capabilities and market reach. Following this, T.K. Velayudham served as Senior Vice President of New Business Initiatives at Accentia Technologies Ltd., from 2009 to 2010. In this role, he was responsible for business development and setting up operations for one of the largest providers of medical transcription, healthcare revenue cycle management (HRCM), billing, and coding services in India. In 2010, drawing on his vast experience and entrepreneurial acumen, he founded ECESIS, a venture that continues to thrive under his leadership. ECESIS has seen immense growth, becoming a leader in its field, and reflecting T.K. Velayudham’s sustained commitment to excellence and innovation.
                </p>
            ),
            imageUrl: '/assets/img/team/h4_team_img01.jpg',
            linkedInUrl: 'https://www.linkedin.com/in/johndoe'
        },
        {
            title: 'Karthik K V',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    Karthik is an accomplished professional with a strong foundation in Information Technology and a Master of Business Administration in Global Marketing Management from Virginia Commonwealth University, USA. He began his career in Risk Analytics at HSBC Bank Pvt Ltd., where he gained four years of invaluable experience, developing a deep understanding of financial risk management and strategic decision-making.<br /><br /> Currently, Karthik serves as the Director of Strategy and Business Development at ECESIS. In this role, he plays a pivotal part in steering the company’s growth trajectory. Under his leadership, ECESIS has seen immense growth, expanding its service offerings and solidifying its position as the industry leader.
                    <br /><br /> Karthik's strategic vision and business acumen have been instrumental in driving the company's success. He is dedicated to fostering innovation, enhancing operational efficiency, and exploring new market opportunities. His commitment to excellence and forward-thinking approach continues to contribute significantly to the ongoing success and expansion of ECESIS.
                </p>
            ),
            imageUrl: '/assets/img/team/Karthik.png',
            linkedInUrl: 'https://www.linkedin.com/in/janesmith'
        },
        {
            title: 'Anil Appukuttan',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    A Technology & Business leader with 26 years of experience in structuring and managing large outsourcing deals for VC-funded Startups, SMEs, and Fortune 500 companies with a proven track record of delivering excellent results in big international teams as well as building software products, highly competent teams, and companies.<br /><br />
                    Anil specializes in Medicare, Medicaid, and CMS compliance, offering customized Digital Health & Healthcare solutions for providers and payers throughout the United States. Anil’s previous roles include Group President - Healthcare Automation & Hospital Services @ Aveta.ai (California), CEO of Cycloides Inc (Canada), Senior Vice President - Strategic Growth (Digital) of Tangentia Inc (Canada), Technical Program Manager of Wipro Americas, Senior Project Manager of Quest Global, and Research Engineer of C-DAC (India). <br /><br />
                    He also sits on advisory boards and consults for various businesses in North America and South-East Asia. Electronics & Communication Engineer by qualification and Certified Scrum Coach, holds Postgrad.Dip in Computer Applications, Engineering Diploma in Electronics & Avionics, and Diploma in Embedded Systems.
                </p>
            ),
            imageUrl: '/assets/img/team/h4_team_img01.jpg',
            linkedInUrl: 'https://www.linkedin.com/in/janesmith'
        },
        {
            title: 'Saritha N S',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    Saritha brings with her over 20 years of IT experience, making her an integral part of the Ecesis group. As a senior leader, she possesses a growth mindset and a strong passion for driving highly productive IT teams that achieve significant commercial success. <br /><br />
                    Throughout her career, Saritha has excelled in a wide range of roles, from leading large-scale transformation and development programs to ensuring best-in-class SLA-driven operational delivery. Her ability to adapt and thrive in diverse situations has consistently delivered exceptional results. <br /><br />
                    Saritha’s leadership style is defined by her collaborative approach and commitment to innovation. Her experience and strategic insight make her a vital asset to Ecesis, ensuring the company continues to lead in its industry.
                </p>
            ),
            imageUrl: '/assets/img/team/Saritha.png',
            linkedInUrl: 'https://www.linkedin.com/in/janesmith'
        },
        {
            title: 'Shebin Koshy',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    Shebin is a seasoned professional with a wealth of experience in managing client operations in the United Kingdom. His strong interpersonal skills and in-depth knowledge of the UK market have consistently delivered outstanding results. <br /><br />
                    With a career spanning several years, he has established himself as a proficient and trusted resource in the field of client relations. His ability to navigate complex client requirements and provide tailored solutions has earned him a stellar reputation in the industry. <br /><br />Shebin oversees the operations of the Trivandrum center, where he ensures that the highest standards of service are maintained.
                </p>
            ),
            imageUrl: '/assets/img/team/Shebin.png',
            linkedInUrl: 'https://www.linkedin.com/in/janesmith'
        },
        {
            title: 'Pradeep M',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    Pradeep is a distinguished professional with extensive expertise in the KPO industry. With a solid academic foundation, having completed his master's degree in the United Kingdom, Pradeep possesses a deep and comprehensive understanding of the intricacies of the KPO sector. His journey in the KPO business has been marked by a remarkable dedication to excellence. <br /><br />His career spans a range of roles and responsibilities, allowing him to acquire a holistic view of the industry. He has successfully led and managed KPO operations across various domains, showcasing his versatility and adaptability. <br /><br />Pradeep played a crucial role in establishing the Nagercoil center for ECESIS, a significant achievement that highlights his strategic vision and leadership.
                </p>
            ),
            imageUrl: '/assets/img/team/Pradeep.png',
            linkedInUrl: 'https://www.linkedin.com/in/janesmith'
        },
        {
            title: 'Sathi Devi',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    Sathi Devi is a seasoned finance professional responsible for managing the finances and accounts at ECESIS. With her meticulous attention to detail and commitment to accuracy, Sathi ensures that the company's financial operations run smoothly. Her expertise and dedication provide a strong foundation for the company’s financial health, ensuring that every aspect of the finances is handled with care and precision.
                </p>
            ),
            imageUrl: '/assets/img/team/Sathi.png',
            linkedInUrl: 'https://www.linkedin.com/in/janesmith'
        },
        {
            title: 'Arun Sankar',
            designation: 'Director',
            description: (
                <p className="text-sm">
                    Arun is a cornerstone of the ECESIS success story, having been one of the first employees to join the company. His deep involvement across all departments has been instrumental in shaping the company’s growth and achievements. Arun’s multifaceted expertise and unwavering dedication have made him one of the key pillars supporting ECESIS. <br /><br />
                    Currently, Arun oversees software delivery and its operations, ensuring that the company’s solutions meet the highest standards of quality and efficiency. His broad experience and commitment to excellence continue to drive ECESIS forward, solidifying its reputation as a leader in the industry.

                </p>
            ),
            imageUrl: '/assets/img/team/Arun.png',
            linkedInUrl: 'https://www.linkedin.com/in/janesmith'
        },

    ];


    const [isMobile, setIsMobile] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalIndex, setModalIndex] = useState(null);

    const handlePageClick = (index) => {
        if (!showModal) {  // Only update position and show modal if it is not already open
            setShowModal(true);
            setModalIndex(index);
        }
    };

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
                                        <img src="/assets/img/bg/bg_about_photos.png" className={`${isMobile ? 'scale-150 mt-20' : ''} about_photo_bg`} style={{ marginLeft: isMobile ? '50px' : '', }} alt="" />

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
                                                    <li><i className="flaticon-arrow-button" />Extensive Industry Knowledge</li>
                                                    <li><i className="flaticon-arrow-button" />Innovative and Adaptive Culture</li>
                                                    <li><i className="flaticon-arrow-button" />Strategic Vision for Long-Term Growth</li>
                                                </ul>
                                            </div>
                                            {/* <div className="about__list-img-two">
                                                <img src="/assets/img/images/about_list_img02.png" alt="" />
                                            </div> */}
                                        </div>
                                        <p>We’ve transformed from a BPO provider into a global leader, offering a diverse portfolio of services including software development, digital marketing, and staffing solutions. Our evolution is guided by a forward-thinking approach that anticipates the needs of tomorrow’s markets.
                                            <br /><br />Driven by our dedication to client success, we continuously innovate to stay ahead of industry trends. Our strategic agility and commitment to excellence make us the trusted partner for companies navigating transformative journeys in a rapidly changing world.</p>
                                        {/* <Link href="/services" className="btn">Know More</Link> */}
                                    </div>
                                </div>
                                <div className={`services__details-inner-img ${isMobile ? '' : 'justify-center'}  flex mt-6`} >
                                    <img src="/assets/img/services/h3_services_img01.jpg" className="object-cover object-top" style={{ height: isMobile ? "200px" : "350px", width: isMobile ? '100%' : "60%" }} alt="" />
                                    <VideoPopup />

                                </div>
                            </div>
                        </div>
                    </section>
                    <Counter3 />

                    {/* team-area */}
                    <section className="team__area-four relative">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="section-title text-center mb-40">
                                        <span className="sub-title">MEET OUR TEAM</span>
                                        <h2 className="title">Business Expertise Is Here <br /> For You Can Trust</h2>
                                    </div>
                                </div>
                            </div>
                            {modalIndex !== null && showModal && (
                                <Modal
                                    showModal={showModal}
                                    setShowModal={() => {
                                        setShowModal(false);
                                        setModalIndex(null);  // Reset the modal index when closing the modal
                                    }}
                                    title={modalContents[modalIndex]?.title || ''}
                                    description={modalContents[modalIndex]?.description || ''}
                                    imageUrl={modalContents[modalIndex]?.imageUrl || '/default/path/to/image.jpg'}
                                    email={modalContents[modalIndex]?.email || 'default@email.com'}
                                    linkedInUrl={modalContents[modalIndex]?.linkedInUrl || 'https://www.linkedin.com'}
                                />
                            )}
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(0) }}>
                                    <div className="team__item-four shine-animate-item" >
                                        <div className="team__thumb-four shine-animate" >
                                            <img src="/assets/img/team/TKV.png" alt="" />
                                        </div>
                                        <div className="team__content-four bg-slate-200">
                                            <h2 className="title">T K Velayudham</h2>
                                            <span className="text-black">CEO</span>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(1) }}>
                                    <div className="team__item-four shine-animate-item">
                                        <div className="team__thumb-four shine-animate">
                                            <img src="/assets/img/team/Karthik.png" alt="" />
                                        </div>
                                        <div className="team__content-four bg-slate-200">
                                            <h2 className="title">Karthik K V</h2>
                                            <span className="text-black">Director</span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row justify-center">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(2) }}>
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/h4_team_img01.jpg" alt="" />
                                            </div>
                                            <div className="team__content-four bg-slate-200">
                                                <h2 className="title">Anil Appukuttan</h2>
                                                <span className="text-black">Director <br /> (North America)</span>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(3) }}>
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/Saritha.png" alt="" />
                                            </div>
                                            <div className="team__content-four bg-slate-200">
                                                <h2 className="title"><Link href="/team-details">Saritha N S</Link></h2>
                                                <span className="text-black">Vice President <br />Software Engineering</span>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(4) }}>
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/Shebin.png" alt="" />
                                            </div>
                                            <div className="team__content-four bg-slate-200">
                                                <h2 className="title"><Link href="/team-details">Shebin Koshy</Link></h2>
                                                <span className="text-black">Asst. General Manager <br /> Operations</span>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row justify-center">
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(5) }}>
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/Pradeep.png" alt="" />
                                            </div>
                                            <div className="team__content-four bg-slate-200">
                                                <h2 className="title"><Link href="/team-details">Pradeep M</Link></h2>
                                                <span className="text-black">Asst. General Manager <br /> Operations</span>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(6) }}>
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/Sathi.png" alt="" />
                                            </div>
                                            <div className="team__content-four bg-slate-200">
                                                <h2 className="title"><Link href="/team-details">Sathi Devi</Link></h2>
                                                <span className="text-black">General Manager <br /> Finance</span>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 z-0 relative" onClick={() => { handlePageClick(7) }}>
                                        <div className="team__item-four shine-animate-item">
                                            <div className="team__thumb-four shine-animate">
                                                <img src="/assets/img/team/Arun.png" alt="" />
                                            </div>
                                            <div className="team__content-four bg-slate-200">
                                                <h2 className="title"><Link href="/team-details">Arun Sankar</Link></h2>
                                                <span className="text-black">Asst. Vice President <br /> Business Development</span>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* team-area-end */}

                </div >
            </Layout >
        </>
    )
}