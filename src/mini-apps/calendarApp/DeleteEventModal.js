import React from 'react';

export function DeleteEventModal({ eventText, onDelete, onClose }) {
  return (
    <>
      <div className="cal-modal-backdrop" onClick={onClose} />
      <div className="cal-modal">
        <h5 className="cal-modal__title">Event</h5>
        <p className="cal-modal__event-text">{eventText}</p>
        <div className="cal-modal__actions">
          <button className="cal-modal__btn cal-modal__btn--danger" onClick={onDelete}>Delete</button>
          <button className="cal-modal__btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}

export default DeleteEventModal;
