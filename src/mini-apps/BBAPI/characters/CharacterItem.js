import React from 'react';

function CharacterItem({ item }) {
  return (
    <div className="bbapi-card">
      <div className="bbapi-card__inner">
        <div className="bbapi-card__front">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="bbapi-card__back">
          <h3>{item.name}</h3>
          <ul>
            <li><strong>Actor:</strong> {item.actor}</li>
            <li><strong>Birthday:</strong> {item.birthday}</li>
            <li><strong>Status:</strong>
              <span className={`bbapi-status bbapi-status--${item.status?.toLowerCase()}`}>
                {' '}{item.status}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CharacterItem;
