import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = ({ translations, currentLang }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-16">
            {/* Form Section */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-medium text-olive-700 mb-2">{translations[currentLang].contact.pagetitle}</h2>
                <p className="text-gray-600 mb-8">{translations[currentLang].contact.pagesectitle}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder={translations[currentLang].contact.pageinname}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <input
                        type="email"
                        placeholder={translations[currentLang].contact.pageinemail}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <input
                        type="tel"
                        placeholder={translations[currentLang].contact.pageinphone}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <input
                        type="text"
                        placeholder={translations[currentLang].contact.pageinsubject}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <textarea
                        placeholder={translations[currentLang].contact.pageinmessage}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <button
                        type="submit"
                        className="px-8 py-2 bg-white text-green-600 border border-green-600 rounded-full hover:bg-green-50 transition-colors"
                    >
                        {translations[currentLang].contact.pagesubbutton}
                        Send Message
                    </button>
                </form>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">{translations[currentLang].contact.title}</h2>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                        <p className="text-gray-600">
                            {translations[currentLang].contact.address}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-gray-400" />
                        <a href="tel:+919908016333" className="text-gray-600 hover:text-gray-900">
                            {translations[currentLang].contact.phone}
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-gray-400" />
                        <a href="mailto:hello@drjoints.in" className="text-gray-600 hover:text-gray-900">
                            {translations[currentLang].contact.email}
                        </a>
                    </div>
                </div>

                {/* Map Section */}
                <div className="h-96 w-full rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28943.614735315532!2d78.465638!3d17.446136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91cd07585bcd%3A0xb10cf49e7038d870!2sISRAELITES%20SHOPPING%20NETWORK%20PVT%20LTD!5e1!3m2!1sen!2sin!4v1727708685071!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default Contact;