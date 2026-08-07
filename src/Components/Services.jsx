import React, { useState } from "react";

export function Services() {
    const [activeFaq, setActiveFaq] = useState(0);

    const services = [
        {
            id: "01",
            title: "Software Development",
            description: "Custom business software, POS & ERP tools built around how you work.",
            icon: (
                <svg className="w-8 h-8 text-[#DE4A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            items: ["Custom business software", "POS & billing systems", "Inventory & ERP tools", "Mobile applications"]
        },
        {
            id: "02",
            title: "Web Development",
            description: "Static, dynamic & e-commerce websites that convert visitors into customers.",
            icon: (
                <svg className="w-8 h-8 text-[#DE4A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            items: ["Static Websites (from ₹6,999)", "Dynamic Websites (from ₹18,999)", "E-commerce Websites (from ₹29,999)"]
        },
        {
            id: "03",
            title: "Digital Marketing",
            description: "Social media, SEO & performance ads that put you in front of the right people.",
            icon: (
                <svg className="w-8 h-8 text-[#DE4A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
            ),
            items: ["Social media management", "Search engine optimisation", "Meta & Google Ads", "WhatsApp & SMS marketing"]
        },
        {
            id: "04",
            title: "Data Automation",
            description: "Automate reports, entries & workflows so your team stops repeating itself.",
            icon: (
                <svg className="w-8 h-8 text-[#DE4A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            items: ["Report automation", "Data entry automation", "Workflow automation", "Tool integration (Tally, Excel, Sheets)"]
        },
        {
            id: "05",
            title: "Certification Courses",
            description: "Learn the skills we build with, every day. Hands-on, project-based training.",
            icon: (
                <svg className="w-8 h-8 text-[#DE4A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
            ),
            items: ["Web Development", "Data Automation & Excel", "Digital Marketing", "Software Fundamentals"]
        }
    ];

    const faqs = [
        {
            question: "What payment methods and pricing structure does Fusion Path offer?",
            answer: "We offer transparent one-time pricing for Web Development starting from ₹6,999, and monthly retainers for Digital Marketing starting at ₹10,999/month. Custom scope projects receive dedicated quotes."
        },
        {
            question: "Are domain and hosting guidance included?",
            answer: "Yes, hosting and domain setup guidance are included with every website development plan."
        },
        {
            question: "Do course certifications include hands-on experience?",
            answer: "All certification courses feature hands-on, project-based training with a Certificate of Completion issued upon course finish."
        }
    ];

    return (
        <div className="bg-[#FAFAFB] text-[#06131D] min-h-screen font-sans" id="services">
            <section className="py-16 px-6 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#06131D] tracking-tight mb-4 font-['Space_Grotesk']">
                    Our Services
                </h1>
                <p className="text-[#475569] text-base md:text-lg max-w-2xl mx-auto font-medium">
                    Fusion Path brings software, web, marketing, and data together under one roof so your business moves in one clear direction.
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-6 pb-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:border-[#DE4A1A] transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-[#DE4A1A]/10 transition">
                                        {service.icon}
                                    </div>
                                    <span className="text-2xl font-bold text-slate-300 font-mono">
                                        {service.id}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-[#06131D] font-['Space_Grotesk']">{service.title}</h3>
                                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                                <ul className="space-y-2.5 mb-8">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#06131D]">
                                            <svg className="w-4 h-4 text-[#DE4A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center text-sm font-bold text-[#DE4A1A] group-hover:translate-x-1 transition-transform cursor-pointer"
                            >
                                Learn More
                                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <span className="text-[#DE4A1A] text-xs font-bold uppercase tracking-wider block mb-2">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#06131D] mb-4 font-['Space_Grotesk']">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-600 text-sm mb-6">
                            Have questions regarding custom scopes, website plans, or certification tracks? Reach out directly.
                        </p>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-[#06131D] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#DE4A1A] transition cursor-pointer"
                        >
                            Contact Us
                        </button>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden transition shadow-xs">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                                    className={`w-full text-left px-6 py-4 flex justify-between items-center font-bold text-sm cursor-pointer ${activeFaq === index ? 'bg-[#DE4A1A] text-white' : 'bg-white text-[#06131D]'
                                        }`}
                                >
                                    {faq.question}
                                    <span>{activeFaq === index ? '−' : '+'}</span>
                                </button>
                                {activeFaq === index && (
                                    <div className="bg-white px-6 py-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}