import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaDatabase, FaChartLine, FaTools, FaCogs } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaBrain />,
            title: "Custom ML Models",
            description: "Tailored machine learning algorithms for predictive analytics, classification, and automation."
        },
        {
            icon: <FaRobot />,
            title: "AI Chatbots & Agents",
            description: "Intelligent conversational AI using LLMs (OpenAI, Llama) for customer support and internal tools."
        },
        {
            icon: <FaDatabase />,
            title: "Data Engineering",
            description: "Robust data pipelines, cleaning, and preprocessing to ensure your data is AI-ready."
        },
        {
            icon: <FaChartLine />,
            title: "Exploratory Data Analysis",
            description: "Uncovering hidden patterns and insights from your raw data with advanced visualization."
        },
        {
            icon: <FaTools />,
            title: "AI Tools Integration",
            description: "Seamlessly integrating AI capabilities into your existing web or mobile applications."
        },
        {
            icon: <FaCogs />,
            title: "ML Consulting",
            description: "Strategic guidance on how to leverage AI to solve business problems and drive growth."
        }
    ];

    return (
        <section id="services" className="py-20 bg-secondary relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">My <span className="text-accent-cyan">Services</span></h2>
                    <div className="w-20 h-1 bg-accent-violet mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-primary p-8 rounded-2xl border border-white/5 hover:border-accent-cyan/50 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center text-accent-cyan text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-accent-cyan/30">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-accent-cyan transition-colors">{service.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <a href="#contact" className="inline-flex items-center text-accent-violet text-sm font-bold hover:text-text-main transition-colors">
                                    Book a Call <span className="ml-2">&rarr;</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
