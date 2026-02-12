const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1>Hi, I am John,<br />Creative Technologist</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.
        </p>
        <button className="btn">Download Resume</button>
      </div>

      <div className="hero-img">
        <img src="/works/portrait.jpg" alt="profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero;
