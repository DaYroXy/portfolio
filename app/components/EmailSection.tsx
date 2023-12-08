'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialMedia from '../constants/SocialMedia'
import Link from 'next/link'
import React, { useState } from 'react'

const EmailSection = () => {
    const [sent, setSend] = useState(false)

    return (
        <section id="contact" className='grid md:grid-cols-2 py-12 gap-4'>
            <div className="">
                <h2 data-aos="fade-down" className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h2>
                <p data-aos="fade-down" className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    Have questions, ideas, or just want to chat? I&apos;m always open to discussions and collaborations. Find the contact form below and drop me a message. I&apos;ll get back to you as soon as possible.
                </p>
                <div data-aos="fade-up" className="socials flex flex-row gap-6">
                    {SocialMedia.map(({ icon, link, name }, index) => (
                        <Link aria-label={name} key={name + index} href={link}>
                            <FontAwesomeIcon aria-label={name} className="text-white text-2xl" icon={icon} />
                        </Link>
                    ))}
                    {/* <form className='flex flex-col'></form> */}
                </div>
            </div>
            <div className="">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (sent) return;
                    setTimeout(() => {
                        setSend(true)
                    }, 500);

                }} className='flex flex-col gap-4'>
                    <div data-aos="fade-up" className="">
                        <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your Email</label>
                        <input className='bg-[#18191E] px-4 py-4 border border-[#33353F] placeholder-[#9ca2a9] outline-none text-gray-100 text-sm rounded-lg block w-full p-2.5' id="email" type="email" required placeholder='youremail@exmaple.com' />
                    </div>
                    <div data-aos="fade-up" className="">
                        <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
                        <input className='bg-[#18191E] px-4 py-4 border border-[#33353F] placeholder-[#9ca2a9] outline-none text-gray-100 text-sm rounded-lg block w-full p-2.5' id="subject" type="text" required placeholder='Please enter your subject' />
                    </div>
                    <div data-aos="fade-up" className="">
                        <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Message</label>
                        <textarea placeholder='What you wanna talk about?' required className='resize-none min-h-[250px] bg-[#18191E] px-4 border border-[#33353F] placeholder-[#9ca2a9] outline-none text-gray-100 text-sm rounded-lg block w-full py-4' name='message' id='message' />
                    </div>
                    <button data-aos="fade-up" disabled={sent} className={`transition-all rounded-lg w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-5 ${sent ? "cursor-not-allowed" : ""}`}>Send Your Message</button>
                    {sent && (
                        <p className='text-green-500 text-center'>Thank you, I&apos;ll contact you as soon as possible!</p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default EmailSection