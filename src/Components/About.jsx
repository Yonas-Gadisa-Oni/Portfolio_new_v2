const About = () => {
  const profileImage = `${import.meta.env.BASE_URL}img/photo.jpg`;

  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-card">
          <div className="about-image">
            <img src={profileImage} alt="Profile" />
            <div className="about-badge">
              <span className="about-badge-label">Trusted by teams</span>
              <p className="about-badge-text">
                1+ year of experience, 5 projects, and 2 happy clients.
              </p>
            </div>
          </div>
        </div>

        <div className="about-copy">
          <p className="about-eyebrow">About me</p>
          <h2 className="about-title">I turn ideas into polished digital products.</h2>
          <p>
            As a product-focused developer, I craft interfaces that balance clean visuals,
            accessible patterns, and thoughtful motion. I partner with startups and
            teams to build web experiences that feel modern, fast, and reliable.
          </p>
          <p>
            From rapid prototypes to launching full marketing sites, I help brands
            communicate clearly while maintaining a strong design system architecture.
          </p>

          <div className="about-actions">
            <a href="#contact" className="about-button about-button--primary">
              Start a project
            </a>
            <a href="#work" className="about-button about-button--secondary">
              View work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
