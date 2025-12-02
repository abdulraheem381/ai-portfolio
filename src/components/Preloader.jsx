import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <div className="fixed inset-0 bg-primary z-[60] flex items-center justify-center">
            <div className="relative flex flex-col items-center">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 border-t-2 border-b-2 border-accent-cyan rounded-full"
                />

                {/* Inner Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-2 w-20 h-20 border-r-2 border-l-2 border-accent-violet rounded-full"
                />

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute top-32 text-accent-cyan font-mono text-sm tracking-widest"
                >
                    INITIALIZING_AI...
                </motion.div>
            </div>
        </div>
    );
};

export default Preloader;
