import React from 'react';

const decorativeImages = [
    {
        url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400",
        position: "-left-20 top-40"
    },
    {
        url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=400",
        position: "-right-20 bottom-40"
    },
    {
        url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=400",
        position: "left-1/4 top-1/3 hidden lg:block"
    },
    {
        url: "https://images.unsplash.com/photo-1607779097040-26e80aa4576b?auto=format&fit=crop&q=80&w=400",
        position: "right-1/4 bottom-1/3 hidden lg:block"
    }
];

export default function DecorativeElements() {
    return (
        <>
            {decorativeImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute ${image.position} w-40 h-40 rounded-full overflow-hidden opacity-30 blur-sm`}
                >
                    <img src={image.url} alt="" className="w-full h-full object-cover" />
                </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none" />
        </>
    );
}