'use client'
import Image from "next/image"
import AboutImage from "@/public/aboutimage.png"
import { useState } from 'react'
import TabButton from "./TabButton"
import TabData from "../constants/TabData"

const Tabs = [
    "Languages",
    "Technologies",
    "Cyber Security",
    "Operating Systems",
    "Servers",
    "Education",
]

const AboutSection = () => {
    const [tab, setTab] = useState("Languages")
    const [isPendingTransition, startTransition] = useState();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section id="about">
            <div className="text-white">
                <div className="md:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:16">
                    <div data-aos="fade-right" className=" relative flex items-center justify-center">
                        <Image src={AboutImage} width={500} height={500} className="h-full w-full object-cover" alt="image" />
                    </div>
                    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                        <h2 data-aos="fade-down" className="text-5xl font-bold mb-4 mt-2 md:mt-0">About Me</h2>
                        <p data-aos="fade-left" className="text-base md:text-lg">
                            I&apos;m dayroxy, a passionate software engineer with a strong inclination towards cybersecurity. My fascination doesn&apos;t stop at coding. I take immense pleasure in managing my homelab, where I handle multiple servers, predominantly utilizing Proxmox for virtualization. Network security is my fav. I enjoy hardening and isolating networks, ensuring optimal protection.
                        </p>
                        <div data-aos="fade-left" className="flex flex-row flex-wrap mt-8 gap-y-2 gap-3">
                            {Tabs.map((currentTab, index) => (
                                <TabButton
                                    selectTab={() => handleTabChange(currentTab)}
                                    key={index}
                                    active={tab === currentTab}
                                >{" "} {currentTab} {" "} </TabButton>
                            ))}
                        </div>
                        <div className="mt-8">
                            {TabData.find((t) => t.id === tab)?.content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection