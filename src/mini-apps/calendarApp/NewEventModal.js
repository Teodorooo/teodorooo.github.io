import React, { useState } from 'react';

export function NewEventModal({ onSave, onClose }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  const handleSave = () => {
    if (title.trim()) {
      setError(false);
      onSave(title.trim());
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="cal-modal-backdrop" onClick={onClose} />
      <div className="cal-modal">
        <h5 className="cal-modal__title">New Event</h5>
        <input
          className={`cal-modal__input${error ? ' cal-modal__input--error' : ''}`}
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Event title"
          autoFocus
          onKeyDown={e => e.key === 'Enter' && handleSave()}
        />
        <div className="cal-modal__actions">
          <button className="cal-modal__btn cal-modal__btn--primary" onClick={handleSave}>Save</button>
          <button className="cal-modal__btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default NewEventModal;
