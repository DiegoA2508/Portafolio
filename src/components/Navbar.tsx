"use client";

import { use, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
        
        const toggleMenu = () => setIsOpen(!isOpen);

        const closeMenu = () => setIsOpen(false);

        const navLinks = [
            { href: "#Hero", label: "Inicio" },
            { href: "#Projects", label: "Proyectos" },
            { href: "#About", label: "Sobre mí" },
            { href: "#Contact", label: "Contacto" },
        ]

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">Diego</h1>

                {/* Desktop */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="hover:text-blue-500"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            { isOpen && (
                <div className="md:hidden px-a pb-4 bg-white shadow">
                <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
                    {navLinks.map((link) => (
                    <li key={link.href}>
                        <a 
                        href={link.href}
                        onClick={closeMenu}
                        className="block hover:text-blue-500"
                        >
                            {link.label}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
            )}
        </nav>
    );
}
