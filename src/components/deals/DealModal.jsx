import React from 'react';
import { X, Check } from 'lucide-react';


export default function DealModal({ isOpen, onClose, deal }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                    <img src={deal.image} alt={deal.title} className="w-full h-64 object-cover" />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    <h3 className="text-2xl font-serif text-gray-900 mb-2">{deal.title}</h3>
                    <p className="text-gray-600 mb-6">{deal.description}</p>

                    <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-4">Package Inclusions:</h4>
                        <ul className="space-y-3">
                            {deal.inclusions.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center justify-between border-t pt-6">
                        <div>
                            <div className="text-3xl font-bold text-rose-500">₹{deal.price}</div>
                            <div className="text-sm text-gray-500 line-through">₹{deal.originalPrice}</div>
                        </div>
                        <button className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}