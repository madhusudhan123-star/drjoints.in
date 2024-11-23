import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';



const Navbar = ({ currentLang, setCurrentLang, translations, languages }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isLangMenuOpen) setIsLangMenuOpen(false);
    };

    const toggleLangMenu = () => {
        setIsLangMenuOpen(!isLangMenuOpen);
    };

    const handleLangSelect = (langCode) => {
        setCurrentLang(langCode);
        setIsLangMenuOpen(false);
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-lg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href='/'>
                            <img src={logo} alt="Dr. Joints Logo" className="h-8 sm:h-12 md:h-16" />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href={translations[currentLang].nav.homelink || "#"}
                            className="text-gray-700 hover:text-blue-600 px-3 py-2">
                            {translations[currentLang].nav.home}
                        </a>
                        <a href={translations[currentLang].nav.aboutUslink || "#"}
                            className="text-gray-700 hover:text-blue-600 px-3 py-2">
                            {translations[currentLang].nav.aboutUs}
                        </a>
                        <a href={translations[currentLang].nav.productlink || "#"}
                            className="text-gray-700 hover:text-blue-600 px-3 py-2">
                            {translations[currentLang].nav.product}
                        </a>
                        <a href={translations[currentLang].nav.returnPolicylink || "#"}
                            className="text-gray-700 hover:text-blue-600 px-3 py-2">
                            {translations[currentLang].nav.returnPolicy}
                        </a>
                        <a href={translations[currentLang].nav.privacyPolicylink || "#"}
                            className="text-gray-700 hover:text-blue-600 px-3 py-2">
                            {translations[currentLang].nav.privacyPolicy}
                        </a>
                        <a href={translations[currentLang].nav.contactUslink || "#"}
                            className="text-gray-700 hover:text-blue-600 px-3 py-2">
                            {translations[currentLang].nav.contactUs}
                        </a>

                        {/* Desktop Language Selector */}
                        <div className="relative">
                            <button
                                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                                onClick={toggleLangMenu}
                            >
                                <Globe size={20} />
                            </button>
                            {isLangMenuOpen && (
                                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            onClick={() => handleLangSelect(lang.code)}
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-blue-600 p-2"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <a href={translations[currentLang].nav.homelink || "#"}
                            className="block text-gray-700 hover:text-blue-600 px-3 py-2">
                            {translations[currentLang].nav.home}
                        </a>
                        <a href={translations[currentLang].nav.aboutUslink || "#"}
                            className="block text-gray-700 hover:text-blue-600 px-3 py-2">
                            {translations[currentLang].nav.aboutUs}
                        </a>
                        <a href={translations[currentLang].nav.productlink || "#"}
                            className="block text-gray-700 hover:text-blue-600 px-3 py-2">
                            {translations[currentLang].nav.product}
                        </a>
                        <a href={translations[currentLang].nav.returnPolicylink || "#"}
                            className="block text-gray-700 hover:text-blue-600 px-3 py-2">
                            {translations[currentLang].nav.returnPolicy}
                        </a>
                        <a href={translations[currentLang].nav.privacyPolicylink || "#"}
                            className="block text-gray-700 hover:text-blue-600 px-3 py-2">
                            {translations[currentLang].nav.privacyPolicy}
                        </a>
                        <a href={translations[currentLang].nav.contactUslink || "#"}
                            className="block text-gray-700 hover:text-blue-600 px-3 py-2">
                            {translations[currentLang].nav.contactUs}
                        </a>

                        {/* Mobile Language Selector */}
                        <div className="px-3 py-2">
                            <button
                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                                onClick={toggleLangMenu}
                            >
                                <Globe size={20} />
                                <span>Select Language</span>
                            </button>
                            {isLangMenuOpen && (
                                <div className="mt-2 py-2 space-y-1">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            onClick={() => handleLangSelect(lang.code)}
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;