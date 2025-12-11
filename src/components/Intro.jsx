import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Intro = ({ onComplete }) => {
    useEffect(() => {
        // Auto-transition after 10 seconds if user doesn't click
        const timer = setTimeout(() => {
            onComplete();
        }, 10000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-primary flex flex-col items-center justify-center p-6 text-center"
        >
            <motion.div
                variants={itemVariants}
                className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-4 border-accent-cyan shadow-[0_0_30px_rgba(0,243,255,0.3)]"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <img
                    src="/home_image2.png"
                    alt="Abdul Raheem"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-bold text-text-main mb-4 font-heading"
            >
                Hi, I am <span className="text-accent-cyan">Abdul Raheem</span>
            </motion.h1>

            <motion.p
                variants={itemVariants}
                className="text-text-muted text-lg md:text-xl max-w-2xl mb-10"
            >
                Welcome to my digital space. I build intelligent systems and craft seamless digital experiences.
            </motion.p>

            <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onComplete}
                className="px-8 py-3 bg-transparent border border-accent-cyan text-accent-cyan font-bold rounded-full hover:bg-accent-cyan hover:text-primary transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
                Enter Portfolio <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
        </motion.div>
    );
};

export default Intro;
