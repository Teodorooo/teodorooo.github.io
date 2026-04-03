
import backgroundvideo from '../videos/video-compressed.mp4';
import mistery_man from '../images/Mr bean faces/mistery_man.jpg';
import me_bw from '../images/Mr bean faces/me_bw.jpg';
import sculpture from '../images/Mr bean faces/sculpture.jpg';
import sculpture_gold from '../images/Mr bean faces/sculpture_gold.jpg';
import CardItem from './CardItem';
import './Cards.css';

const cards = [
  {
    id: 1,
    src: mistery_man,
    revealed: me_bw,
    text: 'Skills, background, and a bit about me.',
    label: 'Who am I?',
    link: '/me',
  },
  {
    id: 2,
    src: sculpture,
    revealed: sculpture_gold,
    text: 'Mini-apps, tools, and experiments.',
    label: 'Projects',
    link: '/projects',
  },
];

const QUOTE = 'Any sufficiently advanced technology is indistinguishable from magic.';

function Cards() {
  return (
    <div className="cards-page">
      <video src={backgroundvideo} loop autoPlay muted playsInline className="bgvideo" />

      <div className="cards-hero">
        <h1 className="cards-hero__title">Teo<span className="cards-hero__dot">.</span></h1>
        <p className="cards-hero__quote">
          &ldquo;{QUOTE}&rdquo;
        </p>
        <p className="cards-hero__author">— Arthur C. Clarke</p>
      </div>

      <div className="cards-grid">
        {cards.map(card => (
          <CardItem key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
