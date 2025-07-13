import React from 'react';
import ServiceItem from './ServiceItem';

export default function ServiceCategory({ category }) {
    return (
        <div className="bg-primary-bg backdrop-blur-sm rounded-lg shadow-md overflow-hidden hover:shadow-md transition-all">
            <div className="aspect-[3/2] relative">
                <img
                    src={category.image}
                    alt={category.category}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                        <h3 className="text-xl font-serif text-white mb-2">{category.category}</h3>
                        <p className="text-sm text-gray-200">{category.description}</p>
                    </div>
                </div>
            </div>

            <div className="p-6 cafe-bg-img">
                <div className="space-y-2">
                    {category.services.map((service, index) => (
                        <ServiceItem key={index} service={service} />
                    ))}
                </div>
                {category.note && (
                    <p className="mt-4 text-sm text-gray-500 italic">{category.note}</p>
                )}
            </div>
        </div>
    );
}