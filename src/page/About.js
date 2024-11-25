import React from 'react'
import FAQ from '../components/FAQ';

const About = ({ currentLang, translations }) => {
    return (
        <div>
            <div className='bg-[#234B6F] h-40 w-full'>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-4xl font-bold text-white'>{translations[currentLang].about.title}</h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Content Container */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src={translations[currentLang].aboutpage.img}
                            alt="Person holding knee in pain with red highlight"
                            className="rounded-lg w-full h-auto shadow-lg"
                        />
                    </div>

                    {/* Text Content Section */}
                    <div className="space-y-6">
                        {/* Mission Statement */}
                        <div className="text-gray-800">
                            <p className="mb-4">
                                {translations[currentLang].about.content1}
                            </p>

                            <p className="mb-6">
                                {translations[currentLang].about.content2}
                            </p>
                        </div>

                        {/* Why Choose Us Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {translations[currentLang].about.question1}
                            </h2>

                            <div className="space-y-4">
                                {/* Natural Ingredients */}
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{translations[currentLang].about.question2}</h3>
                                    <p className="text-gray-700">{translations[currentLang].about.answer1}</p>
                                </div>

                                {/* Quick Absorption */}
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{translations[currentLang].about.question3}</h3>
                                    <p className="text-gray-700">{translations[currentLang].about.answer2}</p>
                                </div>

                                {/* Suitable for All Ages */}
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{translations[currentLang].about.question4}</h3>
                                    <p className="text-gray-700">{translations[currentLang].about.answer3}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-[#F0E7E5]'>
                <FAQ currentLang={currentLang} translations={translations} />
            </div>
        </div>
    )
}

export default About