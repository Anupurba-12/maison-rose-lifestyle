import React from 'react';
import DealCard from './DealCard';

const featuredDeals = [
    {
        title: "Ultimate Luxury Package",
        description: "Complete spa day with premium treatments and champagne service",
        price: 7999,
        originalPrice: 15999,
        validUntil: "March 31",
        image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800",
        rating: 5,
        featured: true
    },
    {
        title: "VIP Bridal Package",
        description: "Exclusive bridal package with premium services and complementary treatments",
        price: 9999,
        originalPrice: 19999,
        validUntil: "March 31",
        image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800",
        rating: 5,
        featured: true
    }
];

export default function FeaturedDeals() {
    return (
        <div>
            <h3 className="text-2xl font-serif text-gray-900 mb-8 text-center">Featured Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredDeals.map((deal, index) => (
                    <DealCard key={index} {...deal} />
                ))}
            </div>
        </div>
    );
}