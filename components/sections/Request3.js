import Link from 'next/link'

export default function Request3() {
    return (
        <>
            <section className="request__area-two">
                <div className="request__bg-two" data-background="/assets/img/bg/h2_request_bg.jpg" />
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-xl-5 col-lg-6">
                            <div className="request__content-two">
                                <h2 className="title font-semibold">We want to hear about what you're building</h2>
                                <div className="request__phone">
                                    <div className="icon">
                                        <i className="flaticon-phone-call" />
                                    </div>
                                    <div className="content">
                                        <Link href="#" className='but'>Let's Connect</Link>
                                    </div>
                                </div>
                                {/* <Link href="tel:0123456789" className="btn">Request a Free Call</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
