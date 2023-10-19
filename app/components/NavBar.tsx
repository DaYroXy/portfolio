'use client'
import Link from "next/link"
import NavLink from "./NavLink"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX, faXmark } from "@fortawesome/free-solid-svg-icons"
import MenuOverlay from "./MenuOverlay"
import hat from "@/public/hat.png"
import Image from "next/image"

const navLinks = [
    {
        title: "About",
        href: '/#about'
    },
    {
        title: "Contact",
        href: '/#contact'
    },
]

const NavBar = () => {

    const [navOpen, setNavOpen] = useState(false)

    return (
        <nav className={`fixed top-0 right-0 left-0 z-10 bg-[#121212] ${navOpen ? 'bg-opacity-100' : 'bg-opacity-90'}`}>
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={'/'} className="animate-fade-right animate-once animate-duration-[1500ms] animate-ease-in-out text-3xl sm:text-5xl text-white font-semibold">
                    <Image src={hat} width={55} height={55} alt="hat" />
                </Link>
                <div className="mobile-menu block md:hidden text-white">
                    {navOpen ? (
                        <button onClick={() => setNavOpen(!navOpen)}>
                            <FontAwesomeIcon className="border py-2 px-2 w-[25px] h-[25px] rounded-lg" icon={faXmark} />
                        </button>
                    ) : (
                        <button onClick={() => setNavOpen(!navOpen)}>
                            <FontAwesomeIcon className="animate-fade-left animate-once animate-duration-[1500ms] animate-ease-in-out border py-2 px-2 w-[25px] h-[25px] rounded-lg" icon={faBars} />
                        </button>
                    )}
                </div>
                <div className="animate-fade-left animate-once animate-duration-[1500ms] animate-ease-in-out menu hidden md:block md-w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map(({ title, href }, index) => (
                            <li key={index}>
                                <NavLink title={title} href={href} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navOpen && <MenuOverlay navLinks={navLinks} />}
        </nav>
    )
}

export default NavBar