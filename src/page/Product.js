import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import product from '../assets/product.png';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.png';

const Product = ({ translations, currentLang }) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const productPrice = 6990; // Base price per unit

    const handleCheckout = () => {
        navigate('/checkout', {
            state: {
                quantity,
                totalAmount: quantity * productPrice,
                productName: 'Pain Relief Oil For Muscles',
                unitPrice: productPrice
            }
        });
    };

    const productImages = [product, product1, product2, product];


    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-12">
                {translations[currentLang].productpage.title}
            </h1>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Product Images Section */}
                <div className="space-y-4">
                    {/* Main Image */}
                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={productImages[selectedImage]}
                            alt="DR. Joints Pain Relief Oil"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-4 gap-2">
                        {productImages.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`border-2 rounded-lg overflow-hidden ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Product view ${index + 1}`}
                                    className="w-full h-auto object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="space-y-8">
                    {/* Product Description */}
                    <div className="prose max-w-none">
                        <p className="text-gray-700 mb-6">
                            {translations[currentLang].productpage.content}
                        </p>
                    </div>

                    {/* Quantity and Buy Button */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center">
                            <label htmlFor="quantity" className="mr-2 text-gray-700">{translations[currentLang].productpage.secondtitle}</label>
                            <input
                                type="number"
                                id="quantity"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="w-16 px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                        >
                            {translations[currentLang].productpage.buy}
                        </button>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {translations[currentLang].features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className={`p-2 rounded-full bg-gray-100 ${feature.color}`}>
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <span className="font-medium">{feature.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;