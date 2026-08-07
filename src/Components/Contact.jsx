import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// ── EmailJS Configuration ───────────────────────────────────────────────────
// Replace these 3 values with your actual EmailJS credentials:
const EMAILJS_SERVICE_ID = "service_ekiohzn";
const EMAILJS_TEMPLATE_ID = "template_d2d330v";
const EMAILJS_PUBLIC_KEY = "l9_nui2KwxGSul8vF";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "General Inquiry",
        message: ""
    });

    const [status, setStatus] = useState({
        loading: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, submitted: false, error: null });

        // Check if user has updated placeholder keys
        if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
            // Simulated success for demo mode if keys aren't set yet
            setTimeout(() => {
                setStatus({ loading: false, submitted: true, error: null });
                setFormData({ name: "", email: "", service: "General Inquiry", message: "" });
            }, 1000);
            return;
        }

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    service_interest: formData.service,
                    message: formData.message,
                    to_email: "fusionpathofficial@gmail.com"
                },
                EMAILJS_PUBLIC_KEY
            );

            setStatus({ loading: false, submitted: true, error: null });
            setFormData({ name: "", email: "", service: "General Inquiry", message: "" });
        } catch (err) {
            console.error("EmailJS Error:", err);
            setStatus({
                loading: false,
                submitted: false,
                error: "Failed to send message. Please check your EmailJS keys or try again."
            });
        }
    };

    return (
        <div className="bg-[#DEDEDE]/30 text-[#06131D] min-h-screen font-sans flex flex-col justify-between items-center pt-12" id="contact">
            <div className="max-w-5xl w-full bg-white border border-[#7194B2]/30 p-8 md:p-12 shadow-sm mx-6">
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-[#DE4A1A] text-xs font-bold uppercase tracking-wider block mb-2 font-['Space_Grotesk']">
                                Fusion Path
                            </span>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-[#06131D] tracking-tight font-['Space_Grotesk']">
                                Get in touch
                            </h1>
                        </div>

                        <div className="space-y-6 text-sm">
                            <div>
                                <p className="text-[#7194B2] text-xs font-semibold mb-1">Email:</p>
                                <a
                                    href="mailto:fusionpathofficial@gmail.com"
                                    className="font-bold text-[#06131D] hover:text-[#DE4A1A] transition"
                                >
                                    fusionpathofficial@gmail.com
                                </a>
                            </div>

                            <div>
                                <p className="text-[#7194B2] text-xs font-semibold mb-1">Phone:</p>
                                <a
                                    href="tel:+917397166447"
                                    className="font-bold text-[#06131D] hover:text-[#DE4A1A] transition"
                                >
                                    +91 73971 66447
                                </a>
                            </div>

                            <div>
                                <p className="text-[#7194B2] text-xs font-semibold mb-1">Address:</p>
                                <p className="font-bold text-[#06131D] leading-relaxed">
                                    Perumanallur, Tiruppur 641 666,<br />
                                    Tamil Nadu, India
                                </p>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <p className="text-[#7194B2] text-xs font-semibold mb-3">Follow us:</p>
                            <div className="flex gap-3">
                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/fusionpath.official?igsh=MXNzZDFkbmtyNTU2dw=="
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-8 h-8 rounded-full bg-[#06131D] text-white flex items-center justify-center hover:bg-[#DE4A1A] transition cursor-pointer"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>

                                {/* GitHub */}
                                <a
                                    href="https://github.com/fusionpathofficial"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-8 h-8 rounded-full bg-[#06131D] text-white flex items-center justify-center hover:bg-[#DE4A1A] transition cursor-pointer"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                    </svg>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/917397166447"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-8 h-8 rounded-full bg-[#06131D] text-white flex items-center justify-center hover:bg-[#DE4A1A] transition cursor-pointer"
                                    aria-label="WhatsApp"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {status.submitted && (
                            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-md">
                                ✓ Message sent successfully! We will get back to you shortly.
                            </div>
                        )}

                        {status.error && (
                            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold rounded-md">
                                ⚠ {status.error}
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-[#06131D] mb-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    required
                                    className="w-full bg-[#DEDEDE]/40 border border-[#7194B2]/30 px-4 py-3 text-xs text-[#06131D] focus:outline-none focus:border-[#DE4A1A] transition"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#06131D] mb-1">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email address"
                                    required
                                    className="w-full bg-[#DEDEDE]/40 border border-[#7194B2]/30 px-4 py-3 text-xs text-[#06131D] focus:outline-none focus:border-[#DE4A1A] transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-[#06131D] mb-1">
                                Service Interest
                            </label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full bg-[#DEDEDE]/40 border border-[#7194B2]/30 px-4 py-3 text-xs text-[#06131D] focus:outline-none focus:border-[#DE4A1A] transition"
                            >
                                <option value="Software Development">Software Development</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Data Automation">Data Automation</option>
                                <option value="Certification Courses">Certification Courses</option>
                                <option value="General Inquiry">General Inquiry</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-[#06131D] mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write something...."
                                required
                                className="w-full bg-[#DEDEDE]/40 border border-[#7194B2]/30 p-4 text-xs text-[#06131D] focus:outline-none focus:border-[#DE4A1A] transition resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status.loading}
                            className="w-full bg-[#06131D] text-white py-3.5 text-xs font-bold hover:bg-[#DE4A1A] transition duration-300 cursor-pointer disabled:opacity-50"
                        >
                            {status.loading ? "Sending Message..." : "Send Message"}
                        </button>
                    </form>

                </div>
            </div>

            {/* Footer */}
            <footer className="w-full bg-[#06131D] text-white py-8 px-6 border-t border-white/10 text-xs mt-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="font-bold text-base tracking-wider font-['Space_Grotesk']">
                        FUSION<span className="text-[#DE4A1A]">PATH.</span>
                    </div>
                    <div className="flex gap-6 text-gray-400">
                        <a href="#home" className="hover:text-white transition">Home</a>
                        <a href="#services" className="hover:text-white transition">Services</a>
                        <a href="#courses" className="hover:text-white transition">Courses</a>
                        <a href="#about" className="hover:text-white transition">About</a>
                        <a href="#contact" className="hover:text-white transition">Contact</a>
                    </div>
                    <div className="text-gray-500">
                        © 2026 Fusion Path. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}