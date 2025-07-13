import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/loader.css';

const WhatnewCard = ({ item }) => {
    const [hover, setHover] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div
            className='relative h-48 w-32 xl:h-80 xl:w-52 rounded-xl overflow-hidden transition-all duration-100'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover && (
                <div className='hidden absolute cursor-pointer py-8 gap-20 xl:flex flex-col justify-end h-full w-full bg-white bg-opacity-60 z-10'>
                    <div className='mx-auto text-3xl font-forum text-center cursor-pointer'>{item?.Name}</div>
                    <NavLink
                        to={`/fashion-store/new/${item?.Tag}`}
                        className='w-8/12 mx-auto tracking-widest bg-white flex justify-center items-center font-forum h-fit py-3 hover:bg-primary-bg hover:text-primary-text'
                    >
                        EXPLORE
                    </NavLink>
                </div>
            )}

            <div className='flex absolute bottom-0 cursor-pointer xl:hidden flex-col justify-end h-[50%] w-full bg-white bg-opacity-50 z-10'>
                <div className='mx-auto text-base font-forum text-center cursor-pointer'>{item?.Name}</div>
                <NavLink
                    to={`/fashion-store/new/${item?.Tag}`}
                    className='w-8/12 mx-auto bg-white flex justify-center text-xs items-center font-forum h-fit py-1 hover:bg-primary-bg hover:text-primary-text mb-3'
                >
                    EXPLORE
                </NavLink>
            </div>
            {/* Custom Loader */}
            {!imageLoaded && (
                <div className='absolute inset-0 flex flex-col items-center justify-center bg-[#FDF8F5]'>
                    <div className="loader"></div>
                </div>
            )}

            {item?.CoverImg && item?.CoverImg[0] && (
                <img
                    src={item?.CoverImg[0].url}
                    alt={item?.Name || "Product Image"}
                    className={`h-full w-full transition-all duration-700 ease-in-out ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                    onLoad={() => setImageLoaded(true)}
                />
            )}
            {/* Overlay fade effect when image is loading */}
            <div
                className={`absolute inset-0 bg-gradient-to-t from-[#FDF8F5] to-transparent transition-opacity duration-700 ${imageLoaded ? 'opacity-0' : 'opacity-40'
                    }`}
            ></div>
        </div>
    );
};

export default WhatnewCard;