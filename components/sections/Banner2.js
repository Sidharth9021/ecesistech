import Link from 'next/link'
import Banner from '../../public/assets/img/banner/banner.png'

export default function Banner2() {
    return (
        <>
            <section className="banner__area-two banner__bg-two object-cover" data-background="/assets/img/banner/banner2.png">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner__content-two">
                                <h2 className="text-4xl" data-aos="fade-up" data-aos-delay={100}>Empowering Global Innovation: <span className='text-xl'> Your Partner in Technology Transformation and Customer-Centric Growth</span></h2>
                                <Link href="/contact" className="btn border-btn" data-aos="fade-up" data-aos-delay={600}>Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-social banner-social-two">
                    <h5 className="title">Follow us</h5>
                    <ul className="list-wrap">
                        <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                        <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                    </ul>
                </div>
                <div className="banner__shape-two">
                    <img src="/assets/img/banner/h3_banner_shape01.png" alt="" className="heartbeat" />
                </div>
            </section>
        </>
    )
}
