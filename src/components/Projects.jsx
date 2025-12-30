import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Scalable EKS Cluster",
            category: "Cloud Infrastructure",
            description: "Deployed a highly available Microservices architecture on AWS EKS with auto-scaling.",
            tags: ["Kubernetes", "AWS", "Terraform"],
            image: "bg-gradient-to-br from-blue-900 to-slate-900"
        },
        {
            title: "Serverless Image Processing",
            category: "Serverless",
            description: "Event-driven architecture using AWS Lambda and S3 to process user uploads in real-time.",
            tags: ["AWS Lambda", "Python", "SAM"],
            image: "bg-gradient-to-br from-purple-900 to-slate-900"
        },
        {
            title: "Multi-Cloud Terraform Module",
            category: "Infrastructure as Code",
            description: "Created reusable Terraform modules for provisioning standard VPCs across AWS and Azure.",
            tags: ["Terraform", "HCL", "Multi-Cloud"],
            image: "bg-gradient-to-br from-cyan-900 to-slate-900"
        },
        {
            title: "GitOps with ArgoCD",
            category: "CI/CD",
            description: "Implemented a GitOps workflow for Kubernetes deployments using ArgoCD and Helm charts.",
            tags: ["ArgoCD", "GitOps", "Helm"],
            image: "bg-gradient-to-br from-indigo-900 to-slate-900"
        },
        {
            title: "Centralized Logging System",
            category: "Observability",
            description: "Built an ELK stack to aggregate logs from distributed services for centralized monitoring.",
            tags: ["Elasticsearch", "Logstash", "Kibana"],
            image: "bg-gradient-to-br from-teal-900 to-slate-900"
        },
        {
            title: "FinOps Dashboard",
            category: "Cloud Cost",
            description: "Automated cost reporting dashboard to monitor and optimize monthly cloud spend.",
            tags: ["Python", "AWS Cost Explorer", "React"],
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
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Featured <span className="text-accent-violet">Projects</span></h2>
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
                                <h3 className="text-2xl font-bold text-text-main mb-2">{project.title}</h3>
                                <p className="text-text-muted text-sm mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-2 py-1 bg-text-main/10 rounded text-xs text-text-main">{tag}</span>
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
                                <h3 className="text-lg font-bold text-text-main">{project.title}</h3>
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
