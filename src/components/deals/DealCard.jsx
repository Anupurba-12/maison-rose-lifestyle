import React, { useState } from 'react';
import { Tag, Clock, Star } from 'lucide-react';
import DealModal from './DealModal';
import { dealInclusions } from './DealContants';



export default function DealCard({
    title,
    description,
    price,
    originalPrice,
    validUntil,
    image,
    featured,
    rating,
    seasonal
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

    return (
        <>
            <div
                onClick={() => setIsModalOpen(true)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 cursor-pointer ${featured ? 'border-2 border-rose-500' : ''
                    }`}
            >
                <div className="relative">
                    <img src={image} alt={title} className="w-full h-64 object-cover" />
                    <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span>{discount}% OFF</span>
                    </div>
                    {featured && (
                        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>Featured</span>
                        </div>
                    )}
                    {seasonal && (
                        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>Seasonal</span>
                        </div>
                    )}
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-serif text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>

                    {rating && (
                        <div className="flex items-center mb-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                            ))}
                        </div>
                    )}

                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-2xl font-bold text-rose-500">₹{price}</div>
                            <div className="text-sm text-gray-500 line-through">₹{originalPrice}</div>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>Valid until {validUntil}</span>
                        </div>
                    </div>
                </div>
            </div>

            <DealModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                deal={{
                    title,
                    description,
                    price,
                    originalPrice,
                    image,
                    inclusions: dealInclusions[title] || []
                }}
            />
        </>
    );
}