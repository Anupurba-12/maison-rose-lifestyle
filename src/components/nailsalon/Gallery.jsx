import React from 'react';

const galleryImages = [
    {
        url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
        title: "Elegant Nail Art"
    },
    {
        url: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800",
        title: "Spa Treatment"
    },
    {
        url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800",
        title: "Professional Care"
    },

    {
        url: "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?auto=format&fit=crop&q=80&w=600",
        title: "Eyelash Extension"
    },
];

export default function Gallery() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif text-primary-text">Our Gallery</h2>
                    <p className="mt-4 text-gray-400">Discover our artistic nail designs and services</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-square overflow-hidden rounded-lg"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h3 className="text-white font-serif text-xl">{image.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}