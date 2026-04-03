import React, { useState } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CardItem(props) {
  const [hovered, setHovered] = useState(false);
  const { t } = useTranslation();
  
  return (
    <li className="cards__item">
      <div className="cards__item__link" onClick={props.onSelect}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img
            src={props.revealed}
            alt="img"
            className="cards__item__img bigger"
          />
              <Link
                to={props.link}
              >
                <img                 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={
                  hovered
                  ? "cards__item__img hover"
                  : "cards__item__img"
                  }
                  src={props.src} 
                  alt="misteryman" />
              </Link>
        </figure>

        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
          <h3 className="subtext">{props.subtext}</h3>
        </div>
      </div>
    </li>
  );
}

export default CardItem;
