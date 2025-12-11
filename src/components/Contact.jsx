import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Project Inquiry',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: null });

        const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyLR4fJt03Ql8SEDWRMA8lh8vqBo7TsKZmh14b4TM7TjZMs29CE4NZtOUnTxEipWqeCjQ/exec";

        try {
            await fetch(WEB_APP_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    option: formData.subject, // Mapping subject to option as requested
                    message: formData.message
                })
            });

            // Since mode is no-cors, we can't read the response, but we assume success if no error thrown
            setStatus({ submitting: false, success: true, error: null });
            setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, success: false }));
            }, 5000);

        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus({ submitting: false, success: false, error: "Something went wrong. Please try again." });
        }
    };

    return (
        <section id="contact" className="py-20 bg-secondary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-violet/5 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Get In <span className="text-accent-cyan">Touch</span></h2>
                    <p className="text-text-muted max-w-xl mx-auto">
                        Have a project in mind or want to discuss AI solutions? I'm always open to new opportunities and collaborations.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/3 space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-accent-cyan text-xl border border-white/10 shrink-0">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="text-text-main font-bold text-lg">Email Me</h4>
                                <a href="mailto:hello@abdul.ai" className="text-text-muted hover:text-accent-cyan transition-colors">shadowpulse.pentest@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-accent-violet text-xl border border-white/10 shrink-0">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="text-text-main font-bold text-lg">Location</h4>
                                <p className="text-text-muted">Available Remote Worldwide</p>
                            </div>
                        </div>

                        <div className="p-6 bg-primary rounded-xl border border-white/5 mt-8">
                            <h4 className="text-text-main font-bold mb-2">Availability</h4>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-green-400 text-sm">Open to new projects</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-text-muted">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-primary border border-text-main/10 rounded-lg p-4 text-text-main focus:border-accent-cyan focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-text-muted">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-primary border border-text-main/10 rounded-lg p-4 text-text-main focus:border-accent-cyan focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-text-muted">Subject</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-primary border border-text-main/10 rounded-lg p-4 text-text-main focus:border-accent-cyan focus:outline-none transition-colors"
                                >
                                    <option value="Project Inquiry">Project Inquiry</option>
                                    <option value="Consultation">Consultation</option>
                                    <option value="Freelance Work">Freelance Work</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-text-muted">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full bg-primary border border-text-main/10 rounded-lg p-4 text-text-main focus:border-accent-cyan focus:outline-none transition-colors"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status.submitting}
                                className={`w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 ${status.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {status.submitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </button>

                            {status.success && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-center"
                                >
                                    Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}

                            {status.error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-center"
                                >
                                    {status.error}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
