import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '#about' },
        { name: 'Skills', path: '#skills' },
        { name: 'Services', path: '#services' },
        { name: 'Projects', path: '#projects' },
        { name: 'Blogs', path: '#blogs' },
        { name: 'Contact', path: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold font-heading text-white tracking-wider">
                    ABDUL <span className="text-accent-cyan">RAHEEM</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-text-muted hover:text-accent-cyan transition-colors duration-300 text-sm font-medium uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2 border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-primary transition-all duration-300 rounded-full font-medium text-sm"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-accent-cyan transition-colors"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-t border-white/10 md:hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-text-main hover:text-accent-cyan text-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 mt-4">
                                <a href="#" className="text-text-muted hover:text-accent-cyan"><FaGithub size={20} /></a>
                                <a href="#" className="text-text-muted hover:text-accent-cyan"><FaLinkedin size={20} /></a>
                                <a href="#" className="text-text-muted hover:text-accent-cyan"><FaTwitter size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
