import React from 'react'
import '../../App.css'
import '../Button.css'
import backgroundvideo from '../../videos/video-compressed.mp4';
import { useTranslation } from "react-i18next";

function Lang() {
  const { i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
    <video src={backgroundvideo} loop autoPlay muted className="bgvideo" />
      <button onClick={() => changeLang("en")}>EN</button>
      <button onClick={() => changeLang("cz")}>CZ</button>
    </div>
  );
}

export default Lang