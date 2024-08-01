'use client'
import Link from "next/link";
import axios from "axios";
import * as Sentry from "@sentry/nextjs";
import React, { useEffect, useState } from "react";


export default function Menu() {

    const [activePath, setActivePath] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Set the active path from window.location.pathname
            setActivePath(window.location.pathname);
        }
    }, []);
    // const testsentry = async () => {
    //     try {
    //         const response = await axios.post('http://192.168.2.159:8000/api/move_reject_folder/', { rejectedOptions, username: username });
    //         if (response.data) {
    //             navigatehome();
    //         }
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         Sentry.captureException(error);  // Capture the error with Sentry
    //     }
    // };

    return (
        <>
            <ul className="navigation">
                <li className={activePath === "/" ? "active" : ""}>
                    <Link href="/">Home</Link>
                </li>
                <li className={activePath === "/about" ? "active" : ""}>
                    <Link href="/about">About Us</Link>
                </li>
                <li className="menu-item-has-children"><Link href="#">Services</Link>
                    <ul className="sub-menu">
                        <li><Link href={`/services-details/artificial-intelligence`}>Artificial Intelligence</Link></li>
                        <li><Link href={`/services-details/automation`}>Automated Solutions</Link></li>
                        <li><Link href={`/services-details/cloud-infrastructure`}>Cloud Infrastructure</Link></li>
                        <li><Link href={`/services-details/web-app`}>Web Application</Link></li>
                        <li><Link href={`/services-details/real-estate-valuation`}>Real Estate Valuation</Link></li>
                        <li><Link href={`/services-details/accounting-finance`}>Accounting & Finance</Link></li>
                        <li><Link href={`/services-details/manpower-staffing`}>Manpower Staffing</Link></li>
                        <li><Link href={`/services-details/digital-marketing`}>Digital Marketing</Link></li>
                        <li><Link href={`/services-details/software-development`}>Software Development</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link href="#">Products</Link>

                    <ul className="sub-menu">
                        <p className="ml-3 font-bold text-dblue">Property Tech</p>
                        <li><Link href={`/project-details/smart-value`}>SmartValue</Link></li>
                        <li><Link href={`/project-details/smart-entry`}>SmartEntry</Link></li>
                        <li><Link href={`/project-details/smart-bid`}>SmartBid</Link></li>
                        <li><Link href={`/project-details/propvision`}>PropVision</Link></li>
                        <p className="ml-3 font-bold text-dblue mt-3">RPA</p>

                        <li><Link href={`/project-details/workflow-automation`}>Workflow Automation Platform</Link></li>
                        <li><Link href={`/project-details/i-EMS`}>i - EMS</Link></li>
                        <p className="ml-3 font-bold text-dblue mt-3">Other Industry</p>

                        <li><Link href={`/project-details/i-Match`}>i - Match Pro</Link></li>
                        <li><Link href={`/project-details/i-Grow`}>i - Grow</Link></li>
                        <li><Link href={`/project-details/i-Slot`}>i - Slot</Link></li>

                    </ul>
                </li>
                <li>
                    <Link href="/contact">Contacts</Link>
                </li>
                <li>
                    <Link href="/project-details">Project</Link>
                </li>
            </ul>
        </>
    );
}
