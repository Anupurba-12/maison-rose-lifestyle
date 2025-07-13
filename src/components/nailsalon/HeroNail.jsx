import React, { useState, useEffect, useCallback } from 'react';
import { salonCarouselData } from '../../constants/nailsalon';
import CarouselIndicators from '../carousel/CarouselIndicators';
import CarouselSlide from '../carousel/CarouselSlide';




export default function HeroNail() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % salonCarouselData.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative h-screen overflow-hidden">
            {salonCarouselData.map((slide, index) => (
                <CarouselSlide
                    key={slide.id}
                    slide={slide}
                    isActive={index === currentSlide}
                />
            ))}

            <CarouselIndicators
                total={salonCarouselData.length}
                current={currentSlide}
                onClick={setCurrentSlide}
            />
        </div>
    );
}