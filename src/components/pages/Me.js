import { useState, useEffect } from 'react';
import '../../App.css';
import '../Cards.css';
import backgroundvideo from '../../videos/video-compressed.mp4';
import me_bw from '../../images/Mr bean faces/me_bw.jpg';
import me_coloured from '../../images/Mr bean faces/me_coloured.jpg';
import techcv from '../../images/Mr bean faces/tech cv.png';

function Me() {
  const [fade, setFade] = useState(false);
  useEffect(() => { setFade(true); }, []);

  return (
    <div className="page-container">
      <video src={backgroundvideo} loop autoPlay muted playsInline className="bgvideo" />

      <div className="single-view">
        <div className="image-stack">
          <img
            src={me_bw}
            alt=""
            className={`image-stack__img image-stack__img--behind${fade ? ' fade' : ''}`}
          />
          <img src={me_coloured} alt="" className="image-stack__img image-stack__img--top" />
        </div>

        <div className="text-block">
          <h1>Who am I?</h1>
          <h2>Full-stack developer &amp; tinkerer</h2>
        </div>

        <img src={techcv} alt="Tech CV" className="cv-img" />
      </div>
    </div>
  );
}

export default Me;
