'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function PricingTable() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            {/* <div className={isToggled ? "pricing__tab selected" : " pricing__tab"}>
                <span className={`pricing__tab-btn monthly_tab_title  ${isToggled ? "active" : ""}`}>Monthly</span>
                <span className={`pricing__tab-switcher ${isToggled ? "active" : ""}`} onClick={handleToggle} />
                <span className={`pricing__tab-btn annual_tab_title ${isToggled ? "active" : ""}`}>Yearly</span>
            </div> */}
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="pricing__box">
                        <div className="pricing__head">
                            <h5 className="title">Basic Service Package</h5>
                        </div>
                        <div className={`pricing__price ${isToggled ? "change-subs-duration" : ""}`}>
                            <h5>
                            Basic Order Acceptance
                            </h5>
                            <h2 className="price monthly_price"><strong>$</strong> 2.00 <span>/ Order</span></h2>
                            {/* <h2 className="price annual_price"><strong>$</strong> 149.00 <span>/ Month</span></h2> */}
                        </div>
                        <div className="pricing__list">
                            <ul className="list-wrap">
                            <h5>
                            Pricing:
                            </h5>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Basic Order Acceptance: $2 per order
                                </li>
                                <h5>
                                Services Included:
                            </h5>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='mb-5'/>
                                    This package offers straightforward order acceptance without data processing, ideal for clients who manage their own data entry and analysis.
                                </li>
                            </ul>
                        </div>
                        <div className="pricing__btn">
                            <Link href="#" className="btn">Get this plan Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="pricing__box">
                        <div className="pricing__head">
                            <h5 className="title">Premium Service Package</h5>
                        </div>
                        <div className={`pricing__price ${isToggled ? "change-subs-duration" : ""}`}>
                        <h5>
                        BPO Advantage Plus
                            </h5>
                            <h2 className="price monthly_price"><strong>$</strong> Custom <span>/ Order</span></h2>
                            {/* <h2 className="price annual_price"><strong>$</strong> 229.00 <span>/ Month</span></h2> */}
                        </div>
                        <div className="pricing__list">
                            <ul className="list-wrap">
                            <h5>
                            Pricing:
                            </h5>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='mb-4' />
                                    Enhanced Order Acceptance (with data processing): $1 per order
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='mb-4'/>
                                    Comprehensive BPO Services (Exterior/Interior/Rental): $8 - $10 per order
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='mb-4'/>
                                    Property Condition Reports and Inspections: $4 per order
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Full Account Management Services: $1 per order
                                </li>
                                <h5>
                                Services Included:
                            </h5>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='mb-4'/>
                                    Full-scale order management including advanced data processing.
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='mb-4'/>
                                    Detailed property evaluations covering exterior, interior, and rental assessments.
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" className='mb-4'/>
                                    Comprehensive account management services from registration to final submission and follow-ups.
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" style={{marginBottom: "70px"}}/>
                                    Complimentary Trial Period: A 3-day free trial to evaluate the quality and impact of our services, showcasing our confidence in delivering exceptional results.
                                </li>
                            </ul>
                        </div>
                        <div className="pricing__btn">
                            <Link href="#" className="btn">Get this plan Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="pricing__box">
                        <div className="pricing__head">
                            <h5 className="title">Corporate Plan</h5>
                        </div>
                        <div className={`pricing__price ${isToggled ? "change-subs-duration" : ""}`}>
                            <h2 className="price monthly_price"><strong>$</strong> 89.00 <span>/ Month</span></h2>
                            <h2 className="price annual_price"><strong>$</strong> 889.00 <span>/ Month</span></h2>
                        </div>
                        <div className="pricing__list">
                            <ul className="list-wrap">
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    5000 User Activities
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Unlimited Access
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    No Hidden Charge
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    03 Time Updates
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Figma Source File
                                </li>
                            </ul>
                        </div>
                        <div className="pricing__btn">
                            <Link href="#" className="btn">Get this plan Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
