import React from 'react'

export function Home() {
    return (
        <main className="home-root min-h-screen bg-[#06131D] text-white overflow-hidden relative" id="home">

            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section className="hero-section relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">

                {/* Background Gradients & Overlays */}
                <div className="hero-bg absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#DE4A1A]/20 via-[#06131D] to-[#06131D] pointer-events-none" />
                <div className="hero-grid-overlay absolute inset-0 bg-[linear-gradient(to_right,#7194B210_1px,transparent_1px),linear-gradient(to_bottom,#7194B210_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Hero Content */}
                <div className="hero-content relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

                    {/* Main Title */}
                    <h1 className="hero-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4 sm:mb-6">
                        <span className="hero-name-fusion text-white">FUSION</span>
                        <span className="hero-name-path text-[#DE4A1A]">PATH</span>
                        <span className="hero-dot text-[#DE4A1A]">.</span>
                    </h1>

                    {/* Tagline */}
                    <p className="hero-tagline text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 max-w-3xl leading-snug sm:leading-tight mb-4 sm:mb-6">
                        Navigating Digital Transformation<br className="hidden sm:inline" />
                        <span className="sm:hidden"> </span>&amp; Tech Talent Acceleration.
                    </p>

                    {/* Subtext */}
                    <p className="hero-sub text-sm sm:text-base md:text-lg text-[#7194B2] max-w-xl md:max-w-2xl leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
                        We build cutting-edge digital products for businesses while simultaneously
                        training the next generation of tech talent through immersive courses and real-world internships.
                    </p>

                    {/* Buttons */}
                    <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
                        <button
                            className="btn-primary w-full sm:w-auto bg-[#DE4A1A] hover:bg-[#DE4A1A]/90 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm sm:text-base shadow-lg hover:shadow-[#DE4A1A]/25 transition duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                            id="btn-build-product"
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span>Explore Services</span>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                className="transform group-hover:translate-x-1 transition-transform"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button
                            className="btn-secondary w-full sm:w-auto bg-[#7194B2]/10 border border-[#7194B2]/30 hover:bg-white/10 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-sm sm:text-base transition duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                            id="btn-upskill"
                            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span>Upskill &amp; Get Internships</span>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                className="transform group-hover:scale-110 transition-transform"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </button>
                    </div>

                </div>
            </section>

        </main>
    )
}