import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
    const milestones = [
        { year: '2023', title: 'Started AI Journey', description: 'Dove deep into Python & ML algorithms.' },
        { year: '2024', title: 'First ML Project', description: 'Built a predictive model for housing prices.' },
        { year: '2025', title: 'Freelancing', description: 'Helping businesses integrate AI solutions.' },
        { year: 'Future', title: 'AI Agency', description: 'Building a team to tackle global challenges.' },
    ];

    return (
        <section id="about" className="py-20 bg-secondary relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About <span className="text-accent-cyan">Me</span></h2>
                    <div className="w-20 h-1 bg-accent-violet mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Bio & Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative mb-8 group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-primary p-6 rounded-lg border border-white/10">
                                <p className="text-text-muted leading-relaxed mb-4">
                                    Hello! I'm <span className="text-white font-bold">Abdul</span>, a passionate AI/ML Engineer dedicated to building intelligent systems that solve real-world problems.
                                </p>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    My journey began with a curiosity for how machines learn, which quickly turned into an obsession with <span className="text-accent-cyan">Deep Learning</span> and <span className="text-accent-violet">Generative AI</span>.
                                </p>
                                <p className="text-text-muted leading-relaxed">
                                    I don't just write code; I design solutions. Whether it's fine-tuning LLMs or deploying scalable ML pipelines, I bring a mix of technical expertise and creative problem-solving to every project.
                                </p>
                            </div>
                        </div>

                        {/* Fun Facts */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-primary/50 p-4 rounded-lg border border-white/5 text-center hover:border-accent-cyan/50 transition-colors">
                                <FaBrain className="text-accent-cyan text-2xl mx-auto mb-2" />
                                <h4 className="text-white font-bold">Learner</h4>
                                <p className="text-xs text-text-muted">Always upskilling</p>
                            </div>
                            <div className="bg-primary/50 p-4 rounded-lg border border-white/5 text-center hover:border-accent-violet/50 transition-colors">
                                <FaRocket className="text-accent-violet text-2xl mx-auto mb-2" />
                                <h4 className="text-white font-bold">Innovator</h4>
                                <p className="text-xs text-text-muted">Building the future</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative pl-8 border-l border-white/10 space-y-8"
                    >
                        {milestones.map((item, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[39px] top-0 w-5 h-5 bg-primary border-2 border-accent-cyan rounded-full"></div>
                                <h3 className="text-xl font-bold text-white mb-1">{item.year}</h3>
                                <h4 className="text-accent-cyan text-sm font-bold mb-2 uppercase tracking-wider">{item.title}</h4>
                                <p className="text-text-muted text-sm">{item.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
