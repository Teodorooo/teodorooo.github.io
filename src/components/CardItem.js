import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem({ src, revealed, label, text, link }) {
  return (
    <li className="card-item">
      <Link to={link} className="card-item__link">
        <div className="card-item__img-wrap" data-label={label}>
          <img src={revealed} alt="" className="card-item__img card-item__img--bottom" />
          <img src={src} alt={label} className="card-item__img card-item__img--top" />
        </div>
        <div className="card-item__info">
          <p className="card-item__text">{text}</p>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
