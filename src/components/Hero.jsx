import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Animation (Cloud Infrastructure Grid) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-primary to-secondary opacity-90"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-20"
                    style={{ backgroundImage: 'radial-gradient(#00f3ff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
                {/* Floating Infrastructure Nodes */}
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

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center h-full pt-20 md:pt-0">
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent-cyan font-mono text-sm md:text-lg mb-4 tracking-widest">
                            ABDUL RAHEEM — DEVOPS ENGINEER
                        </h2>
                        <h1 className="text-4xl md:text-7xl font-bold font-heading text-text-main mb-6 leading-tight">
                            Streamlining <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet">Cloud Infrastructure</span> <br />
                            & Automation
                        </h1>
                        <p className="text-text-muted text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0">
                            Specializing in CI/CD, Kubernetes, and Cloud Architecture.
                            I design scalable, secure, and efficient systems for modern software delivery.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-accent-cyan text-primary font-bold rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                Let's Work Together <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/resume.html"
                                download
                                className="px-8 py-4 border border-text-main/20 text-text-main font-bold rounded-full hover:bg-text-main/10 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Download Resume <FaDownload />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image / Video Container */}
                <div className="md:w-1/2 flex justify-center relative w-full mt-12 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full max-w-[350px] aspect-square md:w-[500px] md:h-[500px] md:aspect-square flex justify-center items-center"
                    >
                        {/* Rotating Glow Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-2 border-dashed border-accent-cyan/30"
                        ></motion.div>

                        {/* Reverse Rotating Ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 rounded-full border border-accent-violet/30"
                        ></motion.div>

                        {/* Main Image Container */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-accent-cyan/20 shadow-[0_0_60px_rgba(0,243,255,0.2)] z-10 bg-secondary"
                        >
                            <img
                                src="/home_image.png"
                                alt="Abdul Raheem"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />

                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent pointer-events-none"></div>
                        </motion.div>

                        {/* Background Glow Blob */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-accent-violet/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted"
            >
                <div className="w-6 h-10 border-2 border-text-main/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-accent-cyan rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
