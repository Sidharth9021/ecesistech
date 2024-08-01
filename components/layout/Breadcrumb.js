import withLoading from "@/app/withLoading";
import Link from "next/link";
import React, { useEffect, useState } from 'react';

function Breadcrumb({ breadcrumbTitle }) {
    const [isMobile, setIsMobile] = useState(null);
    const [isTab, setIsTab] = useState(null);
    const [isWide, setIsWide] = useState(null);
    const [calculatedWidth, setCalculatedWidth] = useState('');

    useEffect(() => {
        function handleResize() {
            const viewportWidth = window.innerWidth;
            setIsMobile(viewportWidth <= 768);
            setIsTab(viewportWidth > 768 && viewportWidth <= 1024);
            setIsWide(viewportWidth > 2160);
            const vwUnit = viewportWidth / 100;
            const Width = 2.5 * vwUnit; // Replace 48 with whatever vw value you need
            setCalculatedWidth(Width);
        }

        handleResize(); // Set initial size
        window.addEventListener('resize', handleResize); // Adjust on window resize

        return () => window.removeEventListener('resize', handleResize); // Cleanup listener
    }, []);

    // Do not render the component until the screen size is determined
    if (isMobile === null || isTab === null || isWide === null) {
        return null; // or render a loader/spinner here
    }

    const banner = [
        {
            id: "About Us",
            backgroundImageUrl: "/assets/img/banner/about_banner.png",
            backgroundMobile: "/assets/img/banner/about_mobile.png",
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
            backgroundMobile: "/assets/img/banner/contact_mobile.png",
            style: "text-black"
        },
        {
            id: "Digital Marketing",
            backgroundImageUrl: "/assets/img/banner/digital_banner.png",
            backgroundMobile: "/assets/img/banner/digital_mobile.png",
            style: "text-black"
        },
        {
            id: "Artificial Intelligence",
            backgroundImageUrl: "/assets/img/banner/ai_banner.png",
            backgroundMobile: "/assets/img/banner/ai_mobile.png",
            style: "text-white multiple-shadows"
        },
        {
            id: "Software Development",
            backgroundImageUrl: "/assets/img/banner/software_banner.png",
            backgroundMobile: "/assets/img/banner/ai_mobile.png",
            style: "text-sky-900"
        },







    ]
    const matchingBanner = banner.find(item => item.id === breadcrumbTitle);

    return (
        <>
            <section className={`breadcrumb__area breadcrumb__bg_real_estate`}>
                <img src={matchingBanner ? (isMobile && !isTab ? matchingBanner.backgroundMobile : matchingBanner.backgroundImageUrl) : "/assets/img/bg/breadcrumb_bg.jpg"} alt="" className={`${matchingBanner ? matchingBanner.img_style : ""} ${isMobile ? "h-full object-cover" : "object-fill"}  w-full -z-1 top-0`} style={{ maxHeight: isWide ? '' : '400px' }} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="breadcrumb__content">
                                {
                                    isMobile ? (
                                        <></>
                                    ) : (
                                        <h2 className={`title absolute ${matchingBanner ? matchingBanner.style : ""} ml-3 text-left`} style={{ fontSize: `${calculatedWidth}px`, left: '10%', top: '40%' }}>{breadcrumbTitle}</h2>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default withLoading(Breadcrumb);