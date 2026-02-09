import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Mail, MessageSquare, Send, CheckCircle, User, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [activeTab, setActiveTab] = useState('message'); // 'message' or 'booking'
    const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success'
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-12 relative">
            <div className="section-divider absolute top-0 left-0" />
            <div className="container mx-auto px-6">

                <div className="mb-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">
                        Start Your Transformation
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Ready to scale? Send us a message or book a consultation directly with our engineering leads.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto cyber-card rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row shadow-primary/5">

                    {/* Left Panel: Navigation & Info */}
                    <div className="md:w-1/3 bg-slate-900/50 p-6 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between">
                        <div>
                            <div className="space-y-2 mb-6">
                                <button
                                    onClick={() => setActiveTab('message')}
                                    className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'message' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    <Mail size={18} />
                                    <span className="font-medium">Send Message</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('booking')}
                                    className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'booking' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    <Calendar size={18} />
                                    <span className="font-medium">Book Consultation</span>
                                </button>
                            </div>

                            <div className="space-y-4 text-sm text-slate-400 mt-8 md:mt-0">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/5 rounded-lg text-white">
                                        <Mail size={16} />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Email Us</p>
                                        <p>hello@devfamz.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/5 rounded-lg text-white">
                                        <MessageSquare size={16} />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-1">Live Chat</p>
                                        <p>Available 9am - 6pm EST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-xs text-slate-500 font-mono">
                            // EST_CONN_SECURE <br />
                            // ID: 8492-AX-29
                        </div>
                    </div>

                    {/* Right Panel: Interactive Forms */}
                    <div className="md:w-2/3 p-6 md:p-8 relative overflow-hidden bg-background/50">
                        <AnimatePresence mode="wait">

                            {/* MESSAGE FORM */}
                            {activeTab === 'message' && (
                                <motion.div
                                    key="message"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full flex flex-col justify-center"
                                >
                                    <h3 className="text-xl font-bold text-white mb-4">Tell us about your project</h3>
                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="space-y-1">
                                                <label className="text-xs text-slate-400 font-medium ml-1">Name</label>
                                                <input type="text" required placeholder="John Doe" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs text-slate-400 font-medium ml-1">Company</label>
                                                <input type="text" placeholder="Acme Inc." className="w-full bg-surface border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors" />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs text-slate-400 font-medium ml-1">Email</label>
                                            <input type="email" required placeholder="john@company.com" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs text-slate-400 font-medium ml-1">Project Details</label>
                                            <textarea required placeholder="I need help with..." rows={3} className="w-full bg-surface border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                                        </div>

                                        <button disabled={formStatus === 'submitting'} className="w-full bg-primary hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 mt-2">
                                            {formStatus === 'submitting' ? (
                                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                                                    <Clock size={20} />
                                                </motion.div>
                                            ) : formStatus === 'success' ? (
                                                <>Sent Successfully <CheckCircle size={20} /></>
                                            ) : (
                                                <>Send Message <Send size={18} /></>
                                            )}
                                        </button>
                                    </form>
                                </motion.div>
                            )}

                            {/* BOOKING CALENDAR */}
                            {activeTab === 'booking' && (
                                <motion.div
                                    key="booking"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full"
                                >
                                    <h3 className="text-xl font-bold text-white mb-4">Select a Date & Time</h3>

                                    <div className="space-y-4">
                                        {/* Date Selection */}
                                        <div className="space-y-1">
                                            <label className="text-xs text-slate-400 font-medium ml-1">Select Day</label>
                                            <input
                                                type="date"
                                                className="w-full bg-surface border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors scheme-dark"
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                            />
                                        </div>

                                        {/* Time Slots */}
                                        <div className="space-y-1">
                                            <label className="text-xs text-slate-400 font-medium ml-1">Available Slots (EST)</label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {['10:00 AM', '11:00 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'].map((time) => (
                                                    <button
                                                        key={time}
                                                        onClick={() => setSelectedTime(time)}
                                                        className={`py-2 px-2 rounded-lg text-xs font-medium border transition-all ${selectedTime === time ? 'bg-primary text-black border-primary' : 'bg-surface border-white/10 text-slate-400 hover:border-white/30 hover:text-white'}`}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* User Info for Booking */}
                                        <div className="space-y-1">
                                            <label className="text-xs text-slate-400 font-medium ml-1">Your Email</label>
                                            <div className="relative">
                                                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                                <input type="email" placeholder="email@domain.com" className="w-full bg-surface border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors" />
                                            </div>
                                        </div>

                                        <button className="w-full bg-white text-black hover:bg-slate-200 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 mt-4">
                                            Confirm Booking <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
