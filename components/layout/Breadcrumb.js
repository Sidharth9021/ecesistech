'use client'
import Link from "next/link";
import React, { useEffect, useState } from 'react';


export default function Breadcrumb({ breadcrumbTitle }) {

    const [isMobile, setIsMobile] = useState(false);
    const [isTab, setIsTab] = useState(false);
    const [isWide, setIsWide] = useState(false);
    const [calculatedWidth, setCalculatedWidth] = useState('');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsTab(window.innerWidth > 768 && window.innerWidth <= 1024);
            setIsWide(window.innerWidth > 2160);

            const viewportWidth = window.innerWidth; // Get the viewport width
            const vwUnit = viewportWidth / 100; // Calculate the value of 1vw
            const Width = 2.5 * vwUnit; // Replace 48 with whatever vw value you need
            setCalculatedWidth(Width);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const banner = [
        {
            id: "About Us",
            backgroundImageUrl: "/assets/img/banner/about_banner.png",
            backgroundMobile: "/assets/img/bg/breadcrumb_bg.jpg",
            style: ""
        },
        {
            id: "Real Estate Valuations",
            backgroundImageUrl: "/assets/img/banner/real-estate-banner4.png",
            backgroundMobile: "/assets/img/banner/real-estate_mobile.png",
            style: "text-white multiple-shadows"
        },
        {
            id: "Manpower Staffing",
            backgroundImageUrl: "/assets/img/banner/manpower_banner2.png",
            backgroundMobile: "/assets/img/banner/manpower_mobile.png",
            style: "text-white multiple-shadows",
            img_style: "max-h-96"
        },
        {
            id: "Accounting & Finance",
            backgroundImageUrl: "/assets/img/banner/accounting_banner.jpeg",
            backgroundMobile: "/assets/img/banner/accounting_mobile.png",
            style: "text-white multiple-shadows"
        },
        {
            id: "Let’s get in touch",
            backgroundImageUrl: "/assets/img/banner/contact_banner.jpg",
            backgroundMobile: "/assets/img/banner/accounting_mobile.png",
            style: "text-black"
        },
        {
            id: "Digital Marketing",
            backgroundImageUrl: "/assets/img/banner/digital_banner.png",
            backgroundMobile: "/assets/img/banner/accounting_mobile.png",
            style: "text-black"
        },
        {
            id: "Artificial Intelligence",
            backgroundImageUrl: "/assets/img/banner/ai_banner.png",
            backgroundMobile: "/assets/img/banner/accounting_mobile.png",
            style: "text-white multiple-shadows"
        },






    ]
    const matchingBanner = banner.find(item => item.id === breadcrumbTitle);



    return (
        <>
            <section className={`breadcrumb__area breadcrumb__bg_real_estate`}>

                <img src={matchingBanner ? (isMobile && !isTab ? matchingBanner.backgroundMobile : matchingBanner.backgroundImageUrl) : "/assets/img/bg/breadcrumb_bg.jpg"} alt="" className={`${matchingBanner ? matchingBanner.img_style : ""} ${isMobile ? "h-full object-cover" : "object-fill"}  w-full -z-1 top-0 `} style={{ maxHeight: isWide ? '' : '' }} />

                <div className="container">

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb__content">
                                {
                                    isMobile ? (
                                        <></>

                                    ) : (
                                        <h2 className={`title absolute dynamic-size  ${matchingBanner ? matchingBanner.style : ""} ml-3 text-left`} style={{ fontSize: `${calculatedWidth}px` }}>{breadcrumbTitle}</h2>

                                    )
                                }
                                {/* <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{breadcrumbTitle}</li>
                                    </ol>
                                </nav> */}
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    );
}
