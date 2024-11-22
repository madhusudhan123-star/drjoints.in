import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';
import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpeg';
import banner3 from '../assets/banner3.jpeg';
import card1 from '../assets/card1.jpeg';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.jpeg';
import card4 from '../assets/card4.jpeg';
import product from '../assets/product.png';


// Language options
const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
];

// Translations object (you'll need to add complete translations)
const translations = {
    en: {
        nav: {
            home: 'Home',
            homelink: '#home',
            aboutUs: 'About Us',
            aboutUslink: '#about',
            product: 'Product',
            productlink: '#product',
            returnPolicy: 'Return Policy',
            returnPolicylink: '#return',
            privacyPolicy: 'Privacy Policy',
            privacyPolicylink: '#priacy',
            contactUs: 'Contact Us',
            contactUslink: '#contact',
            terms: "Terms & Conditions",
        },
        hero: {
            title: 'Best Pain Relief Oil For Muscles',
            description: 'Natural pain relief solution for your daily needs'
        },
        about: {
            title: 'About Us',
            content1: `Our Mission..., is to provide natural, effective solutions for those struggling with
            joint pain, helping you regain flexibility and comfort. We offer premium Ayurvedic
            oils, formulated using traditional herbs and ingredients, to help alleviate joint
            discomfort and promote recovery. These oils not only relieve pain but also work to
            strengthen your joints, muscles, and bones, ensuring long-term health benefits.`,
            content2: `At Dr. Joints, we believe in the power of nature and holistic wellness. Our commitment to quality
            and authenticity ensures that each product is crafted to deliver lasting relief, allowing you to
            embrace life with ease and confidence.`,
            question1: `Why Choose Our Muscle Pain Relief Oil?`,
            question2: "Natural Ingredients:",
            answer1: `Our oil is crafted with the finest Ayurvedic herbs known for their anti-inflammatory and pain-relieving properties, providing a natural and safe solution.`,
            question3: "Quick Absorption:",
            answer2: `The lightweight formula ensures rapid absorption, allowing the active ingredients to reach deep into the muscle tissues for faster relief.`,
            question4: "Suitable for All Ages:",
            answer3: ` Whether you're an athlete recovering from a strenuous workout or someone dealing with age-related muscle pain, our oil is the perfect solution for people of all ages.`,

        },
        product: {
            title: 'Our Product',
            subtitle: 'Best Pain Relief Oil For Muscles',
            content1: `Joint pain can be your worst nightmare or an joint pain relief ayurvedic oil unwanted guest during chilly
            winters, cold monsoons or old age.Joints – the connecting tissues between our bones – are an
            extremely important part of the human body.`,
            content2: `The health of your joints can determine the level of flexibility and ease with which your body performs
            everyday tasks. Imagine not being able to do mundane tasks that we take for granted – standing up,
            sitting down, walking, picking up weight, bending, etc.`,
            content3: `While regular exercise, a balanced diet, and a healthy lifestyle can prevent joint pains to a certain
            extent, sometimes there is no way to circumvent it. At times like these, you need a reliable remedy that
            can not only help deal with the discomfort that comes with joint disorders but also aid the recovery
            process and strengthen your joints, muscles, and bones.`
        },
        faq: {
            title: "FAQ's",
            faqData: [
                {
                    question: "What is DR.Joints Pain Relief Oil for Muscle Pain?",
                    answer: "DR.Joints Pain Relief Oil is an Ayurvedic oil designed to relieve muscle pain, stiffness, and inflammation. It is formulated with a blend of natural herbs and ingredients that work to alleviate discomfort and promote muscle recovery."
                },
                {
                    question: "How does the oil work?",
                    answer: "The oil penetrates deep into the muscle tissues, providing quick relief by reducing inflammation, improving blood circulation, and soothing muscle tension. Its natural ingredients help relieve pain and prevent future soreness by strengthening the muscles over time."
                },
                {
                    question: "Is the oil made from natural ingredients?",
                    answer: "Yes, DR.Joints Pain Relief Oil is made using 100% natural and Ayurvedic ingredients. We use herbs known for their anti-inflammatory, pain-relieving, and muscle-nourishing properties, ensuring a safe and effective product."
                },
                {
                    question: "How should I use the oil?",
                    answer: "Apply a small amount of oil to the affected area and gently massage it in circular motions until the oil is absorbed. For best results, use the oil 2-3 times a day, or as directed. Consistent use helps promote long-term relief."
                },
                {
                    question: "Can the oil be used for joint pain as well?",
                    answer: "Yes, our pain relief oil is versatile and can be used for both muscle and joint pain. It is effective in reducing inflammation and discomfort in areas such as knees, shoulders, elbows, and other joints."
                },
                {
                    question: "Is it safe to use daily?",
                    answer: "Absolutely! The oil is made from safe, natural ingredients and is suitable for daily use. Regular application can help maintain muscle and joint flexibility, reduce stiffness, and prevent pain."
                },
                {
                    question: "Who can use this oil?",
                    answer: "Our pain relief oil is suitable for all age groups. Whether you are an athlete, an individual recovering from muscle strain, or someone experiencing age-related muscle and joint pain, the oil can help relieve discomfort effectively."
                },
                {
                    question: "How long will it take to feel relief?",
                    answer: "Many users feel relief shortly after application, as the oil is quickly absorbed into the skin. However, the duration may vary depending on the severity of the pain. For chronic pain, regular use over time will yield the best results."
                }
            ]
        },
        testimonials: {
            title: 'Testimonials',
            testimonial: [
                {
                    image: 'https://via.placeholder.com/150',
                    text: "I recommend Dr. Joints to all my clients who have joint issues. It's effective, natural, and has helped many of them stay active and pain-free. Personally, I've experienced a noticeable improvement in joint mobility and recovery times. It's a fantastic product!",
                    name: 'Sanjay Sharma',
                    role: 'Business Owner',
                },
                {
                    image: 'https://via.placeholder.com/150',
                    text: "I had been suffering from knee pain for the last 2 years. My friend suggested a joint pain relief oil. I have now started using this oil and have experienced a lot of relief from my knee pain. It's a good product.",
                    name: 'Ahmed Shaikh',
                    role: 'Teacher',
                },
                {
                    image: null,
                    text: "It is a very nice product. I have been using it for the last 4 months, and all my joint pains are gone. It is a much-needed product for senior citizens like me. I have already recommended it to all my friends.",
                    name: 'Srinivas Reddy',
                    role: 'Real eState Age',
                },
            ]
        },
        contact: {
            title: 'Contact Us',
            address: 'Begumpet, Hyderabad, Telangana 500016',
            phone: '+91 9908 016 333',
            email: 'info@drjoints.in',
            info: "information",
            det: "Details",
        }
    },
    ar: {
        nav: {
            home: 'الرئيسية',
            homelink: '#home',
            aboutUs: 'من نحن',
            aboutUslink: '#about',
            product: 'المنتج',
            productlink: '#product',
            returnPolicy: 'سياسة الإرجاع',
            returnPolicylink: '#return',
            privacyPolicy: 'سياسة الخصوصية',
            privacyPolicylink: '#privacy',
            contactUs: 'تواصل معنا',
            contactUslink: '#contact',
            terms: "الشروط والأحكام",
        },
        hero: {
            title: 'أفضل زيت لتخفيف آلام العضلات',
            description: 'حل طبيعي لتخفيف الألم لاحتياجاتك اليومية'
        },
        about: {
            title: 'من نحن',
            content1: `مهمتنا هي تقديم حلول طبيعية وفعالة لأولئك الذين يعانون من آلام المفاصل، 
                   لمساعدتهم على استعادة المرونة والراحة. نحن نقدم زيوتًا طبيعية ممتازة مصنوعة 
                   من أعشاب ومكونات تقليدية، للمساعدة في تخفيف آلام المفاصل وتعزيز التعافي.`,
            content2: `في د. جوينتس، نؤمن بقوة الطبيعة والرفاهية الشاملة. يضمن التزامنا بالجودة والأصالة أن 
                   كل منتج مصمم لتوفير راحة دائمة، مما يتيح لك العيش بثقة وراحة.`,
            question1: "لماذا تختار زيت تخفيف آلام العضلات الخاص بنا؟",
            question2: "مكونات طبيعية:",
            answer1: `زيتنا مصنوع من أعشاب طبيعية معروفة بخصائصها المضادة للالتهابات والمسكنة للألم، مما 
                  يوفر حلاً طبيعيًا وآمنًا.`,
            question3: "امتصاص سريع:",
            answer2: `تضمن التركيبة الخفيفة الامتصاص السريع، مما يسمح للمكونات الفعالة بالوصول بعمق إلى 
                  أنسجة العضلات لتوفير راحة أسرع.`,
            question4: "مناسب لجميع الأعمار:",
            answer3: `سواء كنت رياضيًا تتعافى من تدريب مكثف أو تعاني من آلام عضلية مرتبطة بالعمر، 
                  فإن زيتنا هو الحل المثالي لجميع الأعمار.`,
        },
        product: {
            title: 'منتجنا',
            subtitle: 'أفضل زيت لتخفيف آلام العضلات',
            content1: `آلام المفاصل يمكن أن تكون كابوسًا أو ضيفًا غير مرغوب فيه خلال الشتاء البارد، 
                   المواسم الممطرة، أو الشيخوخة.`,
            content2: `صحة مفاصلك يمكن أن تحدد مستوى المرونة والسهولة التي يؤدّي بها جسمك المهام اليومية.`,
            content3: `في أوقات كهذه، تحتاج إلى علاج موثوق يساعد في تخفيف الانزعاج الناتج عن اضطرابات المفاصل
                   وأيضًا يعزز عملية التعافي.`,
        },
        faq: {
            title: "الأسئلة الشائعة",
            faqData: [
                {
                    question: "ما هو زيت د. جوينتس لتخفيف آلام العضلات؟",
                    answer: "زيت د. جوينتس هو زيت طبيعي مصمم لتخفيف آلام العضلات والتصلب والالتهاب."
                },
                {
                    question: "كيف يعمل الزيت؟",
                    answer: "يتغلغل الزيت بعمق في أنسجة العضلات، مما يوفر راحة سريعة عن طريق تقليل الالتهاب وتحسين الدورة الدموية."
                },
                {
                    question: "هل الزيت مصنوع من مكونات طبيعية؟",
                    answer: "نعم، زيت د. جوينتس مصنوع من مكونات طبيعية 100%."
                },
                {
                    question: "كيف أستخدم الزيت؟",
                    answer: "قم بتطبيق كمية صغيرة من الزيت على المنطقة المتأثرة ودلكها بحركات دائرية حتى يتم امتصاص الزيت."
                },
                {
                    question: "هل يمكن استخدام الزيت لآلام المفاصل؟",
                    answer: "نعم، الزيت فعال لآلام العضلات والمفاصل على حد سواء."
                },
                {
                    question: "هل الاستخدام اليومي آمن؟",
                    answer: "بالتأكيد! الزيت آمن للاستخدام اليومي ومناسب لجميع الأعمار."
                },
                {
                    question: "من يمكنه استخدام هذا الزيت؟",
                    answer: "الزيت مناسب لجميع الأعمار."
                },
                {
                    question: "كم من الوقت يستغرق لتخفيف الألم؟",
                    answer: "يشعر معظم المستخدمين بالراحة بعد وقت قصير من التطبيق."
                }
            ]
        },
        testimonials: {
            title: 'آراء العملاء',
            testimonial: [
                {
                    image: 'https://via.placeholder.com/150',
                    text: "أوصي بزيت د. جوينتس لجميع عملائي الذين يعانون من مشاكل المفاصل.",
                    name: 'سانجاي شارما',
                    role: 'صاحب عمل',
                },
                {
                    image: 'https://via.placeholder.com/150',
                    text: "لقد بدأت استخدام هذا الزيت وشعرت براحة كبيرة.",
                    name: 'أحمد الشيخ',
                    role: 'معلم',
                },
                {
                    image: null,
                    text: "منتج رائع. لقد أوصيت به لكل أصدقائي.",
                    name: 'سرينيفاس ريدي',
                    role: 'وكيل عقارات',
                },
            ]
        },
        contact: {
            title: 'تواصل معنا',
            address: 'بيجومبت، حيدر آباد، تلنجانا 500016',
            phone: '+91 9908 016 333',
            email: 'info@drjoints.in',
            info: "معلومات",
            det: "تفاصيل",
        }
    }
};

