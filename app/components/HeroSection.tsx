'use client'
import DayroxyImage from "@/public/HeroImage2.png"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialMedia from "../constants/SocialMedia";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-6xl font-extrabold">
                        <span className="animate-fade animate-once animate-duration-[800ms] animate-ease-in-out text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500">Hello, I&apos;m {" "}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'DaYroXy',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Software Engineer',
                                1000,
                                'Cyber Security PT',
                                1000,
                                'Web Developer',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={1}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="animate-fade animate-once animate-duration-[1500ms] animate-ease-in-out text-[#ADB7BE] text-2xl mb-6">
                        A guy who likes programming and doing random stuff. I try to use the latest technologies to create websites and apps!
                    </p>
                    <div className="mt-10 md:flex items-center lg:block xl:flex">
                        <Link href="/#contact">
                            <button className="animate-fade-down animate-once animate-duration-[1000ms] animate-ease-in-out px-6 py-4 w-full rounded-full sm:w-fit mr-4 text-xl hover:bg-slate-200 mb-4 sm:mb-0 bg-gradient-to-br from-yellow-500 via-red-500 to-orange-500 text-white">
                                Contact Me
                            </button>
                        </Link>
                        <Link href="/#about">
                            <button className="animate-fade-down animate-once animate-duration-[1500ms] animate-ease-in-out px-1 py-1 w-full rounded-full sm:w-fit bg-transparent text-xl bg-gradient-to-br from-yellow-500 via-red-500 to-orange-500">
                                <span className="block transition-all text-white bg-[#121212] hover:bg-[#202020] rounded-full px-5 py-3">About Me</span>
                            </button>
                        </Link>
                        <div className="flex md:ml-6 mt-6 mb-3 lg:mt-6 md:my-0 xl:mt-0 justify-center sm:justify-start gap-10 items-center">
                            {SocialMedia.map(({ icon, link, name }, index) => (
                                <a key={index} href={link}>
                                    <div className="animate-fade-down animate-once animate-duration-[1800ms] animate-ease-in-out rounded-full relative bg-gradient-to-br p-[2px] from-yellow-500 via-red-500 to-orange-500 flex items-center justify-center">
                                        <div className="w-[45px] h-[45px] rounded-full  bg-[#121212] p-2 flex items-center justify-center">
                                            <FontAwesomeIcon className="text-white text-2xl" icon={icon} />
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="animate-jump animate-once animate-duration-[800ms] animate-ease-in-out col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-gradient-to-r relative bg-[#161616] sm:w-[450px] sm:h-[450px] w-[325px] h-[325px]">
                        <Image className="rounded-[100px] absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" width={400} height={400} src={DayroxyImage} alt="DaYroXy_Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection