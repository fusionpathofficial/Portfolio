import React, { useState } from 'react'
import FusionPathLogo from '../assets/Fusion-Path.svg'

export function Navbar() {
    const [active, setActive] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const navItems = ['Home', 'Services', 'Courses', 'About', 'Contact']

    const handleClick = (e, item) => {
        e.preventDefault()
        setActive(prev => prev === item ? null : item)
        setIsOpen(false) // Close mobile menu when an item is selected
        const targetElement = document.getElementById(item.toLowerCase())
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleLogoClick = () => {
        setActive('Home')
        setIsOpen(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <nav className="w-full h-20 flex justify-between items-center px-4 md:px-16 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
            {/* Logo */}
            <div className="logo flex items-center gap-3 cursor-pointer z-50" onClick={handleLogoClick}>
                <img src={FusionPathLogo} alt="FusionPath Logo" className="w-8 h-8" />
                <span className="font-bold text-xl tracking-tight text-[#06131D] font-['Space_Grotesk']">
                    FUSION<span className="text-[#DE4A1A]">PATH</span><span className="text-[#DE4A1A]">.</span>
                </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex menu gap-6 items-center">
                {navItems.map(item => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => handleClick(e, item)}
                        className={`py-1.5 px-3 rounded-lg flex items-center gap-1.5 cursor-pointer text-sm font-semibold transition-all duration-300
              ${active === item
                                ? 'bg-[#06131D] text-white shadow-md'
                                : 'text-[#06131D] hover:text-[#DE4A1A] hover:bg-slate-100'
                            }`}
                    >
                        {item}
                        <span
                            style={{
                                display: 'inline-block',
                                transition: 'transform 0.3s ease',
                                transform: active === item ? 'rotate(45deg)' : 'rotate(0deg)',
                            }}
                        >
                            +
                        </span>
                    </a>
                ))}
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-[#06131D] hover:text-[#DE4A1A] focus:outline-none z-50 p-2"
                aria-label="Toggle Menu"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Dropdown Overlay Menu */}
            <div
                className={`fixed inset-x-0 top-20 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-lg md:hidden transition-all duration-300 ease-in-out z-40 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 py-6 px-6' : 'max-h-0 opacity-0 py-0 px-6 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col gap-3">
                    {navItems.map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleClick(e, item)}
                            className={`py-3 px-4 rounded-lg flex justify-between items-center text-base font-semibold transition-all duration-300
                ${active === item
                                    ? 'bg-[#06131D] text-white'
                                    : 'text-[#06131D] hover:bg-slate-100 hover:text-[#DE4A1A]'
                                }`}
                        >
                            <span>{item}</span>
                            <span
                                style={{
                                    display: 'inline-block',
                                    transition: 'transform 0.3s ease',
                                    transform: active === item ? 'rotate(45deg)' : 'rotate(0deg)',
                                }}
                            >
                                +
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}