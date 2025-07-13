import React from 'react';



export default function CarouselIndicators({ total, current, onClick }) {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: total }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onClick(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current
                        ? 'bg-white w-6'
                        : 'bg-white/50 hover:bg-white/75'
                        }`}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>
    );
}