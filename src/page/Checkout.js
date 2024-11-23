import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '@formspree/react';

const Checkout = ({ translations, currentLang }) => {

    const location = useLocation();
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const [state, handleFormspreeSubmit] = useForm("xkgnvwbq");

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: '',
        streetAddress: '',
        apartment: '',
        townCity: '',
        phone: '',
        email: '',
        paymentMode: ''
    });

    useEffect(() => {
        if (!location.state) {
            navigate('/product');
            return;
        }
        setOrderDetails(location.state);

        // Load Razorpay SDK
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
    const handleRazorpayPayment = () => {
        const options = {
            key: 'rzp_test_F6GXWBDqd3tcjg',
            amount: orderDetails.totalAmount * 100,
            currency: 'INR',
            name: 'Your Company Name',
            description: `Order for ${orderDetails.productName}`,
            prefill: {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                contact: formData.phone
            },
            handler: async function (response) {
                try {
                    // Prepare the data for Formspree
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
                            totalAmount: orderDetails.totalAmount,
                            paymentMethod: 'Online Payment (Razorpay)',
                            paymentId: response.razorpay_payment_id,
                            orderStatus: 'Paid'
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

    if (!orderDetails) {
        return <div>Loading...</div>;
    }

    // Show success message when payment is successful or form submission succeeds
    if (paymentSuccess || state.succeeded) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-4">Order Placed Successfully!</h2>
                <p className="text-gray-600">Thank you for your purchase.</p>
            </div>
        );
    }


    if (state.succeeded) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-4">Order Placed Successfully!</h2>
                <p className="text-gray-600">Thank you for your purchase.</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center text-blue-900 mb-12">
                {translations[currentLang].checkout.title}
            </h1>

            {formErrors.submit && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {formErrors.submit}
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-8">{translations[currentLang].checkout.sectitle}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    {translations[currentLang].checkout.firstname}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-2 rounded border ${formErrors.firstName ? 'border-red-500' : 'border-gray-200'
                                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                {formErrors.firstName && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    {translations[currentLang].checkout.lastname}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-2 rounded border ${formErrors.lastName ? 'border-red-500' : 'border-gray-200'
                                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                {formErrors.lastName && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                {translations[currentLang].checkout.country}<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                {translations[currentLang].checkout.address}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="streetAddress"
                                value={formData.streetAddress}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 rounded border ${formErrors.streetAddress ? 'border-red-500' : 'border-gray-200'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4`}
                            />
                            {formErrors.streetAddress && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.streetAddress}</p>
                            )}
                            <input
                                type="text"
                                name="apartment"
                                value={formData.apartment}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                {translations[currentLang].checkout.city}<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="townCity"
                                value={formData.townCity}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 rounded border ${formErrors.townCity ? 'border-red-500' : 'border-gray-200'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {formErrors.townCity && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.townCity}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                {translations[currentLang].checkout.phone}<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 rounded border ${formErrors.phone ? 'border-red-500' : 'border-gray-200'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {formErrors.phone && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                {translations[currentLang].checkout.email}<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 rounded border ${formErrors.email ? 'border-red-500' : 'border-gray-200'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            />
                            {formErrors.email && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                            )}
                        </div>
                    </form>
                </div>

                <div className="bg-gray-50 rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-8">{translations[currentLang].checkout.order}</h2>

                    <div className="space-y-4">
                        <div className="flex justify-between font-medium pb-4 border-b">
                            <span>Product</span>
                            <span>Subtotal</span>
                        </div>

                        <div className="flex justify-between py-2">
                            <span>{orderDetails.productName} x {orderDetails.quantity}</span>
                            <span>₹ {orderDetails.totalAmount}</span>
                        </div>

                        <div className="flex justify-between py-2 border-t">
                            <span className="font-medium">Subtotal</span>
                            <span>₹ {orderDetails.totalAmount}</span>
                        </div>

                        <div className="flex justify-between py-2 border-t">
                            <span className="font-medium">Shipping Method</span>
                            <span>₹ 0.00</span>
                        </div>

                        <div className="flex justify-between py-2 border-t font-medium">
                            <span>Total</span>
                            <span>₹ {orderDetails.totalAmount}</span>
                        </div>

                        <div className="pt-4">
                            <label className="block text-sm font-medium mb-2">
                                Payment Mode <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="paymentMode"
                                value={formData.paymentMode}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 rounded border ${formErrors.paymentMode ? 'border-red-500' : 'border-gray-200'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            >
                                <option value="">Select</option>
                                <option value="cod">Cash on Delivery (COD)</option>
                                <option value="online">Online</option>
                            </select>
                            {formErrors.paymentMode && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.paymentMode}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`w-full bg-green-500 text-white rounded-full py-3 px-6 mt-8 
                                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'} 
                                transition-colors`}
                        >
                            {isSubmitting ? 'Processing...' : 'Place Order'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
