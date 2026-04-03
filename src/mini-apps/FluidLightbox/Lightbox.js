import React from 'react';
import '../../App.css';
import Gallery from './Gallery';
import backgroundvideo from '../../videos/video-compressed.mp4';

function Lightbox() {
  return (
    <div className="page-container">
      <video src={backgroundvideo} loop autoPlay muted playsInline className="bgvideo" />
      <div className="page-hero">
        <h1>Photo Gallery</h1>
        <p>Click any photo to view it in full.</p>
      </div>
      <Gallery />
    </div>
  );
}

export default Lightbox;
