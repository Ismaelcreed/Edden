
import "./Card.scss";
const cards = [
  {
    title: "Mountain View",
    copy:
      "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
    button: "View Trips"
  },
  {
    title: "To The Beach",
    copy: "Plan your next beach trip with these fabulous destinations",
    button: "View Trips"
  },
  {
    title: "Desert Destinations",
    copy: "It's the desert you've always dreamed of",
    button: "Book Now"
  },
  {
    title: "Explore The Galaxy",
    copy: "Seriously, straight up, just blast off into outer space today",
    button: "Book Now"
  }
];

const Card = ({ title, copy, button }) => (
  <div className="card">
    <div className="content">
      <h2 className="title">{title}</h2>
      <p className="copy">{copy}</p>
      <button className="btn">{button}</button>
    </div>
  </div>
);

const CardGrid = () => {
  return (
    <main className="page-content">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </main>
  );
};

export default CardGrid;
