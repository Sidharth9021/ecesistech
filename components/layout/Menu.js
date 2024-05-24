import Link from "next/link";
import axios from "axios";
import * as Sentry from "@sentry/nextjs";

export default function Menu() {
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
                <li className="active">
                    <Link href="">Home</Link>
                </li>
                <li>
                    <Link href="#">About Us</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="#">Services</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="#">Products</Link>
                </li>
                <li>
                    <Link href="#">contacts</Link>
                </li>
            </ul>
        </>
    );
}
