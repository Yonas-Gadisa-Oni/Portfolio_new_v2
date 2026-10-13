import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, Award, Globe } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Briefcase,
    title: 'Product-Focused',
    description: 'I craft interfaces that balance clean visuals, accessible patterns, and thoughtful motion.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Globe,
    title: 'Remote-Ready',
    description: 'Experienced working with remote teams and international clients across different time zones.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Award,
    title: 'Quality-Driven',
    description: 'From rapid prototypes to production launches, I maintain a strong design system architecture.',
    color: 'bg-purple-50 text-purple-600',
  },
];

const About = () => {
  const profileImage = `${import.meta.env.BASE_URL}img/photo.jpg`;

  return (
    <section className="py-24 md:py-32" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-[2.5rem] -rotate-3 scale-105 opacity-50" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-white">
                <img
                  src={profileImage}
                  alt="Yonas Gadisa"
                  className="w-full h-auto object-cover aspect-[4/5]"
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Yonas+G&size=512&background=3b82f6&color=fff&bold=true';
                  }}
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 z-20 bg-white p-5 rounded-2xl shadow-xl border border-gray-100"
              >
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Trusted by teams</p>
                <p className="text-sm font-extrabold text-gray-900">1+ year experience · 5 projects · 2 happy clients</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">About Me</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-balance">
                I turn ideas into polished digital products.
              </h2>
            </div>

            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                As a product-focused developer, I craft interfaces that balance clean visuals,
                accessible patterns, and thoughtful motion. I partner with startups and
                teams to build web experiences that feel modern, fast, and reliable.
              </p>
              <p>
                From rapid prototypes to launching full marketing sites, I help brands
                communicate clearly while maintaining a strong design system architecture.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {HIGHLIGHTS.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className={`w-10 h-10 ${h.color} rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-extrabold text-gray-900 mb-1">{h.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{h.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Start a Project
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-2xl text-gray-700 bg-white border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                View Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
