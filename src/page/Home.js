import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpeg';
import banner3 from '../assets/banner3.jpeg';
import card1 from '../assets/card1.jpeg';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.jpeg';
import card4 from '../assets/card4.jpeg';
import product from '../assets/product.png';
import FAQ from '../components/FAQ';






const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { url: banner1, alt: "Slide 1" },
        { url: banner2, alt: "Slide 2" },
        { url: banner3, alt: "Slide 3" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative">
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300
              ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};


const ProductSection = () => {
    const cards = [
        {
            id: 1,
            image: card1,
            alt: "Card Image 1"
        },
        {
            id: 2,
            image: card2,
            alt: "Card Image 2"
        },
        {
            id: 3,
            image: card3,
            alt: "Card Image 3"
        },
        {
            id: 4,
            image: card4,
            alt: "Card Image 4"
        }
    ];

    return (
        <div className="w-full py-6 mt-20 mb-48">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-20">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    >
                        <div className="aspect-w-4 aspect-h-3">
                            <img
                                src={card.image}
                                alt={card.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full h-[1px] bg-black mt-36'></div>
        </div>
    );
};


const Product = ({ currentLang, translations }) => {
    return (
        <div className="min-h-screen bg-[#F0E7E5] p-8">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-blue-900 text-4xl font-bold mb-4">{translations[currentLang].product.title}</h1>
                <h2 className="text-amber-800 text-2xl font-semibold">{translations[currentLang].product.subtitle}</h2>
            </div>

            {/* Main Content Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="space-y-6 pr-4">
                    <p className="text-gray-800 leading-relaxed">{translations[currentLang].product.content1}</p>

                    <p className="text-gray-800 leading-relaxed">{translations[currentLang].product.content2}</p>

                    <p className="text-gray-800 leading-relaxed">{translations[currentLang].product.content3}</p>
                </div>

                {/* Product Image */}
                <div className="relative">
                    <img
                        src={product}
                        alt="Dr. Joints Pain Relief Oil Product"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};


const About = ({ currentLang, translations }) => {
    return (
        <div className="max-w-7xl mx-auto p-8">
            {/* Header */}
            <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">{translations[currentLang].about.title}</h1>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Text Content */}
                <div className="space-y-6">
                    {/* Mission Statement */}
                    <p className="text-gray-800 leading-relaxed">{translations[currentLang].about.content1}</p>

                    {/* Company Values */}
                    <p className="text-gray-800 leading-relaxed">{translations[currentLang].about.content2}</p>

                    {/* Why Choose Us Section */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            {translations[currentLang].about.question1}
                        </h2>

                        <ul className="space-y-4">
                            <li>
                                <strong className="text-gray-900">{translations[currentLang].about.question2}</strong>
                                <span className="text-gray-800">{translations[currentLang].about.answer1}</span>
                            </li>

                            <li>
                                <strong className="text-gray-900">{translations[currentLang].about.question3}</strong>
                                <span className="text-gray-800">{translations[currentLang].about.answer2}</span>
                            </li>

                            <li>
                                <strong className="text-gray-900">{translations[currentLang].about.question4}</strong>
                                <span className="text-gray-800">{translations[currentLang].about.answer3}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column - Video */}
                <div className="relative h-0 pb-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/xFQblbvIjwU"
                        title="Dr.Joints | Ayurvedic Pain Relief Oil"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};




const TestimonialCard = ({ image, text, name, role }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4">
                {image && (
                    <div className="w-12 h-12 rounded-full bg-gray-300">
                        <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
                    </div>
                )}
                <div>
                    <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                    <p className="text-gray-600">{role}</p>
                </div>
            </div>
            <p className="mt-4 text-gray-700">{text}</p>
        </div>
    );
};

const Testimonials = ({ currentLang, translations }) => {


    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{translations[currentLang].testimonials.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {translations[currentLang].testimonials.testimonial.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            image={testimonial.image}
                            text={testimonial.text}
                            name={testimonial.name}
                            role={testimonial.role}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


const Home = ({ currentLang, translations }) => {
    return (
        <div className={currentLang === 'ar' ? 'rtl' : 'ltr'}>
            <div className='overflow-x-hidden'>
                <Hero currentLang={currentLang} />
                <ProductSection currentLang={currentLang} />
                <Product currentLang={currentLang} translations={translations} />
                <About currentLang={currentLang} translations={translations} />
                <FAQ currentLang={currentLang} translations={translations} />
                <Testimonials currentLang={currentLang} translations={translations} />
            </div>
        </div>
    );
};

export default Home;