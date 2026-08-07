import React, { useState } from "react";

export function Courses() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const featureCards = [
        {
            title: "Hands-on Projects",
            description: "Learn the skills our agency uses to build real client projects every day.",
            icon: (
                <svg className="w-6 h-6 text-[#DE4A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            title: "Expert Mentorship",
            description: "Direct guidance from practicing software developers and digital marketers.",
            icon: (
                <svg className="w-6 h-6 text-[#DE4A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            title: "Industry Certification",
            description: "Walk away with an official Certificate of Completion from Fusion Path.",
            icon: (
                <svg className="w-6 h-6 text-[#DE4A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            )
        },
        {
            title: "Flexible Timings",
            description: "Convenient batch schedules structured to fit around your studies or work.",
            icon: (
                <svg className="w-6 h-6 text-[#DE4A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    const courseTracks = [
        {
            id: "track-1",
            title: "Web Development Masterclass",
            category: "Development",
            level: "Beginner to Advanced",
            duration: "Project-based",
            description: "Learn full-stack website creation including frontend design, dynamic CMS, and e-commerce architecture.",
            highlights: [
                "HTML, CSS, JavaScript & React fundamentals",
                "Dynamic content & database integration",
                "Real-world agency project deployment"
            ]
        },
        {
            id: "track-2",
            title: "Data Automation & Excel",
            category: "Data & Automation",
            level: "All Levels",
            duration: "Flexible Batches",
            description: "Master automated reporting, data entry workflows, and seamlessly integrate Excel with Tally and Google Sheets.",
            highlights: [
                "Automated report generation",
                "Workflow triggers & approvals",
                "Tally, Excel & Sheets integration"
            ]
        },
        {
            id: "track-3",
            title: "Digital Marketing & Performance Ads",
            category: "Marketing",
            level: "Intermediate",
            duration: "Practical Track",
            description: "Understand SEO strategy, social media branding, and high-converting Meta and Google advertising campaigns.",
            highlights: [
                "Social media strategy & execution",
                "Search engine optimisation (SEO)",
                "Meta & Google Ads manager"
            ]
        },
        {
            id: "track-4",
            title: "Software Fundamentals & POS Logic",
            category: "Development",
            level: "Foundational",
            duration: "Hands-on",
            description: "Understand core software logic, database structure, and modern billing, POS, and inventory software workflows.",
            highlights: [
                "Logic building & program structure",
                "Database management basics",
                "POS & Inventory system workflows"
            ]
        }
    ];

    const categories = ["All", "Development", "Marketing", "Data & Automation"];

    const filteredCourses = selectedCategory === "All"
        ? courseTracks
        : courseTracks.filter(course => course.category === selectedCategory);

    return (
        <div className="bg-[#DEDEDE]/20 text-[#06131D] min-h-screen font-sans" id="courses">
            {/* Hero Section */}
            <section className="bg-[#06131D] text-white py-20 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                        <span className="inline-block bg-[#DE4A1A]/20 text-[#DE4A1A] border border-[#DE4A1A]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                            Industry Certification Courses
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                            Learn the Skills We Build With, <span className="text-[#DE4A1A]">Every Day.</span>
                        </h1>
                        <p className="text-[#7194B2] text-base md:text-lg mb-8 leading-relaxed">
                            Upskill with hands-on, project-based training taught by active agency developers and digital marketers.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#courses-grid" className="bg-[#DE4A1A] text-white px-8 py-3.5 rounded-lg text-sm font-bold shadow-lg hover:bg-[#DE4A1A]/90 transition">
                                Explore Course Tracks
                            </a>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border border-[#7194B2]/40 text-white px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition cursor-pointer"
                            >
                                Get Syllabus
                            </button>
                        </div>
                    </div>

                    {/* Hero Visual Card */}
                    <div className="bg-[#7194B2]/10 border border-[#7194B2]/30 rounded-2xl p-8 relative backdrop-blur-sm">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-[#06131D]/80 p-4 rounded-xl border border-[#7194B2]/20">
                                <div className="p-3 bg-[#DE4A1A]/20 rounded-lg text-[#DE4A1A]">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-white">Project-Based Learning</h4>
                                    <p className="text-xs text-[#7194B2]">Build real client deliverables</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-[#06131D]/80 p-4 rounded-xl border border-[#7194B2]/20">
                                <div className="p-3 bg-[#DE4A1A]/20 rounded-lg text-[#DE4A1A]">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-white">Verified Certification</h4>
                                    <p className="text-xs text-[#7194B2]">Official Fusion Path credential</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-[#06131D]/80 p-4 rounded-xl border border-[#7194B2]/20">
                                <div className="p-3 bg-[#DE4A1A]/20 rounded-lg text-[#DE4A1A]">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-white">Flexible Batches</h4>
                                    <p className="text-xs text-[#7194B2]">Convenient schedule timing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Highlights ("What We Offer") */}
            <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featureCards.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-xl border border-[#7194B2]/30 shadow-md hover:border-[#DE4A1A] transition"
                        >
                            <div className="p-3 bg-[#DEDEDE]/40 w-fit rounded-lg mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-base font-bold text-[#06131D] mb-2">{feature.title}</h3>
                            <p className="text-xs text-slate-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Course Explorer Grid */}
            <section id="courses-grid" className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-[#DE4A1A] text-xs font-bold uppercase tracking-wider block mb-2">
                        Course Tracks
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#06131D] mb-4">
                        Explore Our Practical Training Programs
                    </h2>
                    <p className="text-[#7194B2] text-sm">
                        Walk away with actionable skills and a certificate that proves your capability.
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-full text-xs font-bold transition ${selectedCategory === cat
                                        ? "bg-[#06131D] text-white"
                                        : "bg-white text-[#06131D] border border-[#7194B2]/30 hover:border-[#DE4A1A]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-2xl p-8 border border-[#7194B2]/30 shadow-sm hover:shadow-lg hover:border-[#DE4A1A] transition flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="bg-[#DE4A1A]/10 text-[#DE4A1A] text-xs font-bold px-3 py-1 rounded-full">
                                        {course.category}
                                    </span>
                                    <span className="text-xs font-semibold text-[#7194B2]">
                                        {course.level}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#06131D] mb-3">{course.title}</h3>
                                <p className="text-xs text-slate-600 mb-6 leading-relaxed">{course.description}</p>

                                <div className="border-t border-[#DEDEDE] pt-4 mb-6">
                                    <h4 className="text-xs font-bold uppercase text-[#06131D] tracking-wider mb-3">Key Modules:</h4>
                                    <ul className="space-y-2">
                                        {course.highlights.map((h, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-[#06131D]">
                                                <svg className="w-4 h-4 text-[#DE4A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-[#DEDEDE] flex justify-between items-center">
                                <span className="text-xs font-bold text-[#7194B2]">
                                    Timing: <span className="text-[#06131D]">Flexible Batches</span>
                                </span>
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-[#06131D] text-white px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-[#DE4A1A] transition cursor-pointer"
                                >
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Banner (Sharp Corners, Single Contact Button) */}
            <section className="bg-[#06131D] text-white py-16 px-6 max-w-7xl mx-auto mb-20 text-center relative overflow-hidden rounded-none border-t border-b border-[#7194B2]/30">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Accelerate Your Tech Career?</h2>
                    <p className="text-[#7194B2] text-sm mb-8 leading-relaxed">
                        Get hands-on training, build portfolio projects, and earn an official Certificate of Completion from Fusion Path.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-[#DE4A1A] text-white px-8 py-3.5 rounded-lg text-sm font-bold shadow-lg hover:bg-[#DE4A1A]/90 transition cursor-pointer"
                        >
                            Contact Course Advisor
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}