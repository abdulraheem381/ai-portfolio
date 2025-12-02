import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaPlay } from 'react-icons/fa';

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Animation (Abstract Neural Network) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-primary to-black opacity-90"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-20"
                    style={{ backgroundImage: 'radial-gradient(#00f3ff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
                </div>
                {/* Floating Glow Orbs */}
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-violet rounded-full blur-[128px] opacity-20"
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-[128px] opacity-20"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent-cyan font-mono text-lg mb-4 tracking-widest">
                            ABDUL RAHEEM — AI/ML ENGINEER
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet">Intelligent Systems</span> <br />
                            & AI Solutions
                        </h1>
                        <p className="text-text-muted text-lg mb-8 max-w-lg mx-auto md:mx-0">
                            Specializing in Machine Learning, Deep Learning, and Data Science.
                            I transform complex data into actionable insights and powerful automation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-accent-cyan text-primary font-bold rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                Hire Me <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/resume.html"
                                download
                                className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Download Resume <FaDownload />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image / Video Container */}
                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-96 h-96 md:w-[600px] md:h-[400px] rounded-2xl overflow-hidden border-2 border-accent-cyan/30 shadow-[0_0_30px_rgba(0,243,255,0.2)] group"
                    >
                        {!isPlaying ? (
                            /* Thumbnail & Play Button */
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <img
                                    src="/video-poster.svg"
                                    alt="Video Thumbnail"
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                                />
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="relative z-30 w-20 h-20 bg-accent-cyan/20 backdrop-blur-sm border-2 border-accent-cyan rounded-full flex items-center justify-center text-accent-cyan hover:bg-accent-cyan hover:text-primary transition-all duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                                >
                                    <FaPlay className="ml-1 text-3xl" />
                                </button>
                                {/* Pulse Effect */}
                                <div className="absolute z-10 w-20 h-20 bg-accent-cyan/20 rounded-full animate-ping"></div>
                            </div>
                        ) : (
                            /* Active Video Player */
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                controls
                                controlsList="nodownload"
                                poster="/video-poster.svg"
                            >
                                <source src="/intro.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}

                        {/* Decorative Corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent-cyan"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent-cyan"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent-cyan"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent-cyan"></div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-accent-cyan rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
