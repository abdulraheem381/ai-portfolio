import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaMedium, FaHashtag } from 'react-icons/fa';

const Blogs = () => {
    const blogs = [
        {
            title: "The AI Journal: Essential NumPy for Data Science and Machine Learning",
            category: "Data Science/ Machine Learning",
            excerpt: "In this series, I will guide aspiring AI/ML Engineers through NumPy, the fundamental library for high-performance numerical computing in Python. AI/ML Engineer's guide to NumPy. Discover why this powerful Python library is essential for high-performance numerical computing, how it works, and its core features like the lightning-fast ndarray.",
            date: "Dec 05, 2025",
            image: "/blog1.png",
            link: "https://the-ai-journal.hashnode.dev/series/ai-journal-numpy"
        },
        {
            title: "The Pandas Playbook: Mastering Data Analysis for AI/ML",
            category: "Data Science",
            excerpt: "Master the Pandas library for AI/ML. This playbook is your guide to transforming raw data into structured datasets. Learn Series, DataFrames, advanced indexing, data cleaning, and aggregation techniques used in building powerful ML Models.",
            date: "Dec 11, 2025",
            image: "/blog2.png",
            link: "https://the-ai-journal.hashnode.dev/series/the-pandas-playbook-data-analysis-ai-ml"
        },
        {
            title: "Understanding Transformers",
            category: "Deep Learning",
            excerpt: "Deep dive into the architecture that revolutionized NLP: Attention is All You Need.",
            date: "Sep 28, 2023",
            image: "bg-gradient-to-br from-emerald-900 to-slate-900",
            link: "https://hashnode.com/"
        }
    ];

    return (
        <section id="blogs" className="py-20 bg-primary relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest <span className="text-accent-cyan">Articles</span></h2>
                    <div className="w-20 h-1 bg-accent-violet mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors duration-300 border border-white/5 hover:border-accent-cyan/30"
                        >
                            {/* Image Placeholder */}
                            {/* Image Container */}
                            <div className="h-48 w-full relative overflow-hidden">
                                {blog.image.startsWith('http') || blog.image.startsWith('/') ? (
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className={`w-full h-full ${blog.image} transition-transform duration-500 group-hover:scale-110`}></div>
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-accent-cyan text-xs font-bold uppercase tracking-wider">{blog.category}</span>
                                    <span className="text-text-muted text-xs">{blog.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors duration-300">{blog.title}</h3>
                                <p className="text-text-muted text-sm mb-6 line-clamp-3">{blog.excerpt}</p>

                                <a
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent-cyan transition-colors"
                                >
                                    Read on Hashnode <FaExternalLinkAlt size={12} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://hashnode.com/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-accent-violet text-accent-violet font-bold rounded-full hover:bg-accent-violet hover:text-white transition-all duration-300">
                        View All Posts
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
