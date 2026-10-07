const profileImage = `${import.meta.env.BASE_URL}img/photo.jpg`;

const HERO_ACTIONS = [
  { label: 'View Work', href: '#work', variant: 'primary' },
  { label: "Let's Talk", href: '#contact', variant: 'secondary' },
];

const HERO_STATS = [
  { value: '1+', label: 'Years Experience' },
  { value: '5', label: 'Projects Shipped' },
  { value: '2', label: 'Happy Clients' },
];

function Hero() {
  return (
    <main className="hero" id="home">
      <div className="hero-top">
        <p className="hero-eyebrow">Front-end developer</p>
        <p className="hero-meta">Available for work � 2026</p>
      </div>

      <div className="hero-body">
        <div className="hero-center">
          <h1 className="hero-title">
            Building <span>Things</span> That Matter
          </h1>

          <img src={profileImage} alt="Profile" />
        </div>
        
        <p className="hero-copy">
          I build fast, accessible, and beautifully designed products • from design systems to front-end apps.
        </p>

        <div className="hero-actions">
          {HERO_ACTIONS.map((action) => (
            <a key={action.label} className={`hero-button hero-button--${action.variant}`} href={action.href}>
              {action.label}
            </a>
          ))}
        </div>
      </div>

      <div className="hero-stats" aria-label="Hero statistics">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <p className="hero-stat-value">{stat.value}</p>
            <p className="hero-stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Hero;
