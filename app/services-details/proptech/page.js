import Layout from '@/components/layout/Layout'
import Banner_prop from '@/components/sections/Banner_prop'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Counter3 from '@/components/sections/Counter3';


export default function Proptech() {
    let Nothome = true;
    return (
        <>
            <Layout headerStyle={3} footerStyle={3} Nothome={Nothome}>
                <Banner_prop />


                {/* Hero Section */}
                <section className="text-center py-12">
                    <div className="container">
                        <h1 className="text-4xl font-bold mb-3">AI & PropTech Solutions for the Real Estate Industry</h1>
                        <p className="text-xl mb-6">Empowering Real Estate with 14+ Years of Technological Excellence</p>
                        <p className='title'>We offer cutting-edge PropTech solutions designed to optimize operations, enhance decision-making, and drive growth.
                            With our expertise in AI, custom software development, and web design, we deliver tailored solutions that address your unique challenges.
                        </p>
                        <Link href="/services-details/proptech " className="btn">Experience the ECESIS difference. Contact us for a free consultation</Link>
                        {/* <Image src="/path/to/hero-image.jpg" alt="ECESIS Hero Image" width={1200} height={400} className="mx-auto" /> */}

                    </div>


                </section>

                {/* About Us */}
                <section className="my-12">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-center mb-6">ECESIS: Propelling Real Estate Forward with AI</h2>
                        <p className="text-lg">
                            ECESIS is a visionary PropTech company dedicated to revolutionizing the real estate industry through cutting-edge technology. With a proven track record of delivering innovative solutions, we empower clients to achieve unprecedented success.
                        </p>
                        <div className="flex justify-center mt-6">
                            <Image src="/path/to/about-image.jpg" alt="About ECESIS" width={600} height={400} />
                        </div>
                    </div>


                </section>

                {/* Core Values */}
                <section className="bg-gray-100 py-12">
                    <div className="container">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold">Core Values</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <h4 className="font-bold">Innovation</h4>
                                <p>Embracing new technologies to deliver groundbreaking solutions.</p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold">Client-Centricity</h4>
                                <p>Building strong partnerships based on trust and collaboration.</p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold">Expertise</h4>
                                <p>Leveraging our deep industry knowledge to drive results.</p>
                            </div>
                            <div className="text-center">
                                <h4 className="font-bold">Excellence</h4>
                                <p>Delivering exceptional products and services that exceed expectations.</p>
                            </div>
                        </div>
                    </div>


                </section>
                <Counter3 />

                {/* Services */}
                <section className="my-12">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-center mb-6">Services</h2>
                        <div className="">
                            {/* Each service with an image and description */}
                            <div className="service mt-20">
                                <h3 className="text-2xl font-bold mb-2">Artificial Intelligence in Real Estate</h3>
                                <Image src="/path/to/ai-service-image.jpg" alt="AI in Real Estate" width={500} height={300} />
                                <p>ECESIS harnesses the power of AI to transform the real estate landscape, streamline property management, enhance decision-making, and automate routine tasks.</p>
                                <div className="about__list-box">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-arrow-alt-circle-right" /><span className='font-semibold'>PropVision:</span> Our advanced image recognition software provides valuable insights from property images.</li>
                                        <li><i className="fas fa-arrow-alt-circle-right" /><span className='font-semibold'>Smart Value:</span> Our AI-powered valuation tool offers accurate property valuations.</li>
                                        <li><i className="fas fa-arrow-alt-circle-right" /><span className='font-semibold'>Predictive Analytics</span> Utilize AI to predict market trends and optimize investment strategies.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="service mt-20">
                                <h3 className="text-2xl font-bold mb-2">Custom Software Development</h3>
                                <Image src="/path/to/custom-software-image.jpg" alt="Custom Software" width={500} height={300} />
                                <p>ECESIS delivers tailored software solutions to meet your specific needs in real estate business operations.</p>
                                <div className="about__list-box">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-arrow-alt-circle-right" /><span className='font-semibold'>Property Management Systems:</span> Streamline operations with custom-built property management software.</li>
                                        <li><i className="fas fa-arrow-alt-circle-right" /><span className='font-semibold'>CRM Integration:</span> Enhance customer relationships with seamless CRM integration.</li>
                                        <li><i className="fas fa-arrow-alt-circle-right" /><span className='font-semibold'>Custom Applications:</span> Develop specialized tools to solve your business challenges.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="service mt-20">
                                <h3 className="text-2xl font-bold mb-2">Web Development</h3>
                                <Image src="/path/to/custom-software-image.jpg" alt="Custom Software" width={500} height={300} />
                                <p>Your website is your digital storefront. ECESIS creates stunning, user-friendly websites optimized for real estate businesses.</p>
                                <div className="about__list-box">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-arrow-alt-circle-right" /><span className='font-semibold'>Responsive Design:</span>  Ensure your website looks great on all devices.</li>
                                        <li><i className="fas fa-arrow-alt-circle-right" /><span className='font-semibold'>User Experience:</span> Create intuitive designs that engage visitors.</li>
                                        <li><i className="fas fa-arrow-alt-circle-right" /><span className='font-semibold'>SEO Optimization:</span> Improve search engine visibility for increased traffic.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="service mt-20">
                                <h3 className="text-2xl font-bold mb-2">Comprehensive PropTech Solutions</h3>
                                <Image src="/path/to/custom-software-image.jpg" alt="Custom Software" width={500} height={300} />
                                <p>ECESIS offers a range of specialized services to address the complex challenges facing the real estate industry.</p>
                                <div className="about__list-box">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-arrow-alt-circle-right" /><span className='font-semibold'>PropTech Consulting & Software Audit:</span> Our experts provide in-depth analysis of your tech stack to identify opportunities for improvement and optimization.</li>
                                        <li><i className="fas fa-arrow-alt-circle-right" /><span className='font-semibold'>Legacy System Modernization:</span> Upgrade outdated systems to enhance performance, security, and user experience.</li>
                                        <li><i className="fas fa-arrow-alt-circle-right" /><span className='font-semibold'>AI Document Processing:</span> Automate document-intensive tasks with our AI-powered solutions, saving time and reducing errors.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>


                </section>

                {/* Industry Expertise Section */}
                <section className="my-12 bg-gray-50 py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-6">Industry Expertise</h2>
                        <p className="text-lg mb-6">
                            Deep Knowledge, Proven Results With 14+ years of experience in the real estate and technology sectors, ECESIS brings a wealth of knowledge to every project. We understand the unique challenges of the real estate industry and know how to leverage technology to address them effectively.
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Experience Across Real Estate Verticals: We’ve worked with clients in residential, commercial, and industrial real estate, providing tailored solutions that meet the needs of each sector.</li>
                            <li>Technological Leadership: Our team stays at the cutting edge of technology, continuously exploring new tools and methods to keep our clients ahead of the competition.</li>
                        </ul>
                    </div>
                </section>

                {/* Our Approach Section */}
                <section className="my-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-6">Our Approach</h2>
                        <p className="text-lg mb-6 text-center">
                            Client-Centric, Results-Driven At ECESIS, our approach is simple: we put our clients first. We work closely with you to understand your unique needs, and then develop tailored solutions that deliver real results. From the initial consultation to the final implementation, we’re with you every step of the way.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                                <p>We start by understanding your business, your challenges, and your goals.</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mb-2">Development</h3>
                                <p>Our team designs and develops solutions that are customized to your needs.</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mb-2">Support</h3>
                                <p>After implementation, we provide ongoing support to ensure you continue to get the most out of your investment.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="bg-blue-400 text-white text-center py-12">
                    <div className="container">
                        <h2 className="text-3xl font-bold mb-3">Start Your Journey with ECESIS</h2>
                        <p className="mb-6 text-white">Ready to Innovate? Let’s Talk. Contact us today to learn more about how our PropTech solutions can transform your real estate business.</p>
                        <p className="mb-6 text-white">Whether you’re looking to automate your operations, engage more effectively with clients, or simply stay ahead in a competitive market, ECESIS is here to help. Contact us today to learn more about how our PropTech solutions can transform your real estate business.</p>
                        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">
                            Contact Us for a Free Consultation
                        </button>
                    </div>


                </section>

                {/* Client Success Stories */}
                <section className="my-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Client Success Stories</h2>
                    {/* Case studies or testimonials */}
                </section>
            </Layout>
        </>



    )
}
