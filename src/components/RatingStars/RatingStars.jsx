import { useState } from 'react';
import './RatingStars.css';

function RatingStars() {
  const [rating, setRating] = useState(0); // Inicializamos la calificación en 0
  const [hoverRating, setHoverRating] = useState(0); // Manejo del hover en las estrellas

  // Función clic estrellas
  const handleClick = (value) => {
    setRating(value);
  };

  const handleHover = (value) => {
    setHoverRating(value);
  };

  const handleHoverLeave = () => {
    setHoverRating(0);
  };

  const stars = [1, 2, 3, 4, 5];

  const renderStar = (star) => {
    // Redondeamos el rating a la mitad más cercana (0.5, 1.5, 2.5, etc.)
    const fullStar = Math.floor(hoverRating) >= star;
    const halfStar = hoverRating >= star && hoverRating < star + 1;
    const emptyStar = hoverRating < star;

    if (halfStar) {
      return 'half';
    } else if (fullStar) {
      return 'full';
    } else {
      return 'empty';
    }
  };

  return (
    <div className="rating-stars">
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${renderStar(star)}`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleHover(star)}
          onMouseLeave={handleHoverLeave}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default RatingStars;
