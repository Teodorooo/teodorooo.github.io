import CardItem from "./CardItem";
import mistery_man from "../images/Mr bean faces/mistery_man.jpg";
import me_bw from "../images/Mr bean faces/me_bw.jpg";
import me_coloured from "../images/Mr bean faces/me_coloured.jpg";
import sculpture from "../images/Mr bean faces/sculpture.jpg";
import sculpture_black from "../images/Mr bean faces/sculpture_black.jpg";
import sculpture_gold from "../images/Mr bean faces/sculpture_gold.jpg";
import backgroundvideo from "../videos/video-compressed.mp4";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Cards.css";

function Cards() {
  const [selectedId, setSelectedId] = useState(null);
  const [fade, setFade] = useState(false);
  const { t } = useTranslation();

  const cards = [
    {
      id: 1,
      src: mistery_man,
      revealed: me_bw,
      srcColoured: me_coloured,
      text: "Here, you can learn more about my skills and background.",
      label: "Who am I?",
      header: "Who am I?",
      subj: "This is my cv.",
      link: "/me",
    },
    {
      id: 2,
      src: sculpture,
      revealed: sculpture_gold,
      srcColoured: sculpture_gold,
      text: "Here are my tech projects",
      label: "My projects",
      header: "My Projects",
      subj: "Here are my projects.",
      link: "/projects",
    },
  ];

  // Trigger fade once when a card is opened
  useEffect(() => {
    if (selectedId) setFade(true);
  }, [selectedId]);

  if (selectedId) {
    const card = cards.find((c) => c.id === selectedId);
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
        </div>
      </div>
    );
  }

  // Main card grid view
  return (
    <div className="cards">
      <video src={backgroundvideo} loop autoPlay muted className="bgvideo" />

      <div className="hero">
        <h1>Teo's Website</h1>
        <h2>
          {t("quote")}
          <br />– Arthur C. Clarke
        </h2>
      </div>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cards.map((card) => (
              <CardItem
                key={card.id}
                {...card}
                onSelect={() => setSelectedId(card.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
