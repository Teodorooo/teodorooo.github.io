import { useState, useEffect, useCallback } from 'react';
import '../../App.css';
import '../Cards.css';
import '../Me.css';
import backgroundvideo from '../../videos/video-compressed.mp4';
import me_bw from '../../images/Mr bean faces/me_bw.jpg';
import me_coloured from '../../images/Mr bean faces/me_coloured.jpg';
import techcv from '../../images/Mr bean faces/tech cv.png';

import farm01 from '../../images/personal/farm/farm-01.jpg';
import farm02 from '../../images/personal/farm/farm-02.jpg';

import food01 from '../../images/personal/food/food-01.jpg';
import food02 from '../../images/personal/food/food-02.jpg';
import food03 from '../../images/personal/food/food-03.jpg';
import food04 from '../../images/personal/food/food-04.jpg';
import food05 from '../../images/personal/food/food-05.jpg';
import food06 from '../../images/personal/food/food-06.jpg';
import food07 from '../../images/personal/food/food-07.jpg';
import food08 from '../../images/personal/food/food-08.jpg';
import food09 from '../../images/personal/food/food-09.jpg';
import food10 from '../../images/personal/food/food-10.jpg';

import flagEC from '../../images/flags/ec.svg';
import flagID from '../../images/flags/id.svg';
import flagRS from '../../images/flags/rs.svg';
import flagIT from '../../images/flags/it.svg';
import flagJP from '../../images/flags/jp.svg';
import flagFR from '../../images/flags/fr.svg';

const KITCHEN = [
  { src: food10, name: 'Spinach pita (in the making)',                          flag: flagRS, flagAlt: 'Serbia',    wide: true },
  { src: food05, name: 'Steak, onion jam, rosemary',                            flag: null,   flagAlt: null },
  { src: food04, name: 'Lasagne',                                               flag: flagIT, flagAlt: 'Italy' },
  { src: food02, name: 'Viche, patacón, rice, menestra, brussels sprouts',     flag: flagEC, flagAlt: 'Ecuador' },
  { src: food01, name: 'Miso soup, broccoli, chicken hearts, berries & yogurt', flag: flagJP, flagAlt: 'Japan' },
  { src: food03, name: 'Gado-gado',                                             flag: flagID, flagAlt: 'Indonesia' },
  { src: food07, name: 'Tigrillo, sunny side up',                               flag: flagEC, flagAlt: 'Ecuador' },
  { src: food06, name: 'Ratatouille',                                           flag: flagFR, flagAlt: 'France' },
  { src: food08, name: 'Chicken wraps',                                         flag: null,   flagAlt: null },
  { src: food09, name: 'Pljeskavica',                                           flag: flagRS, flagAlt: 'Serbia' },
];

function Me() {
  const [fade, setFade] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => { setFade(true); }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex(i => (i === null ? null : (i - 1 + KITCHEN.length) % KITCHEN.length)),
    []
  );
  const showNext = useCallback(
    () => setLightboxIndex(i => (i === null ? null : (i + 1) % KITCHEN.length)),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showPrev();
      else if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const active = lightboxIndex === null ? null : KITCHEN[lightboxIndex];

  return (
    <div className="page-container me-page">
      <video src={backgroundvideo} loop autoPlay muted playsInline className="bgvideo" />

      {/* ---- HERO ---- */}
      <section className="me-hero">
        <div className="me-hero__portrait image-stack">
          <img
            src={me_bw}
            alt=""
            className={`image-stack__img image-stack__img--behind${fade ? ' fade' : ''}`}
          />
          <img src={me_coloured} alt="Portrait of Teodoro" className="image-stack__img image-stack__img--top" />
        </div>

        <div className="me-hero__intro">
          <p className="me-hero__eyebrow">Who am I?</p>
          <h1 className="me-hero__name">Teodoro Esquerre</h1>

          <div className="me-hero__heritage" aria-label="From Ecuador, France and Serbia">
            <span className="me-hero__heritage-label">From</span>
            <span className="me-hero__heritage-flags">
              <img src={flagEC} alt="Ecuador" title="Ecuador" />
              <img src={flagFR} alt="France"  title="France"  />
              <img src={flagRS} alt="Serbia"  title="Serbia"  />
            </span>
          </div>

          <p className="me-hero__tagline">
            I love cooking, and I help on a small farm most mornings.
          </p>
          <p className="me-hero__pitch">
            Looking for cafe or hotel work.
          </p>
        </div>
      </section>

      {/* ---- IN THE KITCHEN ---- */}
      <section className="me-section">
        <header className="me-section__head">
          <span className="me-section__kicker">01 / In the kitchen</span>
          <h2>Things I've cooked</h2>
          <p>A few plates from home, from different countries. Click any photo to enlarge.</p>
        </header>

        <div className="kitchen-gallery">
          {KITCHEN.map((item, i) => (
            <figure
              key={i}
              className={`kitchen-tile${item.wide ? ' kitchen-tile--wide' : ''}`}
              onClick={() => setLightboxIndex(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(i);
                }
              }}
            >
              <img src={item.src} alt={item.name} loading="lazy" />
              <figcaption>
                {item.flag && (
                  <img className="kitchen-tile__flag" src={item.flag} alt={item.flagAlt} />
                )}
                <span className="kitchen-tile__name">{item.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---- ON THE FARM ---- */}
      <section className="me-section">
        <header className="me-section__head">
          <span className="me-section__kicker">02 / On the farm</span>
          <h2>Mornings on the farm</h2>
          <p>Feeding, milking, looking after the animals.</p>
        </header>

        <div className="farm-grid">
          <figure className="farm-tile farm-tile--tall">
            <img src={farm02} alt="Milking on the farm" loading="lazy" />
            <figcaption>Milking</figcaption>
          </figure>
          <figure className="farm-tile">
            <img src={farm01} alt="Feeding a goat" loading="lazy" />
            <figcaption>Feeding the goats</figcaption>
          </figure>
        </div>
      </section>

      {/* ---- ALSO A DEVELOPER ---- */}
      <section className="me-section me-section--tech">
        <header className="me-section__head">
          <span className="me-section__kicker">03 / I also code</span>
          <h2>Building things on the web</h2>
        </header>
        <img src={techcv} alt="Tech CV" className="cv-img" />
      </section>

      {/* ---- LIGHTBOX ---- */}
      {active && (
        <div
          className="me-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
          onClick={closeLightbox}
        >
          <button
            className="me-lightbox__nav me-lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <figure className="me-lightbox__stage" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.name} />
            <figcaption className="me-lightbox__caption">
              {active.flag && (
                <img className="kitchen-tile__flag" src={active.flag} alt={active.flagAlt} />
              )}
              <span>{active.name}</span>
              <span className="me-lightbox__count">
                {lightboxIndex + 1} / {KITCHEN.length}
              </span>
            </figcaption>
          </figure>

          <button
            className="me-lightbox__nav me-lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          <button
            className="me-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Me;
