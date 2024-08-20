import Link from "next/link"
import { useState } from "react"

export default function MobileMenu({ handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <ul className="navigation" >
                <li className="active" onClick={handleMobileMenu}><Link href="/">Home</Link>
                    {/* <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/">01. Business</Link></li>
                        <li><Link href="index-2">02. Finance</Link></li>
                        <li><Link href="index-3">03. Consulting</Link></li>
                        <li><Link href="index-4">04. Insurance</Link></li>
                        <li><Link href="index-5">05. Digital agency</Link></li>
                        <li><Link href="/index-6">06. Finance Solutions</Link></li>
                        <li><Link href="/index-7">07. Accounting Services</Link></li>
                        <li><Link href="/index-8">08. IT Solutions</Link></li>
                    </ul> */}
                    {/* <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="plus-line" /></div> */}
                </li>
                <li className="" onClick={handleMobileMenu}><Link href="/about">About Us</Link>
                    {/* <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="about">Business About</Link></li>
                        <li><Link href="about-2">Finance About</Link></li>
                        <li><Link href="about-5">Consulting About</Link></li>
                        <li><Link href="about-3">Insurance About</Link></li>
                        <li><Link href="about-4">Digital agency About</Link></li>
                    </ul> */}
                    {/* <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="plus-line" /></div> */}
                </li>
                <li className="menu-item-has-children" ><Link href="#">Services</Link>
                    <ul className="sub-menu" onClick={handleMobileMenu} style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li className="menu-item-has-children">
                            <Link href="#">Digital Solutions</Link>
                            <ul onClick={handleMobileMenu} style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                <li><Link href="/services-details/proptech">PropTech</Link></li>
                                <li><Link href="/services-details/artificial-intelligence">Artificial Intelligence</Link></li>
                                <li><Link href={`/services-details/automation`}>Automated Solutions</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <Link href="#">Business Consulting</Link>
                            <ul onClick={handleMobileMenu} style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                <li><Link href={`/services-details/real-estate-valuation`}>Real Estate Valuation</Link></li>
                                <li><Link href={`/services-details/accounting-finance`}>Accounting & Finance</Link></li>
                                <li><Link href={`/services-details/manpower-staffing`}>Manpower Staffing</Link></li>
                                <li><Link href={`/services-details/digital-marketing`}>Digital Marketing</Link></li>
                            </ul>
                        </li>
                        {/* <li><Link href={`/services-details/artificial-intelligence`}>Artificial Intelligence</Link></li>
                        <li><Link href={`/services-details/automation`}>Automated Solutions</Link></li>
                        <li><Link href={`/services-details/cloud-infrastructure`}>Cloud Infrastructure</Link></li>
                        <li><Link href={`/services-details/web-app`}>Web Application</Link></li>
                        <li ><Link href={`/services-details/real-estate-valuation`}>Real Estate Valuation</Link></li>
                        <li><Link href={`/services-details/accounting-finance`}>Accounting & Finance</Link></li>
                        <li><Link href={`/services-details/manpower-staffing`}>Manpower Staffing</Link></li> */}
                        {/* <li><Link href={`/services-details/digital-marketing`}>Digital Marketing</Link></li> */}
                    </ul>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="plus-line" /></div>
                </li>
                <li className="menu-item-has-children"><Link href="#">Products</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <p className="ml-3 font-bold text-dblue mt-3">Property Tech</p>
                        <li><Link href={`/services-details/artificial-intelligence`}>SmartValue</Link></li>
                        <li><Link href={`/services-details/automation`}>SmartEntry</Link></li>
                        <li><Link href={`/services-details/cloud-infrastructure`}>SmartBid</Link></li>
                        <li><Link href={`/services-details/web-app`}>PropVision</Link></li>
                        <p className="ml-3 font-bold text-dblue mt-3">RPA</p>

                        <li><Link href={`/services-details/real-estate-valuation`}>Workflow Automation Platform</Link></li>
                        <li><Link href={`/services-details/accounting-finance`}>i-EMS</Link></li>
                        <p className="ml-3 font-bold text-dblue mt-3">Other Industry</p>

                        <li><Link href={`/services-details/manpower-staffing`}>i-Match Pro</Link></li>
                        <li><Link href={`/services-details/digital-marketing`}>i-Grow</Link></li>
                        <li><Link href={`/services-details/digital-marketing`}>i-Slot</Link></li>
                    </ul>
                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="plus-line" /></div>
                </li>
                {/* <li className="menu-item-has-children"><Link href="#">Blog</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li><Link href="blog">Our Blog</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="plus-line" /></div>
                </li> */}
                <li><Link href="/contact">contacts</Link></li>
            </ul>
        </>
    )
}
