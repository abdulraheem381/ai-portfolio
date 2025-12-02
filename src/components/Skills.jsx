import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        {
            category: "Machine Learning",
            items: [
                { name: "Regression & Classification", level: 90 },
                { name: "Scikit-Learn", level: 85 },
                { name: "Clustering", level: 80 },
            ]
        },
        {
            category: "Deep Learning",
            items: [
                { name: "Neural Networks (CNNs, RNNs)", level: 85 },
                { name: "PyTorch / TensorFlow", level: 80 },
                { name: "Transformers", level: 75 },
            ]
        },
        {
            category: "LLMs & GenAI",
            items: [
                { name: "RAG Pipelines", level: 80 },
                { name: "Fine-Tuning (Llama, Mistral)", level: 70 },
                { name: "LangChain", level: 85 },
            ]
        },
        {
            category: "Data Science",
            items: [
                { name: "Pandas & NumPy", level: 95 },
                { name: "Data Visualization", level: 90 },
                { name: "EDA", level: 90 },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-primary relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-accent-violet">Skills</span></h2>
                    <div className="w-20 h-1 bg-accent-cyan mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-secondary/50 p-8 rounded-xl border border-white/5 hover:border-accent-cyan/30 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-accent-cyan rounded-full"></span>
                                {category.category}
                            </h3>
                            <div className="space-y-6">
                                {category.items.map((skill, sIdx) => (
                                    <div key={sIdx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-text-muted font-medium">{skill.name}</span>
                                            <span className="text-accent-cyan font-mono text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-primary rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className="h-full bg-gradient-to-r from-accent-cyan to-accent-violet rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
