import '../../App.css';
import backgroundvideo from '../../videos/video-compressed.mp4';

const videos = [
  {
    id: 1,
    title: 'Coding Risk boardgame | Learn Python basics',
    stack: 'Python · Pygame',
    points: [
      'Pygame videogame tutorial',
      'Data handling',
      'Coding mindset',
      'Object Oriented Programming (OOP)',
    ],
    youtubeId: 'ip61-1jj2Y0',
  },

];

function Videos() {
  return (
    <div className="page-container">
      <video src={backgroundvideo} loop autoPlay muted playsInline className="bgvideo" />

      <div className="page-hero">
        <h1>Videos</h1>
        <p>Tutorials and tech content.</p>
      </div>

      <div className="video-list">
        {videos.map(v => (
          <div key={v.id} className="glass video-card">
            <div className="video-card__info">
              <h3>{v.title}</h3>
              <p className="video-card__stack">{v.stack}</p>
              <ul className="video-card__points">
                {v.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
            <div className="video-card__embed">
              <iframe
                src={`https://www.youtube.com/embed/${v.youtubeId}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
