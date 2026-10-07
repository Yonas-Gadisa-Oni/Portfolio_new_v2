const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="contact-eyebrow">Let's work together</p>
          <h2 className="contact-title">Got a project in mind?</h2>
          <p className="contact-text">
            I take on a limited number of projects each quarter. Reach out early and let's see if we're a good fit.
          </p>
          <form className="contact-form">
            <div className="contact-input-group">
              <input className="contact-input" type="email" placeholder="yonasgadisa2@gmail.com" aria-label="Email address" />
              <button type="submit" className="contact-submit">Get in touch</button>
            </div>
          </form>
        </div>

        <div>
          <div className="contact-social">
            <a href="#" className="contact-social-button">GitHub</a>
            <a href="#" className="contact-social-button">LinkedIn</a>
            <a href="#" className="contact-social-button">Twitter</a>
            <a href="#" className="contact-social-button">Dribbble</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
