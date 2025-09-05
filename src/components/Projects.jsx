
export default function Projects() {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Chill Movie App</h3>
          <p>Click below 👇</p>
          <a href="https://github.com/lindasofiana07/" target="_blank">Movie CRUD website with React + API</a>
        </div>
        <div className="project-card">
          <h3>My Painting</h3>
          <p>My artworks </p>
          <div className="photo-slider">
          <img src="/image/skill1.jpg" alt="Pearl" />
          <img src="/image/skill2.jpg" alt="Pearl" />
          <img src="/image/skill3.jpg" alt="Pearl" />
          <img src="/image/skill4.jpg" alt="Pearl" />
          <img src="/image/skill5.jpg" alt="Pearl" />
          <img src="/image/skill6.jpg" alt="Pearl" />
          <img src="/image/skill7.jpg" alt="Pearl" />
        </div>
        </div>
      </div>
    </section>
  );
}
