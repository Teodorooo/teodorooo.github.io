import { Link } from 'react-router-dom';
import '../../App.css';
import backgroundvideo from '../../videos/video-compressed.mp4';

const projects = [
  {
    id: 1,
    title: 'Calendar App',
    description: 'Interactive monthly calendar with event creation and deletion, persisted in localStorage.',
    tech: ['React', 'LocalStorage'],
    link: '/calendar',
    external: false,
  },
  {
    id: 2,
    title: 'Breaking Bad API',
    description: 'Browse and search every Breaking Bad character with a flip-card UI.',
    tech: ['React', 'Axios', 'REST API'],
    link: '/bbapi',
    external: false,
  },
  {
    id: 3,
    title: 'Photo Lightbox',
    description: 'A fluid photo gallery grid with a full-screen animated lightbox viewer.',
    tech: ['React'],
    link: '/lightbox',
    external: false,
  },
  {
    id: 4,
    title: 'Risk Game (Python)',
    description: 'A Python-built Risk board game deployed live — playable directly below.',
    tech: ['Python'],
    link: 'https://risk.teodoroesquerre.com',
    external: true,
  },
];

function Projects() {
  return (
    <div className="page-container">
      <video src={backgroundvideo} loop autoPlay muted playsInline className="bgvideo" />

      <div className="page-hero">
        <h1>Projects</h1>
        <p>Mini-apps, tools, and experiments.</p>
      </div>

      <div className="project-grid">
        {projects.map(p =>
          p.external ? (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >
              <div className="project-card__body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-card__tags">
                  {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <span className="project-card__arrow">&#8599;</span>
            </a>
          ) : (
            <Link key={p.id} to={p.link} className="project-card">
              <div className="project-card__body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-card__tags">
                  {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <span className="project-card__arrow">&#8594;</span>
            </Link>
          )
        )}
      </div>

      <div className="risk-embed">
        <h2>Risk Game &mdash; Live Preview</h2>
        <iframe
          src='https://risk.teodoroesquerre.com'
          title="Risk Game"
          className="risk-iframe"
        />
      </div>
    </div>
  );
}

export default Projects;
