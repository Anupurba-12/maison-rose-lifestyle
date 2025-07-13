import React from 'react';
import DealCard from './DealCard';

const seasonalDeals = [
    {
        title: "Spring Special Package",
        description: "Refreshing treatments inspired by spring flowers and renewal",
        price: 3999,
        originalPrice: 7999,
        validUntil: "March 31",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
        rating: 4,
        seasonal: true
    },
    {
        title: "Wedding Season Bundle",
        description: "Complete bridal party package with premium services",
        price: 5999,
        originalPrice: 11999,
        validUntil: "March 31",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
        rating: 5,
        seasonal: true
    },
    {
        title: "Festival Ready Package",
        description: "Special occasion package with trending designs and treatments",
        price: 4499,
        originalPrice: 8999,
        validUntil: "March 31",
        image: "https://images.unsplash.com/photo-1607779097040-26e80aa4576b?auto=format&fit=crop&q=80&w=800",
        rating: 4,
        seasonal: true
    }
];

export default function SeasonalDeals() {
    return (
        <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-8 text-center">Seasonal Specials</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {seasonalDeals.map((deal, index) => (
                    <DealCard key={index} {...deal} />
                ))}
            </div>
        </div>
    );
}