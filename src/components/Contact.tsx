import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/atishpawar28/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/atish-2023/atish-2023',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:atishpawar1193@gmail.com',
    target: '_self',
    rel: undefined,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS with your public key


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name.trim()) {
      setErrorMessage('Name is required');
      return;
    }
    
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    if (!formData.message.trim()) {
      setErrorMessage('Message is required');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Dynamically import EmailJS
      const emailjs = await import('@emailjs/browser');
      
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'atishpawar1193@gmail.com',
        timestamp: new Date().toLocaleString(),
      };
      
      // Send email using EmailJS
      // Note: You need to set up EmailJS service with your credentials
      const response = await emailjs.default.send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID || 'service_e2l4l0g',
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID || 'template_opidcf9',
        templateParams,
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY || 'v7nvY4kYB28g-KnKp'
      );
      
      if (response.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10 fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">Get In Touch</h2>
          <p className="section-subtitle">
            Let's work together! Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        {/* Layout - Stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Contact Info */}
            <div className="fade-in">
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold font-display mb-3 sm:mb-6">Contact Information</h3>
                
                <div className="space-y-3 sm:space-y-6 mb-4 sm:mb-8">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-white max-sm:block hidden" />
                      <Mail size={20} className="text-white sm:block max-sm:hidden" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                      <a href="mailto:atishpawar@gmail.com" className="text-foreground hover:text-primary transition-colors text-sm sm:text-base">
                        atishpawar1193@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-white max-sm:block hidden" />
                      <Phone size={20} className="text-white sm:block max-sm:hidden" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+919876543210" className="text-foreground hover:text-primary transition-colors text-sm sm:text-base">
                        +91 8010122542
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-white max-sm:block hidden" />
                      <MapPin size={20} className="text-white sm:block max-sm:hidden" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground text-sm sm:text-base">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4">Follow Me</p>
                  <div className="flex gap-2 sm:gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target={social.target}
                        rel={social.rel}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 glow-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                        aria-label={`Visit my ${social.name} profile`}
                      >
                        <social.icon size={18} className="max-sm:block hidden" />
                        <social.icon size={22} className="sm:block max-sm:hidden" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold font-display mb-3 sm:mb-6">Send a Message</h3>

                {submitted && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
                    Your message has been sent successfully.
                  </div>
                )}
                {errorMessage && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-glass"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-glass"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="input-glass resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="max-sm:block hidden" />
                        <Send size={18} className="sm:block max-sm:hidden" />
                        <span className="whitespace-nowrap">Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
