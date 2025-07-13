import React, { useEffect } from 'react';
import { Sparkles, Clock, Award } from 'lucide-react';
import Aos from 'aos';

const services = [
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Premium Service",
        description: "Experience luxury nail care with our premium quality products and expert technicians."
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Quick Service",
        description: "Get professional nail care without the long wait. Book your appointment today."
    },
    {
        icon: <Award className="w-6 h-6" />,
        title: "Expert Team",
        description: "Our certified nail artists bring years of experience and creativity to every service."
    }
];

export default function NailServices() {

    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <section className="py-24 bg-primary-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl  text-primary-text font-forum">Our Services</h2>
                    <p className="mt-4 text-primary-text font-forum">
                        Discover our range of professional nail care services
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#101010] p-8 rounded-lg shadow-sm hover:shadow-primary-border border cursor-pointer hover:scale-[101%] transition-all duration-200 border-primary-border cafe-bg-img"
                        >
                            <div className="text-primary-pink mb-4">{service.icon}</div>
                            <h3 className="text-xl font-serif text-primary-text mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-200 font-forum">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}