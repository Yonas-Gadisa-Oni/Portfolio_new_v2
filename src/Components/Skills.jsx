const SKILL_COLUMNS = [
  {
    title: 'Frontend',
    items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebGL / Three.js', 'D3.js'],
  },
  {
    title: 'Backend',
    items: ['Node.js / Bun', 'PostgreSQL', 'Redis', 'GraphQL', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Design',
    items: ['Figma', 'Design Systems', 'Prototyping', 'Motion Design', 'Typography', 'Brand Identity'],
  },
  {
    title: 'Tools & DevOps',
    items: ['Docker', 'CI/CD Pipelines', 'Vercel / AWS', 'GitHub Actions', 'Playwright', 'Storybook'],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-heading">
        <p className="skills-eyebrow">Capabilities</p>
        <h2 className="skills-title">What I bring</h2>
      </div>

      <div className="skills-grid">
        {SKILL_COLUMNS.map((column) => (
          <div key={column.title} className="skills-column">
            <h3 className="skills-column-title">{column.title}</h3>
            <ul className="skills-list">
              {column.items.map((item) => (
                <li key={item} className="skills-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
