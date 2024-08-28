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
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Case Studies" Nothome={Nothome}>
                <section className="services__details-area main-font">
                    <div className="container">
                        <div className="services__details-wrap">
                            <div className="flex flex-col">
                                <Link href="/case-study/horse-and-barn">
                                    <div className="w-full rounded-3xl md:rounded-md bg-slate-300 flex flex-row border-2">
                                        <div className={`${isMobile ? 'w-full' : 'w-[30%]'}`}>
                                            <img src="/assets/img/case/horse_barn.png" alt="" className="rounded-3xl md:rounded-l-md object-cover" />

                                        </div>
                                        {isMobile ? null : (
                                            <div className="content-center ml-4 p-2">
                                                <h2 className="md:text-3xl text-base">From Complexity to Clarity: How a Single Website Drove 3X Revenue Growth</h2>
                                            </div>

                                        )}


                                    </div>
                                </Link>

                            </div>



                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default withLoading(CaseStudy);