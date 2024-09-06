'use client'
import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Banner2 from "@/components/sections/Banner2"
import Counter3 from "@/components/sections/Counter3"
import Request3 from "@/components/sections/Request3"
import MainService from "@/components/sections/MainService"
import Marquee2 from "@/components/sections/Marquee2"
import withLoading from "./withLoading"
import LazyLoad from "react-lazyload"
import React, { useRef } from 'react';



function Home() {

    const mainServiceRef = useRef(null); // Create a ref



    return (
        <>

            <Layout headerStyle={3} footerStyle={3}>
                <Banner2 scrollRef={mainServiceRef} />
                <Marquee2 />
                <About3 />
                <LazyLoad height={100} offset={250} once>
                    <Counter3 />
                </LazyLoad>
                <div ref={mainServiceRef}><MainService /></div>
            </Layout>
        </>
    )
}

export default withLoading(Home);