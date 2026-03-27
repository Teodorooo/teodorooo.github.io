import React from 'react';
import '../../App.css';
import '../Button.css';
import { Link } from 'react-router-dom';
import backgroundvideo from '../../videos/video-compressed.mp4';
import '../Cards.css'
import me_bw from "../../images/Mr bean faces/me_bw.jpg";
import me_coloured from "../../images/Mr bean faces/me_coloured.jpg";
import techcv from "../../images/Mr bean faces/tech cv.png";
import { useState, useEffect } from "react";

function Me() {
  window.scrollTo(0, 0);
  const [fade, setFade] = useState(false)
  useEffect(() => {setFade(true);}, []);

  const card = 
      {
        id: 1,
        revealed: me_bw,
        srcColoured: me_coloured,
        header: "Who am I?",
        subj: "This is my cv.",
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
            <img
              src={techcv}
              alt=""
              className="cv"
            />
        </div>
      </div>
    );
  }

export default Me