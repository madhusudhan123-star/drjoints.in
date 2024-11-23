import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Facebook, Twitter, Instagram } from 'lucide-react';


const Footer = ({ currentLang, translations }) => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
                <div>
                    <img src={logo} alt="Dr. Joints Logo" className="w-32" />
                    <p className="mt-4 text-gray-400">100% Natural</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">{translations[currentLang].contact.title}</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">{translations[currentLang].contact.address}</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">{translations[currentLang].contact.phone}</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">{translations[currentLang].contact.email}</a></li>
                    </ul>
                </div>
                <div className='w-[1px] h-full bg-white'></div>
                <div>
                    <h3 className="text-lg font-bold mb-4">{translations[currentLang].contact.info}</h3>
                    <ul className="space-y-2">
                        <li><a href={translations[currentLang].nav.homelink} className="text-gray-400 hover:text-white">{translations[currentLang].nav.home}</a></li>
                        <li><a href={translations[currentLang].nav.aboutlink} className="text-gray-400 hover:text-white">{translations[currentLang].nav.aboutUs}</a></li>
                        <li><a href={translations[currentLang].nav.productlink} className="text-gray-400 hover:text-white">{translations[currentLang].nav.Product}</a></li>
                        <li><a href={translations[currentLang].nav.contactlink} className="text-gray-400 hover:text-white">{translations[currentLang].nav.contactUs}</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">{translations[currentLang].contact.det}</h3>
                    <ul className="space-y-2">
                        <li><a href={translations[currentLang].nav.returnPolicylink} className="text-gray-400 hover:text-white">{translations[currentLang].nav.returnPolicy}</a></li>
                        <li><a href={translations[currentLang].nav.privacyPolicylink} className="text-gray-400 hover:text-white">{translations[currentLang].nav.privacyPolicy}</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
                &copy; 2024. All Rights Reserved By Dr.Joints
            </div>
        </footer>
    );
};


export default Footer;