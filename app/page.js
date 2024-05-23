import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Banner2 from "@/components/sections/Banner2"
import Counter3 from "@/components/sections/Counter3"
import Request3 from "@/components/sections/Request3"
import MainService from "@/components/sections/MainService"
import Marquee2 from "@/components/sections/Marquee2"

export default function Home() {
    return (
        <>

            <Layout headerStyle={3} footerStyle={3}>
                <Banner2 />
                <Marquee2 />
                {/* <Brand3 /> */}
                <About3 />
                <Counter3 />
                <MainService/>
                {/* <Services4/> */}
                {/* <Choose3 /> */}
                {/* <Project3 /> */}
                <Request3 />
                {/* <Team3 />
                <Testimonial3 />
                <Callback2 /> */}
                {/* <BlogPost3 /> */}
            </Layout>
        </>
    )
}