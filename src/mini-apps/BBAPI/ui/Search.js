import React, { useState } from 'react';

function Search({ getQuery }) {
  const [text, setText] = useState('');

  const onChange = q => {
    setText(q);
    getQuery(q);
  };

  return (
    <div className="bbapi-search">
      <input
        type="text"
        className="bbapi-search__input"
        placeholder="Search characters..."
        value={text}
        onChange={e => onChange(e.target.value)}
        autoFocus
      />
    </div>
  );
}

export default Search;
