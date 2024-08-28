'use client'
import withLoading from "@/app/withLoading"
import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"
import React, { useEffect, useState } from 'react';

function AccountingServices() {

    const [isMobile, setIsMobile] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false); // New state to track if all components have loaded

    let Nothome = true;

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
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Schedule a Meeting" Nothome={Nothome}>
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                            <div class="calendly-inline-widget" data-url="https://calendly.com/ecesisdigitalsolutions/30min?primary_color=00235f" style={{minWidth:'320px', height:'700px'}}></div>
                            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                            </div>
                        </div>
                    </section>

                </div>
            </Layout>
        </>
    )
}

export default withLoading(AccountingServices);