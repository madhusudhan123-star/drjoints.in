import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '@formspree/react';

const COUNTRY_CURRENCY_MAP = {
    'India': { currency: 'INR', symbol: '₹', rate: 1 },
    'United States': { currency: 'USD', symbol: '$', rate: 0.012 },
    'United Kingdom': { currency: 'GBP', symbol: '£', rate: 0.0096 },
    'European Union': { currency: 'EUR', symbol: '€', rate: 0.011 },
    'Australia': { currency: 'AUD', symbol: 'A$', rate: 0.018 },
    'Canada': { currency: 'CAD', symbol: 'C$', rate: 0.016 },
    'Japan': { currency: 'JPY', symbol: '¥', rate: 1.79 },
    'China': { currency: 'CNY', symbol: '¥', rate: 0.087 },
    'Brazil': { currency: 'BRL', symbol: 'R$', rate: 0.062 },
    'Russia': { currency: 'RUB', symbol: '₽', rate: 1.1 },
    'South Africa': { currency: 'ZAR', symbol: 'R', rate: 0.22 },
    'Mexico': { currency: 'MXN', symbol: '$', rate: 0.21 },
    'Switzerland': { currency: 'CHF', symbol: 'CHF', rate: 0.011 },
    'Singapore': { currency: 'SGD', symbol: 'S$', rate: 0.016 },
    'Sweden': { currency: 'SEK', symbol: 'kr', rate: 0.14 },
    'Norway': { currency: 'NOK', symbol: 'kr', rate: 0.12 },
    'South Korea': { currency: 'KRW', symbol: '₩', rate: 15.94 },
    'New Zealand': { currency: 'NZD', symbol: 'NZ$', rate: 0.02 },
    'Turkey': { currency: 'TRY', symbol: '₺', rate: 0.23 },
    'United Arab Emirates': { currency: 'AED', symbol: 'د.إ', rate: 0.044 },
    'Saudi Arabia': { currency: 'SAR', symbol: 'ر.س', rate: 0.045 },
    'Argentina': { currency: 'ARS', symbol: '$', rate: 2.04 },
    'Egypt': { currency: 'EGP', symbol: 'ج.م', rate: 0.36 },
    'Thailand': { currency: 'THB', symbol: '฿', rate: 0.43 },
    'Indonesia': { currency: 'IDR', symbol: 'Rp', rate: 191.7 },
    'Malaysia': { currency: 'MYR', symbol: 'RM', rate: 0.05 },
    'Vietnam': { currency: 'VND', symbol: '₫', rate: 283.32 },
    'Philippines': { currency: 'PHP', symbol: '₱', rate: 0.66 },
    'Nigeria': { currency: 'NGN', symbol: '₦', rate: 10.5 },
    'Pakistan': { currency: 'PKR', symbol: '₨', rate: 3.17 },
    'Bangladesh': { currency: 'BDT', symbol: '৳', rate: 1.02 },
    'Israel': { currency: 'ILS', symbol: '₪', rate: 0.045 },
    'Chile': { currency: 'CLP', symbol: '$', rate: 9.9 },
    'Peru': { currency: 'PEN', symbol: 'S/.', rate: 0.046 },
    'Colombia': { currency: 'COP', symbol: '$', rate: 48.12 },
    'Poland': { currency: 'PLN', symbol: 'zł', rate: 0.048 },
    'Finland': { currency: 'EUR', symbol: '€', rate: 0.011 },
    'Denmark': { currency: 'DKK', symbol: 'kr', rate: 0.08 },
    'Portugal': { currency: 'EUR', symbol: '€', rate: 0.011 },
    'Belgium': { currency: 'EUR', symbol: '€', rate: 0.011 },
    'Netherlands': { currency: 'EUR', symbol: '€', rate: 0.011 },
    'Austria': { currency: 'EUR', symbol: '€', rate: 0.011 },
    'Luxembourg': { currency: 'EUR', symbol: '€', rate: 0.011 },
    'Ireland': { currency: 'EUR', symbol: '€', rate: 0.011 },
    'Greece': { currency: 'EUR', symbol: '€', rate: 0.011 },
    'Spain': { currency: 'EUR', symbol: '€', rate: 0.011 },
    'Italy': { currency: 'EUR', symbol: '€', rate: 0.011 },
    'Czech Republic': { currency: 'CZK', symbol: 'Kč', rate: 0.25 },
    'Romania': { currency: 'RON', symbol: 'lei', rate: 0.05 },
    'Hungary': { currency: 'HUF', symbol: 'Ft', rate: 4.12 }
};

