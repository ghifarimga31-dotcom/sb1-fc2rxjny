import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { supabase } from '../lib/supabase';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus('idle');
      setSubmitMessage('');

      try {
        const { error } = await supabase
          .from('contact_messages')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              message: formData.message
            }
          ]);

        if (error) {
          console.error('Supabase error:', error);
          throw error;
        }

        setSubmitStatus('success');
        setSubmitMessage('Thank you for your message! I will get back to you within 24 hours.');
        setFormData({ name: '', email: '', message: '' });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setSubmitMessage('');
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
        setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-4 relative">
            Let's Work Together
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-accent transition-all duration-1000 ${
              isVisible ? 'w-24' : 'w-0'
            }`}></div>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Ready to bridge languages and connect with your audience? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className={`text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-accent/10 rounded-full">
                <Mail className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-text mb-2">Email</h3>
            <p className="text-text-muted">ghifari.amirullah@example.com</p>
          </div>
          
          <div className={`text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-accent/10 rounded-full">
                <Phone className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-text mb-2">Phone</h3>
            <p className="text-text-muted">+62 812-3456-7890</p>
          </div>
          
          <div className={`text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-accent/10 rounded-full">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-text mb-2">Location</h3>
            <p className="text-text-muted">Bandung, Indonesia</p>
          </div>
        </div>

        <div className={`bg-card rounded-2xl p-8 shadow-lg transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Tell me about your translation project..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent-hover disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2 animate-fade-in">
                <CheckCircle className="h-5 w-5" />
                {submitMessage}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-2 animate-fade-in">
                <AlertCircle className="h-5 w-5" />
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;