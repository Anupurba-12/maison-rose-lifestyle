import React, { useEffect, useRef, useState } from 'react'
import '../styles/cafe.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Menuarrow from '../components/cafe/Menuarrow'
import Menuarrow2 from '../components/cafe/Menuarrow2'
import { cafeCategories, cafeMenu } from '../constants/menu'
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'
import { GiCrossMark } from 'react-icons/gi'

const Cafe = () => {
    const [selectedItem, setSelectedItem] = useState('https://res.cloudinary.com/dtc7gtofw/image/upload/v1752391893/coffee_w9gj7n.jpg');
    const [selectedItemName, setSelectedItemName] = useState('Cafe');


    const p1 = useRef(null);
    const p2 = useRef(null);
    const p3 = useRef(null);

    const scrollToPart = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });

    };


    // useEffect(() => {
    //     ComboToast()
    // }, [])




    return (
        <div className='max-xl:pt-16 bg-primary-bg h-full'>
            <div className='flex xl:flex-row flex-col xl:gap-6 gap-3 xl:p-6 p-3 bg-primary-bg xl:h-screen xl:min-h-screen cafe-bg-img'>

                {/* combo alert  */}
                <div className="hidden xl:block absolute bottom-1/2 xl:bottom-5 bg-primary-bg p-4 border-2 border-[#e0c097] rounded-xl right-10 text-center leading-6" id='Combo-Alert-Div'>
                    <div className='absolute top-5 right-5' ><GiCrossMark className='text-[#e0c097]' onClick={() => { document.getElementById('Combo-Alert-Div').style.display = 'none' }} /></div>
                    <h3 className="text-[#e0c097]  mb-2 text-xl font-bold whitespace-nowrap">
                        🎉 *EXCLUSIVE ALERT* 🎉
                    </h3>
                    <p className="text-white text-base mb-3 animate-bounce">
                        🌟 Discover Combos That Will Steal Your Heart! 🌟
                        <br />
                        Enjoy unbeatable deals and delicious flavors in one bite!
                    </p>
                    <NavLink
                        to="/combos"
                        className="inline-block bg-gradient-to-r from-[#e0c097] to-[#ffda77] text-[#1f1f1f] py-3 px-6 rounded-full font-bold text-base no-underline shadow-[0_0_5px_#ffda77,0_0_10px_#e0c097] transition-transform duration-300 ease-in-out hover:scale-120 animate-pulse"
                    >
                        🚀 Explore Combos Now!
                    </NavLink>
                </div>


                <div className='xl:flex hidden relative w-1/2 text-white bg-black rounded-2xl'>

                    <div className='mt-[125px]   mx-auto'>
                        <div className='mx-auto h-[300px] w-[400px] rounded-xl  overflow-hidden'>
                            <img src={selectedItem} alt="selected item" className='w-full h-full rounded-xl' />
                        </div>
                        <div className='mt-5 text-4xl uppercase text-center tracking-widest font-forum'>
                            {selectedItemName}
                        </div>
                    </div>

                    {/* links to social media  */}
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
                    <div className='absolute bottom-14 right-5  z-[1]'>
                        <img src="./background/bamboo.svg" alt="bamboo" />
                    </div>
                    <div className='absolute bottom-0 left-10  z-[1]'>
                        <img src="./background/teapot.svg" alt="teapot" className='text-white' />
                    </div>
                </div>


                <div className='flex flex-col gap-2 xl:w-1/2 w-full xl:h-full h-[90%]'>
                    {/* menu list  */}
                    <div className='border-2 h-full  xl:px-20 px-6 xl:py-5 py-2 border-primary-border rounded-xl'>
                        <div className='xl:py-2 xl:h-14 flex justify-center menu-cat'>
                            <div className='flex gap-2'>
                                <div className='py-2 px-3 text-sm text-primary-text tracking-wider cursor-pointer font-sans rounded-lg border-2 border-primary-border hover:bg-primary-bg hover:bg-opacity-90' onClick={() => scrollToPart(p1)}>PIZZA</div>
                                <div className='py-2 px-3 text-sm text-primary-text tracking-wider cursor-pointer font-sans rounded-lg border-2 border-primary-border hover:bg-primary-bg hover:bg-opacity-90' onClick={() => scrollToPart(p2)}>SNACKS</div>
                                <div className='py-2 px-3  text-sm text-primary-text tracking-wider cursor-pointer font-sans rounded-lg border-2 border-primary-border hover:bg-primary-bg hover:bg-opacity-90' onClick={() => scrollToPart(p3)}>BEVERAGES</div>
                            </div>
                        </div>
                        <div className='flex flex-col xl:h-[90%] h-[90%] items-center xl:mt-2  w-full overflow-scroll no-scrollbar'>

                            {cafeCategories.map((category) => {
                                const menuCategory = cafeMenu.find((menu) => menu.category == category.category);
                                if (menuCategory)
                                    return (
                                        <React.Fragment key={category.category}>
                                            {/* Category Header */}
                                            <div className="flex justify-center gap-2 xl:mt-6 mt-4 item-heading">
                                                <Menuarrow />
                                                {
                                                    menuCategory.category == 'Pizza' ?
                                                        <h1 className="font-forum text-xl text-primary-text tracking-widest" ref={p1}>{menuCategory.category.toUpperCase()}</h1>

                                                        :
                                                        menuCategory.category == 'French Fries' ?
                                                            <h1 className="font-forum text-xl text-primary-text tracking-widest" ref={p2}>{menuCategory.category.toUpperCase()}</h1>
                                                            :
                                                            menuCategory.category == 'Beverages' ?
                                                                <h1 className="font-forum text-xl text-primary-text tracking-widest" ref={p3}>{menuCategory.category.toUpperCase()}</h1> :
                                                                <h1 className="font-forum text-xl text-primary-text tracking-widest">{menuCategory.category.toUpperCase()}</h1>

                                                }
                                                <Menuarrow2 />
                                            </div>

                                            {/* Category Items */}
                                            <div className="flex flex-col gap-3 w-full mt-1">
                                                {menuCategory.items.map((item) => (
                                                    <div key={item.name} className="flex gap-4 w-full items-list" onClick={() => { setSelectedItem(item.imageurl); setSelectedItemName(item.name) }}>
                                                        {/* Item Image */}
                                                        <div className="xl:h-[80px] xl:w-[120px] h-[40px] w-[70px] rounded-xl overflow-hidden">
                                                            <img
                                                                src={item.imageurl || `./menu/${menuCategory.category}/${item.name.replace(/ /g, '-')}.png`}
                                                                alt={item.name.toLowerCase().replace(/ /g, '-')}
                                                                className="object-cover"
                                                            />
                                                        </div>

                                                        {/* Item Details */}
                                                        <div className="flex flex-col flex-grow justify-center h-full">
                                                            <div className="flex justify-between">
                                                                <div className="item-name text-primary-text font-forum uppercase tracking-wider xl:text-base text-sm">{item.name}</div>
                                                                <div className="font-forum text-primary-text xl:text-lg text-sm tracking-wide price">₹ {item.price}</div>
                                                            </div>
                                                            <div className="xl:block hidden text-xs tracking-wider text-primary-text menu-item-description">
                                                                {item.description}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </React.Fragment>
                                    );
                            })}

                        </div>
                    </div>

                </div>
            </div >
        </div>
    )
}

export default Cafe