import './NotFound.css';
import LikeButton from '../../components/Buttons/LikeButton';
import RatingStars from '../../components/RatingStars/RatingStars';

function NotFound() {
    return (
        <div className="page">
            <div className="not-found-page">
                <h1>404</h1>
                <p>Oops! The page you are looking for does not exist.</p>
                <LikeButton />
                <RatingStars />
            </div>
        </div>
    );
}

export default NotFound;
