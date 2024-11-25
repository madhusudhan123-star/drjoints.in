import React, { useState, useEffect } from 'react'
import Home from './page/Home';
import About from './page/About';
import Product from './page/Product';
import Return from './page/Return';
import Privacy from './page/Privacy';
import Contact from './page/Contact';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Shield, Leaf, Brain, Hand } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import review from './assets/review.jpg';
import review1 from './assets/review1.jpg';
import about from './assets/about.jpg';
import Checkout from './page/Checkout';
import TermsAndConditions from './page/Terms';

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
      homelink: '/index-2.html',
      aboutUs: 'About Us',
      aboutUslink: '/about',
      product: 'Product',
      productlink: '/product',
      returnPolicy: 'Return Policy',
      returnPolicylink: '/return',
      privacyPolicy: 'Privacy Policy',
      privacyPolicylink: '/privacy',
      contactUs: 'Contact Us',
      contactUslink: '/contact',
      terms: "Terms & Conditions",
      natural: "100% Natural",
      lastone: "© 2024. All Rights Reserved By Dr.Joints",
      terms: "Terms & Conditions",
      termslink: '/terms'
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
          image: review,
          text: "I recommend Dr. Joints to all my clients who have joint issues. It's effective, natural, and has helped many of them stay active and pain-free. Personally, I've experienced a noticeable improvement in joint mobility and recovery times. It's a fantastic product!",
          name: 'Sanjay Sharma',
          role: 'Business Owner',
        },
        {
          image: review1,
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
      pagetitle: 'Need your help?',
      pagesectitle: 'You can contact us today ',
      pageinname: "Your Name",
      pageinemail: "Your Email",
      pageinphone: "Your Phone",
      pageinsubject: "Subject",
      pageinmessage: "Write you present condition...",
      pagesubbutton: "Send Message",
    },
    aboutpage: {
      title: "About Us",
      img: about,
    },
    productpage: {
      title: "Best Pain Relief Oil For Muscles",
      secondtitle: 'Qty',
      content: `DR. Joints is an effective solution for relieving joint pain and discomfort.
                            Formulated with a blend of natural ingredients, it targets inflammation and
                            promotes better mobility, allowing you to enjoy your daily activities without
                            restriction. Whether you're facing age-related joint issues or pain from physical
                            exertion, DR. Joints provides fast-acting relief, helping to strengthen your joints
                            and improve overall flexibility. Ideal for everyday use, it supports a healthier,
                            more active lifestyle.`,
      buy: 'Buy Now',

    },
    returnpage: {
      title: 'Return Policy',
      sectitle: 'Return Policy',
      content1: `Dr.Joints is committed to helping millions of people become fitter, healthier, and happier; we stand behind the quality of our products with a 15-day return policy. If you don't believe our products are improving the quality of your life, we offer a refund within 15 days of receipt of your order, less the shipping cost. Any remaining product and original packaging must be returned to Dr.Joints for a refund.`,
      content2: `Eligibility – Your purchase is eligible for a return if it meets the criteria below:`,
      content3: `Refunds require returning used or unused products packaging of Dr.Joints Products.`,
      content4: `Return Process has to be done by the customer only.`,
      content5: `The product has to reach the specified address on the website`,
      content6: `The product has to arrive within 15 days of the Date of purchasing the product`,
      content7: `We will not accept damaged products.`,
      content8: `Amount will be added to the actual source of payment done by the customer within 10 working days`,
    },
    sections: [
      {
        title: "Information We Collect",
        content: [
          {
            subtitle: "Personal Information",
            text: "This includes information that can be used to identify you, such as your name, billing address, shipping address, email address, and phone number. You only provide this information when you contact us through a form on the Site."
          },
          {
            subtitle: "Non-Personal Information",
            text: "This includes information that cannot be used to identify you, such as your browser type, operating system, IP address, browsing activity on the Site, and demographic information (e.g., age, gender). This information is collected automatically when you use the Site."
          }
        ]
      },
      {
        title: "How We Use Your Information",
        content: [
          {
            subtitle: "Personal Information",
            text: "We will only use your personal information to respond to inquiries and requests. We will not share your personal information with any third parties without your consent, except as required by law."
          },
          {
            subtitle: "Non-Personal Information",
            text: "We use non-personal information to improve the Site and understand how users interact. We may also use non-personal information for internal marketing and promotional purposes."
          }
        ]
      },
      {
        title: "Cookies and Tracking Technologies",
        content: [
          {
            text: "We may use cookies and other tracking technologies to collect non-personal information about your use of the Site. Cookies are small files that are stored on your device when you visit a website. They allow the website to remember your actions and preferences over time."
          },
          {
            text: "When you visit our login page, we will set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select 'Remember Me', your login will persist for two weeks. If you log out of your account, the login cookies will be removed."
          },
          {
            text: "If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day."
          }
        ]
      },
      {
        title: "Third-Party Service Providers",
        content: [
          {
            text: "We may use third-party service providers to help us operate the Site and deliver our services. These service providers may have access to your non-personal information. We will not share your personal information with any third-party service providers for their marketing purposes without your consent."
          }
        ]
      },
      {
        title: "Security",
        content: [
          {
            text: "We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure."
          }
        ]
      },
      {
        title: "Children's Privacy",
        content: [
          {
            text: "The Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us. We will take steps to remove the information from our records."
          }
        ]
      },
      {
        title: "Changes to this Privacy Policy",
        content: [
          {
            text: "We may update this Privacy Policy from time to time. We will post any changes on the Site. We encourage you to review this Privacy Policy periodically for the latest information on our privacy practices."
          }
        ]
      },
      {
        title: "Contact Us",
        content: [
          {
            text: "If you have any questions about this Privacy Policy, please get in touch with us at hello@drjoints.in"
          }
        ]
      }
    ],
    privacy: {
      title: "Privacy Policy"
    },
    checkout: {
      title: "Checkout",
      sectitle: "Billing Details",
      firstname: 'First Name ',
      lastname: 'Last Name ',
      country: 'Country/ Region ',
      address: 'Street Address ',
      city: 'Town/ City ',
      countrytitle: "Country ",
      phone: "Phone ",
      email: "Email Address ",
      order: "Your Order",
      clientaddress: "Apartment/Suite",
      mode: "Payment Mode",
      total: "Total",
      shipping: "Shipping",
      subtotal: "Subtotal",
      product: "Product",
      order: "Place Order",
      processing: "Processing...",
      successfully: "Order Placed Successfully!",
      thank: "Thank you for your purchase. You will receive a confirmation email shortly.",
      continue: "Continue Shopping"


    },
    features: [
      {
        icon: Brain,
        title: "Effective Pain Relief",
        color: "text-blue-500"
      },
      {
        icon: Leaf,
        title: "Natural Ingredients",
        color: "text-green-500"
      },
      {
        icon: Hand,
        title: "Promotes Recovery",
        color: "text-orange-500"
      },
      {
        icon: Shield,
        title: "Convenient And Easy To Use",
        color: "text-purple-500"
      }
    ],
    termsData: {
      title: "Terms & Conditions",
      sections: [
        {
          title: "Acceptance of Terms",
          content: "By downloading, installing, or using the Genius-Baby ('the App'), you agree to be bound by these Terms and Conditions ('Terms'). If you do not agree to these Terms, do not use the App."
        },
        {
          title: "License",
          content: "Genius-Baby grants you a limited, non-exclusive, non-transferable, and revocable license to use the App for personal, non-commercial purposes, subject to these Terms."
        },
        {
          title: "User Obligations",
          content: [
            "You must be at least 18 years old to use the App.",
            "You agree to use the App only for lawful purposes and in accordance with these Terms.",
            "You must not attempt to interfere with the App's operation or security."
          ]
        },
        {
          title: "Intellectual Property",
          content: "All content, features, and functionality (including but not limited to text, graphics, logos, and software) are owned by Genius-Baby or its licensors and are protected by copyright and other laws. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any part of the App without our express written permission."
        },
        {
          title: "User-Generated Content",
          content: "You may be able to submit, upload, or otherwise make available content (such as playlists or reviews) through the App. By doing so, you grant Genius-Baby a worldwide, royalty-free, perpetual, irrevocable, non-exclusive, and sublicensable right to use, modify, distribute, and display such content in connection with the App."
        },
        {
          title: "Privacy",
          content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information."
        },
        {
          title: "Termination",
          content: "We reserve the right to terminate or suspend your access to the App at any time, with or without notice, for any reason, including if you breach these Terms."
        },
        {
          title: "Limitation of Liability",
          content: [
            "To the fullest extent permitted by law, Genius-Baby App and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:",
            "- Your use or inability to use the App;",
            "- Any unauthorized access to or use of our servers and/or any personal information stored therein;",
            "- Any bugs, viruses, or the like that may be transmitted to or through the App by any third party;",
            "- Any errors or omissions in any content."
          ]
        },
        {
          title: "Changes to Terms",
          content: "We may modify these Terms from time to time. We will notify you of any changes by posting the new Terms on the App. Your continued use of the App after the changes are made will constitute your acceptance of the new Terms."
        },
        {
          title: "Governing Law",
          content: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions."
        },
        {
          title: "Contact Information",
          content: "If you have any questions about these Terms, please contact us at srilogishyd@gmail.com."
        }
      ]
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      homelink: '/',
      aboutUs: 'من نحن',
      aboutUslink: '/about',
      product: 'المنتج',
      productlink: '/product',
      returnPolicy: 'سياسة الإرجاع',
      returnPolicylink: '/return',
      privacyPolicy: 'سياسة الخصوصية',
      privacyPolicylink: '/privacy',
      contactUs: 'اتصل بنا',
      contactUslink: '/contact',
      terms: "الشروط والأحكام",
      natural: "100% طبيعي",
      lastone: "© 2024. جميع الحقوق محفوظة من قبل د.جونتس",
    },
    hero: {
      title: 'أفضل زيت لتخفيف آلام العضلات',
      description: 'حل طبيعي لتخفيف الألم يناسب احتياجاتك اليومية'
    },
    about: {
      title: 'من نحن',
      content1: `مهمتنا هي تقديم حلول طبيعية وفعالة للأشخاص الذين يعانون من آلام المفاصل، لمساعدتهم على استعادة المرونة والراحة. نحن نقدم زيوتًا عالية الجودة مستخلصة من الأعشاب التقليدية والمكونات الطبيعية لتخفيف آلام المفاصل وتعزيز التعافي. هذه الزيوت لا تخفف الألم فقط، بل تعمل أيضًا على تقوية المفاصل والعضلات والعظام، مما يضمن فوائد صحية طويلة الأمد.`,
      content2: `في Dr. Joints، نؤمن بقوة الطبيعة والعافية الشاملة. التزامنا بالجودة والأصالة يضمن أن كل منتج مصمم لتقديم راحة مستدامة، مما يسمح لك بمواجهة الحياة بسهولة وثقة.`,
      question1: `لماذا تختار زيتنا لتخفيف آلام العضلات؟`,
      question2: "مكونات طبيعية:",
      answer1: `زيتنا مصنوع من أفضل الأعشاب الأيورفيدية المعروفة بخصائصها المضادة للالتهابات والمسكنة للألم، مما يوفر حلاً طبيعيًا وآمنًا.`,
      question3: "امتصاص سريع:",
      answer2: `تضمن التركيبة الخفيفة الامتصاص السريع، مما يسمح للمكونات النشطة بالتغلغل بعمق في أنسجة العضلات للحصول على تخفيف أسرع.`,
      question4: "مناسب لجميع الأعمار:",
      answer3: `سواء كنت رياضيًا تتعافى من تمرين شاق أو شخصًا يعاني من آلام العضلات المرتبطة بالعمر، فإن زيتنا هو الحل المثالي للأشخاص من جميع الأعمار.`,
    },
    product: {
      title: 'منتجنا',
      subtitle: 'أفضل زيت لتخفيف آلام العضلات',
      content1: `يمكن أن يكون ألم المفاصل كابوسك الأسوأ أو ضيفًا غير مرغوب فيه خلال فصول الشتاء الباردة أو مواسم الأمطار أو التقدم في العمر. المفاصل – الأنسجة الرابطة بين العظام – هي جزء مهم للغاية من جسم الإنسان.`,
      content2: `تحدد صحة مفاصلك مستوى المرونة والسهولة التي يمكنك بها أداء المهام اليومية. تخيل عدم القدرة على القيام بالمهام العادية التي نعتبرها أمرًا مفروغًا منه – الوقوف، الجلوس، المشي، رفع الأوزان، الانحناء، إلخ.`,
      content3: `بينما يمكن أن تمنع التمارين المنتظمة والنظام الغذائي المتوازن ونمط الحياة الصحي آلام المفاصل إلى حد ما، فإنها أحيانًا تكون حتمية. في هذه الأوقات، تحتاج إلى علاج موثوق يمكنه التعامل مع الانزعاج الذي يصاحب اضطرابات المفاصل والمساعدة في عملية التعافي وتقوية المفاصل والعضلات والعظام.`,
    },
    faq: {
      title: "الأسئلة الشائعة",
      faqData: [
        {
          question: "ما هو زيت DR.Joints لتخفيف آلام العضلات؟",
          answer: "زيت DR.Joints لتخفيف آلام العضلات هو زيت أيورفيدي مصمم لتخفيف آلام العضلات والتيبس والالتهابات. يتم تركيبه بمزيج من الأعشاب الطبيعية والمكونات التي تعمل على تخفيف الانزعاج وتعزيز تعافي العضلات."
        },
        {
          question: "كيف يعمل الزيت؟",
          answer: "يتغلغل الزيت بعمق في أنسجة العضلات، مما يوفر راحة سريعة عن طريق تقليل الالتهاب، وتحسين الدورة الدموية، وتهدئة توتر العضلات. تساعد مكوناته الطبيعية في تخفيف الألم ومنع الألم المستقبلي عن طريق تقوية العضلات بمرور الوقت."
        },
        {
          question: "هل الزيت مصنوع من مكونات طبيعية؟",
          answer: "نعم، زيت DR.Joints لتخفيف آلام العضلات مصنوع باستخدام مكونات أيورفيدية طبيعية 100٪. نحن نستخدم أعشاب معروفة بخصائصها المضادة للالتهابات والمسكنة للألم والتي تغذي العضلات، لضمان منتج آمن وفعال."
        },
        {
          question: "كيف يجب أن أستخدم الزيت؟",
          answer: "قم بوضع كمية صغيرة من الزيت على المنطقة المصابة ودلكها بحركات دائرية حتى يتم امتصاص الزيت. للحصول على أفضل النتائج، استخدم الزيت 2-3 مرات يوميًا، أو حسب التوجيهات. الاستخدام المنتظم يعزز الراحة طويلة الأمد."
        },
        {
          question: "هل يمكن استخدام الزيت لآلام المفاصل أيضًا؟",
          answer: "نعم، زيتنا متعدد الاستخدامات ويمكن استخدامه لكل من آلام العضلات والمفاصل. وهو فعال في تقليل الالتهاب والانزعاج في مناطق مثل الركبتين والكتفين والمرفقين والمفاصل الأخرى."
        },
        {
          question: "هل من الآمن استخدامه يوميًا؟",
          answer: "بالتأكيد! الزيت مصنوع من مكونات طبيعية وآمنة ومناسب للاستخدام اليومي. يساعد التطبيق المنتظم في الحفاظ على مرونة العضلات والمفاصل وتقليل التيبس ومنع الألم."
        },
        {
          question: "من يمكنه استخدام هذا الزيت؟",
          answer: "زيتنا لتخفيف الألم مناسب لجميع الفئات العمرية. سواء كنت رياضيًا، أو شخصًا يتعافى من إجهاد العضلات، أو شخصًا يعاني من آلام العضلات والمفاصل المرتبطة بالعمر، يمكن للزيت أن يساعد في تخفيف الانزعاج بفعالية."
        },
        {
          question: "كم من الوقت يستغرق للحصول على الراحة؟",
          answer: "يشعر العديد من المستخدمين بالراحة بعد فترة وجيزة من التطبيق، حيث يتم امتصاص الزيت بسرعة في الجلد. ومع ذلك، قد يختلف الوقت حسب شدة الألم. بالنسبة للألم المزمن، سيؤدي الاستخدام المنتظم بمرور الوقت إلى أفضل النتائج."
        }
      ]
    },
    testimonials: {
      title: 'آراء العملاء',
      testimonial: [
        {
          image: review,
          text: "أوصي بـ Dr. Joints لجميع عملائي الذين يعانون من مشاكل في المفاصل. إنه فعال وطبيعي وساعد الكثيرين منهم على البقاء نشطين وخالين من الألم. شخصيًا، لقد لاحظت تحسنًا ملحوظًا في مرونة المفاصل وأوقات التعافي. إنه منتج رائع!",
          name: 'سانجاي شارما',
          role: 'صاحب عمل',
        },
        {
          image: review1,
          text: "كنت أعاني من ألم في الركبة لمدة عامين. اقترح عليّ صديق زيتًا لتخفيف آلام المفاصل. بدأت الآن باستخدام هذا الزيت وشعرت بالكثير من الراحة في ألم ركبتي. إنه منتج جيد.",
          name: 'أحمد شيخ',
          role: 'معلم',
        },
        {
          image: null,
          text: "إنه منتج رائع. لقد كنت أستخدمه منذ 4 أشهر، واختفت جميع آلام المفاصل لدي. إنه منتج مطلوب جدًا لكبار السن مثلي. لقد أوصيت به بالفعل لجميع أصدقائي.",
          name: 'سرينيفاس ريدي',
          role: 'وكيل عقاري',
        },
      ]
    },
    contact: {
      title: 'اتصل بنا',
      address: 'بيغومبيت، حيدر آباد، تيلانجانا 500016',
      phone: '+91 9908 016 333',
      email: 'info@drjoints.in',
      info: "معلومات",
      det: "تفاصيل",
      pagetitle: 'هل تحتاج إلى مساعدتنا؟',
      pagesectitle: 'يمكنك الاتصال بنا اليوم',
      pageinname: "اسمك",
      pageinemail: "بريدك الإلكتروني",
      pageinphone: "رقم هاتفك",
      pageinsubject: "الموضوع",
      pageinmessage: "اكتب حالتك الحالية...",
      pagesubbutton: "إرسال الرسالة",
    },
    aboutpage: {
      title: "معلومات عنا",
      img: about,
    },
    productpage: {
      title: "أفضل زيت لتخفيف آلام العضلات",
      secondtitle: 'الكمية',
      content: `د. جوينتس هو حل فعال لتخفيف آلام المفاصل وعدم الراحة.
                              يتكون من مزيج من المكونات الطبيعية، يستهدف الالتهاب
                              ويعزز الحركة الأفضل، مما يتيح لك الاستمتاع بأنشطتك اليومية دون قيود.
                              سواء كنت تواجه مشاكل في المفاصل بسبب العمر أو الألم الناتج عن الجهد البدني،
                              يوفر د. جوينتس راحة سريعة، ويساعد على تقوية المفاصل
                              وتحسين المرونة العامة. مثالي للاستخدام اليومي، يدعم أسلوب حياة صحي وأكثر نشاطًا.`,
      buy: 'اشترِ الآن',
    },
    returnpage: {
      title: 'سياسة الإرجاع',
      sectitle: 'سياسة الإرجاع',
      content1: `د. جوينتس ملتزم بمساعدة ملايين الأشخاص ليصبحوا أكثر لياقة وصحة وسعادة؛ نحن نضمن جودة منتجاتنا بسياسة إرجاع لمدة 15 يومًا. إذا كنت لا تعتقد أن منتجاتنا تحسن جودة حياتك، فإننا نقدم استردادًا خلال 15 يومًا من استلام طلبك، مع خصم تكلفة الشحن. يجب إرجاع أي منتج متبقٍ والتعبئة الأصلية إلى د. جوينتس لاسترداد الأموال.`,
      content2: `الأهلية – يكون شراؤك مؤهلاً للإرجاع إذا استوفى المعايير التالية:`,
      content3: `تتطلب عمليات الاسترداد إعادة منتجات د. جوينتس المستخدمة أو غير المستخدمة وتغليفها.`,
      content4: `يجب أن يتم الإرجاع بواسطة العميل فقط.`,
      content5: `يجب أن تصل المنتجات إلى العنوان المحدد على الموقع.`,
      content6: `يجب أن تصل المنتجات خلال 15 يومًا من تاريخ شراء المنتج.`,
      content7: `لن نقبل المنتجات التالفة.`,
      content8: `سيتم إضافة المبلغ إلى المصدر الأصلي للدفع الذي قام به العميل خلال 10 أيام عمل.`,
    },
    sections: [
      {
        title: "المعلومات التي نجمعها",
        content: [
          {
            subtitle: "المعلومات الشخصية",
            text: "تتضمن هذه المعلومات التي يمكن استخدامها لتحديد هويتك، مثل اسمك وعنوان الفواتير وعنوان الشحن والبريد الإلكتروني ورقم الهاتف. تقدم هذه المعلومات فقط عندما تتصل بنا عبر نموذج على الموقع."
          },
          {
            subtitle: "المعلومات غير الشخصية",
            text: "تشمل هذه المعلومات التي لا يمكن استخدامها لتحديد هويتك، مثل نوع المتصفح ونظام التشغيل وعنوان IP ونشاط التصفح على الموقع والمعلومات الديموغرافية (مثل العمر والجنس). يتم جمع هذه المعلومات تلقائيًا عند استخدام الموقع."
          }
        ]
      },
      {
        title: "كيفية استخدامنا لمعلوماتك",
        content: [
          {
            subtitle: "المعلومات الشخصية",
            text: "سنستخدم معلوماتك الشخصية فقط للرد على الاستفسارات والطلبات. لن نشارك معلوماتك الشخصية مع أي أطراف ثالثة دون موافقتك، إلا إذا كان ذلك مطلوبًا بموجب القانون."
          },
          {
            subtitle: "المعلومات غير الشخصية",
            text: "نستخدم المعلومات غير الشخصية لتحسين الموقع وفهم كيفية تفاعل المستخدمين. قد نستخدم أيضًا المعلومات غير الشخصية لأغراض التسويق والترويج الداخلية."
          }
        ]
      },
      {
        title: "ملفات تعريف الارتباط وتقنيات التتبع",
        content: [
          {
            text: "قد نستخدم ملفات تعريف الارتباط وتقنيات التتبع الأخرى لجمع معلومات غير شخصية حول استخدامك للموقع. ملفات تعريف الارتباط هي ملفات صغيرة تُحفظ على جهازك عند زيارة موقع ويب. تتيح للموقع تذكر إجراءاتك وتفضيلاتك مع مرور الوقت."
          },
          {
            text: "عند زيارة صفحة تسجيل الدخول الخاصة بنا، سنقوم بتعيين عدة ملفات تعريف ارتباط لحفظ معلومات تسجيل الدخول الخاصة بك وخيارات عرض الشاشة. تستمر ملفات تعريف الارتباط لتسجيل الدخول لمدة يومين، وملفات تعريف خيارات الشاشة لمدة عام. إذا اخترت 'تذكرني'، فسيستمر تسجيل الدخول الخاص بك لمدة أسبوعين. إذا قمت بتسجيل الخروج، ستتم إزالة ملفات تعريف الارتباط الخاصة بتسجيل الدخول."
          },
          {
            text: "إذا قمت بتحرير أو نشر مقالة، سيتم حفظ ملف تعريف ارتباط إضافي في متصفحك. هذا الملف لا يتضمن بيانات شخصية ويشير فقط إلى معرف المقالة التي قمت بتحريرها. تنتهي صلاحيته بعد يوم واحد."
          }
        ]
      },
      {
        title: "مزودو الخدمة من الأطراف الثالثة",
        content: [
          {
            text: "قد نستخدم مزودي الخدمة من الأطراف الثالثة لمساعدتنا في تشغيل الموقع وتقديم خدماتنا. قد يتمكن هؤلاء المزودون من الوصول إلى معلوماتك غير الشخصية. لن نشارك معلوماتك الشخصية مع أي من مزودي الخدمة لأغراضهم التسويقية دون موافقتك."
          }
        ]
      },
      {
        title: "الأمان",
        content: [
          {
            text: "نتخذ خطوات معقولة لحماية معلوماتك من الوصول غير المصرح به أو الكشف أو التغيير أو التدمير. ومع ذلك، لا يوجد موقع أو نقل عبر الإنترنت آمن تمامًا."
          }
        ]
      },
      {
        title: "خصوصية الأطفال",
        content: [
          {
            text: "الموقع غير موجه للأطفال دون سن 13 عامًا. لا نجمع معلومات شخصية عن عمد من الأطفال تحت سن 13. إذا كنت أحد الوالدين أو الوصي وتعتقد أن طفلك قد زودنا بمعلومات شخصية، يرجى الاتصال بنا. سنتخذ خطوات لإزالة المعلومات من سجلاتنا."
          }
        ]
      },
      {
        title: "التغييرات في سياسة الخصوصية هذه",
        content: [
          {
            text: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بنشر أي تغييرات على الموقع. نشجعك على مراجعة سياسة الخصوصية هذه دوريًا للحصول على أحدث المعلومات حول ممارسات الخصوصية الخاصة بنا."
          }
        ]
      },
      {
        title: "اتصل بنا",
        content: [
          {
            text: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على hello@drjoints.in"
          }
        ]
      }
    ],
    privacy: {
      title: "سياسة الخصوصية"
    },
    checkout: {
      title: "الدفع",
      sectitle: "تفاصيل الفوترة",
      firstname: 'الاسم الأول',
      lastname: 'الاسم الأخير',
      country: 'البلد/المنطقة',
      address: 'عنوان الشارع',
      city: 'المدينة/البلدة',
      countrytitle: "البلد",
      phone: "الهاتف",
      email: "عنوان البريد الإلكتروني",
      order: "طلبك",
      clientaddress: "الشقة/الجناح",
      mode: "طريقة الدفع",
      total: "الإجمالي",
      shipping: "الشحن",
      subtotal: "المجموع الفرعي",
      product: "المنتج",
      order: "إتمام الطلب",
      processing: "جاري المعالجة...",
      successfully: "تم تقديم الطلب بنجاح!",
      thank: "شكرًا لشرائك. ستتلقى بريدًا إلكترونيًا للتأكيد قريبًا.",
      continue: "مواصلة التسوق"
    },
    features: [
      {
        icon: Brain,
        title: "تخفيف الألم الفعال",
        color: "text-blue-500"
      },
      {
        icon: Leaf,
        title: "مكونات طبيعية",
        color: "text-green-500"
      },
      {
        icon: Hand,
        title: "يعزز التعافي",
        color: "text-orange-500"
      },
      {
        icon: Shield,
        title: "مريح وسهل الاستخدام",
        color: "text-purple-500"
      }
    ],

  }
};


