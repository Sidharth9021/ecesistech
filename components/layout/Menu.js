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
                <li className="menu-item-has-children">
                    <Link href="#">Services</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="#">Products</Link>
                </li>
                <li>
                    <Link href="#">Contacts</Link>
                </li>
            </ul>
        </>
    );
}
