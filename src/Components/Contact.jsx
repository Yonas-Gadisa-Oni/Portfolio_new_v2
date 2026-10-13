import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Clock, ArrowUpRight } from 'lucide-react';

const GithubIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
);
const LinkedinIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);
const TwitterIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'yonasgadisa2@gmail.com', href: 'mailto:yonasgadisa2@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Ethiopia · Remote Worldwide' },
  { icon: Clock, label: 'Response Time', value: 'Usually within 24 hours' },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/yonas-gadisa-oni', icon: GithubIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedinIcon },
  { label: 'X (Twitter)', href: '#', icon: TwitterIcon },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 md:py-32" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative bg-gray-950 rounded-[2.5rem] overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20" />
            <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-15" />
          </div>

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Get In Touch</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
                Let's build something extraordinary together.
              </h2>
              <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                I take on a limited number of projects each quarter. Reach out early and let's see if we're a good fit.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left: Info */}
              <div className="lg:col-span-2 space-y-8">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-white font-semibold hover:text-blue-400 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}

                <div className="pt-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Connect on social</p>
                  <div className="flex gap-3">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                        aria-label={s.label}
                      >
                        <s.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-extrabold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you! I'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">Name</label>
                          <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">Email</label>
                          <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                          placeholder="Project inquiry"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">Message</label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none"
                          placeholder="Tell me about your project, goals, and timeline..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-xl text-white bg-gray-900 hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Send Message
                        <Send className="w-5 h-5" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