const Navbar = ({ currentLang, setCurrentLang }) => (
    <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">
                <div className="flex-shrink-0">
                    <img src={logo} alt="Dr. Joints Logo" className="h-12 sm:h-16" />
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <a href={translations[currentLang].nav.homelink || "#"} className="text-gray-700 hover:text-blue-600 px-3 py-2">
                        {translations[currentLang].nav.home}
                    </a>
                    <a href={translations[currentLang].nav.aboutUslink || "#"} className="text-gray-700 hover:text-blue-600 px-3 py-2">
                        {translations[currentLang].nav.aboutUs}
                    </a>
                    <a href={translations[currentLang].nav.productlink || "#"} className="text-gray-700 hover:text-blue-600 px-3 py-2">
                        {translations[currentLang].nav.product}
                    </a>
                    <a href={translations[currentLang].nav.returnPolicylink || "#"} className="text-gray-700 hover:text-blue-600 px-3 py-2">
                        {translations[currentLang].nav.returnPolicy}
                    </a>
                    <a href={translations[currentLang].nav.privacyPolicylink || "#"} className="text-gray-700 hover:text-blue-600 px-3 py-2">
                        {translations[currentLang].nav.privacyPolicy}
                    </a>
                    <a href={translations[currentLang].nav.contactUslink || "#"} className="text-gray-700 hover:text-blue-600 px-3 py-2">
                        {translations[currentLang].nav.contactUs}
                    </a>
                    <div className="relative ml-4">
                        <button
                            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                            onClick={() => document.getElementById('langMenu').classList.toggle('hidden')}
                        >
                            <Globe size={20} />
                        </button>
                        <div id="langMenu" className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 hidden">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                    onClick={() => setCurrentLang(lang.code)}
                                >
                                    {lang.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // You can replace these placeholder images with your actual image URLs
    const images = [
        { url: banner1, alt: "Slide 1" },
        { url: banner2, alt: "Slide 2" },
        { url: banner3, alt: "Slide 3" }
    ];

    // Auto-advance slides every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="relative">
            <div className="relative h-80 sm:h-96 overflow-hidden">
                {/* Image slides */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {/* Dots navigation */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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


const Product = ({ currentLang }) => {
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


const About = ({ currentLang }) => {
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



const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-lg mb-4 overflow-hidden">
            <button
                className="w-full p-4 text-left flex justify-between items-center bg-white hover:bg-gray-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-gray-900">{question}</span>
            </button>
            {isOpen && (
                <div className="p-4 bg-gray-50">
                    <p className="text-gray-700">{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = ({ currentLang }) => {


    return (
        <div className='w-screen bg-[#F0E7E5]'>
            <div className="max-w-3xl mx-auto p-6 bg-[#F0E7E5]">
                <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">FAQ's</h1>
                <div className="space-y-4">
                    {translations[currentLang].faq.faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
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

const Testimonials = ({ currentLang }) => {


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




const Footer = ({ currentLang }) => {
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


const Home = () => {
    const [currentLang, setCurrentLang] = useState('en');

    return (
        <div className={currentLang === 'ar' ? 'rtl' : 'ltr'}>
            <div className='overflow-x-hidden'>
                <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />
                <Hero currentLang={currentLang} />
                <ProductSection currentLang={currentLang} />
                <Product currentLang={currentLang} />
                <About currentLang={currentLang} />
                <FAQ currentLang={currentLang} />
                <Testimonials currentLang={currentLang} />
                <Footer currentLang={currentLang} />
            </div>
        </div>
    );
};

export default Home;