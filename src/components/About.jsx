import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
    const milestones = [
        { year: '2022', title: 'Started My CS Journey (Age 15)', description: 'Discovered computer science and began exploring programming, networks, and how systems work under the hood.' },
        { year: '2023', title: 'Cybersecurity Internship', description: 'Gained hands-on experience in security fundamentals, vulnerability assessment, and real-world cyber-defense practices.' },
        { year: '2024', title: 'DevOps & Engineering Projects', description: 'Started DevOps blogging, building end-to-end real-world projects, and diving deep into CI/CD, cloud, automation, and scalable infrastructure.' },
        { year: '2025', title: 'Transition to DevOps', description: 'Focused on mastering Cloud Native technologies, Kubernetes, and IaC to build scalable, secure, and reliable infrastructure.' },
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
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">About <span className="text-accent-cyan">Me</span></h2>
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
                                    Hello! I'm <span className="text-text-main font-bold">Abdul</span>, a passionate DevOps Engineer dedicated to optimizing software delivery and infrastructure reliability.
                                </p>
                                <p className="text-text-muted leading-relaxed mb-4">
                                    My journey began with a curiosity for how systems operate at scale, which quickly turned into an obsession with <span className="text-accent-cyan">Cloud Native Tech</span> and <span className="text-accent-violet">Infrastructure as Code</span>.
                                </p>
                                <p className="text-text-muted leading-relaxed">
                                    I don't just manage servers; I architect ecosystems. Whether it's orchestrating Kubernetes clusters or building robust CI/CD pipelines, I bring a mix of operational expertise and development skills to every project.
                                </p>
                            </div>
                        </div>

                        {/* Fun Facts */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-primary/50 p-4 rounded-lg border border-white/5 text-center hover:border-accent-cyan/50 transition-colors">
                                <FaBrain className="text-accent-cyan text-2xl mx-auto mb-2" />
                                <h4 className="text-text-main font-bold">Learner</h4>
                                <p className="text-xs text-text-muted">Always upskilling</p>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-secondary/50 rounded-xl border border-white/5 hover:border-accent-violet/30 transition-all">
                                <span className="text-3xl mb-2">💡</span>
                                <h4 className="text-text-main font-bold">Innovator</h4>
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
                                <h3 className="text-xl font-bold text-text-main mb-1">{item.year}</h3>
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
