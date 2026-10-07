const PROJECTS = [
  {
    id: 1,
    title: 'Luxe E-commerc',
    subtitle: 'E-Commerce Website',
    description: 'A comprehensive token-based design system powering three products across web and mobile. Includes 80+ components, dark mode, and accessibility-first architecture.',
    year: '2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNOWxkqSZtJlujFAoWwgby2_-WUVB06-fQ7QtLVk5wWMB604DQSTQi008&s=10',
    imageClass: 'project-image--luxe',
    url: 'https://yonas-gadisa-oni.github.io/Luxe-E-commerce/',
    tags: ['React', 'TypeScript', 'Figma', 'Storybook'],
  },
  {
    id: 2,
    title: 'Restaurant',
    subtitle: 'Full-stack / Data Viz',
    description: 'Real-time data visualization dashboard for IoT sensor networks. Handles 50k events per second with sub-100ms render latency using WebSocket streaming.',
    year: '2026',
    image: 'https://yonas-gadisa-oni.github.io/Restaurant/images/room.avif',
    tags: ['Next.js', 'D3.js', 'Supabase', 'WebSockets'],
    url: 'https://yonas-gadisa-oni.github.io/Restaurant/',
  },
    {
    id: 3,
    title: 'Wenda Interior',
    subtitle: 'Interior Design / Fit-out / Finishing',
    description: 'WENDA INTERIOR AND FINISHING LLC delivers refined interior design, fit-out, finishing, and property improvement solutions across Dubai and the UAE. We combine thoughtful design with skilled craftsmanship to create spaces that are functional, elegant, and built to last',
    year: '2026',
    image: `${import.meta.env.BASE_URL}img/Screenshot%202026-10-07%20191210.png`,
    tags: ['Next.js', 'D3.js', 'Supabase', 'WebSockets'],
    url: 'https://yonas-gadisa-oni.github.io/Wende-Luxury/',
  },
    {
    id: 4,
    title: 'aegis ID',
    subtitle: 'Digital Identity / Security / Privacy',
    description: 'Aegis ID is a digital identity platform that provides secure and privacy-focused solutions for individuals and organizations. It enables users to manage their digital identities, authenticate securely, and protect their personal information in the digital world.',
    year: '2026',
    image: `${import.meta.env.BASE_URL}img/aegis.png`,
    tags: ['Next.js', 'D3.js', 'Supabase', 'WebSockets'],
    url: 'https://aegis-id-psi.vercel.app/login',
  },
    {
    id: 5,
    title: 'YMA LAW OFFICE',
    subtitle: 'Full-stack / Data Viz',
    description: 'YMA Law Office (Yigermal Melkam & Advocates) is a premium Ethiopian law office delivering full-service legal counsel across corporate, commercial, and sports law. Founded by Lawyer Yigermal Melkam, a seasoned advocate with direct experience at the Court of Arbitration for Sport (CAS), our office combines international expertise with deep local insight. We represent athletes, financial institutions, corporations, construction firms, and individuals in all regulatory, contractual, and disciplinary matters. Our team includes highly experienced advocates who have successfully handled complex cases before CAS, ETH-ADA, national courts, and international tribunals. At YMA Law Office, we are committed to protecting your rights and advancing your interests with precision, integrity, and unwavering dedication.',
    year: '2026',
    image: `${import.meta.env.BASE_URL}img/law.png`,
    tags: ['Next.js', 'D3.js', 'Supabase', 'WebSockets'],
    url: 'https://yma-law-office.onrender.com/',
  },
];

function Work() {
  return (
    <section className="work" id="work">
      <div className="work-heading">
        <p className="work-eyebrow">Selected Work</p>
        <h2 className="work-title">Recent projects</h2>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.id} className="project-card">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={`project-image ${project.imageClass || ''}`}
              style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
              aria-label={`Open ${project.title} project website`}
            >
              <span className="project-badge">{project.year}</span>
            </a>

            <div className="project-content">
              <p className="project-meta">{project.id.toString().padStart(2, '0')} • {project.subtitle}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="project-tag">{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;
