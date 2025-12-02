import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Customer Churn Prediction",
            category: "Machine Learning",
            description: "Predicting customer churn using XGBoost and Scikit-Learn with 92% accuracy.",
            tags: ["Python", "XGBoost", "Flask"],
            image: "bg-gradient-to-br from-blue-900 to-slate-900" // Placeholder gradient
        },
        {
            title: "AI Chatbot Assistant",
            category: "GenAI / LLM",
            description: "A RAG-based chatbot capable of answering queries from custom PDF documents.",
            tags: ["LangChain", "OpenAI", "React"],
            image: "bg-gradient-to-br from-purple-900 to-slate-900"
        },
        {
            title: "Image Classification",
            category: "Deep Learning",
            description: "CNN model to classify medical images for early disease detection.",
            tags: ["PyTorch", "CNN", "FastAPI"],
            image: "bg-gradient-to-br from-cyan-900 to-slate-900"
        },
        {
            title: "Movie Recommender",
            category: "Data Science",
            description: "Collaborative filtering system to suggest movies based on user history.",
            tags: ["Pandas", "Scikit-Learn", "Streamlit"],
            image: "bg-gradient-to-br from-indigo-900 to-slate-900"
        },
        {
            title: "Sales Forecasting",
            category: "Time Series",
            description: "Forecasting future sales trends using ARIMA and Prophet models.",
            tags: ["Prophet", "Python", "Dash"],
            image: "bg-gradient-to-br from-teal-900 to-slate-900"
        },
        {
            title: "Automated Data Pipeline",
            category: "Data Engineering",
            description: "ETL pipeline to scrape, clean, and store real-time stock market data.",
            tags: ["Airflow", "SQL", "AWS"],
            image: "bg-gradient-to-br from-rose-900 to-slate-900"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-primary relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-accent-violet">Projects</span></h2>
                    <div className="w-20 h-1 bg-accent-cyan mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-xl overflow-hidden cursor-pointer"
                        >
                            {/* Image Placeholder */}
                            <div className={`h-64 w-full ${project.image} group-hover:scale-110 transition-transform duration-500`}></div>

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8">
                                <span className="text-accent-cyan text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-text-muted text-sm mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-2 py-1 bg-white/10 rounded text-xs text-white">{tag}</span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button className="p-2 bg-accent-violet rounded-full text-white hover:bg-white hover:text-primary transition-colors">
                                        <FaGithub size={18} />
                                    </button>
                                    <button className="p-2 bg-accent-cyan rounded-full text-primary hover:bg-white transition-colors">
                                        <FaExternalLinkAlt size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Default Title (Visible when not hovering) */}
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                <span className="text-accent-cyan text-xs">{project.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/abdulraheem381" className="inline-block px-8 py-3 border border-accent-cyan text-accent-cyan font-bold rounded-full hover:bg-accent-cyan hover:text-primary transition-all duration-300">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
