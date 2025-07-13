import React from 'react';


export default function ServiceItem({ service }) {
    const message = `${service.name}\nPrice: ${service.price}\nI want to get a booking of this service.`;
    return (
        <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
            <div>
                <span className="text-primary-text font-forum xl:text-lg">{service.name}</span>
                {service.note && (
                    <span className="ml-2 text-sm text-gray-500">{service.note}</span>
                )}
            </div>
            <div className="flex items-center gap-4">
                <span className="text-primary-pink font-medium">₹{service.price}</span>
                <a
                    href={`https://wa.me/916290433603/?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white border-2 border-primary-border bg-primary-bg hover:bg-primary-text hover:text-primary-bg px-4 py-2 rounded-lg  transition-colors cursor-pointer"
                >
                    Book
                </a>
            </div>
        </div>
    );
}