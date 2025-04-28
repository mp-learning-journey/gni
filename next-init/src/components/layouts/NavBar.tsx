"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";

const NavBar = () => {
    const route = useRouter();
    const handleGetStarted = () => {
        route.push("/login")
    }

    return (
        <>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/sign-up">Register</Link></li>
                <li><Link href="/login">Login</Link></li>

                <li>
                    <button onClick={handleGetStarted}>Get Started</button>
                </li>
            </ul>
        </>
    )
}

export default NavBar;