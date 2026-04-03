import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

function CharacterGrid({ items, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <section className="bbapi-grid">
      {items.map(item => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
}

export default CharacterGrid;
