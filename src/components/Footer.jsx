import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary py-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-bold font-heading text-text-main mb-2">
                            ABDUL <span className="text-accent-cyan">RAHEEM</span>
                        </h3>
                        <p className="text-text-muted text-sm">
                            Building Intelligent Systems & AI Solutions.
                        </p>
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href="https://github.com/abdulraheem381" className="text-text-muted hover:text-accent-cyan transition-colors"><FaGithub size={20} /></a>
                        <a href="#" className="text-text-muted hover:text-accent-cyan transition-colors"><FaLinkedin size={20} /></a>
                        <a href="https://x.com/abdulraheem183" className="text-text-muted hover:text-accent-cyan transition-colors"><FaTwitter size={20} /></a>
                        <a href="#" className="text-text-muted hover:text-accent-cyan transition-colors"><FaInstagram size={20} /></a>
                        <a href="mailto:contact@shadowpulse.pentest@gmail.com" className="text-text-muted hover:text-accent-cyan transition-colors"><FaEnvelope size={20} /></a>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
                    <p>&copy; {new Date().getFullYear()} Abdul. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-text-main transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-text-main transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
