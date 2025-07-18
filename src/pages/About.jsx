import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import Menuarrow from '../components/cafe/Menuarrow'
import Menuarrow2 from '../components/cafe/Menuarrow2'

const schedule = [
    { day: "Monday", hours: "16:00 - 22:30" },
    { day: "Tuesday", hours: "16:00 - 22:30" },
    { day: "Wednesday", hours: "16:00 - 22:30" },
    { day: "Thursday", hours: "16:00 - 22:30" },
    { day: "Friday", hours: "16:00 - 22:30" },
    { day: "Saturday", hours: "16:00 - 22:30" },
    { day: "Sunday", hours: "16:00 - 22:30" },
];

const About = () => {
    const latitude = 22.635068880827603;
    const longitude = 88.46552255397063;
    const mapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${latitude},${longitude}&zoom=14`;
    const redirectUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const handleMapClick = () => {
        window.open(redirectUrl, "_blank");
    };

    return (
        <div className='max-xl:pt-16 bg-primary-bg h-full'>
            <Helmet>
                <title>About Maison Rose Lifestyle | Thai-Inspired Fashion & Gourmet Café in Kolkata</title>
                <meta name="description" content="Discover Maison Rose Lifestyle - A unique blend of Thai-inspired fashion boutique and gourmet café in New Town, Kolkata. Experience our curated collection and exquisite dining." />
                <meta name="keywords" content="Maison Rose Lifestyle, Thai fashion Kolkata, gourmet cafe New Town, fashion boutique Kolkata, luxury dining Kolkata" />
                <meta property="og:title" content="About Maison Rose Lifestyle | Fashion & Dining Experience in Kolkata" />
                <meta property="og:description" content="Visit Maison Rose Lifestyle in New Town, Kolkata - Where Thai fashion meets gourmet dining. Experience our unique blend of style and taste." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://maisonroselifestyle.com/about" />
                <link rel="canonical" href="https://maisonroselifestyle.com/about" />
            </Helmet>

            {/* Mobile Layout */}
            <div className='xl:hidden flex xl:flex-row flex-col xl:gap-6 gap-3 xl:p-6 p-3 bg-primary-bg xl:h-screen xl:min-h-screen w-full cafe-bg-img'>

                <div className='relative h-46 w-full'>
                    <img
                        src="https://res.cloudinary.com/dtc7gtofw/image/upload/v1752392039/coffeeMug_f8qlr5.png"
                        alt="Maison Rose Lifestyle's signature coffee experience in New Town, Kolkata"
                        className='h-full w-full rounded-xl'
                        loading="lazy"
                    />
                    <div className='absolute bottom-2 left-2 text-5xl tracking-wider text-white font-forum'>ABOUT US</div>
                </div>

                <div className='w-full flex flex-col gap-4 text-primary-text font-forum'>
                    <h1 className="text-2xl tracking-wide">Welcome to Maison Rose Lifestyle</h1>
                    <p className="text-lg">
                        Located in the heart of New Town, Kolkata, Maison Rose Lifestyle is a unique destination
                        where Thai-inspired fashion meets gourmet dining. Our boutique offers carefully curated
                        fashion pieces while our café serves exquisite beverages and delicacies.
                    </p>
                </div>

                <div className='w-full flex flex-col rounded-xl py-5 px-5 border-2 border-primary-border overflow-hidden'>
                    <div className='flex w-full text-primary-text font-forum tracking-wide justify-center items-center gap-2 py-2 whitespace-nowrap'>
                        <Menuarrow />
                        <h2 className="text-primary-text font-forum text-center text-xl tracking-widest">
                            OPENING HOURS
                        </h2>
                        <Menuarrow2 />
                    </div>

                    {/* timings */}
                    <div className='flex flex-col px-4 mt-2 gap-4 h-full overflow-scroll no-scrollbar'>
                        {schedule.map((ele, i) => (
                            <div key={i} className='flex gap-4 text-primary-text font-forum'>
                                <div className='w-fit'>{ele.day}</div>
                                <div className='overflow-hidden tracking-widest'>..............................................</div>
                                <div className='whitespace-nowrap'>{ele.hours}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* contact us */}
                <div className='flex flex-col w-full rounded-xl py-5 px-5 border-2 border-primary-border'>
                    <div className='flex w-full justify-center items-center gap-2'>
                        <Menuarrow />
                        <h2 className="text-primary-text font-forum text-center text-xl tracking-widest">
                            GET IN TOUCH
                        </h2>
                        <Menuarrow2 />
                    </div>
                    <div className="flex flex-col h-full w-full gap-2 mt-10">
                        <div className='flex w-full font-forum justify-between text-primary-text'>
                            <h3 className="tracking-widest">ADDRESS</h3>
                            <p className="">CE/1/B/96, Street no 238, Action Area 1<br />Newtown Kolkata - 700156, Near Axis Mall</p>
                        </div>
                        <div className='flex w-full font-forum justify-between text-primary-text'>
                            <h3 className="tracking-widest">PHONE</h3>
                            <p className="">+91 62904 33603</p>
                        </div>
                        <div className='flex w-full font-forum justify-between text-primary-text'>
                            <h3 className="tracking-widest">EMAIL</h3>
                            <p className="">maisonroselifestyle@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className='w-full rounded-xl overflow-hidden border-2 border-primary-border' >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.0719559852205!2d88.46191888828407!3d22.574951497702656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02756b64107939%3A0xafb999e2f3e20a97!2sSymphony%20Housing%20Society!5e1!3m2!1sen!2sin!4v1733584244520!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* social media connect */}
                <div className='flex justify-center text-primary-text rounded-xl py-3 gap-3 border-2 border-primary-border w-full'>
                    <a href='https://www.instagram.com/maison.rose.lifestyle?igsh=MXJlMGpqZTRtOGU2ZA==' target='_blank' rel='noopener noreferrer'>
                        <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><FaInstagram /></div>
                    </a>
                    <a href='https://www.facebook.com/maison.rose.lifestyle?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
                        <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><TiSocialFacebookCircular className='text-xl' /></div>
                    </a>
                </div>

            </div>

            <div className='hidden xl:block xl:h-screen bg-primary-bg cafe-bg-img '>
                <div className='hidden xl:grid grid-cols-4 xl:p-6 xl:gap-6 h-screen w-full'>
                    <div className='relative col-span-2 h-full overflow-hidden  rounded-2xl'>
                        <img src="./contact/aboutus.png" alt="Maison Rose Lifestyle's boutique and café in New Town, Kolkata" className='z-[1]  absolute bottom-0' />

                        <div className='absolute bottom-7 left-7 font-forum text-white z-[2] text-8xl'>
                            ABOUT US
                        </div>

                        {/* Links to social media */}
                        <div className='absolute z-[4] rounded-ss-2xl p-3 text-white bottom-0 right-0 bg-primary-bg links'>
                            <div className='w-full flex items-center gap-2'>
                                <a href='https://www.instagram.com/maison.rose.lifestyle?igsh=MXJlMGpqZTRtOGU2ZA==' target='_blank' rel='noopener noreferrer'>
                                    <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><FaInstagram /></div>
                                </a>
                                <a href='https://www.facebook.com/maison.rose.lifestyle?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
                                    <div className='flex items-center justify-center border-[1px] border-primary-border w-8 h-8 rounded-full bg-[#18181850] hover:bg-primary-pink hover:text-black'><TiSocialFacebookCircular className='text-xl' /></div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col col-span-2 h-full w-full gap-4'>
                        <div className='h-1/2 w-full flex gap-4'>
                            <div className='w-1/2 flex flex-col rounded-xl py-5 px-5 border-2 border-primary-border overflow-hidden'>
                                <div className='flex w-full text-primary-text font-forum tracking-wide justify-center items-center gap-2 py-2 whitespace-nowrap'>
                                    <Menuarrow />
                                    <h2 className="text-primary-text font-forum text-center text-xl tracking-widest ">
                                        OPENING HOURS
                                    </h2>
                                    <Menuarrow2 />
                                </div>

                                {/* timings */}
                                <div className='flex flex-col px-4 mt-2 justify-between h-full overflow-scroll no-scrollbar'>
                                    {schedule.map((ele, i) => (
                                        <div key={i} className='flex gap-4 text-primary-text font-forum'>
                                            <div className='w-fit'>{ele.day}</div>
                                            <div className='overflow-hidden tracking-widest'>..............................................</div>
                                            <div className='whitespace-nowrap'>{ele.hours}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* images section */}
                            <div className='w-1/2 grid grid-cols-2 grid-rows-2 gap-2 rounded-xl'>
                                <div className='overflow-hidden rounded-xl'>
                                    <img src="https://res.cloudinary.com/dtc7gtofw/image/upload/v1752391893/coffee_w9gj7n.jpg" alt="Maison Rose Lifestyle's gourmet coffee experience in Kolkata" className='h-full w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='h-1/2 w-full flex gap-4'>
                            <div className='w-1/2 rounded-xl overflow-hidden border-2 border-primary-border' >
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.0719559852205!2d88.46191888828407!3d22.574951497702656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02756b64107939%3A0xafb999e2f3e20a97!2sSymphony%20Housing%20Society!5e1!3m2!1sen!2sin!4v1733584244520!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            {/* Contact Us */}
                            <div className='flex flex-col w-1/2 rounded-xl py-5 px-5 border-2 border-primary-border'>
                                <div className='flex w-full justify-center items-center gap-2'>
                                    <Menuarrow />
                                    <h2 className="text-primary-text font-forum text-center text-xl tracking-widest ">
                                        GET IN TOUCH
                                    </h2>
                                    <Menuarrow2 />
                                </div>
                                <div className="flex flex-col h-full w-full gap-2 mt-10">
                                    <div className='flex w-full font-forum justify-between text-primary-text'>
                                        <h3 className="tracking-widest">ADDRESS</h3>
                                        <div className="whitespace-pre-line text-right text-sm xl:text-base 3xl:text-lg">
                                            CE/1/B/96, Street no 238,
                                            <br />
                                            Action Area 1,
                                            Newtown, <br />Kolkata 700156.
                                            <br />(Near Axis Mall)
                                        </div>
                                    </div>
                                    <div className='flex w-full font-forum justify-between text-primary-text'>
                                        <h3 className="tracking-widest">PHONE</h3>
                                        <a
                                            href="tel:+916290433603"
                                            className="text-primary-text/80 hover:text-primary-pink transition-colors"
                                        >
                                            +91 62904 33603
                                        </a>
                                    </div>
                                    <div className='flex w-full font-forum justify-between text-primary-text'>
                                        <h3 className="tracking-widest">EMAIL</h3>
                                        <a
                                            href="mailto:maisonroselifestyle@gmail.com"
                                            className="text-primary-text/80 hover:text-primary-pink transition-colors break-all"
                                        >
                                            maisonroselifestyle@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default About