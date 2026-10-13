import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const GithubIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
);
const LinkedinIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);
const TwitterIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);

const HERO_STATS = [
  { label: 'Years Experience', value: '1+' },
  { label: 'Projects Delivered', value: '5+' },
  { label: 'Happy Clients', value: '2+' },
  { label: 'Technologies', value: '20+' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

function Hero() {
  const profileImage = `${import.meta.env.BASE_URL}img/photo.jpg`;

  return (
    <section className="relative overflow-hidden" id="home">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-blue-100/60 via-purple-50/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-40 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm font-semibold text-blue-700">Available for work · 2026</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.08] text-balance"
            >
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Things
              </span>{' '}
              That Matter
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I build fast, accessible, and beautifully designed products — from design systems to full-stack web applications that solve real business problems.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#work"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-2xl text-white bg-gray-900 hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-gray-900/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-2xl text-gray-700 bg-white border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 shadow-sm"
              >
                <Download className="w-5 h-5" />
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex items-center justify-center lg:justify-start gap-5 pt-4"
            >
              <span className="text-sm text-gray-400 font-medium">Follow me</span>
              <div className="flex gap-3">
                <a href="https://github.com/yonas-gadisa-oni" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300">
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative flex-shrink-0 w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-[2.5rem] rotate-6 scale-105 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-100 to-indigo-100 rounded-[2.5rem] -rotate-3 scale-105 opacity-40" />
            <img
              src={profileImage}
              alt="Yonas Gadisa — Full-stack Developer"
              className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl ring-8 ring-white"
              onError={(e) => {
                e.target.src = 'https://ui-avatars.com/api/?name=Yonas+G&size=512&background=3b82f6&color=fff&bold=true';
              }}
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 z-20 bg-white py-3 px-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status</p>
                <p className="text-sm font-extrabold text-gray-900">Open to Work</p>
              </div>
            </motion.div>

            {/* Top-right floating badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-3 -right-3 z-20 bg-white py-2.5 px-4 rounded-2xl shadow-xl border border-gray-100"
            >
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Experience</p>
              <p className="text-lg font-extrabold text-gray-900">1+ Yrs</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 border-y border-gray-100"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
