import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../api/AirtableApis';
import RatingStars from '../components/basics/RatingStars';
import ImageCarousel from '../components/store/ImageCarousel';
import { FaCircle } from 'react-icons/fa';
import ImageCarouselInDetailsPage from '../components/store/ImageCarouselInDetailsPage';
import { IoCall, IoLocationSharp, IoSearchSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import CreativeShareButton from '../components/basics/CreativeShareButton';
import BuyNowButton from '../components/store/BuyNowButton';

import chroma from "chroma-js";
import SearchBar from '../components/store/SearchBar';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isArtistDetailsOpen, setIsArtistDetailsOpen] = useState(false);

    const [color, setColor] = useState("");
    const [otherColors, setOtherColors] = useState([]);
    const a = [];

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            if (!productId) {
                setError('Product ID is missing');
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                const productData = await getProductById(productId);
                setProduct(productData);
            } catch (error) {
                console.error('Error fetching product:');
                setError('Failed to load product details');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-primary-bg">
                <div className="flex justify-center items-center h-[60vh]">
                    <div className="text-primary-text font-forum text-xl">Loading...</div>
                </div>
            </div>
        );
    }

    if (error || !productId) {
        return (
            <div className="min-h-screen bg-primary-bg">
                <div className="flex justify-center items-center h-[60vh]">
                    <div className="text-primary-text font-forum text-xl">
                        {error || 'Product not found'}
                    </div>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-primary-bg">
                <div className="flex justify-center items-center h-[60vh]">
                    <div className="text-primary-text font-forum text-xl">Product not found</div>
                </div>
            </div>
        );
    }



    return (
        <div className="max-xl:pt-16 min-h-screen bg-primary-bg  xl:pt-20">
            <SearchBar />
            <div className="container mx-auto px-4 py-4 md:py-8">
                <div className="flex flex-col xl:flex-row gap-6 md:gap-8">
                    {/* Left side - Image Carousel */}
                    <div className="w-full xl:w-1/2">
                        <ImageCarouselInDetailsPage images={product?.Images} />
                    </div>

                    {/* Right side - Product Details */}
                    <div className="w-full xl:w-[40%] 3xl:w-[35%] text-primary-text">
                        <div className="">
                            <h1 className="mb-2 text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl 3xl:text-7xl font-forum tracking-wide">
                                {product?.Name}
                            </h1>
                            <p className="text-sm md:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-forum tracking-wide mb-6 md:mb-8">
                                {product?.Description && product?.Description}
                            </p>

                            <div className="md:mb-8 mb-6 flex text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-forum">
                                {product?.DiscountedPrice ? (
                                    <div>₹ <s className="text-sm xl:text-base 2xl:text-xl text-red-500">{product?.Price}</s> {product?.DiscountedPrice}</div>
                                ) : (
                                    <div>₹ {product?.Price}</div>
                                )}

                                {product?.Available == 'No' &&
                                    <div className='cursor-pointer w-fit h-fit py-1 px-2 border border-red-300 rounded-lg ml-auto text-base'>Sold Out</div>
                                }
                            </div>



                            {
                                product?.Ratings && product?.Reviews &&
                                <div className="flex items-center">
                                    <RatingStars rating={product?.Ratings} />
                                    <p className="ml-2 text-sm">{product?.Reviews} reviews</p>
                                </div>
                            }


                            {product?.Color &&
                                <div className='flex flex-col color-available mb-6 md:mb-8'>
                                    <p className='mb-2 md:mb-4'>Colors available: </p>
                                    <div className='flex max-md:flex-col'>
                                        <div className='flex'>
                                            {
                                                product?.Color?.map((ele, i) => (
                                                    <div key={i}>
                                                        {(() => {
                                                            try {
                                                                const bgColor = chroma(ele.toLowerCase().replace(/\s+/g, '')).hex();
                                                                return <div className="relative group">
                                                                    <div
                                                                        className={`h-7 w-7 md:h-7 md:w-7 mr-3 rounded-full 
                    ${color.includes(ele) ? 'border-2 border-black outline outline-[2px] outline-primary-text/45' : ""} ${ele == 'Black' && 'border-2 border-black outline outline-[2px] outline-primary-text/45'}`}
                                                                        style={{ backgroundColor: bgColor }}
                                                                        onClick={() => { setColor(ele); console.log(color.includes(ele)); }}
                                                                    ></div>

                                                                    {/* Tooltip */}
                                                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-primary-bg border-2 border-primary-border rounded opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer whitespace-nowrap">
                                                                        {ele}
                                                                    </span>
                                                                </div>
                                                                    ;
                                                            } catch {
                                                                a.push(ele);
                                                                return null;
                                                            }
                                                        })()}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        {
                                            a.length > 0 &&
                                            <>
                                                <div className='mr-1 max-md:mt-2 text-primary-text/60'>Also in:</div>
                                                {
                                                    a.map((ele, i) => (<div className='mr-1 ' key={i}>
                                                        <span className='max-md:hidden'>{i > 0 && ','}</span>
                                                        {ele}
                                                    </div>))
                                                }
                                            </>
                                        }
                                    </div>
                                </div>
                            }
                            <div className='flex mb-6 gap-2'>
                                <BuyNowButton
                                    SHARE_URL={`www.maisonroselifestyle.com/product/${productId}`} color={color} />
                                <CreativeShareButton SHARE_URL={`www.maisonroselifestyle.com/product/${productId}`} />
                            </div>
                            {/* Product Details Section */}
                            <div className="border-t border-primary-border pt-4 md:pt-6" >
                                <h3 className="text-lg md:text-xl 2xl:text-3xl font-forum mb-3 md:mb-4">Product Details</h3>
                                <div className="space-y-4 text-sm md:text-base 2xl:text-lg 3xl:text-xl">
                                    <div className="space-y-2">
                                        <span className="text-gray-400 block">Size:</span>
                                        <div className="flex gap-2">{product?.Sizes?.length > 0 ?
                                            <>
                                                {
                                                    product?.Sizes?.map((ele, i) => (
                                                        <div key={i} className='py-1 px-2 border border-primary-border bg-[#18181840] text-sm xl:text-base rounded-lg cursor-pointer hover:bg-primary-text hover:text-primary-bg'>
                                                            {ele}
                                                        </div>
                                                    ))
                                                }
                                            </>
                                            : <div className='py-1 px-2 border border-primary-border bg-[#18181840] text-sm xl:text-base rounded-lg cursor-pointer hover:bg-primary-text hover:text-primary-bg'>
                                                Freesize
                                            </div>}</div>
                                    </div>

                                    {
                                        product?.Material &&
                                        <div className="space-y-2">
                                            <span className="text-gray-400 block">Material:</span>
                                            <div>{product?.Material || ""} <span className='text-xs text-gray-400'>{product?.CareInstructions ? (`(Preffered: ${product.CareInstructions})`) : ""}</span></div>
                                        </div>
                                    }

                                    <div className="space-y-2">
                                        <span className="text-gray-400 block">Country of Origin:</span>
                                        <div>{product?.CountryOfOrigin || "India"}</div>
                                    </div>

                                    <div className="space-y-2">
                                        <span className="text-gray-400 block">Manufactured & Sold By:</span>
                                        <div className='xl:text-lg 3xl:text-xl'>{product?.Manufacturer || "Maison Rose Lifestyle"}</div>
                                        <div className='flex gap-1'>
                                            <IoLocationSharp className='text-primary-text xl:text-xl' />
                                            <div className="whitespace-pre-line text-sm xl:text-base 3xl:text-lg">
                                                {product?.ManufacturerAddress ||
                                                    `CE/1/B/96, Street no 238, Action Area 1, 
                                                Newtown, Kolkata 700156.
                                                (Near Axis Mall)`}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <MdEmail className='text-primary-text xl:text-xl' />
                                        <a href={`mailto:${product?.ContactEmail || "connect@maisonroselifestyle.com"}`}
                                            className="text-primary-text hover:text-gray-300 block">
                                            {product?.ContactEmail || "maisonroselifestyle@gmail.com"}
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <IoCall className='text-primary-text xl:text-xl' />
                                        <a href={`tel:${product?.ContactPhone || "+91 22-68493328"}`}
                                            className="text-primary-text hover:text-gray-300 block">
                                            {product?.ContactPhone || "+91 6290 433 603"}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Collapsible Sections */}
                            <div className="space-y-4">
                                {/* Product Description */}
                                <div className="border-t border-primary-border pt-4">
                                    <button
                                        className="flex justify-between items-center w-full py-2 text-left font-forum text-base md:text-lg"
                                        onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                                    >
                                        <span className='xl:text-2xl'>Product Description</span>
                                        <span className={`transform transition-transform ${isDescriptionOpen ? 'rotate-180' : ''}`}>▼</span>
                                    </button>
                                    {isDescriptionOpen && (
                                        <div className='flex flex-col gap-2 transform transition-transform'>
                                            <div className="py-3 text-sm md:text-base">
                                                {product?.DetailedDescription}
                                            </div>
                                            <div className="py-3 flex flex-col gap-2 text-sm md:text-base">
                                                {product?.KeyFeatures && <div className='xl:text-2xl font-forum'>Key Features</div>}
                                                {product?.KeyFeatures && product?.KeyFeatures.split('#').map(line => line.trim()).filter(line => line !== '').map((ele, i) => (
                                                    <div className='flex gap-2 text-sm xl:text-lg'>
                                                        <div><FaCircle className='text-primary-text text-xs pt-2' /></div>
                                                        {ele}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Artist Details */}
                                <div className="border-t border-primary-border pt-4">
                                    <button
                                        className="flex justify-between items-center w-full py-2 text-left font-forum text-base md:text-lg"
                                        onClick={() => setIsArtistDetailsOpen(!isArtistDetailsOpen)}
                                    >
                                        <span>Artist Details</span>
                                        <span className={`transform transition-transform ${isArtistDetailsOpen ? 'rotate-180' : ''}`}>▼</span>
                                    </button>
                                    {isArtistDetailsOpen && (
                                        <div className="py-3 text-sm md:text-base">
                                            {product?.ArtistDetails || "No artist details available."}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
