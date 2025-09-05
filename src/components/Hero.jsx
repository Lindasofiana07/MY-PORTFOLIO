export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div>
          <h1>
            Hi, I'm <span style={{ color: "#ff4da6" }}>Linda Sofiana</span>
          </h1>
          <h2>Front End Web Developer | Painter</h2>
          <p>
            Welcome to my portfolio! Scroll down to see my journey and works.
          </p>
          <a href="#projects" className="btn">See My Projects</a>
        </div>

        {/* Foto di sebelah kanan */}
        <div className="hero-img">
          <img src="/image/me.jpg" alt="Pearl" />
        </div>
      </div>
    </section>
  );
}