const App = () => {
  // const [currentLang, setCurrentLang] = useState('en');
  // Initialize language from localStorage or default to 'en'
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('preferredLanguage') || 'en';
  });

  // Custom language setter that also updates localStorage
  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    localStorage.setItem('preferredLanguage', langCode);
  };

  // Effect to ensure language persists on page reload
  useEffect(() => {
    // Update localStorage whenever language changes
    localStorage.setItem('preferredLanguage', currentLang);

    // // Optional: Set document dir attribute for RTL support
    document.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // Optional: Set lang attribute on html element
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <div>
      <BrowserRouter>
        <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} translations={translations} languages={languages} />
        <Routes>
          <Route path='/index-2.html' element={<Home currentLang={currentLang} translations={translations} />} />
          <Route path='/about' element={<About currentLang={currentLang} translations={translations} />} />
          <Route path='/product' element={<Product currentLang={currentLang} translations={translations} />} />
          <Route path='/return' element={<Return currentLang={currentLang} translations={translations} />} />
          <Route path='/privacy' element={<Privacy currentLang={currentLang} translations={translations} />} />
          <Route path='/contact' element={<Contact currentLang={currentLang} translations={translations} />} />
          <Route path='/checkout' element={<Checkout currentLang={currentLang} translations={translations} />} />
          <Route path='/terms' element={<TermsAndConditions currentLang={currentLang} translations={translations} />} />
        </Routes>
        <Footer currentLang={currentLang} translations={translations} />
      </BrowserRouter>
    </div>
  )
}

export default App




