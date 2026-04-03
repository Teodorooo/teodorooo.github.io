import '../../App.css';
import backgroundvideo from '../../videos/video-compressed.mp4';

const videos = [
  {
    id: 1,
    title: 'Terraform to Deploy a React App to AWS ECR',
    stack: 'Terraform · Docker · AWS',
    points: [
      'Multi-stage Dockerfile for optimized builds',
      'Terraform pulls the image from AWS ECR',
      'NGINX with load balancing & auto-scaling in the background',
      'Repos linked in the video description',
    ],
    youtubeId: 'F6ikuuq0aaA',
  },
  {
    id: 2,
    title: 'React Overview — How It Works & Hooks',
    stack: 'React',
    points: [
      'How React works under the hood',
      'Full overview of hooks and the rendering model',
      'Everything you need to start building with React',
    ],
    youtubeId: 'sy0IiiNEjHs',
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
