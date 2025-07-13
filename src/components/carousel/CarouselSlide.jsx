import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CarouselSlide({ slide, isActive }) {
    return (
        <div
            className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <div className="absolute inset-0">
                <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div
                        className={`max-w-3xl transform transition-all duration-700 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                    >
                        <div className="text-xl text-rose-300 font-serif mb-4">{slide.subtitle}</div>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                            {slide.title}
                        </h1>
                        <p className="text-lg text-gray-200 mb-8">
                            {slide.description}
                        </p>
                        <button className="group flex items-center gap-2 text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all">
                            Read More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}