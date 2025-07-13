import React, { useState, useEffect } from 'react';
import DealCard from './DealCard';

const deals = [
    {
        title: "Luxury Spa Package",
        description: "Complete pedicure, manicure, and nail art session",
        price: 2499,
        originalPrice: 4999,
        validUntil: "March 31",
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Premium Nail Art",
        description: "Gel extension with custom design and crystals",
        price: 1499,
        originalPrice: 2999,
        validUntil: "March 31",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Bridal Package",
        description: "Complete bridal nail makeover with premium finishes",
        price: 3499,
        originalPrice: 6999,
        validUntil: "March 31",
        image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800"
    }
];

export default function RotatingDeals() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % deals.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {deals.map((deal, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <DealCard {...deal} />
                    </div>
                ))}
            </div>
        </div>
    );
}