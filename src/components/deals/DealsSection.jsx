import React from 'react';
import { Sparkles } from 'lucide-react';
import RotatingDeals from './RotatingDeals';
import SeasonalDeals from './SeasonalDeals';
import FeaturedDeals from './FeaturedDeals';

export default function DealsSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-rose-500 font-serif mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span>Limited Time</span>
                        <Sparkles className="w-4 h-4" />
                    </div>
                    <h2 className="text-3xl font-serif text-gray-900">Special Deals</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Take advantage of our exclusive offers and save on your favorite beauty treatments
                    </p>
                </div>

                <div className="space-y-16">
                    <FeaturedDeals />
                    <RotatingDeals />
                    <SeasonalDeals />
                </div>
            </div>
        </section>
    );
}