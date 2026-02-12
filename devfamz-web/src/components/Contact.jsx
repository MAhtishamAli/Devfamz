import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Mail, Send, CheckCircle, User, ArrowRight, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [activeTab, setActiveTab] = useState('message'); // 'message' or 'booking'
    const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const messageFormRef = useRef(null);
    const bookingFormRef = useRef(null);

    // ==========================================
    // SECURITY & VALIDATION FUNCTIONS
    // ==========================================

    // Sanitize input to prevent XSS attacks
    const sanitizeInput = (input) => {
        if (!input) return '';
        return input
            .replace(/[<>]/g, '') // Remove < > to prevent HTML injection
            .replace(/javascript:/gi, '') // Remove javascript: protocol
            .replace(/on\w+=/gi, '') // Remove event handlers
            .trim();
    };

    // Validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    // Validate phone number (optional but recommended)
    const validatePhone = (phone) => {
        if (!phone) return true; // Optional field
        const phoneRegex = /^[0-9\s\-\+\(\)]{10,15}$/;
        return phoneRegex.test(phone);
    };

    // Check for spam patterns
    const isSpam = (message) => {
        const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'click here', 'buy now'];
        const lowerMessage = message.toLowerCase();
        return spamKeywords.some(keyword => lowerMessage.includes(keyword));
    };



    // ==========================================
    // MESSAGE FORM SUBMISSION
    // ==========================================
    const handleMessageSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        setErrorMessage('');

        try {
            // Get form data
            const formData = new FormData(e.target);
            const name = sanitizeInput(formData.get('from_name'));
            const company = sanitizeInput(formData.get('company'));
            const email = formData.get('from_email').trim();
            const phone = sanitizeInput(formData.get('phone'));
            const message = sanitizeInput(formData.get('message'));

            // Validation
            if (!name || name.length < 2) {
                throw new Error('Please enter a valid name (minimum 2 characters)');
            }

            if (!validateEmail(email)) {
                throw new Error('Please enter a valid email address');
            }

            if (phone && !validatePhone(phone)) {
                throw new Error('Please enter a valid phone number');
            }

            if (!message || message.length < 10) {
                throw new Error('Message must be at least 10 characters long');
            }

            if (isSpam(message)) {
                throw new Error('Your message contains prohibited content');
            }



            // Prepare email parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                company: company || 'Not specified',
                phone: phone || 'Not provided',
                message: message,
                form_type: 'Message',
                submission_date: new Date().toLocaleString('en-US', {
                    timeZone: 'America/New_York',
                    dateStyle: 'full',
                    timeStyle: 'long'
                })
            };

            // EmailJS Configuration
            const SERVICE_ID = 'service_mzkq96t';
            const TEMPLATE_ID = 'template_mk03ac5';
            const PUBLIC_KEY = 'nKg65oOJXLs88NLGA';

            // Send using emailjs.send (avoids variable size limit error)
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

            if (response.status === 200) {
                setFormStatus('success');
                e.target.reset();

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setFormStatus('idle');
                }, 5000);
            }

        } catch (error) {
            console.error('Error sending message:', error);
            setFormStatus('error');
            setErrorMessage(`Failed: ${error.text || error.message || JSON.stringify(error)}`);

            setTimeout(() => {
                setFormStatus('idle');
                setErrorMessage('');
            }, 5000);
        }
    };

    // ==========================================
    // BOOKING FORM SUBMISSION
    // ==========================================
    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        setErrorMessage('');

        try {
            // Get form data
            const formData = new FormData(e.target);
            const name = sanitizeInput(formData.get('booking_name'));
            const email = formData.get('booking_email').trim();
            const phone = sanitizeInput(formData.get('booking_phone'));
            const consultationType = sanitizeInput(formData.get('consultation_type'));
            const notes = sanitizeInput(formData.get('booking_notes'));

            // Validation
            if (!name || name.length < 2) {
                throw new Error('Please enter a valid name');
            }

            if (!validateEmail(email)) {
                throw new Error('Please enter a valid email address');
            }

            if (!selectedDate) {
                throw new Error('Please select a date');
            }

            if (!selectedTime) {
                throw new Error('Please select a time slot');
            }

            // Check if date is in the future
            const selectedDateTime = new Date(selectedDate + ' ' + selectedTime);
            if (selectedDateTime < new Date()) {
                throw new Error('Please select a future date and time');
            }

            // Prepare email parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                phone: phone || 'Not provided',
                consultation_type: consultationType || 'General Consultation',
                booking_date: selectedDate,
                booking_time: selectedTime,
                booking_notes: notes || 'No additional notes',
                form_type: 'Consultation Booking',
                submission_date: new Date().toLocaleString('en-US', {
                    timeZone: 'America/New_York',
                    dateStyle: 'full',
                    timeStyle: 'long'
                })
            };

            // check if keys are configured
            // EmailJS Configuration
            const SERVICE_ID = 'service_mzkq96t';
            const TEMPLATE_ID = 'template_mk03ac5';
            const PUBLIC_KEY = 'nKg65oOJXLs88NLGA';

            // Send actual email
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

            if (response.status === 200) {
                setFormStatus('success');
                e.target.reset();
                setSelectedDate('');
                setSelectedTime('');

                setTimeout(() => {
                    setFormStatus('idle');
                }, 5000);
            }

        } catch (error) {
            console.error('Error booking consultation:', error);
            setFormStatus('error');
            setErrorMessage(`Failed: ${error.text || error.message || JSON.stringify(error)}`);

            setTimeout(() => {
                setFormStatus('idle');
                setErrorMessage('');
            }, 5000);
        }
    };

    return (
        <section id="contact" className="py-12 relative">
            <div className="container mx-auto px-6">

                <div className="mb-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-sans">
                        Start Your Transformation
                    </h2>
                    <p className="text-muted text-lg">
                        Ready to scale? Send us a message or book a consultation directly with our engineering leads.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto cyber-card rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row shadow-primary/5">

                    {/* Left Panel: Navigation & Info */}
                    <div className="md:w-1/3 bg-surface p-6 border-b md:border-b-0 md:border-r border-border/10 flex flex-col justify-between">
                        <div>
                            <div className="space-y-2 mb-6">
                                <button
                                    onClick={() => setActiveTab('message')}
                                    className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'message' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-muted hover:text-foreground hover:bg-border/5'}`}
                                >
                                    <Mail size={18} />
                                    <span className="font-medium">Send Message</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('booking')}
                                    className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-all ${activeTab === 'booking' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-muted hover:text-foreground hover:bg-border/5'}`}
                                >
                                    <Calendar size={18} />
                                    <span className="font-medium">Book Consultation</span>
                                </button>
                            </div>

                            <div className="space-y-4 text-sm text-muted mt-8 md:mt-0">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-border/5 rounded-lg text-foreground">
                                        <Mail size={16} />
                                    </div>
                                    <div>
                                        <p className="text-foreground font-medium mb-1">Email Us</p>
                                        <p>muhammadahtishamali786@gmail.com</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mt-8 text-xs text-muted font-mono">
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
                                    <h3 className="text-xl font-bold text-foreground mb-4">Tell us about your project</h3>
                                    <form ref={messageFormRef} onSubmit={handleMessageSubmit} className="space-y-3">

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="space-y-1">
                                                <label className="text-xs text-muted font-medium ml-1">Name *</label>
                                                <input
                                                    type="text"
                                                    name="from_name"
                                                    required
                                                    minLength={2}
                                                    maxLength={100}
                                                    placeholder="John Doe"
                                                    className="w-full bg-surface border border-border/10 rounded-xl px-4 py-2 text-sm text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs text-muted font-medium ml-1">Company</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    maxLength={100}
                                                    placeholder="Acme Inc."
                                                    className="w-full bg-surface border border-border/10 rounded-xl px-4 py-2 text-sm text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="space-y-1">
                                                <label className="text-xs text-muted font-medium ml-1">Email *</label>
                                                <input
                                                    type="email"
                                                    name="from_email"
                                                    required
                                                    placeholder="john@company.com"
                                                    className="w-full bg-surface border border-border/10 rounded-xl px-4 py-2 text-sm text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs text-muted font-medium ml-1">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="+1 (555) 123-4567"
                                                    className="w-full bg-surface border border-border/10 rounded-xl px-4 py-2 text-sm text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs text-muted font-medium ml-1">Project Details *</label>
                                            <textarea
                                                name="message"
                                                required
                                                minLength={10}
                                                maxLength={2000}
                                                placeholder="I need help with..."
                                                rows={3}
                                                className="w-full bg-surface border border-border/10 rounded-xl px-4 py-2 text-sm text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors resize-none"
                                            ></textarea>
                                        </div>



                                        {/* Error Message */}
                                        {formStatus === 'error' && (
                                            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                                                <AlertCircle size={16} className="text-red-500" />
                                                <span className="text-sm text-red-500">{errorMessage}</span>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting' || formStatus === 'success'}
                                            className="w-full bg-primary hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {formStatus === 'submitting' ? (
                                                <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><Clock size={20} /></motion.div> Sending...</>
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
                                    <h3 className="text-xl font-bold text-foreground mb-4">Book Your Consultation</h3>

                                    <form ref={bookingFormRef} onSubmit={handleBookingSubmit} className="space-y-4">
                                        {/* User Info */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="space-y-1">
                                                <label className="text-xs text-muted font-medium ml-1">Your Name *</label>
                                                <input
                                                    type="text"
                                                    name="booking_name"
                                                    required
                                                    minLength={2}
                                                    placeholder="John Doe"
                                                    className="w-full bg-surface border border-border/10 rounded-xl px-4 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs text-muted font-medium ml-1">Your Email *</label>
                                                <input
                                                    type="email"
                                                    name="booking_email"
                                                    required
                                                    placeholder="email@domain.com"
                                                    className="w-full bg-surface border border-border/10 rounded-xl px-4 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="space-y-1">
                                                <label className="text-xs text-muted font-medium ml-1">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="booking_phone"
                                                    placeholder="+1 (555) 123-4567"
                                                    className="w-full bg-surface border border-border/10 rounded-xl px-4 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs text-muted font-medium ml-1">Consultation Type</label>
                                                <select
                                                    name="consultation_type"
                                                    className="w-full bg-surface border border-border/10 rounded-xl px-4 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                                                >
                                                    <option>General Consultation</option>
                                                    <option>AI/ML Solutions</option>
                                                    <option>Mobile App Development</option>
                                                    <option>Web Development</option>
                                                    <option>Cloud Architecture</option>
                                                    <option>DevOps Setup</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Date Selection */}
                                        <div className="space-y-1">
                                            <label className="text-xs text-muted font-medium ml-1">Select Date *</label>
                                            <input
                                                type="date"
                                                required
                                                min={new Date().toISOString().split('T')[0]}
                                                className="w-full bg-surface border border-border/10 rounded-xl px-4 py-2 text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                value={selectedDate}
                                            />
                                        </div>

                                        {/* Time Slots */}
                                        <div className="space-y-1">
                                            <label className="text-xs text-muted font-medium ml-1">Available Slots (EST) *</label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {['10:00 AM', '11:00 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'].map((time) => (
                                                    <button
                                                        type="button"
                                                        key={time}
                                                        onClick={() => setSelectedTime(time)}
                                                        className={`py-2 px-2 rounded-lg text-xs font-medium border transition-all ${selectedTime === time ? 'bg-primary text-black border-primary' : 'bg-surface border-border/10 text-muted hover:border-border/30 hover:text-foreground'}`}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Additional Notes */}
                                        <div className="space-y-1">
                                            <label className="text-xs text-muted font-medium ml-1">Additional Notes</label>
                                            <textarea
                                                name="booking_notes"
                                                placeholder="Any specific topics you'd like to discuss..."
                                                rows={2}
                                                maxLength={500}
                                                className="w-full bg-surface border border-border/10 rounded-xl px-4 py-2 text-sm text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors resize-none"
                                            ></textarea>
                                        </div>

                                        {/* Error Message */}
                                        {formStatus === 'error' && (
                                            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                                                <AlertCircle size={16} className="text-red-500" />
                                                <span className="text-sm text-red-500">{errorMessage}</span>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting' || formStatus === 'success'}
                                            className="w-full bg-primary hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {formStatus === 'submitting' ? (
                                                <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><Clock size={20} /></motion.div> Booking...</>
                                            ) : formStatus === 'success' ? (
                                                <>Booked Successfully <CheckCircle size={20} /></>
                                            ) : (
                                                <>Confirm Booking <ArrowRight size={18} /></>
                                            )}
                                        </button>
                                    </form>
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
