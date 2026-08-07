import React, { useState } from "react";

export function About() {
    const [activeMember, setActiveMember] = useState(0);

    const highlights = [
        {
            stat: "100%",
            label: "R&D Rate",
            description: "Dedicated research and development behind every custom solution we build."
        },
        {
            stat: "Lifetime",
            label: "Service Support",
            description: "Continuous guidance and technical assistance long after deployment."
        },
        {
            stat: "100%",
            label: "Guaranteed Service",
            description: "Reliable deliverables crafted specifically around your exact process."
        }
    ];

    const teamMembers = [
        {
            name: "Stanley",
            role: "Founder & CEO",
            handle: "stanley/fusionpath",
            socialType: "linkedin",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
        },
        {
            name: "Steve",
            role: "Co-Founder & Marketing Specialist",
            handle: "steve/fusionpath",
            socialType: "twitter",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
        },
        {
            name: "Manoj",
            role: "Designer & Developer",
            handle: "manoj/fusionpath",
            socialType: "github",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <div className="bg-white text-[#06131D] min-h-screen font-sans" id="about">
            {/* Hero Section */}
            <section className="bg-[#DEDEDE]/30 text-[#06131D] py-16 px-6 border-b border-[#7194B2]/20">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="inline-block bg-[#DE4A1A] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                        Established 2026 • Tiruppur, Tamil Nadu
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                        Every Idea Needs a <span className="text-[#DE4A1A]">Path Forward.</span>
                    </h1>
                    <p className="text-[#7194B2] text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
                        Fusion Path brings software, web development, digital marketing, and data automation together under one roof so your business moves in one clear direction.
                    </p>
                </div>
            </section>

            {/* Stats & Core Guarantees Section */}
            <section className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
                <div className="grid md:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#06131D] text-white p-6 border border-[#7194B2]/40 shadow-lg hover:border-[#DE4A1A] transition text-center"
                        >
                            <div className="text-3xl md:text-4xl font-black text-[#DE4A1A] mb-1 font-mono">
                                {item.stat}
                            </div>
                            <h3 className="text-sm font-bold mb-1">{item.label}</h3>
                            <p className="text-[11px] text-[#7194B2] leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Company Overview Section */}
            <section className="max-w-5xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="text-[#DE4A1A] text-xs font-bold uppercase tracking-wider block mb-2">
                            Who We Are
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#06131D] mb-4">
                            Navigating Digital Transformation & Tech Talent Acceleration.
                        </h2>
                        <p className="text-slate-600 text-xs leading-relaxed mb-4">
                            We build custom software that runs quietly in the background of your business so the front of it runs smoothly. From static websites to enterprise ERP solutions, performance advertising, and workflow automation, we streamline end-to-end digital needs.
                        </p>
                        <div className="p-3 bg-[#DEDEDE]/40 border-l-4 border-[#06131D]">
                            <p className="text-[11px] text-[#06131D] font-bold">
                                Perumanallur, Tiruppur 641 666, Tamil Nadu
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#DEDEDE]/20 p-6 border border-[#7194B2]/30 shadow-sm">
                        <h3 className="text-lg font-bold mb-3 text-[#06131D]">Our Core Pillars</h3>
                        <ul className="space-y-3 text-xs text-slate-700">
                            <li className="flex items-start gap-2.5">
                                <span className="p-1 bg-[#06131D] text-white font-bold text-[10px]">01</span>
                                <span><strong>Integrated Solutions:</strong> Web, software, marketing, and data combined for maximum ROI.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="p-1 bg-[#06131D] text-white font-bold text-[10px]">02</span>
                                <span><strong>Practical Upskilling:</strong> Industry certification courses built on real agency project skills.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="p-1 bg-[#06131D] text-white font-bold text-[10px]">03</span>
                                <span><strong>Reliable Support:</strong> 100% R&D rate with lifetime support backing every deployment.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-[#06131D] text-white py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center max-w-xl mx-auto mb-10">
                        <span className="text-[#DE4A1A] text-xs font-bold uppercase tracking-wider block mb-1">
                            Leadership & Talent
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
                            Our Team
                        </h2>
                        <p className="text-[#7194B2] text-xs leading-relaxed">
                            Meet the minds driving software engineering, digital growth, and design strategy at Fusion Path.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center max-w-4xl mx-auto">
                        {teamMembers.map((member, idx) => {
                            const isSelected = activeMember === idx;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => setActiveMember(idx)}
                                    className="cursor-pointer group transition-all duration-300 max-w-xs mx-auto w-full"
                                >
                                    <div className="bg-[#7194B2]/20 overflow-hidden aspect-square relative border-t border-x border-[#7194B2]/30">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                                        />
                                    </div>

                                    <div>
                                        <div className={`flex items-center text-xs px-3 py-1.5 transition ${isSelected ? "bg-[#DE4A1A] text-white" : "bg-[#7194B2] text-[#06131D]"
                                            }`}>
                                            <span className="font-bold uppercase tracking-wider mr-2 font-mono text-[9px]">
                                                {member.socialType}
                                            </span>
                                            <span className="text-[10px] font-semibold flex-1 truncate">
                                                {member.handle}
                                            </span>
                                        </div>

                                        <div className={`p-4 transition flex justify-between items-center ${isSelected
                                                ? "bg-[#DE4A1A] text-white"
                                                : "bg-white text-[#06131D]"
                                            }`}>
                                            <div>
                                                <h3 className="text-base font-bold leading-tight">{member.name}</h3>
                                                <p className={`text-[11px] mt-0.5 ${isSelected ? "text-white/80" : "text-[#7194B2]"}`}>
                                                    {member.role}
                                                </p>
                                            </div>

                                            <svg
                                                className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isSelected ? "text-white" : "text-[#DE4A1A]"
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom Contact Banner */}
            <section className="bg-[#DEDEDE]/40 py-12 px-6 text-center border-t border-[#7194B2]/20">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-extrabold text-[#06131D] mb-3">
                        Want to Work With Our Team?
                    </h2>
                    <p className="text-[#7194B2] text-xs mb-6 font-medium">
                        Whether you need custom POS software, web development, or automated reporting systems, we are here to help.
                    </p>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#DE4A1A] text-white px-6 py-3 text-xs font-bold shadow-md hover:bg-[#06131D] transition duration-300 cursor-pointer"
                    >
                        Get in Touch
                    </button>
                </div>
            </section>
        </div>
    );
}