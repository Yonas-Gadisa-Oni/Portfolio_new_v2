import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Palette, Layers } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: Monitor,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50 text-blue-600',
    items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebGL / Three.js', 'D3.js'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50 text-emerald-600',
    items: ['Node.js / Bun', 'PostgreSQL', 'Redis', 'GraphQL', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Design',
    icon: Palette,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50 text-purple-600',
    items: ['Figma', 'Design Systems', 'Prototyping', 'Motion Design', 'Typography', 'Brand Identity'],
  },
  {
    title: 'Tools & DevOps',
    icon: Layers,
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50 text-orange-600',
    items: ['Docker', 'CI/CD Pipelines', 'Vercel / AWS', 'GitHub Actions', 'Playwright', 'Storybook'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] } },
};

function Skills() {
  return (
    <section className="py-24 md:py-32 bg-gray-50" id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            What I Bring to the Table
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            A full spectrum of skills for building modern web applications — from pixel-perfect interfaces to robust backend systems.
          </motion.p>
        </div>

        {/* Skills grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                variants={cardAnim}
                key={cat.title}
                className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500"
              >
                <div className={`w-14 h-14 ${cat.lightColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-6">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${cat.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
