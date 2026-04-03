import React, { useState } from 'react';
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';
import Img1  from './Fullimages/Bath Chill FULL.jpg'
import Img2  from './Fullimages/Countryside FULL.jpg'
import Img3  from './Fullimages/Cruise FULL.jpg'
import Img4  from './Fullimages/France FULL.jpg'
import Img5  from './Fullimages/Mountains FULL.jpg'
import Img6  from './Fullimages/Outdoor Bath FULL.jpg'
import Img7  from './Fullimages/Pool FULL.png'
import Img8  from './Fullimages/River FULL.jpg'
import Img9  from './Fullimages/San Pedro Cactus FULL.jpg'
import Img10 from './Fullimages/Sea FULL.jpg'
import Img11 from './Fullimages/Seaside FULL.jpg'
import Img12 from './Fullimages/Thunder FULL.jpg'

const images = [
  { id: 1,  src: Img1,  caption: "Just chillin'" },
  { id: 2,  src: Img2,  caption: "Anita in contemplation" },
  { id: 3,  src: Img3,  caption: "Don't wake up Daddy" },
  { id: 4,  src: Img4,  caption: "Somewhere in France" },
  { id: 5,  src: Img5,  caption: "Silverton, CO, USA" },
  { id: 6,  src: Img6,  caption: "Outdoor bath" },
  { id: 7,  src: Img7,  caption: "Time for fun" },
  { id: 8,  src: Img8,  caption: "Canada" },
  { id: 9,  src: Img9,  caption: "San Pedro Cactus near Quito" },
  { id: 10, src: Img10, caption: "Portugal" },
  { id: 11, src: Img11, caption: "Ocean breeze" },
  { id: 12, src: Img12, caption: "Thunder" },
];

function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <>
      {lightboxSrc && (
        <div className="lb-modal" onClick={() => setLightboxSrc(null)}>
          <img src={lightboxSrc} alt="Full view" onClick={e => e.stopPropagation()} />
          <button className="lb-close" onClick={() => setLightboxSrc(null)}>
            <CloseIcon />
          </button>
        </div>
      )}

      <div className="lb-gallery">
        {images.map(img => (
          <div
            key={img.id}
            className="lb-item"
            onClick={() => setLightboxSrc(img.src)}
          >
            <img src={img.src} alt={img.caption} />
            <div className="lb-item__caption">{img.caption}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
