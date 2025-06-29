"use client";

import { useEffect, useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
    answer2?: string;
    isOpen?: boolean;
}

// Clippers FAQs - This already exists in your code, keeping for reference
const faqsClippers: FAQItem[] = [
    {
        question: "Do I need followers to get views?",
        answer: "No, if you post high quality already popular network shows consistently, the algorithm does not care how many followers you have.",
        answer2: "You can get millions of views on literally your second post. It happens all the time.",
        isOpen: false
    },
    {
        question: "How long does it take to get paid?",
        answer: "We send out payments every other friday.",
        isOpen: true
    },
    {
        question: "Do I need to be a video editor?",
        answer: "No, our software has pre-made clip templates that you can easily apply within our app.",
        isOpen: false
    },
    {
        question: "How much do you pay?",
        answer: "We disclose all payment information within the app. We've paid out hundreds of thousands of dollars so far across all our clippers.",
        isOpen: false
    },
    {
        question: "Do you need to live in the United States to Sign Up?",
        answer: "Yes and we are looking to add other countries as soon as possible.",
        isOpen: false
    }
];

// Network FAQs - Transformed from the stepsNetwork data
const faqsNetwork: FAQItem[] = [
    {
        question: "How much does it cost?",
        answer: "We charge up to 90% less than typical digital advertising. If you would like to see our exact rates check your Network Dashboard",
        answer2: "",
        isOpen: false
    },
    {
        question: "Can I track our campaign's performance?",
        answer: "Yes, in Network's Dashboard you'll be provided with an Analytics tab. We provide detailed metrics like total views, engagement, top-performing clips, and much more.",
        answer2: "",
        isOpen: false
    },
    {
        question: "Will I be able to see the demographics of the viewers for my clips?",
        answer: "Yes, we provide demographic insights.",
        answer2: "",
        isOpen: false
    },
    {
        question: "Does Post Clips own any content we provide?",
        answer: "No, Absolutely not. We set up a straightforward licensing agreement that lets us distribute your content on our social media channels in order to get YOU views.",
        answer2: "",
        isOpen: false
    }
];

const FAQs = ({ type }: { type: "clipper" | "network" }) => {
    const [faqs, setFaqs] = useState<FAQItem[]>([
    ]);

    useEffect(() => {
        if (type === "clipper") {
            setFaqs(faqsClippers);
        } else {
            setFaqs(faqsNetwork);
        }
    }, [type]);

    const toggleFAQ = (index: number) => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                return { ...faq, isOpen: !faq.isOpen };
            }
            return faq;
        }));
    };

    return (
        <section className="faqs-section">
            <h2 className="faqs-title">Frequently asked questions</h2>
            <div className="faqs-container">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${faq.isOpen ? 'open' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question-row">
                            <h3 className="faq-question">{faq.question}</h3>
                            <div className="faq-toggle">
                                {faq.isOpen ? (
                                    <span className="minus">×</span>
                                ) : (
                                    <span className="plus">+</span>
                                )}
                            </div>
                        </div>
                        <div className={"faq-answer " + (faq.isOpen ? 'open' : '')}>
                            <p>{faq.answer}</p>
                            {faq.answer2 && (
                                <p className="answer-2 mt-2">{faq.answer2}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQs;