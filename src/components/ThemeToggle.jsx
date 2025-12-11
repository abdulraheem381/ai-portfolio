import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-300 hover:bg-text-main/10 text-accent-cyan"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180, scale: [1, 1.2, 1] }}
                transition={{ duration: 0.3 }}
                key={theme}
            >
                {theme === 'dark' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
