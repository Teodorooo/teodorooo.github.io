import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Headerbb from './ui/Headerbb';
import Search from './ui/Search';
import CharacterGrid from './characters/CharacterGrid';
import './BbapiApp.css';
import backgroundvideo from '../../videos/video-compressed.mp4';

function BBapiApp() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const res = await axios('/data/characters.json');
        const filtered = res.data.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        setItems(filtered);
      } catch (err) {
        console.error('Error fetching characters:', err);
        setItems([]);
      }
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="bbapi-page">
      <video src={backgroundvideo} loop autoPlay muted playsInline className="bgvideo" />
      <div className="bbapi-container">
        <Headerbb />
        <Search getQuery={setQuery} />
        <CharacterGrid isLoading={isLoading} items={items} />
      </div>
    </div>
  );
}

export default BBapiApp;
