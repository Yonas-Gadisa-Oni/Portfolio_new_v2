import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'Luxe E-Commerce',
    subtitle: 'E-Commerce Platform',
    description:
      'A comprehensive token-based design system powering three products across web and mobile. Includes 80+ components, dark mode, and accessibility-first architecture.',
    year: '2026',
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QHrlrPR1JvniY-ROIKn67OHO4IyEnUPBP3zsZf_qynWiB6C2xkphsjU&s=10`,
    url: 'https://yonas-gadisa-oni.github.io/Luxe-E-commerce/',
    tags: ['React', 'TypeScript', 'Figma', 'Storybook'],
    color: 'from-violet-600 to-indigo-600',
  },
  {
    id: 2,
    title: 'Restaurant Website',
    subtitle: 'Full-Stack / UI Design',
    description:
      'Real-time data visualization dashboard for IoT sensor networks. Handles 50k events per second with sub-100ms render latency using WebSocket streaming.',
    year: '2026',
    image: `${import.meta.env.BASE_URL}img/resturant.png`,
    url: 'https://yonas-gadisa-oni.github.io/Restaurant/',
    tags: ['Next.js', 'D3.js', 'Supabase', 'WebSockets'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 3,
    title: 'Wenda Interior',
    subtitle: 'Interior Design / Fit-out / Finishing',
    description:
      'WENDA INTERIOR AND FINISHING LLC delivers refined interior design, fit-out, finishing, and property improvement solutions across Dubai and the UAE. We combine thoughtful design with skilled craftsmanship to create spaces that are functional, elegant, and built to last.',
    year: '2026',
    image: `${import.meta.env.BASE_URL}img/Screenshot%202026-10-07%20191210.png`,
    url: 'https://yonas-gadisa-oni.github.io/Wende-Luxury/',
    tags: ['React', 'Tailwind CSS', 'Responsive', 'UI/UX'],
    color: 'from-amber-500 to-yellow-500',
  },
  {
    id: 4,
    title: 'Aegis ID',
    subtitle: 'Digital Identity / Security / Privacy',
    description:
      'Aegis ID is a digital identity platform that provides secure and privacy-focused solutions for individuals and organizations. It enables users to manage their digital identities, authenticate securely, and protect their personal information in the digital world.',
    year: '2026',
    image: `${import.meta.env.BASE_URL}img/aegis.png`,
    url: 'https://aegis-id-psi.vercel.app/login',
    tags: ['Next.js', 'Auth.js', 'PostgreSQL', 'Security'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 5,
    title: 'YMA Law Office',
    subtitle: 'Corporate / Legal',
    description:
      'YMA Law Office (Yigermal Melkam & Advocates) is a premium Ethiopian law office delivering full-service legal counsel across corporate, commercial, and sports law. Founded by Lawyer Yigermal Melkam, a seasoned advocate with direct experience at the Court of Arbitration for Sport (CAS).',
    year: '2026',
    image: `${import.meta.env.BASE_URL}img/law.png`,
    url: 'https://yma-law-office.onrender.com/',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    color: 'from-blue-600 to-cyan-500',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

function Work() {
  return (
    <section className="py-24 md:py-32" id="work">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 text-balance"
          >
            Projects I've built for clients & open-source
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            Each project represents a unique challenge — from design systems to full-stack platforms. Here are some highlights.
          </motion.p>
        </div>

        {/* Projects grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.article
              variants={card}
              key={project.id}
              className="group relative bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-2xl transition-all duration-500"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Image side */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative lg:w-1/2 h-64 sm:h-80 lg:h-auto overflow-hidden bg-gray-100"
                  aria-label={`View ${project.title} live`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Overlay CTA */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className={`px-4 py-2 rounded-full text-white text-xs font-bold bg-gradient-to-r ${project.color} shadow-lg`}>
                      {project.year}
                    </span>
                    <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                </a>

                {/* Content side */}
                <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                    {project.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 mt-auto">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Site</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Work;
