import React from 'react';
import '../../App.css';
import '../Button.css';
import { Link } from 'react-router-dom';
import backgroundvideo from '../../videos/video-compressed.mp4';
import '../Cards.css'
import sculpture from "../../images/Mr bean faces/sculpture.jpg";
import sculpture_gold from "../../images/Mr bean faces/sculpture_gold.jpg";
import { useState, useEffect } from "react";

function Projects() {
  window.scrollTo(0, 0);
  const [fade, setFade] = useState(false)
  useEffect(() => {setFade(true);}, []);

  const card = 
      {
        id: 2,
        revealed: sculpture_gold,
        srcColoured: sculpture,
        header: "Projects:",
        subj: "This is my Risk python game",
      }

return (
      <div className="cards">
        <video src={backgroundvideo} loop autoPlay muted className="bgvideo" />

        <div className="single-view">
          <div className="image-stack">
            {/* bottom fades out */}
            <img
              src={card.revealed}
              alt=""
              className={`cards__item__img behind ${fade ? "fade" : ""}`}
            />
            {/* top stays visible */}
            <img
              src={card.srcColoured || card.src}
              alt=""
              className="cards__item__img top"
            />
          </div>

          <div className="text-block">
            <h1>{card.header}</h1>
            <h2>{card.subj}</h2>
          </div>
          <iframe 
            src="https://risk-game-iuhi.onrender.com"
            width="100%" 
            height="800px"
          ></iframe>
        </div>
      </div>
    );
  }

export default Projects