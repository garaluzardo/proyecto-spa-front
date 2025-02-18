import { useState } from 'react';
import './LikeButton.css';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button className={`like-button ${liked ? 'liked' : ''}`} onClick={toggleLike}>
      <span className="like-icon">{liked ? '❤️' : '🤍'}</span>
      <span className="like-text">{liked ? 'Liked' : 'Like'}</span>
    </button>
  );
};

export default LikeButton;
