import Link from "next/link"
import '../../app/globals.css'

export default function Menu() {
    return (
        <>
            <ul className="navigation">
                <li className="active"><Link href="#">Home</Link>
                </li>
                <li className="menu-item-has-children"><Link href="#">About Us</Link>
                    <ul className="sub-menu">
                        <li><Link href="/about">Business About</Link></li>
                        <li><Link href="/about-2">Finance About</Link></li>
                        <li><Link href="/about-5">Consulting About</Link></li>
                        <li><Link href="/about-3">Insurance About</Link></li>
                        <li><Link href="/about-4">Digital agency About</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="#">Services</Link>
                    <ul className="sub-menu">
                        <li><Link href="/services">Business Service</Link></li>
                        <li><Link href="/services-2">Finance Service</Link></li>
                        <li><Link href="/services-3">Consulting Service</Link></li>
                        <li><Link href="/services-4">Insurance Service</Link></li>
                        <li><Link href="/services-5">Digital agency Service</Link></li>
                        <li><Link href="/services-details">Service Details One</Link></li>
                        <li><Link href="/services-details-2">Service Details Two</Link></li>
                        <li><Link href="/services-details-3">Service Details Three</Link></li>
                        <li><Link href="/services-details-4">Service Details Four</Link></li>
                        <li><Link href="/services-details-5">Service Details Five</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="#">Pages</Link>
                    <ul className="sub-menu">
                        <li><Link href="/team">Team One</Link></li>
                        <li><Link href="/team-2">Team Two</Link></li>
                        <li><Link href="/team-3">Team Three</Link></li>
                        <li><Link href="/team-4">Team Four</Link></li>
                        <li><Link href="/team-details">Team Details</Link></li>
                        <li><Link href="/project-details">Project Details</Link></li>
                        <li><Link href="/error">404 Error Page</Link></li>
                        <li><Link href="/login">Login Page</Link></li>
                        <li><Link href="/register">Register Page</Link></li>
                        <li><Link href="/forgot-password">Forgot password Page</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="#">Blog</Link>
                    <ul className="sub-menu">
                        <li><Link href="/blog">Our Blog</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">contacts</Link></li>
            </ul>
        </>
    )
}