const DEFAULT_COUNTRY = 'India';
const DEFAULT_CURRENCY = COUNTRY_CURRENCY_MAP[DEFAULT_COUNTRY];

const Checkout = ({ translations, currentLang }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [currentCurrency, setCurrentCurrency] = useState(DEFAULT_CURRENCY);
    const [convertedAmount, setConvertedAmount] = useState(0);

    const [state, handleFormspreeSubmit] = useForm("xkgnvwbq");

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: DEFAULT_COUNTRY,
        streetAddress: '',
        apartment: '',
        townCity: '',
        phone: '',
        email: '',
        paymentMode: ''
    });

    // Update currency and convert amount when country changes
    useEffect(() => {
        if (orderDetails) {
            const foundCurrency = COUNTRY_CURRENCY_MAP[formData.country] || DEFAULT_CURRENCY;
            setCurrentCurrency(foundCurrency);

            // Convert amount from INR to selected currency
            const baseAmount = orderDetails.totalAmount; // Amount in INR
            const convertedValue = (baseAmount * foundCurrency.rate).toFixed(2);
            setConvertedAmount(convertedValue);
        }
    }, [formData.country, orderDetails]);

    // Original useEffects for initialization and script loading...
    useEffect(() => {
        if (!location.state) {
            navigate('/product');
            return;
        }
        setOrderDetails(location.state);

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [location.state, navigate]);

    const validateForm = () => {
        const errors = {};
        if (!formData.firstName.trim()) errors.firstName = 'First name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
        if (!formData.country.trim()) errors.country = 'Country is required';
        if (!formData.streetAddress.trim()) errors.streetAddress = 'Street address is required';
        if (!formData.townCity.trim()) errors.townCity = 'Town/City is required';
        if (!formData.phone.trim()) errors.phone = 'Phone number is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.paymentMode) errors.paymentMode = 'Please select a payment mode';

        return errors;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
            try {
                if (formData.paymentMode === 'online') {
                    handleRazorpayPayment();
                } else if (formData.paymentMode === 'cod') {
                    // Prepare the data for COD orders
                    const formSubmitData = {
                        customerDetails: {
                            firstName: formData.firstName,
                            lastName: formData.lastName,
                            country: formData.country,
                            email: formData.email,
                            phone: formData.phone,
                            address: formData.streetAddress,
                            apartment: formData.apartment,
                            city: formData.townCity,
                            country: formData.country
                        },
                        orderDetails: {
                            productName: orderDetails.productName,
                            quantity: orderDetails.quantity,
                            totalAmount: orderDetails.totalAmount,
                            paymentMethod: 'Cash on Delivery',
                            orderStatus: 'Pending'
                        }
                    };

                    // Make sure to await the Formspree submission
                    const formResponse = await handleFormspreeSubmit(formSubmitData);

                    // Check if the submission was successful
                    if (formResponse && !formResponse.error) {
                        setPaymentSuccess(true);
                    } else {
                        throw new Error('Failed to submit form to Formspree');
                    }

                    setIsSubmitting(false);
                }
            } catch (error) {
                console.error('Submission error:', error);
                setFormErrors(prev => ({
                    ...prev,
                    submit: 'Failed to process order. Please try again.'
                }));
                setIsSubmitting(false);
            }
        }
    };
    const renderFormField = (name, label, type = "text", required = true) => (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${formErrors[name] ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {formErrors[name] && (
                <p className="text-red-500 text-sm mt-1">{formErrors[name]}</p>
            )}
        </div>
    );
    const handleRazorpayPayment = () => {
        const options = {
            key: 'rzp_test_F6GXWBDqd3tcjg',
            amount: orderDetails.totalAmount * 100,
            currency: currentCurrency.currency,
            name: 'Your Company Name',
            description: `Order for ${orderDetails.productName}`,
            prefill: {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                contact: formData.phone
            },
            handler: async function (response) {
                try {
                    const formSubmitData = {
                        customerDetails: {
                            firstName: formData.firstName,
                            lastName: formData.lastName,
                            email: formData.email,
                            phone: formData.phone,
                            address: formData.streetAddress,
                            apartment: formData.apartment,
                            city: formData.townCity,
                            country: formData.country
                        },
                        orderDetails: {
                            productName: orderDetails.productName,
                            quantity: orderDetails.quantity,
                            totalAmount: convertedAmount,
                            currency: currentCurrency.currency,
                            paymentMethod: 'Online Payment (Razorpay)',
                            paymentId: response.razorpay_payment_id,
                            orderStatus: 'Paid'
                        }
                    };

                    const formResponse = await handleFormspreeSubmit(formSubmitData);

                    if (formResponse && !formResponse.error) {
                        setPaymentSuccess(true);
                    } else {
                        throw new Error('Failed to submit form to Formspree');
                    }

                    setIsSubmitting(false);
                } catch (error) {
                    console.error('Order submission error:', error);
                    setFormErrors(prev => ({
                        ...prev,
                        submit: 'Payment successful but failed to send order details. Please contact support.'
                    }));
                    setIsSubmitting(false);
                }
            },
            modal: {
                ondismiss: function () {
                    setIsSubmitting(false);
                }
            }
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };


    const renderOrderSummary = () => (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {translations[currentLang].checkout.order}
            </h2>

            <div className="space-y-4">
                <div className="flex justify-between font-medium pb-4 border-b border-gray-200">
                    <span className="text-gray-600">{translations[currentLang].checkout.product}</span>
                    <span className="text-gray-600">{translations[currentLang].checkout.subtotal}</span>
                </div>

                <div className="flex justify-between py-2">
                    <span className="text-gray-700">{orderDetails?.productName} x {orderDetails?.quantity}</span>
                    <span className="text-gray-700">{currentCurrency.symbol} {convertedAmount}</span>
                </div>

                <div className="flex justify-between py-2 border-t border-gray-200">
                    <span className="font-medium text-gray-700">{translations[currentLang].checkout.subtotal}</span>
                    <span className="text-gray-700">{currentCurrency.symbol} {convertedAmount}</span>
                </div>

                <div className="flex justify-between py-2 border-t border-gray-200">
                    <span className="font-medium text-gray-700">{translations[currentLang].checkout.shipping}</span>
                    <span className="text-green-600">Free</span>
                </div>

                <div className="flex justify-between py-4 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-800">{translations[currentLang].checkout.total}</span>
                    <span className="text-lg font-bold text-gray-800">
                        {currentCurrency.symbol} {convertedAmount}
                    </span>
                </div>

                <div className="pt-4 space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                        {translations[currentLang].checkout.mode}<span className="text-red-500">*</span>
                    </label>
                    <select
                        name="paymentMode"
                        value={formData.paymentMode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Payment Method</option>
                        <option value="cod">Cash on Delivery (COD)</option>
                        <option value="online">Online Payment</option>
                    </select>
                    {formErrors.paymentMode && (
                        <p className="text-red-500 text-sm">{formErrors.paymentMode}</p>
                    )}
                </div>

                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg
                        transition-all duration-200 transform hover:scale-105
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            {translations[currentLang].checkout.processing}

                        </div>
                    ) : (
                        translations[currentLang].checkout.order
                    )}
                </button>
            </div>
        </div>
    );
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    if (!orderDetails) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (paymentSuccess || state.succeeded) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-16 text-center">
                <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                    <h2 className="text-3xl font-bold text-green-600 mb-4">
                        {translations[currentLang].checkout.successfully}
                    </h2>
                    <p className="text-gray-600 mb-6">
                        {translations[currentLang].checkout.thank}
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        {translations[currentLang].checkout.continue}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
                {translations[currentLang].checkout.title}
            </h1>

            {formErrors.submit && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-8">
                    {formErrors.submit}
                </div>
            )}

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            {translations[currentLang].checkout.sectitle}
                        </h2>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                {renderFormField("firstName", translations[currentLang].checkout.firstname)}
                                {renderFormField("lastName", translations[currentLang].checkout.lastname)}
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    {translations[currentLang].checkout.country}<span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {Object.keys(COUNTRY_CURRENCY_MAP).map(country => (
                                        <option key={country} value={country}>
                                            {country} ({COUNTRY_CURRENCY_MAP[country].currency})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {renderFormField("streetAddress", translations[currentLang].checkout.address)}
                            {renderFormField("apartment", translations[currentLang].checkout.clientaddress, "text", false)}
                            {renderFormField("townCity", translations[currentLang].checkout.city)}
                            {renderFormField("phone", translations[currentLang].checkout.phone, "tel")}
                            {renderFormField("email", translations[currentLang].checkout.email, "email")}
                        </div>
                    </div>
                </div>

                <div>
                    {renderOrderSummary()}
                </div>
            </div>
        </div>
    );
};

export default Checkout;