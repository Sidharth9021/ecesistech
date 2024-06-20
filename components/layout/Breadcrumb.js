'use client'
import Link from "next/link";
import React, { useEffect, useState } from 'react';


export default function Breadcrumb({ breadcrumbTitle }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const banner = [
        {
            id: "About Us",
            backgroundImageUrl: "/assets/img/bg/breadcrumb_bg.jpg",
            backgroundMobile : "/assets/img/bg/breadcrumb_bg.jpg",
            style: ""
        },
        {
            id: "Real Estate Valuations",
            backgroundImageUrl: "/assets/img/banner/real-estate-banner4.png",
            backgroundMobile : "/assets/img/banner/mobile_static_real_estate.png",
            style: "text-white"
        },
        {
            id: "Manpower Staffing",
            backgroundImageUrl: "/assets/img/banner/manpower_banner2.png",
            backgroundMobile : "/assets/img/banner/manpower_banner2.png",
            style: "text-black",
            img_style: "max-h-96"
        },

  
    ]
    const matchingBanner = banner.find(item => item.id === breadcrumbTitle);



    return (
        <>
            <section className={`breadcrumb__area breadcrumb__bg_real_estate`}>
       
                <img src={matchingBanner ? (isMobile ? matchingBanner.backgroundMobile :  matchingBanner.backgroundImageUrl) : "/assets/img/bg/breadcrumb_bg.jpg"} alt="" className={`absolute ${matchingBanner ? matchingBanner.img_style : ""} ${isMobile ? "h-full object-cover" : "object-fill"}  w-full -z-1 top-0 `} />

                    <div className="container">

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="breadcrumb__content">
                                    {
                                        isMobile && breadcrumbTitle === "Real Estate Valuations" ? (
                                            <h2 className={`title ${matchingBanner ? matchingBanner.style : ""} ml-3 text-left`}></h2>

                                        ) : (
                                            <h2 className={`title ${matchingBanner ? matchingBanner.style : ""} ml-3 text-left`}>{breadcrumbTitle}</h2>

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
