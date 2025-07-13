import React from 'react';
import ServiceCategory from './ServiceCategory';
import DecorativeElements from './DecorativeElements';
import { Sparkles } from 'lucide-react';
import { nailMenu } from '../../../constants/nailsalon.js';

export default function ServicesMenu() {
    return (
        <section className="py-14 bg-primary-bg relative overflow-hidden" id="services-menu">
            <DecorativeElements />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-primary-text font-serif mb-2">
                        <Sparkles className="w-4 h-4" />
                        <h2 className="text-3xl font-serif text-primary-text">Price List</h2>
                        <Sparkles className="w-4 h-4" />
                    </div>
                    <p className="mt-4 text-gray-200 font-forum max-w-2xl mx-auto">
                        Discover our comprehensive range of beauty services designed to enhance your natural beauty
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {nailMenu.map((category, index) => (
                        <ServiceCategory key={index} category={category} />
                    ))}
                </div>

                <div className="mt-16 text-center relative">
                    <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200" />

                    <a
                        href={`https://wa.me/916290433603/?text=${encodeURIComponent('I want to book an appointment for nail work.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer relative bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </section>
    );
}